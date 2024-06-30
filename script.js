document.addEventListener('DOMContentLoaded', () => {

    const btn = document.querySelector('button');
    const hair = new Audio('./images/h.mp3');

    btn.onclick = () => {

        if(btn.innerHTML === 'ON'){
            hair.play(), hair.loop = true, btn.innerHTML = 'OFF'
        } else {
            hair.pause(), btn.innerHTML = 'ON'
        };

    };

});