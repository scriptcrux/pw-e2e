import test from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
});

test('end to end scenario', async ({ page }) => {
  //   cy.visit('/');
  //   cy.log('projectId-', Cypress.env('products_url'));
  //   cy.logMessage('opening page', 'info');

  //   //for error
  //   cy.logMessage('this is error', 'error');

  await page.locator('.navbar-nav.horizontal').getByText('My account').hover();

  await page.getByText('Login').click();

  await page
    .locator('.form-group')
    .filter({ has: page.getByRole('textbox', { name: 'password' }) })
    .getByPlaceholder('Password')
    .fill('QWYkOcXjDdWlAMF');

  await page.getByRole('button', { name: 'Login' }).click();

  // //with user
  // cy.login(this.newData);

  // //navigate to home page
  // navBarPage.openHomeTab();

  // //open category
  // topCategoriesPage.openPhoneCategory();

  // //verify header
  // phonesAndPDAPage.verifyPageHeader('PDAs', 'Phones & PDAs');

  // //select product
  // phonesAndPDAPage.selectProduct('HTC Touch HD');

  // productPage.verifyBreadCrumb('HTC Touch HD');

  // productPage.setProductItem('2');
  // productPage.setProductItem('1');

  // productPage.clickBuyNowBtn();

  // CheckoutPage.verifyBreadCrumb('Checkout');

  // CheckoutPage.selectBillingDetails(true);

  // const username = faker.person.firstName();
  // const lastname = faker.person.lastName();
  // const company = faker.company.name();
  // const address = faker.location.streetAddress();
  // const city = faker.location.city();
  // const postCode = faker.location.zipCode();
  // const country = faker.location.country();
  // const region = faker.location.state();

  // // Use the generated address object to get a fake state

  // const request = {
  //   firsName: username,
  //   lastName: lastname,
  //   company: company,
  //   address1: address,
  //   city: city,
  //   postCode: postCode,
  //   // country: country,
  //   // region: region,
  //   country: 'India',
  //   region: 'Himachal Pradesh',
  // };
  // cy.log('request', request);
  // CheckoutPage.enterBillingDetails(request);
  // CheckoutPage.completeCheckout('This is a new product');

  // //confirm order

  // //verify header
  // confirmOrderPage.verifyPageHeader('Confirm', 'Confirm Order');

  // confirmOrderPage.confirmOrder();
  // successOrderPage.verifyPageHeader('Your order', ' Your order has been placed!');
});
