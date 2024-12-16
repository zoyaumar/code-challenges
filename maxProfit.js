var maxProfit = function(prices) {
    let profit = 0
    let j = 0
    for(let i = 1; i < prices.length; i++){
        if(prices[j]>prices[i])
            j=i
        if(prices[i]-prices[j]>profit)
            profit = prices[i]-prices[j]
    }
    return profit
};
