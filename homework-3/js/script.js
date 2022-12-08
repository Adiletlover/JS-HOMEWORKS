const rateEl = document.getElementById("rate");
const swapEl = document.getElementById("swap");
const currencyOneEl = document.getElementById("currency-one");
const currencyTwoEl = document.getElementById("currency-two");
const amountOneEl = document.getElementById("amount-one");
const amountTwoEl = document.getElementById("amount-two");

let exchangeRates = {}

//=============================HOMEWORK============================================
const exchangeBtn = document.querySelector(".swap-rate-container .btn")
exchangeBtn.addEventListener("click", ()=>{
    const swapBtnStart = currencyOneEl.value;
    currencyOneEl.value = currencyTwoEl.value;
    currencyTwoEl.value = swapBtnStart;
    getExchangeRates();
})
//=================================================================================
const getExchangeRates = () => {
    const currencyOne = currencyOneEl.value
    fetch(`https://v6.exchangerate-api.com/v6/41b4541f3df8b629ff6e1018/latest/${currencyOne}`)
    .then((res) => res.json())
    .then((data) => {
        exchangeRates = { ...data.conversion_rates};
        calculateRates();
    });
};

const calculateRates = () => {
    const currencyTwo = currencyTwoEl.value
    const rate = exchangeRates[currencyTwo];
    const resultCalculate = +amountOneEl.value * rate;
    amountTwoEl.value = resultCalculate.toFixed(2);
};

getExchangeRates()

amountOneEl.addEventListener("input", calculateRates);
currencyOneEl.addEventListener("change", getExchangeRates);
currencyTwoEl.addEventListener("change" , calculateRates);
