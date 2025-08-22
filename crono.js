
let s = document.getElementById('s')
let c = document.getElementById('c')
let d = document.getElementById('d')
let x =0
let tab = []


on.addEventListener("click", ()=>{
    on.classList.add('on')
    off.classList.remove('on')
    stoop.classList.remove('on')
    let interval = setInterval(() => {
        x++;
    
        s.value=(x/100).toFixed(2)+ " s"
        c.value=(x/60).toFixed(2)+ " cmn"
        d.value=(x/36).toFixed(2) + " dmh"
    },10);


    off.addEventListener("click", ()=>{
    off.classList.add('on')
    on.classList.remove('on')
    stoop.classList.remove('on')
        clearInterval(interval)
        x=0
        tab=[]
        s.value="00"+ " s"
        c.value="00"+ " cmn"
        d.value="00"+ " dmh"
    }) 
    stoop.addEventListener("click", ()=>{
        stoop.classList.add('on')
        on.classList.remove('on')
        clearInterval(interval)
        s.value=(x/100).toFixed(2)+ " s"
        c.value=(x/60).toFixed(2)+ " cmn"
        d.value=(x/36).toFixed(2) + " dmh"  
    }) 
}) 
    save.addEventListener('click', ()=>{
        tab.push(x/100)
        console.log(tab);
        
})

    show.addEventListener('click', ()=>{
        // let link= document.createElement('link')
        // link.rel="stylesheet"
        // link.href="crono.css"
        
        //     newWindow.document.head.appendChild(link)
        
        let w = window.open("","_blank")
        w.document.write(`
        <html>
        <head>
        <title>Affichage</title>
        <style>
        body{
            font-family: Arial, Helvetica, sans-serif;
        }
        li{
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
            color: white;
            background: blue;
            padding: 6px;
            margin: 5px 20px;
            list-style: none;
            border-radius: 5px;
            
        }
        li.show{
            opacity:1;
            transform: translateY(0)
        }
        h2{
            text-align: center;
            letter-spacing: 3px;
            background-color: teal;
            color: white;
            padding: 6px;
        }
        </style>
        </head>
        <body>
        <h2>Les mesures enregistrées</h2>
        <div id="zone"></div>
        </body>
        </html>
        `)
        w.document.close();
        w.onload=()=>{
            let zone = w.document.getElementById('zone');

        
        for (let i = 0; i < tab.length; i++) {
            
        let li = w.document.createElement('li')
        li.innerHTML= `
        <div class="new">${i+1}_  ${(tab[i]/60).toFixed(2)} min /  ${tab[i]} s  / ${(tab[i]/0.6).toFixed(2)} cmn  /  ${(tab[i]/0.36).toFixed(2)} dmh</div>
        ` 
       zone.appendChild(li)
       setTimeout(() => {
        li.classList.add('show')   
       }, i*300);
        // newWindow.document.body.appendChild(li)
    }
}
}) 
const p =document.querySelector('p')
document.querySelector('img').addEventListener("mousemove", ()=>{
 p.classList.add('pp')   
 p.innerHTML=`
<b>On</b>: c'est pour démarrer le chrono <br>
<b>save</b>: en appuyant dessus la mesure est enregistrée automatiquement en minute, seconde, cmn et dmh<br>
<b>stop</b>: pour arréter le chrono<br>
<b>OFF</b>:on réinitialise tout à zéro<br>
<b>show</b>: à la fin pour montrer les mesures prises
 `
})
document.querySelector('img').addEventListener('mouseout', ()=>{
    p.classList.remove('pp')
    p.innerHTML=""
})

