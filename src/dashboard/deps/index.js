import { dep } from 'worona-deps';

export const elements = {
  get Button() { return dep('theme', 'elements', 'Button'); },
  get Icon() { return dep('theme', 'elements', 'Icon'); },
  get RootContainer() { return dep('theme', 'elements', 'RootContainer'); },
};

export const selectors = {
  get getSite() { return dep('sites', 'selectors', 'getSite'); },
  get getSelectedSite() { return dep('sites', 'selectors', 'getSelectedSite'); },
  get getNameAndEmail() { return dep('profile', 'selectors', 'getNameAndEmail'); },
  get getSelectedSiteId() { return dep('router', 'selectors', 'getSelectedSiteId'); },
};

export const sagaHelpers = {
  get waitForConnectionEstablished() {
    return dep('accounts', 'sagaHelpers', 'waitForConnectionEstablished');
  },
};

export const libs = {
  get setSiteIcon() { return dep('sites', 'libs', 'setSiteIcon'); },
};
