
/* pour changer la couleur */
function changerDeCouleur(){
    const bloc =document.getElementById('container').querySelectorAll('div');
    const p = document.getElementById('container').querySelectorAll('p');
    
    for (let index = 0; index < bloc.length; index++) {
        if (bloc[index].classList.contains('changeColor')) {
            bloc[index].classList.remove('changeColor');
            p[index].classList.remove('textColor');
        }else{
            bloc[index].classList.add('changeColor');
            p[index].classList.add('textColor');
        }
    }
}   


const saisie = document.getElementsByClassName('form-control')
const submitBtn = document.getElementById('submit')
let donnee = {}
let infos = []
for(let i = 0; i<saisie.length;i++){
    saisie[i].addEventListener('keyup', ()=> {
        let value = saisie[i].value
        let id = saisie[i].id
        donnee[id] = value
    })
}
submitBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    for(let i = 0; i<saisie.length;i++){
        let affichErreur = document.getElementById(saisie[i].id+'-erreur');
        if (saisie[i].value === "") {
            affichErreur.innerHTML = "<p>Ce champ est requis</p>"
        } else {
            affichErreur.innerHTML = ""
        }
    }
})
infos.push(donnee)
console.table(infos) 

/* const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

/* const submitBtn = document.getElementById("submit"); */
/* submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    (data.nom && data.prenom && data.email && data.message) ||
    regexEmail.test(data.email)
  ) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
  infos.push(data);
  const result = document.getElementById("submit");
  resetInputs();
  resultat.innerHTML = `
    <p>prenom: ${data.prenom}</p>
    <p>nom: ${data.nom}</p>
    <p>mail: ${data.email}</p>
    <p>message: ${data.message}</p>
    <p>message: ${data.telephone}</p>
    `;
  console.log(infos);
}); */ 
/* let inputs = document.getElementsByClassName("form");
const data = {};
const infos = []; 
let inputsLength = inputs.length;
for (let i = 0; i < inputsLength; i++) {
  inputs[i].addEventListener("keyup", function () {
    const id = inputs[i].id;
    const value = inputs[i].value;
    data[id] = value;
  });
}

const resetInputs = () => {
  for (let i = 0; i < inputsLength; i++) {
    inputs[i].value = "";
  }
}; */
//regex for email
const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    (donnee.nom && donnee.prenom && donnee.email && donnee.telephone && donnee.message) ||
    regexEmail.test(data.email)
  ) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
  infos.push(donnee);
  const result = document.getElementById("resultat");
 
  result.innerHTML = `
    <p>prenom: ${donnee.prenom}</p>
    <p>nom: ${donnee.nom}</p>
    <p>email: ${donnee.email}</p>
    <p>telephone: ${donnee.telephone}</p>
    <p>message: ${donnee.message}</p>
    `;
  console.log(infos);
});