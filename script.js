/* =======================   typing animation    ======================= */
var typed = new Typed(".typing", {
  strings: ["Web Developer", "Freelancer", "Designer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
/* =============================== Aside =========================== */
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length;
(allSection = document.querySelectorAll(".section")),
  (totalSection = allSection.length);
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
  removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) 
      {
        addBackSection(j);
        //allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
        asideSectionTogglerBtn();
        }
  });
}
function removeBackSection() {
 for (let i = 0; i < totalSection; i++) 
 {
  allSection[i].classList.remove("back-section");
 }
}
function addBackSection (num){
  allSection[num].classList.add("back-section");
}
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}
function updateNav(element) {
  for (let i = 0; i<totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click",function () 
{
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
})  

const navTogglerBtn = document.querySelector(".nav-toggler"),
aside= document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () =>{
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn()
{
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.toggle("open");
    }
}
// =====================   SEND ME AN EMAIL  ========================
function enviarFormulario(event) {
  event.preventDefault();

  const form = event.target;
  const xhr = new XMLHttpRequest();
  xhr.open(form.method, form.action);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      form.reset();
      mostrarMensajeEnviado();
    } else {
      console.error('Error al enviar formulario:', xhr.status);
    }
  };
  xhr.send(new FormData(form));
}

function mostrarMensajeEnviado() {
  const mensajeEnviado = document.querySelector('#mensaje-enviado');
  mensajeEnviado.style.display = 'block';
  setTimeout(function() {
    mensajeEnviado.style.display = 'none';
  }, 5000);
}

  
// =====================   SEND ME AN EMAIL  ========================