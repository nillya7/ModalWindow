
'use strict;'

// make it dynamic
// const moadalBtn = document.querySelectorAll('.modal-btn');
// console.log(moadalBtn);
// for (let i = 0 ; i< moadalBtn.length ; i++) {
//     const modalBtn1 = moadalBtn[0]
//     console.log(modalBtn1)
// }


const modalBtn1 = document.querySelector('.modal-btn.modal-1');
const modalBtn2 = document.querySelector('.modal-btn.modal-2');
const modalBtn3 = document.querySelector('.modal-btn.modal-3');

const modal1 = document.querySelector('.modal-window.modal-1');
const modal2 = document.querySelector('.modal-window.modal-2');
const modal3 = document.querySelector('.modal-window.modal-3');

const xBtn1 = document.getElementById('x1');
const xBtn2 = document.getElementById('x2');
const xBtn3 = document.getElementById('x3');

// const outside = document.querySelectorAll(':not(.modal)')
// const outside = document.querySelectorAll(':not([div])')
// const outside = document.querySelectorAll(':not(.modal):not(.modal-btn)')


// console.log(outside)

// click on open modal window
modalBtn1.addEventListener('click', modalOpen1);
modalBtn2.addEventListener('click', modalOpen2);
modalBtn3.addEventListener('click', modalOpen3);

// click on close modal window
xBtn1.addEventListener('click', modalClose);
xBtn2.addEventListener('click', modalClose);
xBtn3.addEventListener('click', modalClose);

// click outside
// for (let i=0 ; i<outside.length ; i++) {
//     outside[i].addEventListener('click', modalClose)
// }


// modal 1
function modalOpen1() {
    modal1.style.visibility = "visible";
    
    // style is changed - background color is darker
    document.body.style.backgroundColor = "#518551";
    
    // button is disabled, blury and cursor is regular
    btnDisabled();
}


// modal 2
function modalOpen2() {
    modal2.style.visibility = "visible";
    
    // style is changed - background color is darker
    document.body.style.backgroundColor = "#518551";
    
    // button is disabled, blury and cursor is regular
    btnDisabled();  
}

// modal 3
function modalOpen3() {
    modal1.style.visibility = "visible";
    
    // style is changed - background color is darker
    document.body.style.backgroundColor = "#518551";
    
    // button is disabled, blury and cursor is regular
    btnDisabled(); 
}


function modalClose() {
    console.log("x is clicked")
    modal1.style.visibility = "hidden";
    modal2.style.visibility = "hidden";
    modal3.style.visibility = "hidden";

    // style is changed - background color is lighter
    document.body.style.backgroundColor = "lightgreen";

    // buttons are enabled, not blury and cursor is pointer
    btnEnabled();
}



// buttons are enabled, not blury and cursor is pointer
function btnDisabled() {
    modalBtn1.disabled = true;
    modalBtn1.style.cursor = "default";
    modalBtn1.classList.add('.modal-open');    

    modalBtn2.disabled = true;
    modalBtn2.style.cursor = "default";
    modalBtn2.classList.add('.modal-open');    

    
    modalBtn3.disabled = true;
    modalBtn3.style.cursor = "default";
    modalBtn3.classList.add('.modal-open');  

}


function btnEnabled() {
    modalBtn1.disabled = false;
    modalBtn1.style.cursor = "pointer";
    modalBtn1.classList.remove('.modal-open');    

    modalBtn2.disabled = false;
    modalBtn2.style.cursor = "pointer";
    modalBtn2.classList.remove('.modal-open');    

    
    modalBtn3.disabled = false;
    modalBtn3.style.cursor = "pointer";
    modalBtn3.classList.remove('.modal-open');  

}

// clicking on Esc btn in keyboard
document.addEventListener('keydown', (event) => {
    if(event.key === "Escape") {
      modalClose();
    }
})


// clicking anywhere in the screen outside of the modal

// modalClose();