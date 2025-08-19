

var poid = document.getElementById('poid');
 poid.focus();
var taille = document.getElementById('taille');
var p = document.querySelector('p');
var btn = document.getElementById('btn');
var affichage= document.querySelector('h3')



btn.addEventListener('click', ()=>{
    affichage.style.background = "black"
    let imc = (Number(  poid.value)/ Math.pow( Number(  taille.value),2)).toFixed(1)

    affichage.textContent = "IMC = "+ imc + "  kg/m²"

    
    if (imc<18.5)
        { 
        p.classList.add('vert');
        p.style.background='red';
        p.textContent = "Attention! votre imc est de "+ imc + " kg/m²  , il est en dessous de la moyenne. vous etes trop maigre"
        
    }
    
    else if(imc>=18.5 &&imc<24.9)   {
         p.classList.add('vert');
         p.style.background='green';
         p.textContent = "Bravo! votre imc est de "+ imc + " kg/m²  , il est dans la fourchette moyenne"
         
        }
        else{ 
            p.classList.add('vert');
            p.style.background='red';
         p.textContent = "Attention! votre imc est de "+ imc + " kg/m²  , il est au dessus de la moyenne. vous etes obèse"
         

     }

     setTimeout(() => {
         poid.value="";
         taille.value=""
         poid.focus();
     }, 5000);

})


const boule = ()=>{
    var balle = document.createElement('span');

    var x = Math.random()*5+3 +"px";
balle.style.width=x;
balle.style.height=x;
balle.classList.add("balle");
document.querySelector('.app').appendChild(balle);
balle.style.left = Math.random()*380 +"px"

setTimeout(() => {
  balle.remove()  
}, 9000);

}

function loop(){
    
    setTimeout(() => {
boule()
loop()
    }, 100);
}
loop()