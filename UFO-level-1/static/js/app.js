// Assign the data from `data.js` to a descriptive variable
var tableData = data;

//Select the table references
var tbody = d3.select("tbody");

// Building Functions for the table
  // Build the table with non-filtered data
function buildTable(data) {
  tbody.html("");

    // Data loop
  data.forEach((dataRow) => {
    // Append one table row `tr` for it
    var row = tbody.append("tr");
    // Append a cell to the row for each value
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

  // This function is triggered when the button is clicked
function handleClick() {

  // Date and Time
  var date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  // Filter
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  buildTable(filteredData);
}

// Filter with button press
d3.selectAll("#filter-btn").on("click", handleClick);

// Build Table
buildTable(tableData);

