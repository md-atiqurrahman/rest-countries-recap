const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

loadCountries();

const displayCountries = countires =>{
    // console.log(countires);
    const countiresHTMl = countires.map(country =>getCountryHtml(country));
    // console.log(countiresHTMl.join('#'));
    const container = document.getElementById('countries');
    container.innerHTML = countiresHTMl.join(' ');
};
//option 2
const getCountryHtml = ({name,flags,area,population}) =>{
    return `
       <div class="country">
            <h2>${name.common}</h2>
            <p>Area: ${area}</p>
            <p>Population: ${population}</p>
            <img src= "${flags.png}">
       </div>
    `;
}
//option 1
// const getCountryHtml = country =>{
//     const {name,flags} = country;
//     return `
//        <div class="country">
//             <h2>${name.common}</h2>
//             <img src= "${flags.png}">
//        </div>
//     `;
// }

//orginal option
// const getCountryHtml = country =>{
//     return `
//        <div class="country">
//             <h2>${country.name.common}</h2>
//             <img src= "${country.flags.png}">
//        </div>
//     `;
// }