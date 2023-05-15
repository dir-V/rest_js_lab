console.log("Testing, testing, 1 2 3 ...")

let countriesData;

const getAll = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  return data;
};

const setUp = async () => {
  countriesData = await getAll();
  listCountries();
  const searchForm = document.querySelector("form");
  searchForm.addEventListener("submit", search);
};

const listCountries = () => {
  const list = document.querySelector("#countriesList");
  list.innerHTML = "";

  countriesData.forEach((country) => {
    const countryList = document.createElement("li");
    countryList.innerText = `Country: ${country.name.common}, Population: ${country.population}`;
    list.appendChild(countryList);
  });
};

const search = (event) => {
  event.preventDefault();
  const input = document.querySelector("#filter").value;
  const filtered = countriesData.filter((country) =>
    country.name.common.toLowerCase().includes(input.toLowerCase())
  );
  countriesData = filtered;
  listCountries();
};

setUp();


