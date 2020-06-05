import {settings} from '@fof-components';

const {SettingsModal, items: {StringItem, BooleanItem}} = settings;

export default class SSOSettingsModal extends SettingsModal {
  className() {
    return 'Modal';
  }

  title() {
    return app.translator.trans('fly3949-sso.admin.settings.title');
  }

  form() {
    return [
      <StringItem key="fly3949-sso.secret_key">
        {app.translator.trans('fly3949-sso.admin.settings.secret_key')}
      </StringItem>,
      <StringItem key="fly3949-sso.logout_url">
        {app.translator.trans('fly3949-sso.admin.settings.logout_url')}
      </StringItem>,
      <div className="Form-group">
        <BooleanItem key="fly3949-sso.disable_login_btn">
          {app.translator.trans('fly3949-sso.admin.settings.disable_login_btn')}
        </BooleanItem>
      </div>,
      <div className="Form-group">
        <BooleanItem key="fly3949-sso.disable_signup_btn">
          {app.translator.trans('fly3949-sso.admin.settings.disable_signup_btn')}
        </BooleanItem>
      </div>
    ];
  }
}

// export default () => {
//   app.extensionSettings['fly3949-sso'] = () =>
//     app.modal.show(
//       new SettingsModal({
//         title: app.translator.trans('fly3949-sso.admin.settings.title'),
//         size: 'small',
//         items: [
//           <StringItem key="fly3949-sso.secret_key">
//             {app.translator.trans('fly3949-sso.admin.settings.secret_key')}
//           </StringItem>,
//           <StringItem key="fly3949-sso.logout_url">
//             {app.translator.trans('fly3949-sso.admin.settings.logout_url')}
//           </StringItem>,
//           <BooleanItem key="fly3949-sso.disable_login_btn">
//             {app.translator.trans('fly3949-sso.admin.settings.disable_login_btn')}
//           </BooleanItem>,
//           <BooleanItem key="fly3949-sso.disable_signup_btn">
//             {app.translator.trans('fly3949-sso.admin.settings.disable_signup_btn')}
//           </BooleanItem>
//         ],
//       })
//     );
// }
