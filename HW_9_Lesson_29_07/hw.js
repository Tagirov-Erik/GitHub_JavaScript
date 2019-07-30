var countries = [];
var sortReverse = true;
var initChoice = false;

function sortCountries(countries, sortName) {
  return countries.sort((country, nextCountry) => {
    let value = country[sortName];
    let nextValue = nextCountry[sortName];
    if (sortReverse) {
      if (sortName === "name") {
        return value < nextValue ? -1 : value > nextValue ? 1 : 0;
      } else {
        return value < nextValue ? 1 : value > nextValue ? -1 : 0;
      }
    } else {
      if (sortName === "name") {
        return value < nextValue ? 1 : value > nextValue ? -1 : 0;
      } else {
        return value < nextValue ? -1 : value > nextValue ? 1 : 0;
      }
    }
  });
}

function observeTable() {
  $("th.sortable").on("click", e => {
    sortReverse = !sortReverse;
    let sortableTh = $(e.target).attr("data-sort");
    buildTable(sortCountries(countries, sortableTh));
    $("#tags").val("");
    $(`th[data-sort=${sortableTh}]`).addClass("active-sort");
  });
}

function initAutocomplete(countriesNames) {
  $("#tags").autocomplete({
    source: countriesNames,
    select: function(event, ui) {
      initChoice = true;
      buildTable(countries, ui.item.value, initChoice);
    }
  });
}

function buildTable(countries, newValue) {
  let htmlCode =
    '<table class="table"><thead><tr><th>#</th><th class="sortable" data-sort="name">название страны</th><th>столица</th><th class="sortable" data-sort="population">населениe</th><th class="sortable" data-sort="area">площадь</th><th>валюты</th><th>языки</th><th>флаг</th><th>граничит с</th></tr></thead>';
  for (let index in countries) {
    let element = countries[index];

    if (newValue && element.name !== newValue) {
      continue;
    }
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
  htmlCode += "</table>";

  let countriesNames = countries.map(el => {
    return el.name;
  });

  if (!newValue) {
    initAutocomplete(countriesNames);
  }

  $(".htmlTable").html(htmlCode);

  if (!initChoice) {
    observeTable();
  }
}

$(document).ready(() => {
  $.ajax({
    url: "https://restcountries.eu/rest/v2/all"
  }).done(data => {
    countries = data;
    buildTable(data);
  });
});
