var maxProfit = function (prices) {
  let N = prices.length;

  // BASE CONDITIONS
  if (N === 0) return 0;
  if (N === 1) return prices[0];

  let buy = {
    day: 0,
    price: prices[0],
  };

  let sell = {
    day: -1,
    price: null,
  };

  for (let x = 1; x < prices.length; x++) {
    if (prices[x] < buy.price) {
      buy.price = prices[x];
      buy.day = x;
      // Resetting sell after updating buy day
      sell.price = null;
      sell.day = -1;
    } else if (
      (sell.price === null && prices[x] > buy.price) ||
      (sell.price !== null && prices[x] > sell.price && x > sell.day)
    ) {
      sell.price = prices[x];
      sell.day = x;
    }
  }

  if (buy.day > sell.day || sell.day === 0) {
    return 0;
  } else {
    return sell.price - buy.price;
  }
};

console.log(maxProfit([1]));
