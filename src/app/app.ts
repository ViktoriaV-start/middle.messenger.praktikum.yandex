import { Chats, Message, MessageIn, MessageOut, Sidebar } from '@pages/chats';
import { ChatMessages } from '@pages/chats';
import { NotFound, ServerError } from '@pages/error';
import { Login } from '@pages/login';
import { Profile } from '@pages/profile';
import { EditPassword } from '@pages/profile';
import { EditProfile } from '@pages/profile';
import { Registration } from '@pages/registration';
import Block from '@shared/lib/block';
import { AuthForm, BaseButton, Info, InputAuth, Input, ChatItem, Navigation } from '@shared/ui';
import { BackButton } from '@shared/ui/back-button';
import { BaseLink } from '@shared/ui/base-link';
import { registerComponent } from './register-component';
import { resolveRoute, navigate } from './router';

// import './styles/app.css';
// import './styles/variables.css';

registerComponent(Navigation);
registerComponent(InputAuth);
registerComponent(Input);
registerComponent(BaseButton);
registerComponent(BaseLink);
registerComponent(AuthForm);
registerComponent(Info);
registerComponent(ChatItem);
registerComponent(BackButton);

registerComponent(NotFound);
registerComponent(ServerError);
registerComponent(Login);
registerComponent(Registration);
registerComponent(Login);
registerComponent(Profile);
registerComponent(EditPassword);
registerComponent(EditProfile);
registerComponent(Message);
registerComponent(MessageIn);
registerComponent(MessageOut);
registerComponent(ChatMessages);
registerComponent(Sidebar);
registerComponent(Chats);

export default class App extends Block<object> {
  protected template: string;

  constructor() {
    super();
    this.template = resolveRoute();
    window.addEventListener('popstate', () => this.rerender());
  }

  protected events = {
    submit: (event: Event) => {
      event.preventDefault();
    },
    click: (event: Event) => {
      const target = event.target as HTMLElement;
      const linkElement = target.closest<HTMLAnchorElement>('.navigation-link');

      if (!linkElement) {
        return;
      }

      event.preventDefault();
      navigate(linkElement.pathname);
      this.rerender();
    },
  };

  private rerender() {
    this.template = resolveRoute();
    this.render();
  }

  componentDidMount() {
    // setTimeout(() => this.setProps({ buttonName: 'Клик через 3 секунды!' }), 3000);
  }

  protected componentWillUnmount() {
    window.removeEventListener('popstate', () => this.rerender());
  }
}
