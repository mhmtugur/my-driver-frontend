import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import { Offer } from "../../../../models/Offer";

describe('offer card', () => {
  it('should render offer card', async () => {
    let page: E2EPage = await newE2EPage({ html: '<offer-card></offer-card>' });
    let element: E2EElement = await page.find('offer-card');
    const sampleOffer = new Offer({
      web_img: 'car.png',
      amount: 200,
      title: 'Mercedes E200',
      exampleCar: 'Example Car',
      currency: 'EUR',
    });
    element.setProperty('offer', sampleOffer);
    await page.waitForChanges();
    expect(element.innerHTML).toMatchSnapshot();
  })
});