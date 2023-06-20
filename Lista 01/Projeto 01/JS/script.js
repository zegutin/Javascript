const btn = document.querySelector("#btn");

btn.addEventListener("click",(e)=>{
    e.preventDefault()
    selectedCountry()
})

function selectedCountry () {
    const campo = document.querySelector("#Country").value

    const URL = `https://restcountries.com/v3.1/name/${campo}`
    

    fetch(URL)

    .then((res)=>{
         return res.json()
    })
    
    .then((data)=>{
        console.log(data[0]);
         
        let bandeira = data[0].flags.svg
        document.querySelector("#flagCountry").setAttribute("src",`${bandeira}`)

        let capital = data[0].capital[0]
        document.querySelector("#capital").innerHTML=`<b>Capital:</b> <i>${capital}</i>`

        let population = data[0].population.toLocaleString("pt-BR")
        document.querySelector("#population").innerHTML=`<b>Population:</b> <i>${population}</i>`

        let continents = data[0].continents
        document.querySelector("#continent").innerHTML=`<b>Continent:</b> <i>${continents}</i>`

        let currencies = data[0].currencies [Object.keys(data[0].currencies)].name
        document.querySelector("#currency").innerHTML=`<b>Currency</b> <i>${currencies}</i>`

        let languages = data[0].languages [Object.keys(data[0].languages)]
        document.querySelector("#cammon-language").innerHTML=`<b>Cammon languages:</b> <i>${languages}</i>`
})






}
