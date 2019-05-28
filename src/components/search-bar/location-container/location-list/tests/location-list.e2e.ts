import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('location list', () => {
  let page: E2EPage;
  let element: E2EElement;
  const locations = [
    { label: 'Berlin', address: 'Berlin Airport' },
    { label: 'Berlin', address: 'City Centre' },
    { label: 'Munich', address: 'Munich Airport' },
  ]
  beforeEach(async () => {
    page = await newE2EPage({ html: '<location-list></location-list>' });
    element = await page.find('location-list');
  });

  it('should render', async () => {
    element.setProperty('locations', locations);
    await page.waitForChanges();
    expect(element.innerHTML).toMatchSnapshot();
  });

  it('should render all locations', async () => {
    element.setProperty('locations', locations);
    await page.waitForChanges();
    const listItems = await page.findAll('.list-item');
    await page.waitForChanges();
    expect(listItems.length).toBe(locations.length);
  });

  it('should not crash if there are no locations', async () => {
    element.setProperty('locations', []);
    await page.waitForChanges();
    expect(element.innerHTML).toMatchSnapshot();
  });
})