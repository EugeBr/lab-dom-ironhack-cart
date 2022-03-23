// ITERATION 1

function updateSubtotal(product) {
 // console.log('Calculating subtotal, yey!');
  const price = +product.querySelector('.price span').textContent;
  const quantity = +product.querySelector('.quantity input').value;//!for inputs access 'value'.
  const subtotal = price * quantity;
  product.querySelector('.subtotal span').textContent = subtotal.toFixed(2);

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2 
  const allProducts = document.querySelectorAll('.product');
  //*Acces all elements whith the class product.
  let totalPrice = 0;
  for(item of allProducts){
    totalPrice += updateSubtotal(item);
  }
  
  // ITERATION 3
  document.querySelector('#total-value span').textContent = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.target;
  //console.log('The target in remove is:', target);
  target.closest('tr').remove();
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const tbody = document.querySelector('tbody');
  const template = document.getElementById('template');
  const clone = document.importNode(template.content, true);
  const name = document.querySelector('.create-product > td input');
  const price = document.querySelector('.create-product td:nth-of-type(2) input');
  clone.querySelector('.name span').textContent = name.value;
  clone.querySelector('.price span').textContent = price.value;
  clone.querySelector('.btn-remove').addEventListener('click', removeProduct);
  name.value = '';
  price.value = '';
  tbody.append(clone);
}

//window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = document.querySelectorAll('.btn-remove');

  document.getElementById('create').addEventListener('click', createProduct);

  removeButtons.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });
  //... your code goes here
//});
