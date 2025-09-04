function getSum() {
  const prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach(p => {
    total += parseFloat(p.textContent) || 0;
  });

  const ansDiv = document.getElementById("ans");
  ansDiv.textContent = total;
}

document.getElementById("sumBtn").addEventListener("click", getSum);
