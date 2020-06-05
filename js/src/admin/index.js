import SSOSettingsModal from "./components/SSOSettingsModal";

app.initializers.add('fly3949-sso', () => {
  app.extensionSettings['fly3949-sso'] = () => app.modal.show(new SSOSettingsModal());
});
