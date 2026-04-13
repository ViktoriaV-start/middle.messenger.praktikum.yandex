import type { EditPasswordData } from '../../types';
import { HttpTransport } from '../http-transport';

const editProfileApiInstance = new HttpTransport();

export class EditProfileApi {
  static editProfile(data: Record<string, unknown>) {
    return editProfileApiInstance.put('/api/v2/user/profile', {
      data: { ...data },
    });
  }

  static editPassword(data: EditPasswordData) {
    console.log(111, data);

    return editProfileApiInstance.put('/api/v2/user/password', {
      data: { ...data },
    });
  }
}
