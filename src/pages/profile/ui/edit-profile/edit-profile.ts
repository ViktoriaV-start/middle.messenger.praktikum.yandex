import { EditProfileApi } from '@shared/api';
// eslint-disable-next-line import/extensions
import avatarIcon from '@shared/assets/icons/avatar-icon.svg';
import { BASE_API_URL } from '@shared/constants';
import Block from '@shared/lib/block';
import { store } from '@shared/store';
import type { User } from '@shared/types';
import { convertKeysToCamelCase, convertKeysToSnakeCase, isEqual } from '@shared/utils';
import { getFormData } from '@shared/utils/form';
import { normalizeValidateForm } from '@shared/utils/normalize-validate-form';
import { BUTTONS, PROFILE_INPUTS } from '../../constants';
import type { EditProfileProps } from '../../types';
import styles from '../profile.module.css';
import templateSource from './edit-profile.hbs?raw';

const COMPONENT_NAME = 'EditProfile';

class EditProfileController {
  static async editAvatar(data: FormData) {
    try {
      return await EditProfileApi.editAvatar(data);
    } catch (error) {
      console.error(error);
    }
  }
}

export class EditProfile extends Block<EditProfileProps> {
  static componentName = COMPONENT_NAME;

  protected template = templateSource;
  private error = false;

  constructor() {
    const user = store.getState().user as User;
    const initialEditProfileData = {
      user,
      profileInputs: PROFILE_INPUTS,
      button: BUTTONS.save,
      error: false,
    };
    super({ ...initialEditProfileData, componentName: COMPONENT_NAME, styles, avatarIcon });

    store.subscribe(() => {
      const currentUser = store.getState().user as User;
      const wasUserChanged = !isEqual(currentUser, this.props.user);

      if (wasUserChanged) {
        this.setProps({ user: currentUser });
      }
    });
  }

  public setProps(props: Record<string, unknown>) {
    super.setProps({ ...props });
  }

  getContent() {
    this.render();

    return this.element();
  }

  private async handleSubmit(
    data: Record<string, unknown>
  ): Promise<Record<string, unknown> | null> {
    const dataDTO = convertKeysToSnakeCase(data);

    try {
      const response = (await EditProfileApi.editProfile(dataDTO)) as Record<string, unknown>;

      if (response) {
        return response;
      }
    } catch (error) {
      console.error(error);
    }

    return null;
  }

  protected events = {
    submit: async (event: Event) => {
      event.preventDefault();

      const { avatar, ...profile } = getFormData(event);

      const avatarFormData = new FormData();

      if (avatar instanceof File && avatar.size) {
        avatarFormData.append('avatar', avatar);
        await EditProfileController.editAvatar(avatarFormData);
      }

      const form = normalizeValidateForm(profile);

      if (form.error) {
        this.error = true;
        this.setProps({ error: true });
      }

      const updatedUserProfile = await this.handleSubmit(form.validatedForm);

      if (updatedUserProfile) {
        const userConverted = convertKeysToCamelCase(updatedUserProfile) as unknown as User;

        store.setUser({
          ...userConverted,
          avatar: `${BASE_API_URL}/api/v2/resources${userConverted.avatar}`,
        });
      }
    },
    focusin: () => {
      if (this.error) {
        this.error = false;
        this.setProps({ error: false });
      }
    },

    change: (event: Event) => {
      const target = event.target as HTMLInputElement;
      const isAvatarInputChange = target.id === 'avatar';

      if (isAvatarInputChange) {
        const file = target.files?.[0];
        const avatarImg = document.querySelector('[data-name="avatar-img"]') as HTMLImageElement;

        if (file && file.type.startsWith('image/')) {
          const reader = new FileReader();

          reader.onload = (e) => {
            const result = e.target?.result;

            if (result && typeof result === 'string') {
              avatarImg.src = result;
            }
          };

          reader.readAsDataURL(file);
        }
      }
    },
  };
}
