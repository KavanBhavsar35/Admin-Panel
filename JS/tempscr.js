// Get the select column dropdown element and the data table element
const selectColumn = document.getElementById('select-column');
const dataTable = document.getElementById('data-table');

// Add a 'change' event listener to the select column dropdown
selectColumn.addEventListener('change', function() {
  // Get the selected value from the dropdown
  const selectedValue = selectColumn.value;

  // Find the index of the column header that matches the selected value
  const columnIndex = Array.from(dataTable.querySelector('thead').children[0].children).findIndex(th => th.textContent === selectedValue);

  // Check if the column index is valid
  if (columnIndex !== -1) {
    // Get all the rows in the data table
    const rows = dataTable.querySelectorAll('tbody tr');

    // Loop through each row
    rows.forEach(row => {
      // Get all the cells in the current row
      const cells = row.querySelectorAll('td');

      // Loop through each cell
      cells.forEach((cell, index) => {
        // If the current cell's index matches the column index, display it as a table cell, otherwise, hide it
        cell.style.display = index === columnIndex ? 'table-cell' : 'none';
      });
    });
  }
});

