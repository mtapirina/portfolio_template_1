document.addEventListener("DOMContentLoaded", () => {
//progress bar
const progress = document.querySelector(".progress-bars-wrapper");
const percent = document.querySelectorAll(".progress-percent");
//STICKY NAVBAR
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");
// Get the navbar
const navbar = document.querySelector(".navbar");
// Get the offset position of the navbar
const sticky = navbar.offsetTop;

//The empty array will be filled with random numbers from 70 to 100. 
//This is a dynamic simulation of progress-bar percentage
const progressRandomBar =[];
function randomPercentBar(){
  for(let i = 0; i<= 7; i++){
    progressRandomBar.push(Math.floor(Math.random()* 35 + 65));
  }
}
randomPercentBar();
//On scroll page:
window.addEventListener("scroll",()=>{
  if (window.scrollY >= sticky) {
    // Add the sticky class to the navbar when we reach its scroll position.
    navbar.classList.add("sticky");
  } else {
    // Remove the sticky class when we leave the scroll position.
    navbar.classList.remove("sticky");
  }
  //.navbar-link set to .active
  sections.forEach((section, i )=>{
    if(window.scrollY >= section.offsetTop -10){
      navbarLinks.forEach(currentLink=>{
        //current link remove - active 
        currentLink.classList.remove("active-link");
      })
    navbarLinks[i].classList.add("active-link");
     }
  });
  // show progress bar 
    if(window.scrollY + window.innerHeight >= progress.offsetTop){
    percent.forEach((element, index) =>{
      const percentNum = progressRandomBar[index];
      element.style.width = `${percentNum}%`;
      element.previousElementSibling.firstElementChild.textContent = percentNum;
    });
  }
});

});
