import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('location list item', () => {
  let page: E2EPage;
  let element: E2EElement;
  beforeEach(async () => {
    page = await newE2EPage({ html: '<location-list-item></location-list-item>' });
    element = await page.find('location-list-item');
  });
 
  it('should render list item', async () => {
    element.setProperty('location', { label: 'Berlin', address: 'Berlin Airport' });
    await page.waitForChanges();
    let actual = await page.find('.list-item');
    expect(actual).toBeTruthy(); 
    expect(actual.outerHTML).toMatchSnapshot();
  });

  it('should select the location', async () => {
    element.setProperty('location', { label: 'Berlin', address: 'Berlin Airport' });
    const locationSelectedSpy = await page.spyOnEvent('onSelectLocation');
    await page.waitForChanges();
    let listItem = await page.find('.list-item');
    listItem.click();
    await page.waitForChanges();
    expect(locationSelectedSpy.events[0].detail).toEqual({ label: 'Berlin', address: 'Berlin Airport' });
  });
})
