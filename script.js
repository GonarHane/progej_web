
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

/* vérification saisie */
const saisie = document.getElementsByClassName('form-control')
const submitBtn = document.getElementById('submit')
const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; /* les valeurs de email */
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
    for(let i = 0; i<saisie.length;i++){ /* parcourir le formulaire */
        let affichErreur = document.getElementById(saisie[i].id+'-erreur');
        if (saisie[i].value === "") {
            affichErreur.innerHTML = "<p>Ce champ est requis</p>"
        }
        if(saisie[i].id === "email" && !regexEmail.test(saisie[i].value)){ /* vérifier mail */
            affichErreur.innerHTML = "<p>Mail incorrect</p>"
        }
        if (saisie[i].value !== "" && regexEmail.test(saisie[i].value)) {
            const result = document.getElementById("resultat");
 
            result.innerHTML = `
              <p>prenom: ${donnee.prenom}</p>
              <p>nom: ${donnee.nom}</p>
              <p>email: ${donnee.email}</p>
              <p>message: ${donnee.message}</p>
              `;
        }
    }
})
infos.push(donnee)
console.table(infos) 


/* var validation = document.getElementById('submit');
var mail_v = document.getElementById('email');
const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
validation.addEventListener('click',f_valid);

function f_valid(e) {
    if (mail.validity.ValueMissing)
     {e.preventDefault();

        mail_v.textContent='mail manquant';
    } /* else if (regexEmail.test(mail.vallue)==false){
        event.preventDefault();
        mail_v.textContent='format invalide';
        
        
    } 
    
} */

