// Select all elements with class "chart"
const charts = document.querySelectorAll(".chart");

// Iterate through each chart element
charts.forEach(function (chart) {
  // Get the 2D rendering context of the chart element
  const ctx = chart.getContext("2d");
  
  // Create a new bar chart with the given configuration
  const myChart = new Chart(ctx, {
    type: "bar", // Set the chart type to bar
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"], // Set the labels for the chart
      datasets: [
        {
          label: "# of Votes", // Set the dataset label
          data: [12, 19, 3, 5, 2, 3], // Set the data for the dataset
          backgroundColor: [ // Set the background color for each bar in the dataset
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [ // Set the border color for each bar in the dataset
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1, // Set the border width for each bar in the dataset
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

// Select all elements with class "data-table"
$(document).ready(function () {
  $(".data-table").each(function (_, table) {
    // Initialize a new DataTable for each table element
    $(table).DataTable();
  });
});

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select all elements with class "product-nav" and "card-redirect"
  const navLinks = document.querySelectorAll(".product-nav, .card-redirect");
  
  // Select all elements with class "page"
  const pages = document.querySelectorAll(".page");

  const card = document.querySelectorAll(".card-link")
  const cardContent = document.querySelectorAll(".card-content")

  // Define a function to toggle the visibility of a card
  function toggleCard(targetCard) {
    // Hide all card content elements
    cardContent.forEach(function (cardd) {
      cardd.style.display = "none";
    });

    // Remove the "active" class from all card links
    card.forEach(function (cardLink) {
      cardLink.classList.remove("active");
    });

    // Find the active card link and add the "active" class to it
    const activeCard = document.querySelector(`[href="#${targetCard}"]`);
    if (activeCard) {
      activeCard.classList.add("active");
    }

    // Show the target card content element
    document.getElementById(targetCard).style.display = "block";
  }

  // Define a function to show the home page by default
  // toggleActiveLink("pehlu card ");

  // Iterate through each card link element
  card.forEach(function (cardLink) {
    // Add a click event listener to each card link
    cardLink.addEventListener("click", function (event) {
      // Prevent the default link behavior
      event.preventDefault();

      // Get the target card from the link's href attribute
      const targetCard = this.getAttribute("href").substring(1);

      // Toggle the visibility of the target card
      toggleCard(targetCard);
    });
  });

  // Define a function to toggle the active class for a link and its corresponding page
  function toggleActiveLink(targetId) {
    // Hide all page elements
    pages.forEach(function (page) {
      page.style.display = "none";
    });

    // Remove the "active" class from all nav links
    navLinks.forEach(function (link) {
      link.classList.remove("active");
    });

    // Find the active link and add the "active" class to it
    const activeLink = document.querySelector(`[href="#${targetId}"]`);
    if (activeLink) {
      activeLink.classList.add("active");
    }

    // Show the target page element
    document.getElementById(targetId).style.display = "block";
  }

  // Show the home page by default
  toggleActiveLink("dashboard");

  // Iterate through each nav link element
  navLinks.forEach(function (link) {
    // Add a click event listener to each nav link
    link.addEventListener("click", function (event) {
      // Prevent the default link behavior
      event.preventDefault();

      // Get the target page from the link's href attribute
      const targetId = this.getAttribute("href").substring(1);

      // Toggle the active class for the target link and page
      toggleActiveLink(targetId);
    });
  });
});

// Select the "select-column" element and the "data-table" element
const selectColumn = document.getElementById('select-column');
const dataTable = document.getElementById('data-table');

// Add a change event listener to the "select-column" element
selectColumn.addEventListener('change', function () {
  // Get the selected value from the "select-column" element
  const selectedValue = selectColumn.value;

  // Find the index of the column with the selected label
  const columnIndex = Array.from(dataTable.querySelector('thead').children[0].children).findIndex(th => th.textContent === selectedValue);

  // If a column with the selected label was found...
  if (columnIndex !== -1) {
    // Iterate through each row in the table body
    const rows = dataTable.querySelectorAll('tbody tr');
    rows.forEach(row => {
      // Get all the cells in the current row
      const cells = row.querySelectorAll('td');

      // Iterate through each cell in the current row
      cells.forEach((cell, index) => {
        // If the current cell is in the selected column...
        if (index === columnIndex) {
          // Show the cell
          cell.style.display = 'table-cell';
        } else {
          // Otherwise, hide the cell
          cell.style.display = 'none';
        }
      });
    });
  }
});
