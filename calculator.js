let outputScreen = document.getElementById("output");
    function display(num){
        outputScreen.value += num
    }
    function calculate(){
        try{
            outputScreen.value = eval(outputScreen.value);
        }
        catch(err){
            alert("Invalid")
        }
    }
    function Clear(){
        outputScreen.value = "";
    }
    function del(){
        outputScreen.value = outputScreen.value.slice(0,-1);
    }

    // dark-mod

    var icon = document.getElementById("icon");
    icon.onclick = function(){
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
            icon.src = "./sun.png";
        }
        else{
            icon.src ="./moon.png"
        }
    }