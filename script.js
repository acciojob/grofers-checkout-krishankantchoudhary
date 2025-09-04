const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	 const prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach(p => {
    total += parseFloat(p.textContent) || 0;
  });

  const ansDiv = document.getElementById("ans");
  ansDiv.textContent = total;  // put the total here
};

getSumBtn.addEventListener("click", getSum);

