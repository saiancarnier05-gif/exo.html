var nombreMystere = Math.floor(Math.random() * 100) + 1;
var sliderJeu = document.getElementById("slider-jeu");
var texteValeurSlider = document.getElementById("valeur-slider");
var resultatJeu = document.getElementById("resultat-jeu");

function testerValeurJeu() {
var valeur = parseInt(sliderJeu.value, 10);
if (valeur < nombreMystere) {
resultatJeu.textContent = "trop petit";
} else if (valeur > nombreMystere) {
resultatJeu.textContent = "trop grand";
} else {
resultatJeu.textContent = "bravo, nouveau nombre caché !";
nombreMystere = Math.floor(Math.random() * 100) + 1;
}
}

texteValeurSlider.textContent = sliderJeu.value;

sliderJeu.addEventListener("input", function () {
texteValeurSlider.textContent = sliderJeu.value;
});

sliderJeu.addEventListener("change", testerValeurJeu);
const apiKey = "TA_CLE_API";
const ville = "Fort-de-France";

async function getWeather(){

    const url = `https://api.openweathermap.org/data/2.5/weather?q=Fort-de-France,MQ&appid=893eead6dadf2823aba84af8e9d3a858`;

    try{
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("ville").innerHTML =
        "Ville : " + data.name;

const temperatureKelvin = data.main.temp;

const temperatureCelsius = temperatureKelvin - 273.15;

document.getElementById("temperature").innerHTML =
"Température : " + temperatureCelsius.toFixed(1) + " °C";

        document.getElementById("description").innerHTML =
        "Conditions : " + data.weather[0].description;

    }catch(error){
        console.error(error);
    }

}

getWeather();
async function afficherTaux(){

    const url = "https://api.frankfurter.app/latest?from=EUR&to=USD";

    try{

        const response = await fetch(url);
        const data = await response.json();

        const taux = data.rates.USD;

        document.getElementById("taux").innerHTML =
        "1 € = " + taux + " $";

    }catch(error){

        document.getElementById("taux").innerHTML =
        "Impossible de charger le taux.";

    }

}

afficherTaux();

// mise à jour toutes les 10 minutes
setInterval(afficherTaux, 600000);