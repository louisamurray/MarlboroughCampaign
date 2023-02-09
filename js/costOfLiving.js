const originCity = document.getElementById("originCity");
const currentCost = document.getElementById("currentCost");
const calculate = document.getElementById("calculate");
const result = document.getElementById("result");
const costOfLivingDifferences = {
  Blenheim: 1,
  Auckland: 1.691,
  Christchurch: 1.316,
  Hamilton: 0.837,
  Dunedin: 0.951,
  Wellington: 1.652
};
  calculate.addEventListener("click", function() {
const cost = currentCost.value;
const city = originCity.value;
if (city in costOfLivingDifferences) {
  const formattedCost = (cost / costOfLivingDifferences[city]).toLocaleString("en-US", { style: "currency", currency: "USD" });
  result.innerHTML =
    "Your cost of living in Marlborough could be " + formattedCost;
} else {
  result.innerHTML = "Cost comparison not available for the selected city";
}
});
