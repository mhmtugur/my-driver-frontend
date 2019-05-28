import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('location list item', () => {
  it('should render button', async () => {
    let page: E2EPage = await newE2EPage({ html: '<search-button></search-button>' });
    let element: E2EElement = await page.find('search-button');
    expect(element.innerHTML).toMatchSnapshot();
  })
});