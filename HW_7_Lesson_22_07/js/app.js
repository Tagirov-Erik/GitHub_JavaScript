function buildTable(countries) {
  let htmlCode =
    '<table class="table"><thead><tr><th>#</th><th>Name</th><th>Capital</th><th>Population</th><th>Area</th><th>Currencies</th><th>Languages</th><th>Flag</th><th>Borders</th></tr></thead><tbody>';
  for (let index in countries) {
    let element = countries[index];
    htmlCode += `<tr><td>${+index + 1}</td><td>${element.name}</td><td>${
      element.capital
    }</td><td>${element.population}</td><td>${element.area}</td><td>`;
    let currencies = element.currencies.map(item => {
      return item.name;
    });
    htmlCode += `${currencies.join(", ")}</td><td>`;

    let languages = element.languages.map(item => {
      return item.name;
    });
    htmlCode += `${languages.join(", ")}</td><td><img src="${
      element.flag
    }"></td><td>`;

    let borderNames = [];
    for (let borderItem of element.borders) {
      for (let searchArray in countries) {
        if (countries[searchArray].alpha3Code === borderItem) {
          borderNames.push(countries[searchArray].name);
        }
      }
    }

    htmlCode += `${borderNames.join(", ")}</td></tr>`;
  }
  htmlCode += "</tbody></table>";

  $(".htmlTable").html(htmlCode);
}

function buildShortTable(country, index, borderNames) {
  let htmlCode =
    '<table class="table"><thead><tr><th>#</th><th>Name</th><th>Capital</th><th>Population</th><th>Area</th><th>Currencies</th><th>Languages</th><th>Flag</th><th>Borders</th></tr></thead><tbody>';
  htmlCode += `<tr><td>${+index + 1}</td><td>${country.name}</td><td>${
    country.capital
  }</td><td>${country.population}</td><td>${country.area}</td><td>`;

  let currencies = country.currencies.map(item => {
    return item.name;
  });
  htmlCode += `${currencies.join(", ")}</td><td>`;

  let languages = country.languages.map(item => {
    return item.name;
  });
  htmlCode += `${languages.join(", ")}</td><td><img src="${
    country.flag
  }"></td><td>`;

  htmlCode += `${borderNames.join(", ")}</td></tr>`;

  htmlCode += "</tbody></table>";

  $(".htmlTable").html(htmlCode);
}

$(document).ready(() => {
  $.ajax({
    url: "https://restcountries.eu/rest/v2/all"
  }).done(data => {
    buildTable(data);
    let countriesNames = data.map(el => {
      return el.name;
    });

    $("#tags").autocomplete({
      source: countriesNames,
      select: function(event, ui) {
        for (let country of data) {
          let borderNames = getBorderNames(country, data);
          let index = getIndex(country.name, data);
          if (country.name == ui.item.value) {
            buildShortTable(country, index, borderNames);
            return;
          }
        }
      }
    });
  });
});

function getBorderNames(country, data) {
  let borderNames = [];
  for (let borderItem of country.borders) {
    for (let searchArray in data) {
      if (data[searchArray].alpha3Code === borderItem) {
        borderNames.push(data[searchArray].name);
      }
    }
  }
  return borderNames;
}

function getIndex(countryName, data) {
  for (let index in data) {
    if (countryName == data[index].name) {
      return index;
    }
  }
}
