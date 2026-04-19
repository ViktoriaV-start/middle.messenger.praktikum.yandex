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
    return editProfileApiInstance.put('/api/v2/user/password', {
      data: { ...data },
    });
  }

  static editAvatar(data: FormData) {
    return editProfileApiInstance.put('/api/v2/user/profile/avatar', {
      data: data,
    });
  }
}
