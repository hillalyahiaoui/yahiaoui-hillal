var mini = "azertyuiopmlkjhgfdqwxcvbn";
var maji = mini.toUpperCase();
var numi = "0123456789";
var cym ="!?$&#§%";

function gmp(){
var tab=[];
setTimeout(() => {
    document.getElementById('affichage').value ="";
    

}, 8000);

if(min.checked) tab.push(...mini);
if(maj.checked) tab.push(...maji);
if(num.checked) tab.push(...numi);
if(sym.checked) tab.push(...cym);

if(tab.length===0){
    alert("veuillez sélectionner un champ")
    return
}

for (let i = 0; i <document.getElementById('rang').value; i++) {
   var mathRan = Math.floor(Math.random()*tab.length);
   
document.getElementById('affichage').value+=tab[mathRan]
document.getElementById('affichage').select()
document.execCommand("copy")
btn.textContent="MDP copié"
setTimeout(()=>{
    btn.textContent="Générer votre MDP"

},8000)

}

}

btn.addEventListener('click', gmp)



   //--------------tete----

const img = document.querySelector('img')
const p = document.querySelector('p')


img.addEventListener("mouseover", ()=>{
    p.innerHTML = `
    un générateur de mot de passe </br> choisir la taille de votre MDP (5-30) <br> selecionner un ou plusieurs champs pour générer le MDP selon le choix des caractères volus<br>clicker sur générer votre MDP, un MDP sera généré et copié automatiquement<br> il est prèt à etre collé là ou vous voulez   
    `
    p.classList.add('pp')
    img.addEventListener("mouseout", ()=>{
        p.innerHTML=""
        p.classList.remove('pp')
    })
})
