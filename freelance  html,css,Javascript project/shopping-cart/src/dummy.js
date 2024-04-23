let clearCart = () => {
    basket = [];
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
  };
  
  let TotalAmount = () => {
    if (basket.length !== 0) {
      let amount = basket
        .map((x) => {
          let { item, id } = x;
          let search = shopItemsData.find((y) => y.id === id) || [];
  
          return item * search.price;
        })
        .reduce((x, y) => x + y, 0);
      // console.log(amount);
      label.innerHTML = `
      <h2>Total Bill : $ ${amount}</h2>
      <button class="checkout">Checkout</button>
      <button onclick="clearCart()" class="removeAll">Clear Cart</button>
      `;
    } else return;
  };
  
  TotalAmount();
   
  
  
  basket = basket.filter((x) => x.id !== selectedItem.id);
  generateCartItems();
  TotalAmount();
   localStorage.setItem("data", JSON.stringify(basket));