var control = 0
function aumenta(n){
    if(control == 0){
        control = 1
        document.getElementById(n).style.width="auto"
        document.getElementById(n).style.position="fixed"
        document.getElementById(n).style.top="5%"
        document.getElementById(n).style.left="20%"
    }
    else{
        document.getElementById(n).style.position="static"
        control = 0
    }
}
