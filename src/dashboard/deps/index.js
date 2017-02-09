import { dep } from 'worona-deps';

export const actions = {
  get saveSettingsRequested() { return dep('settings', 'actions', 'saveSettingsRequested'); },
};

export const elements = {
  get Button() { return dep('theme', 'elements', 'Button'); },
  get Icon() { return dep('theme', 'elements', 'Icon'); },
  get Input() { return dep('theme', 'elements', 'Input'); },
  get RootContainer() { return dep('theme', 'elements', 'RootContainer'); },
};

export const selectors = {
  get getSite() { return dep('sites', 'selectors', 'getSite'); },
  get getNameAndEmail() { return dep('profile', 'selectors', 'getNameAndEmail'); },
  get getSelectedSiteId() { return dep('router', 'selectors', 'getSelectedSiteId'); },
  get getUserId() { return dep('accounts', 'selectors', 'getUserId'); },
};

export const selectorCreators = {
  get getSettingCreator() { return dep('settings', 'selectorCreators', 'getSettingCreator'); },
};

export const sagaHelpers = {
  get waitForConnectionEstablished() {
    return dep('accounts', 'sagaHelpers', 'waitForConnectionEstablished');
  },
};

export const types = {
  get DEFAULT_SETTINGS_NEEDED() { return dep('settings', 'types', 'DEFAULT_SETTINGS_NEEDED'); },
  get SAVE_SETTINGS_REQUESTED() { return dep('settings', 'types', 'SAVE_SETTINGS_REQUESTED'); },
  get SAVE_SETTINGS_SUCCEED() { return dep('settings', 'types', 'SAVE_SETTINGS_SUCCEED'); },
  get ROUTER_DID_CHANGE() { return dep('router', 'types', 'ROUTER_DID_CHANGE'); },
};
