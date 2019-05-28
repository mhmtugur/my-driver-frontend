import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('main-container', () => {
  let page: E2EPage;
  let element: E2EElement;
  let searchInput;
  beforeEach(async () => {
    page = await newE2EPage({ html: '<main-container></main-container>' });
    element = await page.find('main-container');
    searchInput = await page.find('#searchInput');
    await setupSelectLocation(page, searchInput);
  });

  it.skip('should render offers', async () => {
    const formElement = await page.find('#search-form');
    formElement.triggerEvent('onSubmit');
    await page.waitForChanges();
    expect(element.innerHTML).toMatchSnapshot();
  })
});

const setupSelectLocation = async (page, searchInput) => {
  searchInput.press('b');
  searchInput.press('e');
  searchInput.press('r');
  await page.waitForChanges();
  let listItem = await page.find('.list-item');
  await listItem.click();
  await page.waitForChanges();
}