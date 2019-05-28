import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('error-display', () => {
  let page: E2EPage;
  let element: E2EElement;
  beforeEach(async () => {
    page = await newE2EPage({ html: '<error-display></error-display>' });
    element = await page.find('error-display');
  });

  it('should error', async () => {
    element.setProperty('error', { errorConstant: 'Newtork Error', errorMessage: 'Error occured' });
    await page.waitForChanges();
    expect(element.innerHTML).toMatchSnapshot();
  });
});