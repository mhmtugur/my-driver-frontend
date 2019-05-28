import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('location search box', () => {
  let page: E2EPage;
  let element: E2EElement;
  beforeEach(async () => {
    page = await newE2EPage({ html: '<location-search></location-search>' });
    element = await page.find('location-search');
  });

  it('should render', () => {
    expect(element.innerHTML).toMatchSnapshot();
  });

  it('should render location name when it is provided', async () => {
    element.setProperty('locationName', 'Munich Airport');
    await page.waitForChanges();
    let searchInput = await page.find('#searchInput');
    let inputValue = await searchInput.getProperty('value');
    expect(inputValue).toBe('Munich Airport');
  });

  it('should render search string when it is provided', async () => {
    element.setProperty('searchString', 'Ber');
    await page.waitForChanges();
    let searchInput = await page.find('#searchInput');
    let inputValue = await searchInput.getProperty('value');
    expect(inputValue).toBe('Ber');
  });

  it('should emit event on input change', async () => {
    const inputChangedSpy = await page.spyOnEvent('onLocationInputChange');
    await page.waitForChanges();
    let searchInput = await page.find('#searchInput');
    searchInput.press('b');
    await page.waitForChanges();
    expect(inputChangedSpy.events[0].detail).toBe('b');
  });

  it('should emit event on input focus', async () => {
    const inputChangedSpy = await page.spyOnEvent('onLocationInputFocus');
    await page.waitForChanges();
    let searchInput = await page.find('#searchInput');
    searchInput.focus();
    await page.waitForChanges();
    expect(inputChangedSpy.events[0]).toBeTruthy();
  });
});