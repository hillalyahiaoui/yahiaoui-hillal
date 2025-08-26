
const app = document.querySelector('.app')
const nav = document.querySelector('nav')
// affichage en plex de photo galerie
const bloc = document.querySelector('.bloc');
const tab = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.JPG","10.jpg","11.jpg","12.jpg","13.JPJ","14.JPG","15.JPG","16.JPG","17.jpg","18.jpg","19.jpg","20.jpg"]
function blo(){
    for (let i = 0; i < tab.length; i++) {
    
        const image = document.createElement('img');
        image.oncontextmenu='false'
        image.src = tab[i];
        image.classList.add('new');
        image.addEventListener("click", ()=>{
            window.open(tab[i], '_blanck')
        })
        bloc.appendChild(image)  
    }
}
blo()
//-----------------------------------*/

// mode nuit------------------------------
const nuit = document.querySelector('#nuit')
// nuit.addEventListener('input', (e)=>{
    //     document.body.classList.toggle('nuit')
    //     document.querySelectorAll('th').style.background="black"
    //     document.querySelectorAll('tr').style.background="black"
    // })
    // mode nuit----------------------------------------------
    
    //afficher l'heure---------------------------------------
    
/*const heure = document.querySelector('.heure')
const afficherheure =  async ()=>{  
 await fetch("http://worldtimeapi.org/api/timezone/Africa/Algiers").then((re)=>re.json()).then((data)=>{
  let time= data.datetime.split("T")[1].split(".")[0];
  heure.innerHTML="<b>"+time.split(':').slice(0,2).join(":")+"</b>"
  
    })
}*/
// afficherheure()
// setInterval( afficherheure,1000)


  const jours = ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."];
  const d = new Date();
  const jour = jours[d.getDay()];
  const heures = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  heure.innerHTML= `${jour} ${heures}:${minutes}`;


// afficher l'heure---------------------------------

// ----------date--------------------------------
const jour = document.querySelector(".jour")
const date = new Date().toLocaleDateString("FR-fr", {
    year:"2-digit",
    month:"short",
    day:"numeric",
    weekday:"short"
})
const date2 = new Date().toLocaleDateString("FR-fr", {
    
    month:"short",
    day:"numeric",
    weekday:"long"
})
jour.innerHTML=date
// ----------date--------------------------------

// generer coeur--------------------------------------

const coeur = document.querySelector("#coeur")
const cree= ()=>{

const creat = document.createElement("i")
creat.className="fa-solid fa-heart"
creat.classList.add('nouvellle')
let x = Math.random()*10+8+"px"
creat.style.fontSize=x;
creat.style.left = Math.random()*(window.innerWidth)+"px"
document.body.appendChild(creat)

setTimeout(()=>{
    creat.remove()
},8000)

}
coeur.addEventListener("click",()=>{
    const loop = setInterval(() => {
      cree()
      
      setTimeout(() => {
        clearInterval(loop)  
      }, 6000);
    }, 40);
})


// generer coeur--------------------------------------

// like-------------------------------------------

const likecoeur = document.getElementById("likecoeur")
const likepouce = document.getElementById("likepouce")
const compteur1 = document.querySelector(".compteur1")
const compteur2 = document.querySelector(".compteur2")
let c1 = 7641;
let c2= 8220;


likecoeur.addEventListener('click',()=>{
c1=7641+1;
compteur1.textContent=c1;
})
likepouce.addEventListener('click',()=>{
c2=8220+1;
compteur2.textContent=c2;
})

// like-------------------------------------------

//survoler la photo------------------------------
const photohillal = document.querySelector('.photohillal')

    photohillal.addEventListener("mousemove", (e)=>{
        
        const texte = document.getElementById('texte')
        texte.style.left = e.clientX+"px"
        texte.style.top = e.clientY+"px"
        texte.classList.add('texte')
texte.textContent="photo de hillal"
texte.style.display="block"
photohillal.addEventListener("mouseout", ()=>{
texte.style.display='none'
})
    
    })
    
    //survoler la photo------------------------------
    //survoler le téléphone------------------------------
const appeler = document.getElementById("appeler")
const t = document.querySelector('.t')

t.addEventListener("mousemove", (e)=>{
    
    
    appeler.style.left = e.clientX+"px"
    appeler.style.top = e.clientY+"px"
    
appeler.textContent="Appelez-moi sur 00213 540919026"
appeler.style.display="block"
appeler.style.marginTop="30px"
nav.style.border="none"
t.addEventListener("mouseout", ()=>{
// nav.style.borderBottom='2px solid blue'
appeler.style.display='none'
})

})
const mail = document.getElementById("mail")
const m = document.querySelector('.m')

m.addEventListener("mousemove", (e)=>{
    mail.style.left = e.clientX+"px"
    mail.style.top = e.clientY+"px"
mail.textContent="Envoyez-moi un mail"
mail.style.display="block"
mail.style.marginTop="30px"
nav.style.border="none"
m.addEventListener('click', ()=>{
    mail.textContent=""
    mail.style.background="none"
    })
m.addEventListener("mouseout", ()=>{
mail.style.display='none'
// nav.style.borderBottom='2px solid blue'
})
})
const face = document.getElementById("face")
const f = document.querySelector('.f')
f.addEventListener("mousemove", (e)=>{ 
face.style.left = e.clientX+"px"
    face.style.top = e.clientY+"px"
face.textContent="Visitez mon compte Facebook"
face.style.display="block"
face.style.marginTop="30px"
nav.style.border="none"
f.addEventListener('click', ()=>{
    face.textContent=""
    face.style.background="none"
    })
f.addEventListener("mouseout", ()=>{
face.style.display='none'
// nav.style.borderBottom='2px solid blue'
})
})

const wat = document.getElementById("wat")
const w = document.querySelector('.w')
w.addEventListener("mousemove", (e)=>{ 
wat.style.left = e.clientX+"px"
    wat.style.top = e.clientY+"px"
wat.textContent="Contactez-nous via Whatsapp"
wat.style.display="block"
wat.style.marginTop="30px"
nav.style.border="none"
w.addEventListener('click', ()=>{
    wat.textContent=""
    wat.style.background="none"
    })
w.addEventListener("mouseout", ()=>{
wat.style.display='none'
})
})
const vib = document.getElementById("vib")
const v = document.querySelector('.v')
v.addEventListener("mousemove", (e)=>{ 
vib.style.left = e.clientX+"px"
vib.style.top = e.clientY+"px"
vib.textContent="Contactez-nous via Viber"
vib.style.display="block"
vib.style.marginTop="30px"
nav.style.border="none"
v.addEventListener('click', ()=>{
    vib.textContent=""
    vib.style.background="none"
    })
v.addEventListener("mouseout", ()=>{ 
vib.style.display='none'
// nav.style.borderBottom='2px solid blue'
})
})
const lin = document.getElementById("lin")
const l = document.querySelector('.l')
l.addEventListener("mousemove", (e)=>{ 
lin.style.left = e.clientX+"px"
    lin.style.top = e.clientY+"px"
lin.textContent="Visitez mon compte Linkdin"
lin.style.display="block"
lin.style.marginTop="30px"
nav.style.border="none"
l.addEventListener('click', ()=>{
    lin.textContent=""
    lin.style.background="none"
    })
l.addEventListener("mouseout", ()=>{ 
lin.style.display='none'
// nav.style.borderBottom='2px solid blue'
})
})
const cvv = document.getElementById("cvv")
const p = document.querySelector('.p')
p.addEventListener("mousemove", (e)=>{ 
cvv.style.left = e.clientX+"px"
cvv.style.top = e.clientY+"px"
cvv.textContent="Télécharger mon CV"
cvv.style.display="block"
cvv.style.marginTop="30px"
nav.style.border="none"
p.addEventListener('click', ()=>{
cvv.textContent=""
cvv.style.background="none"
})
p.addEventListener("mouseout", ()=>{ 
cvv.style.display='none'
// nav.style.borderBottom='2px solid blue'
})
})
//survoler le téléphone------------------------------
// télécharger un fichier pdf------------------------
document.getElementById('cv').classList.add('lawer')
const cvpdf= document.querySelector(".cvpdf")
cvpdf.addEventListener('click', ()=>{
const pdf = document.createElement('a')
pdf.href="p.pdf"
pdf.textContent="Télécharger le cv"
pdf.target="_blank"
pdf.classList.add("newcv")
cvpdf.appendChild(pdf)
setTimeout(()=>{
    pdf.textContent=""

},40000)
})

// télécharger un fichier pdf------------------------


//tet--------------------------
const th = document.querySelectorAll('th')
const td = document.querySelectorAll('td')
const recherche = document.querySelector('#recherche')
const btn = document.getElementById('reche')
const meteo = document.getElementById('meteo')

recherche.addEventListener('input', (e)=>{
    let mot = recherche.value.toLowerCase()
th.forEach((ele)=>{
    let thcontent = ele.textContent.toLowerCase();
    if(mot.length>=3 && thcontent.substring(0,3)===mot.substring(0,3)){
    
        recherche.value=ele.textContent
        console.log(ele.textContent);
        console.log(ele.nextElementSibling.textContent);
        btn.addEventListener('click', ()=>{
            recherche.value= ele.nextElementSibling.textContent
            console.log(ele.nextElementSibling.textContent);
            setTimeout(()=>{
            recherche.value=""
            },8000)
        })
    }


})
})


// ------------menu------------------
const blocmeteo = document.querySelector(".meteo")
const menu = document.getElementById('menu')
const li = document.querySelectorAll('li')
const ul = document.querySelector('ul')
const r1 = document.getElementById('r1')
const r2 = document.getElementById('r2')
menu.addEventListener('click',()=>{
    document.querySelector(".recherchee").style.display="none"
r1.addEventListener('click', ()=>{
    blocmeteo.classList.remove("add") 
    nav.classList.remove('add') 
    app.classList.remove('add') 
    document.body.classList.remove('add')
document.querySelector('footer').classList.add('add') 
document.querySelectorAll('tr').forEach((ele)=>{
   ele.classList.remove('add') 
})
document.querySelectorAll('th').forEach((ele)=>{
    ele.classList.remove('add') 
})  
    ul.style.display="none"  
})
r2.addEventListener('click', ()=>{
    document.querySelector(".recherchee").style.display="none"   
    ul.style.display="none"  
})

ul.style.display="block"  
ul.addEventListener('click', ()=>{
    ul.style.display="none"  

})
li.forEach((item)=>{

    item.addEventListener('mouseover', ()=>{
        item.classList.add('zzz')
        item.addEventListener('mouseout', ()=>{
        item.classList.remove('zzz')

    })
})
        item.addEventListener('click', ()=>{
            switch (item.id) {
               case "black":
    blocmeteo.classList.add("add")            
    nav.classList.add('add') 
    app.classList.add('add') 
    document.body.classList.add('add') 
document.querySelector('footer').classList.add('add') 
document.querySelectorAll('tr').forEach((ele)=>{
   ele.classList.add('add') 
})
document.querySelectorAll('th').forEach((ele)=>{
    ele.classList.add('add') 
})
break;
case "serche":
    document.querySelector(".recherchee").style.display="block"
    break;
    case "meteo":
    blocmeteo.style.visibility="visible"
    blocmeteo.classList.add("yyy")
    break;
    case "imc":
        document.querySelector('.contain').style.display="block"
        window.open('imc.html', "_blanck")
        break
    case "pub":
        document.querySelector('.pub').style.display="block"
        window.open('pub.html', "_blanck")
        break
    case "chrono":
        document.querySelector('.chrono').style.display="block"
        window.open('crono.html', "_blanck")
        break
    default:
                break
                
            }   
            ul.style.display="none"  
            blocmeteo.addEventListener('click', ()=>{
                blocmeteo.style.visibility='hidden'
                blocmeteo.classList.remove("yyy")
            })
            
        })
   })
})


//  api metéo------------------------
const meteofonction= ()=>{
    
fetch('https://api.openweathermap.org/data/2.5/weather?q=TICHY&appid=b60535e04e80bf8774ca44ebc66039d9&units=metric&lang=fr')
.then((data)=>data.json())
.then((ele)=>{
    console.log(ele)
    blocmeteo.innerHTML=`
    <p> <b>Ville de  ${ele.name}</b></p>
     <p> <b>Aujourd'hui</b>   ${date2}</p>
    <p> <i class="fas fa-sun" style="color: orange; font-size: 25px;"></i> ${ele.main.temp} °C</p>
    <p>  ${ele.weather[0].description}</p>
    <p> <b>Humidité </b>${ele.main.humidity} %</p>
    <p> <b> Vent</b> ${ele.wind.speed} km/h</p>
    `
    
    
})

document.querySelector(".fa-sun").addEventListener('click',()=>{

    blocmeteo.style.visibility="visible"
    blocmeteo.classList.add('yyy')
        document.querySelector(".fa-sun").addEventListener('dblclick',()=>{
        
            blocmeteo.classList.remove('yyy')
            blocmeteo.style.visibility="hidden"
        })
        blocmeteo.addEventListener("click", ()=>{
    blocmeteo.classList.remove('yyy')
    blocmeteo.style.visibility="hidden"
    
    
})
})
}
meteofonction()
setInterval(meteofonction,3600000);


const form = document.querySelector("form");

    // Ajouter un écouteur sur le submit
    form.addEventListener("submit", function(e) {
     // Empêche le rechargement automatique de la page

      setTimeout(() => {
      document.getElementById("nom").value = "";
      document.getElementById("prenom").value = "";
      document.getElementById("area").value = "";
      },2000)
    })




