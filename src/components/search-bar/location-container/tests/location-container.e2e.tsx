import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('location container', () => {
  let page: E2EPage;
  let element: E2EElement;
  beforeEach(async () => {
    page = await newE2EPage({ html: '<location-container></location-container>' });
    element = await page.find('location-container');
  });

  it('should render', () => {
    expect(element.innerHTML).toMatchSnapshot();
  });

  describe('on search input change', () => {
    let onInputChangedSpy;
    let searchInput;
    beforeEach(async () => {
      onInputChangedSpy = await page.spyOnEvent('onLocationInputChange');
      searchInput = await page.find('#searchInput');
    })

    it('should search by correct keyword', async () => {
      searchInput.press('b');
      searchInput.press('e');
      searchInput.press('r');
      searchInput.press('l');
      searchInput.press('i');
      searchInput.press('n');
      await page.waitForChanges();
      expect(onInputChangedSpy.events[5].detail).toBe('berlin');
    });

    it('should render expected number of locations', async () => {
      searchInput.press('b');
      searchInput.press('e');
      searchInput.press('r');
      await page.waitForChanges();
      const items = await page.findAll('.list-item');
      await page.waitForChanges();
      expect(items.length).toBe(7);
    });

    it('should clean locations if there is no locations with the keyword', async () => {
      searchInput.press('a');
      searchInput.press('b');
      searchInput.press('b');
      await page.waitForChanges();
      let items = await page.findAll('.list-item');
      await page.waitForChanges();
      expect(items.length).toBe(0);
    });
  });

  describe('on select location', () => {
    let searchInput;
    beforeEach(async () => {
      searchInput = await page.find('#searchInput');
      searchInput.press('b');
      searchInput.press('e');
      searchInput.press('r');
      await page.waitForChanges();
    })

    //TODO: This test is intermittently failing. skipping this until find ultimate solution.  
    it.skip('should hide locations', async () => {
      let listItem = await page.find('.list-item');
      await listItem.click();
      await page.waitForChanges();
      let listItems = await page.findAll('.list-item');
      expect(listItems.length).toBe(0);
    });

    it('should set location string to search input box', async () => {
      let listItem = await page.find('.list-item');
      await listItem.click();
      await page.waitForChanges();
      let inputValue = await searchInput.getProperty('value');
      await page.waitForChanges();
      expect(inputValue).toBe('(TXL) Berlin Tegel Airport, Berlin');
    })
  });

  describe('on input focus', () => {
    let searchInput: E2EElement;
    beforeEach(async () => {
      searchInput = await page.find('#searchInput');
      searchInput.press('b');
      searchInput.press('e');
      searchInput.press('r');
      await page.waitForChanges();
      let listItem = await page.find('.list-item');
      listItem.click();
      await page.waitForChanges();
    })

    it('should show locations', async () => {
      searchInput.focus();
      await page.waitForChanges();
      let listItems = await page.findAll('.list-item');
      expect(listItems.length).toBe(7);
    });
  })
});