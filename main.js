let typeWork = document.querySelectorAll(".switcher li");
let Imgs = document.querySelectorAll(".gallery img") ;

typeWork.forEach((e)=>{
  e.onclick =()=>{
    typeWork.forEach((ele)=>{
      ele.classList.remove("active");
    });
    e.classList.add("active");
    Imgs.forEach((im)=>{
      im.style.display = "none";
    });
    document.querySelectorAll(document.querySelector(".active").dataset.cat).forEach((img)=>{
      img.style.display = "inline-block"
    })

  }
})