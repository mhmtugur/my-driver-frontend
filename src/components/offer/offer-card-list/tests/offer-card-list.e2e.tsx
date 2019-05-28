import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('offer card list list', () => {
  let page: E2EPage;
  let element: E2EElement;
  const offerList = [
    {
      web_img: 'car.png',
      amount: 200,
      title: 'Mercedes E200',
      exampleCar: 'Example Car',
      currency: 'EUR',
    },
    {
      web_img: 'car.png',
      amount: 300,
      title: 'BMW 7',
      exampleCar: 'Example Car',
      currency: 'EUR',
    },

  ]
  beforeEach(async () => {
    page = await newE2EPage({ html: '<offer-card-list></offer-card-list>' });
    element = await page.find('offer-card-list');
  });

  it('should render offer list', async () => {
    element.setProperty('offerList', offerList);
    await page.waitForChanges();
    const cardList = await page.findAll('.card');
    expect(cardList.length).toBe(2);
    expect(element.innerHTML).toMatchSnapshot();
  });
});