const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
let navbarLR = document.querySelectorAll(".nav-link");
const navbarBrand = document.querySelector(".navbarBrand");
const navbarToggler = document.querySelector(".navbar-toggler")
const navbar = document.querySelector(".navbar");
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


sign_up_btn.addEventListener("click", () => {
  let i;
for (i = 0; i < navbarLR.length; i++) {
  navbarLR[i].classList.remove("navbarLeft");
  navbarLR[i].classList.add("navbarRight");
}
 
  navbarBrand.classList.remove("navbarBrandRight");
  navbarBrand.classList.add("navbarBrandLeft");
});

sign_in_btn.addEventListener("click", () => {

  let i;
  for (i = 0; i < navbarLR.length; i++) {
    navbarLR[i].classList.remove("navbarRight");
  navbarLR[i].classList.add("navbarLeft");
  }
  navbarBrand.classList.remove("navbarBrandLeft");
  navbarBrand.classList.add("navbarBrandRight");
});
let flag=0;
navbarToggler.addEventListener("click", () => {
  if(flag==0)
  {
    navbar.classList.add("mbNavbar");
    flag=1;
  }
  else{
    navbar.classList.remove("mbNavbar");
    flag=0;
  }
});