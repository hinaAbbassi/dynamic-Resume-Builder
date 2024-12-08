function addNewfeild(){
    
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control")
    newNode.classList.add("wefeild")
    newNode.classList.add("col")
    newNode.style.marginTop = "10px";
    newNode.style.marginBottom = "5px";
    newNode.style.padding = "10px";
    newNode.style.borderRadius = "7px";
    newNode.style.fontSize = "16px";
    newNode.setAttribute("rows",5)  
    newNode.setAttribute("placeholder","Enter Here")
    
    let we = document.getElementById("we")
    let weaddbtn = document.getElementById("wrkadbtn")

    we.insertBefore(newNode,weaddbtn)
}

function addNewskl(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control")
    newNode.classList.add("sklfeild")
    newNode.classList.add("col")
    newNode.style.marginTop = "10px";
    newNode.style.marginBottom = "5px";
    newNode.style.padding = "10px";
    newNode.style.borderRadius = "7px";
    newNode.style.fontSize = "16px";
    newNode.setAttribute("rows",5) 
    newNode.setAttribute("placeholder","Enter Here")
    
    let skl = document.getElementById("skl")
    let skladbtn = document.getElementById("skladbtn")

    skl.insertBefore(newNode,skladbtn);
}

function addNewedu(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control")
    newNode.classList.add("edufeild")
    newNode.classList.add("col")
    newNode.style.marginTop = "10px";
    newNode.style.marginBottom = "5px";
    newNode.style.padding = "10px";
    newNode.style.borderRadius = "7px";
    newNode.style.fontSize = "16px";
    newNode.setAttribute("rows",5) 
    newNode.setAttribute("placeholder","Enter Here")
    
    let edu = document.getElementById("edu")
    let eduaddbtn = document.getElementById("eduaddbtn")

    edu.insertBefore(newNode,eduaddbtn);
}

function addNewpro(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control")
    newNode.classList.add("profeild")
    newNode.classList.add("col")
    newNode.style.marginTop = "10px";
    newNode.style.marginBottom = "5px";
    newNode.style.padding = "10px";
    newNode.style.borderRadius = "7px";
    newNode.style.fontSize = "16px";
    newNode.setAttribute("rows",5) 
    newNode.setAttribute("placeholder","Enter Here")
    
    let pro = document.getElementById("pro")
    let proaddbtn = document.getElementById("proaddbtn")

    pro.insertBefore(newNode,proaddbtn);
}

function addNewlng(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control")
    newNode.classList.add("lngfeild")
    newNode.classList.add("col")
    newNode.style.marginTop = "10px";
    newNode.style.marginBottom = "5px";
    newNode.style.padding = "10px";
    newNode.style.borderRadius = "7px";
    newNode.style.fontSize = "16px";
    newNode.setAttribute("rows",5) 
    newNode.setAttribute("placeholder","Enter Here")
    
    let lng = document.getElementById("lng")
    let lngaddbtn = document.getElementById("lngaddbtn")

    lng.insertBefore(newNode,lngaddbtn);
}

function addNewhbs(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control")
    newNode.classList.add("hbsfeild")
    newNode.classList.add("col")
    newNode.style.marginTop = "10px";
    newNode.style.marginBottom = "5px";
    newNode.style.padding = "10px";
    newNode.style.borderRadius = "7px";
    newNode.style.fontSize = "16px";
    newNode.setAttribute("rows",5) 
    newNode.setAttribute("placeholder","Enter Here")
    
    let hbs = document.getElementById("hbs")
    let hnsaddbtn = document.getElementById("hnsaddbtn")

    hbs.insertBefore(newNode,hnsaddbtn);
}

// print
function genrateCv(){
//   name
  let name = document.getElementById("name").value
  let nameT = document.getElementById("nameT")
  nameT.innerHTML = name ;
//    contact
document.getElementById("contactT").innerHTML = document.getElementById("Contact").value;
// email
document.getElementById("emailT").innerHTML=document.getElementById("email").value;
// address
document.getElementById("addressT").innerHTML=document.getElementById("address").value;
// Occupation
document.getElementById("OccupationT").innerHTML=document.getElementById("Occupation").value;
// links update
  let linkfeild = document.getElementById("linkfeild").value
  let gitfield =document.getElementById("gitfield").value;
  let linkfeildT = document.getElementById("linkfeildT");
  let gitfieldT =document.getElementById("gitfieldT");
  linkfeildT.href = linkfeild;
  gitfieldT.href = gitfield;
//   Objectivefeild
document.getElementById("ObjectiveT").innerHTML=document.getElementById("Objectivefeild").value;
//    skill
let skill = document.getElementsByClassName("sklfeild");
let str = ""
for(let e of skill){
    str = str + `<li>${e.value}</li>`
}
document.getElementById("skillT").innerHTML = str;
//    expreince
let wefeild = document.getElementsByClassName("wefeild");
let we = ""
for(let ex of wefeild){
    we = we + `<li>${ex.value}</li>`
}
document.getElementById("exprienceT").innerHTML = we;
//    edufeild
let edufeild = document.getElementsByClassName("edufeild");
let eduF = ""
for(let ed of edufeild){
    eduF = eduF + `<li>${ed.value}</li>`
}
document.getElementById("educationT").innerHTML = eduF;
//    langues
let lngfeild = document.getElementsByClassName("lngfeild");
let elg = ""
for(let lg of lngfeild){
    elg = elg + `<li>${lg.value}</li>`
}
document.getElementById("languagesT").innerHTML = elg;
//    hbsfeild
let hbsfeild = document.getElementsByClassName("hbsfeild");
let hbs = ""
for(let hb of hbsfeild){
    hbs = hbs + `<li>${hb.value}</li>`
}
document.getElementById("hobbiesT").innerHTML = hbs;
//    profeild
let profeild = document.getElementsByClassName("profeild");
let pro = ""
for(let pr of profeild){
    pro = pro + `<li>${pr.value}</li>`
}
document.getElementById("ProjectsT").innerHTML = pro;
// print
document.getElementById("cv-form").style.display = "none";
document.getElementById("cv-form2").style.display = "none";
document.getElementById("cv-template").style.display = "block";
}
// images
  // Reference to the file input and the output image
  let imageUpload = document.getElementById('imageUpload');
  let output = document.getElementById('output');

  // Add an event listener for the file input
  imageUpload.addEventListener('change', (event) => {
      const file = event.target.files[0]; // Get the first file

      if (file) {
          // Create a URL for the image file
          const imageUrl = URL.createObjectURL(file);
          output.src = imageUrl; // Set the image source
          output.style.display = 'block'; // Make the image visible
      }
  });

  function printCV(){
    window.print();
  }
  