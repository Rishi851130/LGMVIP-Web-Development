let ip = document.getElementById('ipbox');
let buttons= document.querySelectorAll('button');
let ip2 = document.getElementById('ipbox2');
const element = document.querySelector('#ipbox');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button =>{
    button.addEventListener('click', (e)=> {
        if(e.target.innerHTML == '=') {
            let string2= string;
            string = eval(string);
            ip.value = string;
            ip2.value = string2;
            changeFont(string);
        }
        else if(e.target.innerHTML == 'AC') {
            string = "";
            let string2="";
            ip.value = string;
            ip2.value = string2;
            changeFont(string);
        }
        else if(e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length-1);
            ip.value = string;
            changeFont(string);
        }
        else{
            string += e.target.innerHTML;
            ip.value = string;
            changeFont(string);
            
        } 
    })
})
const changeFont =(str) => {
    if(str.length> 14) {
        document.getElementById("ipbox").style.fontSize = '35px';
    }
    else if(str.length> 16) {
        document.getElementById("ipbox").style.fontSize = '30px';
    }
    else{
        document.getElementById("ipbox").style.fontSize = '40px';
    }
}
