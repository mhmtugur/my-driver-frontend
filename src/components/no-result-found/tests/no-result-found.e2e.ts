import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('no-result-found', () => {
  let page: E2EPage;
  let element: E2EElement;
  beforeEach(async () => {
    page = await newE2EPage({ html: '<no-result-found></no-result-found>' });
    element = await page.find('no-result-found');
  });

  it('should render no result found message', async () =>{
   expect(element.innerHTML).toMatchSnapshot();
  })
});