import { E2EPage, newE2EPage } from '@stencil/core/testing';

describe('location list item', () => {
  
  it('should emit submit event',async () => {
    let page: E2EPage = await newE2EPage({ html: '<search-bar></search-bar>' });
    await page.waitForChanges();
    const onSubmitSpy=await page.spyOnEvent('onSubmit');
    const formElement = await page.find('#search-form');
    formElement.triggerEvent('onSubmit');
    await page.waitForChanges();
    expect(onSubmitSpy.events).toBeTruthy();
  });
});