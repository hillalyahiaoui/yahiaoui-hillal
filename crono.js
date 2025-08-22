
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
        
        let newWindow = window.open("","_blank")
        for (let i = 0; i < tab.length; i++) {
            
        const li = document.createElement('h4')
        li.innerHTML= `
        <div class="new">${i+1}_ ${(tab[i]/60).toFixed(2)} min / ${tab[i]} s / ${(tab[i]/0.6).toFixed(2)} cmn / ${(tab[i]/0.36).toFixed(2)} dmh</div>
        ` 
        newWindow.document.body.appendChild(li)
    }
}) 

