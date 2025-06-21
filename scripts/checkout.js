import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
//import '../data/cart-class.js';
import { cart } from '../data/cart.js';
import { loadCart } from '../data/cart.js';

function updateCartQuantity () {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  })
  document.querySelector('.js-return-to-home-link')
    .innerHTML = `${cartQuantity} items`;
     
}
updateCartQuantity();

async function loadPage() {
  try {
    

    await loadProductsFetch();

    await new Promise ((resolve) => {
      loadCart(() => {
        resolve();
      });
    });
  } catch (error) {
    console.log('Unexpected Error!')
  }
  

  renderOrderSummary();
  renderPaymentSummary();


}

loadPage ();

/*
Promise.all([
 loadProductsFetch(),
  new Promise ((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});


new Promise ((resolve) => {
    loadProducts (() => {
      resolve();
  });
}).then(() => {
  return new Promise ((resolve) => {
    loadCart(() => {
      resolve();
    });
  });
}).then (() => {
  renderOrderSummary();
  renderPaymentSummary();
})
  */