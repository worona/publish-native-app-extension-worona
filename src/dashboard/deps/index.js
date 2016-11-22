import { dep } from 'worona-deps';

export const components = {
  get Button() { return dep('theme', 'elements', 'Button') },
};

export const selectors = {
  get getSite() { return dep('sites', 'selectors', 'getSite'); },
  get getSelectedSite() { return dep('sites', 'selectors', 'getSelectedSite'); },
  get getNameAndEmail() { return dep('profile', 'selectors', 'getNameAndEmail'); },
  get getSelectedSiteId() { return dep('router', 'selectors', 'getSelectedSiteId'); },
};
