const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	 const priceElements = document.querySelectorAll(".prices");

    // Step 2: Convert to numbers and sum
    let total = 0;
    priceElements.forEach(price => {
      total += parseFloat(price.textContent) || 0; // fallback in case of invalid value
    });

    // Step 3: Create a new row for total
    const table = document.getElementById("groceryTable");
    const totalRow = document.createElement("tr");
    totalRow.classList.add("total-row");

    // single cell spanning across 2 columns
    const totalCell = document.createElement("td");
    totalCell.colSpan = 2;
    totalCell.textContent = `Total: ${total}`;

    // Step 4: Append the new row to table
    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
  
};

getSumBtn.addEventListener("click", getSum);

