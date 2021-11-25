const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');

const data_hide = document.querySelector('.middle_layer');

const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;

    if(cityVal===""){
        city_name.innerText = `Please, Write the name before search`;
        data_hide.classList.add('data_hide');

    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=5842d23e417c9073c0fb65f611986d86`
            const response = await fetch(url);
            const data = await response.json();
            const arrData =[data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;

            temp_real_val.innerText = arrData[0].main.temp;

            const tempMood = arrData[0].weather[0].main;

            if(tempMood ==="Clear"){
                temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>";
            } else if(tempMood==="Clouds"){
                temp_status.innerHTML="<i class='fas fa-cloud' style='color:#fff;'></i>";
            } else if(tempMood==="Rain"){
                temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:#fff;'></i>";
            }
            else{
                temp_status.innerHTML="<i class='fas fa-cloud' style='color:#fff;'></i>";
            }

            data_hide.classList.remove('data_hide');


        }catch{
            city_name.innerText = `Please, Enter the city Name properly`;
            data_hide.classList.add('data_hide');
        }

    }
    
}

submitBtn.addEventListener('click', getInfo);