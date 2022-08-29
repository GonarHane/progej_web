
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


const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    (donnee.nom && donnee.prenom && donnee.email && donnee.message) ||
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
    <p>message: ${donnee.message}</p>
    `;
  console.log(infos);
});