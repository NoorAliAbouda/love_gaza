let myName = "المبرمج : عبودة علي ";

let index = 1;

function writeText() {
    document.querySelector(".head h1").textContent = myName.slice(0,index);
    index++;
    if(index > myName.length) {
        index = 1;
    }
};

setInterval(function() {
    writeText();
},150);

// ///////////////////////////////


let arrImg = ["1.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "13.jpeg"];
let arrImg2 = [  "8.jpeg", "9.jpeg", "10.jpeg","11.jpeg", "12.jpeg","14.jpeg","15.jpeg", "16.jpeg"];

let cover = document.querySelector("#cover");

let submit = document.querySelector("#submit");
let name = document.querySelector("#name");
let age = document.querySelector("#age");

let male = document.querySelector("#male");
// let fmale = document.querySelector("#fmale");

let message = document.querySelector("#message");

submit.addEventListener("click",() => {
    // submit.preventDefault();
    // console.log("hello");

    localStorage.setItem("name", name.value);
    localStorage.setItem("age", age.value);
    localStorage.setItem("message", message.value);
    localStorage.setItem("male", male.checked)
    localStorage.setItem("gaza", "انا دمي فلسطيني     __  محمد عساف  Mohammed Assaf(MP3_160K).mp3");

    if(name.value == "" || age.value == "" || message.value == "") {
        alert("Please enter a name or a message or age!!");
    }
    else {
        if(male.checked == true) {
            location.href = 'index2.html';
        }
        else {
            window.location = "index2.html";
        }
    }

})

console.log(new Date().toString());