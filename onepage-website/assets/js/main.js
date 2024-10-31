    function toggleMode() {
        const themeLink = document.getElementById('theme');
        const toggleIcon = document.getElementById('toggle');
        const topwhite = document.getElementById('firstimg');
        const topGrey = document.getElementById('topgrey');
        const topGrey2 = document.getElementById('topgrey2');

    if (themeLink.getAttribute('href') === '../assets/css/light.css') {
        // switch to Dark Mode
        themeLink.setAttribute('href', '../assets/css/dark.css');
        toggleIcon.className = 'fa-solid fa-toggle-off toggleon';
        topwhite.src = '../assets/images/shape-top-black-80.png';
        topGrey.src = '../assets/images/shape-top-dark-grey-80.png';
        topGrey2.src = '../assets/images/shape-top-dark-grey-80.png';
    } else {
        // Switch to Light Mode
        themeLink.setAttribute('href', '../assets/css/light.css');
        toggleIcon.className = 'fa-solid fa-toggle-on toggleon';
        topwhite.src = '../assets/images/shape-top-white-80.png';
        topGrey.src = '../assets/images/shape-top-grey-80.png';
        topGrey2.src = '../assets/images/shape-top-grey-80.png';
     }
};



window.onescroll = function(){
    const scrollTopBtn = document.getElementById("scroll");
    if (document.body.scrollTop>100 || document.documentElement.scrollTop > 100){
        scrollTopBtn.style.display = "block"
    }

    else {
        scrollTopBtn.style.display = "none"
    }

};

document.getElementById("scroll").onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};




















// // Dark mode
// function darkmode() {
//     document.getElementById('theme').setAttribute('href', '../assets/css/dark.css'); 
//     document.getElementById('toggle').className='fa-solid fa-toggle-off toggleon';
//     document.getElementById('firstimg').src='../assets/images/shape-top-black-80.png';
//     document.getElementById('secimg').src='../assets/images/shape-top-dark-grey-80.png';
//     document.getElementById('topgrey2').src='../assets/images/shape-top-dark-grey-80.png';
// }

// // Light Mode
// function lightmode() {
//     document.getElementById('theme').setAttribute('href', '../assets/css/light.css'); 
//     document.getElementById('toggle').className='fa-solid fa-toggle-on toggleon';
//     document.getElementById('firstimg').src='../assets/images/shape-top-white-80.png';
//     document.getElementById('secimg').src='../assets/images/shape-top-grey-80.png';
//     document.getElementById('topgrey2').src='../assets/images/shape-top-grey-80.png';
// }