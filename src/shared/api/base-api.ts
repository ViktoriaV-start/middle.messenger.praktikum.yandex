export abstract class BaseApi<Request = unknown, Response = unknown> {
  create() {
    throw new Error('Not implemented');
  }

  abstract request(params?: Request): Promise<Response>;

  update() {
    throw new Error('Not implemented');
  }

  delete() {
    throw new Error('Not implemented');
  }
}
