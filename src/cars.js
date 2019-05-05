// Advanced Challenge: Car Dealership
// Copy the JSON from cars.json and assign it to a variable in a new application. This data holds sales information for a car dealership. Your job is to produce the following reports for the dealership based on their total 2017 sales.

// Total profit for 2017
// In which month did they sell the most cars?
// Which salesperson sold the most cars?
// Which salesperson made the most profit?
// Which model was the most popular?
// Which bank provided the most loans to our customers?

function getCars() {
  return fetch("http://127.0.0.1:8082/src/cars-data.json").then(response =>
    response.json()
  );
}

function find2017Sales() {
  getCars().then(parsedCars => {
    let profitArray = [];
    parsedCars.forEach(car => {
      if (car.purchase_date.includes("2017")) {
        profitArray.push(car.gross_profit);
      }
    });
    console.log(profitArray);
    // returning long decimal value because of javascript math with floats
    console.log(profitArray.reduce((a, b) => a + b, 0));
  });
}

find2017Sales();
