import imgUrl from './popular';
import {removebar} from '../modules/simpleactions';
import genermovies from '../modules/genermovies';
import search from '../modules/search';
import singleMovie from '../modules/singlemovies';
import {singleMovieRender,recommendeddata} from './singlemovie'
import recommendedMovies from "../modules/recommended";
import popularMovies from '../modules/popular';

const mainloader = document.querySelector(".main-loader")

function alltypemovies(data,title,movieid,flag,pa,pm){
        window.scrollTo(0,0);
        mainloader.style.display = "none";
    
    const root = document.querySelector(".root");
    let buttons;  
    removebar();
    let loop = "";

    root.innerHTML = "";
    for(let i = 0; i < data.results.length; i++ ){
            loop += `
            <div class="items item${i+1} movieclick" data-movieid="${data.results[i].id}">
            <h3>${data.results[i].title}</h3>
            <img src="${data.results[i].poster_path == null?"../404.png":`${imgUrl}${data.results[i].poster_path}`}" alt="">
            </div>
            `;
            
    }
    
    if(data.page >= 2 && data.total_pages > 1){
        buttons = `<a href="#" class="c2-button1" data-page="${data.page}">Previous page</a>
                   <a href="#" class="c2-button2" data-page="${data.page}">Next page</a>`;                        
    }else{
        buttons = `<a href="#" class="c2-button2" data-page="${data.page}">Next page</a>`;
        
    }
 
    let markup = ` <div class="continer-2">
    <div class="c2-render">
            <div class="titles">
                <h2>${title}</h2>
                <h3>Movies</h3>
            </div>
            <div class="c2-moviesrender">
          ${loop}
            </div>
            
        </div>
                <div class="c2-buttons">
                    ${buttons}
                </div>
</div>
</div>`;

root.innerHTML = markup; 

    let button1 = document.querySelector('.c2-button1');
    let button2 = document.querySelector('.c2-button2');

if(data.page >= 2){
    button1.addEventListener("click",function(e){
        mainloader.style.display = "block";
        let curntpage = parseInt(this.dataset.page);
        if(flag){
          search(title, curntpage-1).then(data => alltypemovies(data,title,movieid,flag,pa,pm))  
        }else{
            if(pa){
                pm ?   
                    popularMovies(curntpage-1).then(data => alltypemovies(data,"Popular",0,false,true,true)) 
                        : genermovies(28,curntpage-1).then(data => alltypemovies(data,"Action",0,false,true,pm));
            }else{
                genermovies(movieid, curntpage-1).then(data => alltypemovies(data,title,movieid,flag,pa,pm));
            }

            
        }

       
    });

    button2.addEventListener("click",function(e){
        mainloader.style.display = "block";
        let curntpage = parseInt(this.dataset.page);
        if(flag){
          search(title, curntpage+1).then(data => alltypemovies(data,title,movieid,flag,pa,pm))      
        }else{
            if(pa){
                pm ? 
                    popularMovies(curntpage+1).then(data => alltypemovies(data,"Popular",0,false,true,true)) 
                        : genermovies(28,curntpage+1).then(data => alltypemovies(data,"Action",0,false,true,pm));
            }else{

                genermovies(movieid, curntpage + 1).then(data => alltypemovies(data,title,movieid,flag,pa,pm));
            }
        }

        
        });
}else{
    button2.addEventListener("click",function(e){
        mainloader.style.display = "block";
        let curntpage = parseInt(this.dataset.page);
        if(flag){
           search(title, curntpage+1).then(data => alltypemovies(data,title,movieid,flag,pa,pm))      
        }else{
            if(pa){
                pm ? 
                    popularMovies(curntpage+1).then(data => alltypemovies(data,"Popular",0,false,true,true)) 
                        : genermovies(28,curntpage+1).then(data => alltypemovies(data,"Action",0,false,true,pm));
            }else{

                genermovies(movieid, curntpage+1).then(data => alltypemovies(data,title,movieid,flag,pa,pm));
            }
        }

       
        });
}


root.querySelectorAll('.movieclick').forEach((c) => {
         c.addEventListener("click",() => {
            mainloader.style.display = "block";
            singleMovie(c.dataset.movieid).then(data => singleMovieRender(data));
            recommendedMovies(c.dataset.movieid).then(data => { 
                try{
                    recommendeddata(data)

                }catch{

                }
            });
           
        });
    });
}
export default alltypemovies;
