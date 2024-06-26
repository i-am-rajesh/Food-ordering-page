$(document).ready(function() {
  // Add to cart button click event
  $('.add-to-cart').click(function() {
      const item = $(this).closest('.item');
      const name = item.find('h5').text();
      const price = item.find('.price').text();
      const imageSrc = item.find('img').attr('src');
      addToCart(name, price, imageSrc);
  });

  // Remove item from cart
  $('.cart-items').on('click', '.remove-item', function() {
      $(this).closest('.cart-item').remove();
  });

  // Function to add item to cart
  function addToCart(name, price, imageSrc) {
      $('.cart-items').append(`
    <li class="cart-item d-flex align-items-start ">
      <img src="${imageSrc}" alt="${name}" class="cart-item-img mr-sm-5">
      <div class="cart-item-info">
        <p class="cart-item-name mr-sm-5">${name}</p>
        <p class="cart-item-price">${price}</p>
      </div>
      <div class="cart-item-quantity">
        <input type="number" class="quantity col-6 col-xs-1" value="1" min="1">
        <button class="remove-item "><i class="fas fa-trash "></i></button>
      </div>
    </li>
  `);
  }

  // Open panel button click event
  $('#openPanelBtn').click(function() {
      var sidePanel = $('#sidePanel');
      if (sidePanel.css('right') === '0px') {
          // Panel is already open, so hide it
          sidePanel.css('right', '-700px');
      } else {
          // Panel is closed, so open it
          sidePanel.css('right', '0');
      }
  });

  // Close panel button click event
  $('#closePanelBtn').click(function() {
      $('#sidePanel').css('right', '-700px');
  });
});
