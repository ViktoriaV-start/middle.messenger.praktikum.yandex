import { BASE_API_URL } from '../../constants';
import { store } from '../../store';
import type { User } from '../../types';
import { convertKeysToCamelCase } from '../../utils';
import { LoginApi } from '../login-api';

export async function checkUserAuth() {
  try {
    const response = await LoginApi.checkAuth();

    if (response) {
      const responseDto = convertKeysToCamelCase({ ...response }) as unknown as User;
      const avatarUrl = `${BASE_API_URL}/api/v2/resources${responseDto.avatar}`;

      store.setUser({ ...responseDto, avatar: avatarUrl });

      return true;
    }
  } catch (error) {
    console.log(error);

    return false;
  }
}
