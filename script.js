const apikey ="50d8506a75b3f9bfba05b9daf8952e71"
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weathericon")

async function checkweather(city) {
    const response= await fetch(apiurl  + city +  `&appid=${apikey}`);
    var data=await response.json();
    console.log(data)
 
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/hr";

   if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png"
        
   }
   else if(data.weather[0].main=="Clear"){
    weatherIcon.src="images/clear.png"
   }
   else if(data.weather[0].main=="Rain"){
    weatherIcon.src="images/rain.png"
   }
   else if(data.weather[0].main=="drizzle"){
    weatherIcon.src="images/drizzle.png"
   }
   else if(data.weather[0].main=="mist"){
    weatherIcon.src="images/mist.png"
   }
} 
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})


