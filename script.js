setInterval(() => {

    let hours = document.querySelector('.hours');
    let minutes = document.querySelector('.minutes');
    let secondes = document.querySelector('.seconds');

    let hh = document.querySelector('#hh');
    let mm = document.querySelector('#mm');
    let ss = document.querySelector('#ss');

    let dotH = document.querySelector('.h-dots');
    let dotM = document.querySelector('.m-dots');
    let dotS = document.querySelector('.s-dots');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();


    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;


    hours.innerHTML = h + " Saat";
    minutes.innerHTML = m + ' Dakika';
    secondes.innerHTML = s + ' Saniye';


    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;


    dotH.style.transform = `rotate(${h * 30}deg)`;
    dotM.style.transform = `rotate(${m * 6}deg)`;
    dotS.style.transform = `rotate(${s * 6}deg)`;
}, 1000);
