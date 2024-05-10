// Select all elements with the class "chart"
const charts = document.querySelectorAll(".chart");

// Iterate through each chart
charts.forEach(function (chart) {
  // Get the 2D context of the chart
  var ctx = chart.getContext("2d");
  
  // Create a new bar chart with the given configuration
  var myChart = new Chart(ctx, {
    type: "bar", // Set the chart type to bar
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"], // Set the labels for the x-axis
      datasets: [
        {
          label: "# of Votes", // Set the label for the dataset
          data: [12, 19, 3, 5, 2, 3], // Set the data for the dataset
          backgroundColor: [ // Set the background color for each bar
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [ // Set the border color for each bar
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1, // Set the border width for each bar
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true, // Set the y-axis to start at 0
        },
      },
    },
  });
});

// Wait for the document to be ready
$(document).ready(function () {
  // Iterate through each element with the class "data-table"
  $(".data-table").each(function (_, table) {
    // Initialize a new DataTable for the current table
    $(table).DataTable();
  });
});

// Select the "select-column" element
const selectColumn = document.getElementById('select-column');
// Select the "data-table" element
const dataTable = document.getElementById('data-table');

// Add a change event listener to the "select-column" element
selectColumn.addEventListener('change', function () {
  // Get the selected value of the "select-column" element
  const selectedValue = selectColumn.value;
  // Get the index of the column with the selected value
  const columnIndex = Array.from(dataTable.querySelector('thead').children[0].children).findIndex(th => th.textContent === selectedValue);

  // If the column index is not -1 (i.e. the column was found)
  if (columnIndex !== -1) {
    // Select all rows in the "data-table" element
    const rows = dataTable.querySelectorAll('tbody tr');

    // Iterate through each row
    rows.forEach(row => {
      // Select all cells in the current row
      const cells = row.querySelectorAll('td');

      // Iterate through each cell
      cells.forEach((cell, index) => {
        // If the current cell is in the selected column
        if (index === columnIndex) {
          // Show the cell
          cell.style.display = 'table-cell';
        } else {
          // Hide the cell
          cell.style.display = 'none';
        }
      });
    });
  }
});
