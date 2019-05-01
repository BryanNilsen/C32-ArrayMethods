console.log("and array we go!");

const filterOutputDiv = document.getElementById("filterOutputDiv");
const mapOutputDiv = document.getElementById("mapOutputDiv");
const findOutputDiv = document.getElementById("findOutputDiv");
const manufacturingOutputDiv = document.getElementById(
  "manufacturingOutputDiv"
);

// APPEND BUSINESS TO DOM
function appendToDom(object, divToAppend) {
  const businessCard = document.createElement("div");
  businessCard.innerHTML = `
      <h1>${object.companyName}</h1>
      <p>${object.addressFullStreet}</p>
      <p>${object.addressCity}, ${object.addressStateCode} ${
    object.addressZipCode
  }</p>
      <hr/>
      `;

  divToAppend.appendChild(businessCard);
}

// FILTER
const stateToFilter = "NY";

businesses
  .filter(biz => biz.addressStateCode === stateToFilter)
  .forEach(business => {
    const businessCard = document.createElement("div");
    businessCard.innerHTML = `
  <h1>${business.companyName}</h1>
  <p>${business.addressFullStreet}</p>
  <p>${business.addressCity}, ${business.addressStateCode} ${
      business.addressZipCode
    }</p>
  <hr/>
  `;

    filterOutputDiv.appendChild(businessCard);
  });

function showBusiness(business) {
  return `<div>${business.companyName}`;
}

// Lightning Exercise: Use filter() to create another array named manufacturingBusinesses that will contain all businesses in the manufacturing industry. Display those to the DOM.
const manufacturingBusinesses = businesses.filter(
  biz => biz.companyIndustry === "Manufacturing"
);
console.log("manufacturing biz", manufacturingBusinesses);
manufacturingBusinesses.forEach(biz =>
  appendToDom(biz, manufacturingOutputDiv)
);

// MAP
let mappedBusinesses = businesses.map(showBusiness);
console.log(mappedBusinesses);
mapOutputDiv.innerHTML += mappedBusinesses.join("");

// FIND
document
  .querySelector("#companySearch")
  .addEventListener("keyup", keyPressEvent => {
    // if (keyPressEvent.charCode === 13) {
    /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
    const foundBusiness = businesses.filter(business =>
      business.companyName.includes(keyPressEvent.target.value)
    );
    if (foundBusiness) {
      console.log(foundBusiness);
      findOutputDiv.innerHTML = "";
      foundBusiness.forEach(business => {
        findOutputDiv.innerHTML += `
                <h2>
                ${business.companyName}
                </h2>
                <section>
                ${business.addressFullStreet}

                </section>
                <section>
                ${business.addressCity},
                ${business.addressStateCode}
                ${business.addressZipCode}
                </section>
            `;
      });
    } else {
      findOutputDiv.innerHTML = `
                <h2> No Businesses found
                </h2>
              `;
    }
    // }
  });

// REDUCE

// BIG SPENDERS

// Array to contain all the big spenders

function orderGreaterThan(value, num) {
  if (value > num) {
    return true;
  }
}
const bigSpenders = businesses.filter(business => {
  let businessSpender = false;
  business.orders.forEach(order => {
    if (orderGreaterThan(order, 9000)) {
      businessSpender = true;
    }
  });
  return businessSpender;
});

// business orders array = find order over 9000

console.log("Big spenders", bigSpenders);

const planets = [
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
  "pluto"
];

// let newPlanetsArray = planets.filter(planet => planet.includes("er"));
// console.log("New Planets array", newPlanetsArray);

let planetsNamedEarth = [];
let planetsThatContainTheLetterE = [];
let filteredPlanets = planets.filter(planet => {
  if (planet.includes("earth")) {
    planetsNamedEarth.push(planet);
    return false;
  } else if (planet.includes("e")) {
    planetsThatContainTheLetterE.push(planet);
  } else {
    return true;
  }
});
// .forEach(filteredPlanets =>
//   console.log("This planet contains 'earth':", filteredPlanets)
// );
console.log("Planets that are named Earth:", planetsNamedEarth);
console.log("Planets that contain the letter E:", planetsThatContainTheLetterE);
console.log("Final Planets array after the filter:", filteredPlanets);

// Practice: Spam, Spam, Spam, Spam
// Learning Objective: Practice accessing data within an array of objects
// You have been tasked with building a list of email addresses of all of our customer's contacts so we can spam them with an email about Miffles the Vampire Weiner Dog.
// In your JavaScript file, paste the customers array that contains the emails we need to retrieve.
// From that array, extract just the customers' contact email addresses and store them in a new array. You will need a nested array method - meaning one iteration inside another one - since you need to iterate the entire array of customers, and then iterate the array of emails for each one.

const spamCustomerOutput = document.getElementById("spamCustomerOutput");

customers.forEach(customer => {
  let customerDiv = document.createElement("div");
  let customerH1 = document.createElement("h1");
  customerDiv.setAttribute("class", "customerCard");
  customerH1.textContent = `${customer.first_name} ${customer.last_name}`;
  customerDiv.appendChild(customerH1);

  let customerEmailsUl = document.createElement("ul");
  customerDiv.appendChild(customerEmailsUl);

  customer.contacts.email.forEach(email => {
    let emailLi = document.createElement("li");
    emailLi.textContent = email;
    customerEmailsUl.appendChild(emailLi);
  });

  spamCustomerOutput.appendChild(customerDiv);
});
