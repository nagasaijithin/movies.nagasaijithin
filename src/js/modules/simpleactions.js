import genermovies from './genermovies';
import imgUrl from '../views/popular'
import {form} from "./allmovies";





const bar = document.querySelector(".bars");
const aninav = document.querySelector(".handale-nav");
export const handelbar = document.querySelector(".nav .nav__handel-bar");


let i = 0;
const slider2 = document.querySelectorAll(".slider-c-grid__items");
try{
    setInterval(()=>{
        const card0 = slider2[0];
        const card1 = slider2[1];
        const card2 = slider2[2];
        const card3 = slider2[3];
        const card4 = slider2[4];
        
            if(i === 0){
            card0.classList.add("slider-grid__item0");
            card0.classList.remove("slider-grid__item1");
            
            card1.classList.add("slider-grid__item1");
            card1.classList.remove("slider-grid__item2"); 
            
            card2.classList.add("slider-grid__item2");
            card2.classList.remove("slider-grid__item3");
            
            card3.classList.add("slider-grid__item3");
            card3.classList.remove("slider-grid__item4");
            
            
            card4.classList.add("slider-grid__item4");
            card4.classList.remove("slider-grid__item5");
            
            card0.classList.add("slider-grid__item5");
            card0.addEventListener("transitionend", function(){
        
                this.classList.remove("slider-grid__item0");
            })
        }
        
        if(i === 1){
        
            card1.classList.add("slider-grid__item0");
            card1.classList.remove("slider-grid__item1");
            
            card2.classList.add("slider-grid__item1");
            card2.classList.remove("slider-grid__item2"); 
            
            card3.classList.add("slider-grid__item2");
            card3.classList.remove("slider-grid__item3");
            
            card4.classList.add("slider-grid__item3");
            card4.classList.remove("slider-grid__item4");
            
            
            card0.classList.add("slider-grid__item4");
            card0.classList.remove("slider-grid__item5");
            
            card1.classList.add("slider-grid__item5");
            card1.addEventListener("transitionend", function(){
        
                this.classList.remove("slider-grid__item0");
            })
        
            
        }
        
        if(i === 2){
        
            card2.classList.add("slider-grid__item0");
            card2.classList.remove("slider-grid__item1");
            
            card3.classList.add("slider-grid__item1");
            card3.classList.remove("slider-grid__item2"); 
            
            card4.classList.add("slider-grid__item2");
            card4.classList.remove("slider-grid__item3");
            
            card0.classList.add("slider-grid__item3");
            card0.classList.remove("slider-grid__item4");
            
            
            card1.classList.add("slider-grid__item4");
            card1.classList.remove("slider-grid__item5");
            
            card2.classList.add("slider-grid__item5");
            card2.addEventListener("transitionend", function(){
        
                this.classList.remove("slider-grid__item0");
            })
        
          
        }
        
        if(i === 3){
            card3.classList.add("slider-grid__item0");
            card3.classList.remove("slider-grid__item1");
            
            card4.classList.add("slider-grid__item1");
            card4.classList.remove("slider-grid__item2"); 
            
            card0.classList.add("slider-grid__item2");
            card0.classList.remove("slider-grid__item3");
            
            card1.classList.add("slider-grid__item3");
            card1.classList.remove("slider-grid__item4");
            
            
            card2.classList.add("slider-grid__item4");
            card2.classList.remove("slider-grid__item5");
            
            card3.classList.add("slider-grid__item5");
            card3.addEventListener("transitionend", function(){
        
                this.classList.remove("slider-grid__item0");
            })
        
        }
        
        if(i === 4){
            card4.classList.add("slider-grid__item0");
            card4.classList.remove("slider-grid__item1");
            
            card0.classList.add("slider-grid__item1");
            card0.classList.remove("slider-grid__item2"); 
            
            card1.classList.add("slider-grid__item2");
            card1.classList.remove("slider-grid__item3");
        
            card2.classList.add("slider-grid__item3");
            card2.classList.remove("slider-grid__item4");
            
            
            card3.classList.add("slider-grid__item4");
            card3.classList.remove("slider-grid__item5");
            
            card4.classList.add("slider-grid__item5");
            card4.addEventListener("transitionend", function(){
        
                this.classList.remove("slider-grid__item0");
            })
           
        
            
        
        
            i = "over";
        }
        
        
        i === "over" ? i = 0 :i++ ;
        
        },3000)
        
}catch{}
const slider1 = document.querySelectorAll(".slider-grid .slider-grid__items")
let s = 0; 
let cards0 = slider1[0];
let cards1 = slider1[1];
let cards2 = slider1[2];
let cards3 = slider1[3];
let cards4 = slider1[4];

try{
    setInterval(function(){

        if(s === 0){
            cards0.classList.add("slider-grid__item3");
            cards0.classList.remove("slider-grid__item1");
            
            cards1.classList.remove("slider-grid__item2");
            cards1.classList.add("slider-grid__item1");
            
            cards2.classList.remove("slider-grid__item3");
            cards2.classList.add("slider-grid__item5");
            
            cards4.classList.remove("slider-grid__item5");
            cards4.classList.add("slider-grid__item4");

            cards3.classList.add("slider-grid__item2")
            cards3.classList.remove("slider-grid__item4")
           
        }

        if(s === 1){
            cards0.classList.add("slider-grid__item5");
            cards0.classList.remove("slider-grid__item3");
            
            cards1.classList.remove("slider-grid__item1");
            cards1.classList.add("slider-grid__item3");
            
            cards2.classList.remove("slider-grid__item5");
            cards2.classList.add("slider-grid__item4");
            
            cards4.classList.remove("slider-grid__item4");
            cards4.classList.add("slider-grid__item2");

            cards3.classList.add("slider-grid__item1")
            cards3.classList.remove("slider-grid__item2")
        }
        if(s === 2){
            cards0.classList.add("slider-grid__item4");
            cards0.classList.remove("slider-grid__item5");
            
            cards1.classList.remove("slider-grid__item3");
            cards1.classList.add("slider-grid__item5");
            
            cards2.classList.remove("slider-grid__item4");
            cards2.classList.add("slider-grid__item2");
            
            cards4.classList.remove("slider-grid__item2");
            cards4.classList.add("slider-grid__item1");

            cards3.classList.add("slider-grid__item3")
            cards3.classList.remove("slider-grid__item1")
        }
        if(s === 3){
            cards0.classList.add("slider-grid__item2");
            cards0.classList.remove("slider-grid__item4");
            
            cards1.classList.remove("slider-grid__item5");
            cards1.classList.add("slider-grid__item4");
            
            cards2.classList.remove("slider-grid__item2");
            cards2.classList.add("slider-grid__item1");
            
            cards4.classList.remove("slider-grid__item1");
            cards4.classList.add("slider-grid__item3");

            cards3.classList.add("slider-grid__item5")
            cards3.classList.remove("slider-grid__item3")
        }

        if(s === 4){
            cards0.classList.add("slider-grid__item1");
            cards0.classList.remove("slider-grid__item2");
            
            cards1.classList.remove("slider-grid__item4");
            cards1.classList.add("slider-grid__item2");
            
            cards2.classList.remove("slider-grid__item1");
            cards2.classList.add("slider-grid__item3");
            
            cards4.classList.remove("slider-grid__item3");
            cards4.classList.add("slider-grid__item5");

            cards3.classList.add("slider-grid__item4")
            cards3.classList.remove("slider-grid__item5")
        }

        s === 4? s = 0:s++;
    },4000)
}catch{

}

export function navhoverImage(e){
    try{
        if(e.target.classList.contains("nav-i")){
            let dataset = parseInt(e.target.dataset.id)
            genermovies(dataset).then(data => {
                try{
                    if(data.results[1].backdrop_path == null){
                        aninav.style.backgroundColor = `white`; 
                    }else{
                        aninav.style.backgroundImage = `linear-gradient(to right,rgba(255,255,255,0.8),rgba(255,255,255,0.8)) ,url('${imgUrl}${data.results[2].backdrop_path}')`; 
                    }
                }catch{

                }
                
            
            });
        }
    }catch{
        
    }
    
}


export function navtoggle(e){
    if(bar.classList.contains("barsActive")){
        removebar()
    }else{
        bar.classList.add("barsActive");
        bar.classList.remove("bars");
        aninav.style.right ="0px";
    }

    e.preventDefault();
}

export function removebar(){
        bar.classList.remove("barsActive");
        bar.classList.add("bars");
        aninav.style.right ="2000rem";
        form.reset();
}