const calculateCardTotal = (event) => {
  const cardPrice = parseFloat(document.querySelector('.card-price').innerHTML);
  const cardQuantity = parseFloat(document.querySelector('.card-quantity').value);
  const cardTotal = document.querySelector('.card-total');
  cardTotal.innerHTML = cardPrice * cardQuantity || 0;
};

const cardContainer = document.querySelector('#meal-container');
cardContainer.addEventListener('change', (event) => {
  if (event.target && event.target.classList.contains('card-quantity')) {
    calculateCardTotal(event);
  }
});

cardContainer.addEventListener('click', (event) => {
  document.getElementById('message').textContent = '';
  if (event.target && event.target.classList.contains('cart-btn')) {
    const item = document.querySelector('.card-title').textContent;
    let price = document.querySelector('.card-price').textContent;
    let quantity = document.querySelector('.card-quantity').value;
    if (parseInt(quantity, 10) && parseInt(quantity, 10) > 0) {
      price = parseInt(price, 10);
      quantity = parseInt(quantity, 10);
      addToCart({ item, price, quantity });
      redirect('cart.html');
    } else {
      showMessage('The quantity must be a number greater than zero(0)', 'error-text');
    }
  }
});
