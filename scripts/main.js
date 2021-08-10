let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cong.png') {
        myImage.setAttribute('src', 'images/congcong.png');
    } else {
        myImage.setAttribute('src', 'images/cong.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storgeName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storgeName;
}

myButton.onclick = function() {
    setUserName();
}