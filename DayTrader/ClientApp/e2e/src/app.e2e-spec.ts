// =============================
// Email: info@DayTrader.com.com
// DayTrader.com/templates
// =============================

import { AppPage } from './app.po';

describe('DayTrader App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display application title: DayTrader', async () => {
    await page.navigateTo();
    expect(await page.getAppTitle()).toEqual('DayTrader');
  });
});
