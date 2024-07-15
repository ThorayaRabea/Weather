

////////////////////Today variables
let today_name=document.getElementById("today_name")
let today_number=document.getElementById("today_number")
let today_month=document.getElementById("today_month")
let conutry_name=document.getElementById("conutry_name")
let today_tem=document.getElementById("today_tem")
let today_img=document.getElementById("today_img")
let today_text=document.getElementById("today_text")
let humidity=document.getElementById("humidity")
let today_wind=document.getElementById("today_wind")
let wind_direction=document.getElementById("wind_direction")
/////////////////////////next data
let next_day_name=document.getElementsByClassName("next_day_name")
let next_condition_img=document.getElementsByClassName("next_condition_img")
let next_max_tem=document.getElementsByClassName("next_max_tem")
let next_min_tem=document.getElementsByClassName("next_min_tem")
let next_condition_text=document.getElementsByClassName("next_condition_text")

////////////////////////////////search input
let LocationCity=document.getElementById("Location")



////////////////////////////////codes000000000000000000000000000000000000000000000000


async function startApp(city){
    let weather_data= await getWeather(city);
    displayTodayData(weather_data)
    displayNextData(weather_data)
}
startApp();



LocationCity.addEventListener("input",function(){
   startApp(LocationCity.value)
})



async function getWeather(city){
   let weatherData= await fetch(`http://api.weatherapi.com/v1/forecast.json?key=61a3b10973884bb1ac8192607231712&q=${city}&days=7`)
   let data=await weatherData.json()
   return data
}


function displayTodayData(data){
    let d=new Date(data.current.last_updated)
     conutry_name.innerHTML=`${data.location.name}`
     today_tem.innerHTML=`${data.current.temp_c}`
     today_text.innerHTML=`${data.current.condition.text}`
     humidity.innerHTML=`${data.current.humidity}`
     today_wind.innerHTML=`${data.current.wind_kph}`
     wind_direction.innerHTML=`${data.current.wind_dir}`
     today_name.innerHTML=`${d.toLocaleDateString("en-us",{weekday:"long"})}`
     today_number.innerHTML=`${d.getDate()}`
     today_month.innerHTML=`${d.toLocaleDateString("en-us",{month:"long"})}`
     console.log(data.current.condition.icon)
    today_img.setAttribute("src",`http:${data.current.condition.icon}`)
     
    
}



function displayNextData(data){
    let d1=new Date(data.forecast.forecastday[1].date)
    let d2=new Date(data.forecast.forecastday[2].date)

    next_max_tem[0].innerHTML=`${data.forecast.forecastday[1].day.maxtemp_c}`
    next_min_tem[0].innerHTML=`${data.forecast.forecastday[1].day.mintemp_c}`
    next_condition_text[0].innerHTML=`${data.forecast.forecastday[1].day.condition.text}`
    next_day_name[0].innerHTML=`${d1.toLocaleDateString("en-us",{weekday:"long"})}`
    next_condition_img[0].setAttribute("src",`http:${data.forecast.forecastday[1].day.condition.icon}`)

    next_max_tem[1].innerHTML=`${data.forecast.forecastday[2].day.maxtemp_c}`
    next_min_tem[1].innerHTML=`${data.forecast.forecastday[2].day.mintemp_c}`
    next_condition_text[1].innerHTML=`${data.forecast.forecastday[2].day.condition.text}`
    next_day_name[1].innerHTML=`${d2.toLocaleDateString("en-us",{weekday:"long"})}`
    next_condition_img[1].setAttribute("src",`http:${data.forecast.forecastday[2].day.condition.icon}`)
}





