
// let nav = document.getElementById('nav-bar')
// let bodypd = document.getElementById('body-pd')
// let headerpd = document.getElementById('header')
// let close = document.getElementById('bx-x')
/*===== SHOW NAVBAR  =====*/ 
const showNavbar = (toggleId, navId, bodyId, headerId,headerMb) =>{
    let toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementsByClassName(headerId)
    lnav = document.getElementById('nav-bar')
    headermb= document.getElementById(headerMb)
    
    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
        toggle.addEventListener('click', ()=>{
            // show navbar
            nav.classList.toggle('show')
            // change icon
            toggle.classList.toggle('bx-x')
            // add padding to body
            bodypd.classList.toggle('body-pd')
            // add padding to header
            headerpd.classList.toggle('show')
        })
    }
}

showNavbar('header-toggle','nav-bar','body-pd','navbar','header-mb')

/*===== LINK sideActive  =====*/ 
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(l=> l.classList.remove('sideActive'))
        this.classList.add('sideActive')
    }
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))



       //Hover on header
    //    lnav.addEventListener('mouseenter', ()=>{
    //     // show navbar
    //     nav.classList.toggle('show')
    //     // change icon
    //     toggle.classList.toggle('bx-x')
    //     // add padding to body
    //     bodypd.classList.toggle('body-pd')
    //     // add padding to header
    //     headerpd.classList.toggle('body-pd')
    // })


    // lnav.addEventListener('mouseleave', ()=>{
    //     // show navbar
    //     nav.classList.remove('show')
    //     // change icon
    //     toggle.classList.remove('bx-x')
    //     // add padding to body
    //     bodypd.classList.remove('body-pd')
    //     // add padding to header
    //     headerpd.classList.remove('body-pd')
    // })
