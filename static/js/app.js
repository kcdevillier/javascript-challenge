// from data.js
var tableData = data;

//get a reference to the table body and search button
var tbody = d3.select("tbody");
var search = d3.select("#filter-btn");



//create html table with all data values
function updateTable(filteredData){

    filteredData.forEach((alienSight)=> { 
        var row = tbody.append("tr");
        Object.entries(alienSight).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });  
    });
};

updateTable(tableData);

//on submit function, reset html table with values that match search results
search.on("click", function() { 
    
    //clear html table
    tbody.html(""); 

    //get reference for input value 
    dateValue = d3.select("#datetime").property("value");
    cityValue = d3.select("#city").property("value");
    stateValue = d3.select("#state").property("value");
    var filteredData = tableData;

    if (dateValue!=""){
        filteredData = filteredData.filter(filteredData => filteredData.datetime === dateValue);
        // updateTable(dateData);
    }
    if (cityValue!=""){
        filteredData = filteredData.filter(filteredData => filteredData.city === cityValue.toLowerCase());
        // updateTable(cityData);
    }
    if (stateValue!=""){
        filteredData = filteredData.filter(filteredData => filteredData.state === stateValue.toLowerCase());
        // updateTable(stateData);
    }
    updateTable(filteredData);
  });




