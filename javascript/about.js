
function lightmode(){
    const imgdark = document.getElementById("btn-light");
    imgdark.classList.add('active');

    const imglight = document.getElementById("btn-dark");
    imglight.classList.remove('active');

    const  bodyElement = document.getElementById("body");
    bodyElement.className = "theme-light";
}

function darkmode(){
    const imgdark = document.getElementById("btn-light");
    imgdark.classList.remove('active');

    const imglight = document.getElementById("btn-dark");
    imglight.classList.add('active');

    const  bodyElement = document.getElementById("body");
    bodyElement.className = "theme-dark";
    


}
