/* Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 * * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */
var maxProfit = function (prices) {
  let N = prices.length;

  // BASE CONDITIONS
  if (N < 2) return 0;

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

console.log(maxProfit([2, 4, 1]));
