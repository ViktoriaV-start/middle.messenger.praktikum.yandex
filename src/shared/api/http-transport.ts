import { METHODS } from '../constants';
import { queryStringify } from '../utils/api';

interface Options {
  timeout?: number;
  headers?: Record<string, string>;
  data?: Record<string, unknown> | FormData;
  responseType?: XMLHttpRequestResponseType;
  method?: string;
  [key: string]: unknown;
}

const initialOptions: Options = {};
const TIMEOUT = 5000;
const host = 'https://ya-praktikum.tech';

export class HttpTransport {
  get = (url: string, options: Options = { ...initialOptions }) => {
    return this.request(url, { ...options, method: METHODS.GET }, options.timeout);
  };

  post = (url: string, options: Options = {}) => {
    return this.request(url, { ...options, method: METHODS.POST }, TIMEOUT);
  };

  put = (url: string, options: Options = { ...initialOptions }) => {
    return this.request(url, { ...options, method: METHODS.PUT }, options.timeout);
  };

  delete = (url: string, options: Options = { ...initialOptions }) => {
    return this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);
  };

  request = (url: string, options: Options, timeout = 5000) => {
    const { headers = {}, data, responseType, method, withCredentials = true } = options;

    return new Promise((resolve, reject) => {
      if (!method) {
        reject(new Error('Требуется указать HTTP метод'));

        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;
      const isFormData = data instanceof FormData;

      const requestUrl =
        isGet && data && !isFormData ? `${host}${url}${queryStringify(data)}` : `${host}${url}`;

      // Открываем соединение
      xhr.open(method, requestUrl);

      xhr.withCredentials = withCredentials as boolean;

      // Устанавливаем тип ответа, если указан
      if (responseType) {
        xhr.responseType = responseType;
      }

      // Устанавливаем заголовки
      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      // Обработчики
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          let response;

          if (xhr.responseType) {
            response = xhr.response;
          } else {
            try {
              const contentType = xhr.getResponseHeader('Content-Type');

              if (contentType && contentType.includes('application/json')) {
                response = JSON.parse(xhr.responseText);
              } else {
                response = xhr.responseText;
              }
            } catch (error) {
              response = xhr.responseText;
              console.log(error);
            }
          }

          resolve(response);
        } else {
          reject({
            status: xhr.status,
            statusText: xhr.statusText,
            response: xhr.responseText,
            request: xhr,
          });
        }
      };

      xhr.onabort = () =>
        reject({
          reason: 'Request aborted',
          request: xhr,
        });

      xhr.onerror = () =>
        reject({
          reason: 'Network error',
          request: xhr,
        });

      xhr.timeout = timeout;

      xhr.ontimeout = () =>
        reject({
          reason: 'Request timeout',
          timeout: timeout,
          request: xhr,
        });

      if (isGet || !data) {
        xhr.send();
      } else if (data instanceof FormData) {
        xhr.send(data);
      } else if (typeof data === 'object') {
        if (!headers['Content-Type']) {
          xhr.setRequestHeader('Content-Type', 'application/json');
        }

        xhr.send(JSON.stringify(data));
      } else {
        xhr.send(data);
      }
    });
  };
}
