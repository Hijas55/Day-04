
const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all');
request.send(null);
request.onload = function () {
  const countries = JSON.parse(request.responseText);
  console.log(countries);




// Question no-01 : How to compare two JSON have the same properties without order?

const isEqual = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
      return false;
  }

  for (let objKey of obj1Keys) {
      if (obj1[objKey] !== obj2[objKey]) {
          return false;
      }
  }

  return true;
}

var obj1 = { name: "person", age: 5 };
var obj2 = { age: 5, name: "person" };

console.log(isEqual(obj1, obj2));


// Question no - 02 : Display all the country flags name in the console.
  
  for (var i = 0; i<countries.length; i++) {
    console.log(countries[i].flag);
  }

  for (var i = 0; i<countries.length; i++) {
    console.log(countries[i].flags);
  }

// Question no - 03 : Print all the countries names, regions, sub-region and populations.

  for (var i = 0; i < countries.length; i++) {
    console.log(countries[i].name.common, " ", countries[i].region, " ", countries[i].subregion, " ", countries[i].population);
  }

  for (var i = 0; i < countries.length; i++) {
    console.log('country:', countries[i].name.common, " ", 'Region:', countries[i].region, " ", 'Subregion', countries[i].subregion, " ", 'Population:', countries[i].population);
  }
  
}



