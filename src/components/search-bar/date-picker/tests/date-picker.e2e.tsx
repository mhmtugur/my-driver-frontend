import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('location list item', () => {

  it('should render datepicker', async () =>{
    const page: E2EPage = await newE2EPage({ html: '<date-picker></date-picker>' });
    const  element: E2EElement = await page.find('date-picker');
    expect(element.innerHTML).toBeTruthy();
  })
});