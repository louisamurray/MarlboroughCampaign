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
  Tauranga: 1.573,
  Napier: 1.076,
  PalmerstonNorth: 1.015,
  Nelson: 1.069,
  Rotorua: 1.058,
};
  calculate.addEventListener("click", function() {
const cost = currentCost.value;
const city = originCity.value;
if (city in costOfLivingDifferences) {
  const formattedCost = (cost / costOfLivingDifferences[city]).toLocaleString("en-NZ", { style: "currency", currency: "NZD" });
  result.innerHTML =
    "Your cost of living in Marlborough could be " + formattedCost;
} else {
  result.innerHTML = "Cost comparison not available for the selected city";
}
});
