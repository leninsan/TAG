let button = document.querySelectorAll('.pestañaLinks');
let content = document.querySelectorAll('.pestañaContent');
let ind = 0;
let h = "hole";
function openCity(event, cityName){
    for(let i=0; i<button.length ; i++){
        if(cityName == button[i].textContent.toLowerCase()){
            button[i].classList.toggle("active");
            content[i].style.display='block';  
            console.log(typeof(button[i].classList));
            for (ind of button[i].classList){
                if(ind =='active'){
                    content[i].style.display='block';
                    
                }else{
                    content[i].style.display='none';
                    console.log('hola');
                }
            }
            console.log(ind);
    
        }else{
            button[i].classList.remove("active");
            content[i].style.display='none';
  
        }


    }
}
