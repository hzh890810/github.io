fir = document.getElementsByClassName('container')
fir[0].children[0].classList.add('onclick');
fir[0].children[0].children[1].style.opacity = 1;
function trs(num) {
    const item =  document.getElementById(num);
    target = item.parentElement.children;
    Object.values(target).forEach(element => {
        element.classList.remove('onclick');
        element.children[1].style.opacity = 0;
    });
    item.classList.add('onclick');
    item.children[1].style.opacity = 1;  
}