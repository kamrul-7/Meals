const loadCountries = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        .then(res => res.json())
        .then(data => displayCountries(data.categories));
}

const displayCountries = countries => {
    console.log(countries)
    // console.log(countries[0]);
    const countriesHTML = countries.map(country => getCountryHTML(country));
    // console.log(countriesHTML[0]);
    // console.log(countriesHTML)
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}

// option 3
// const getCountryHTML = ({ categoriesstrCategoryThumb }) => {
//     return `
//         <div class="country">
//             <h2>${categories.idCategory}</h2>
//             <p>Area: ${area}</p>
//             <p>Continet: ${strCategoryThumb}</p>
//             <img src="${flags.png}">
//         </div>
//     `
// }

// option 2
// const getCountryHTML = country =>{
//     // option 1
//     const {name, flags} = country;
//     return `
//         <div class="country">
//             <h2>${name.common}</h2>
//             <img src="${flags.png}">
//         </div>
//     `
// }

// option 1
const getCountryHTML = country => {

    return `
        <div class="country">
            <h2>Id: ${country.idCategory}</h2>
            <img src="${country.strCategoryThumb}">
            <h2>Food Name: ${country.strCategory}</h2>
            <p>Description: ${country.strCategoryDescription}</p>
          
        </div>
    `
}

loadCountries();