import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('location container', () => {
  let page: E2EPage;
  let element: E2EElement;
  beforeEach(async () => {
    page = await newE2EPage({ html: '<duration-dropdown></duration-dropdown>' });
    element = await page.find('duration-dropdown');
  });

  //TODO: Couldn't simulate select change. Needs to be addressed
  it.skip('should emit onDurationChanged event', async () =>{
    const durationSpy = await page.spyOnEvent('onDurationChange');
    const selectElement=await element.find('.browser-default');
    //await page.waitForChanges();
    await selectElement.setProperty('value','5');
    await page.waitForChanges();
    expect(durationSpy.events[0].detail).toEqual(5);
  });
});