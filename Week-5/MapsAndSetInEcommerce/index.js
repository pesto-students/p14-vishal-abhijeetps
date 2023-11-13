let productViews = new WeakMap();

const incrementProductViews = (productId) => {
  if (productViews.has(productId)) {
    let currentCount = productViews.get(productId);
    productViews.set(productId, currentCount + 1);
    console.log(
      `Product ID ${productId.productId} is viewed ${productViews.get(
        productId
      )} times.`
    );
  } else {
    productViews.set(productId, 1);
    console.log(
      `Product ID ${productId.productId} is viewed for the 1st time.`
    );
  }
};

let cartItems = new WeakSet();

const addToCart = (productId) => {
  if (cartItems.has(productId)) {
    console.log(`Product ID ${productId.productId} is already in cart.`);
  } else {
    cartItems.add(productId);
    console.log(`Product ID ${productId.productId} added to cart.`);
  }
};

const obj = {
  productId: 123,
};

incrementProductViews(obj);
incrementProductViews(obj);

addToCart(obj);
addToCart(obj);
