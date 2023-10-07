let ml = 100;
let timeout = setInterval(function(){

    document.getElementById("carousel").style.marginLeft = -ml+"%";
    document.getElementById("carousel").style.transition = "1s"; 
    ml=ml+100;
    
    if(ml>400)
    {
        setTimeout(function(){

            document.getElementById("carousel").style.marginLeft = "0%";
            document.getElementById("carousel").style.transition = "0s"; 
            ml=100;

        },1000)
    }
},3000)
