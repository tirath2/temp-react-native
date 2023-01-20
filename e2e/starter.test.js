/* eslint-disable no-undef */
describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp({newInstance: true});
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('auth', async () => {
    await waitFor(element(by.id('loginMobileInput'))).toBeVisible();
    await element(by.id('loginMobileInput')).typeText('7897897890');
    await element(by.id('loginMobileInput')).replaceText('7897897890');
    await waitFor(element(by.id('loginPasswordInput'))).toBeVisible();
    await element(by.id('loginPasswordInput')).typeText('abcdef');
    await element(by.id('loginPasswordInput')).replaceText('abcdef');
    await waitFor(element(by.id('loginButton'))).toBeVisible();
    await element(by.id('loginButton')).longPress();
    // await waitFor(element(by.text('Home'))).toBeVisible();
    // await expect(element(by.text('Home'))).toBeVisible();
  });
});
