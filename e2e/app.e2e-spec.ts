import { ReportConfiguratorPage } from './app.po';

describe('report-configurator App', () => {
  let page: ReportConfiguratorPage;

  beforeEach(() => {
    page = new ReportConfiguratorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
