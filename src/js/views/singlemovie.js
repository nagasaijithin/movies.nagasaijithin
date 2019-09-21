import imgUrl from './popular';
import recommendedMovies from '../modules/recommended';
import singleMovie from '../modules/singlemovies';
import movieVideo from '../modules/videos';
import persondata from '../modules/persondata';


const mainloader = document.querySelector(".main-loader");
 let moviecards = document.querySelectorAll(".movieclick");
    const  imdblink = 'https://www.imdb.com/title/';
    const imdbpersonlink = 'https://www.imdb.com/name/';
    let imgsliderdeg = 0;
    const root = document.querySelector(".root");
    let howManypersons = 0;
    
 function singleMovieRender(data,movie_id){
    window.scrollTo(0,0);
    imgsliderdeg = 0;
    mainloader.style.display = "none";
    
     root.innerHTML = " "
    let cast = "";
    data.credits.cast.forEach(function(person,i){
        let image = "";
        if(person.profile_path == null){
            if(person.gender === 2){
                image = "../actor.svg";
            }else{
                image = "../girl.svg";
            }
        }else{
            image = `${imgUrl}${person.profile_path}`;
        }
        
        cast += `<div class="person perons${i+1}" data-person_id="${person.id}">
                    <img src="${image}" alt="">
                </div>`;
                howManypersons++;
    });
 
    let markup = `
    <div class="single-movie">
    <div class="main-heading">

        <div class="sm-img">
            <img src="${data.poster_path === null?"../404.png":`${imgUrl}${data.poster_path}`}" alt="">
        </div>

        <div class="sm-bio">
            <div class="bio-main">
                <div class="titles b-t">
                    <h2>${data.title}</h2>
                    <h3>${data.tagline}</h3>
                </div>
                <div class="rating">
                    <h3><span>${data.vote_average}</span> / 10 <span><i class="fas fa-star"></i></span></h3>
                </div>
                <div class="overviwe">
                    <h3>Overview</h3>
                    <p>${data.overview}</p>

                </div>
                <div class="cats">
                        <div class="titles">
                            <h2>Cats</h2>
                        </div>
                    <div class="all-cats">
                            <span class="slidem"><i class="fas fa-angle-double-left"></i></span>
                           
                            <div class="ani-wapper">
                                    <div class="persons">
                                            ${cast}
                                        </div>
                            </div>
                            
                            <span class="slidep"><i class="fas fa-angle-double-right"></i></span>
                        </div>
                </div>
            
                <div class="button cats-btn">
                    <a href="${data.homepage}" class="btn" target="_black">Websit</a>
                    <a href="${imdblink}${data.imdb_id}" class="btn" target="_black">IMDB</a>
                    <p href="#" data-video_id="${data.id}" class="btn video-btn">Trailer</p>
                </div>
            </div>

        </div>
    </div>
    
    <div class="person-wapper"></div>



    <div class="video-wapper">
            <div class="nav__handel-bar">
                <div class="barsActive"></div>
            </div>
            <div class="video-continer"></div>
    </div>
    <div class="sm-recommended">
            <div class="titles">
                    <h2>Recommended</h2>
                    <h3>Movies</h3>
            </div>
            <div class="sm-grid">
            
            </div>    
    </div>
</div>`;

root.innerHTML = markup;
try{
recommendedMovies(movie_id).then((data) =>{
    try{

    }catch{
        recommendeddata(data)

    }
});
} catch{

}   


root.querySelector(".persons").style.width = `${80 * howManypersons}px`
root.querySelectorAll('.person').forEach(function(person){
    person.addEventListener('click', function(e){
        mainloader.style.display = "block";
        let id = parseInt(this.dataset.person_id);
        persondata(id).then(data => personRender(data));


    });
});
   
            root.querySelector(".all-cats .slidem").addEventListener("click",function(){
                   
                    
                if(imgsliderdeg < 0 ){
                    root.querySelector(".ani-wapper .persons").style.transform = `translate3d(-${imgsliderdeg}px, 0, 0)`;
                    
                }else{
                    root.querySelector(".ani-wapper .persons").style.transform = `translate3d(-${imgsliderdeg -= 65}px, 0, 0)`;
                    
                }
              
               
            });
                    
            root.querySelector(".all-cats .slidep").addEventListener("click",function(){
                const wapperWidth = root.querySelector(".ani-wapper").clientWidth;
              
                if((80*howManypersons) - wapperWidth < imgsliderdeg) { 
                    let val ;
                    val = imgsliderdeg;
                    root.querySelector(".ani-wapper .persons").style.transform = `translate3d(-${val}px, 0, 0)`;
                   
                 }else{
                     let val;
                     val = imgsliderdeg += 65;
                    root.querySelector(".ani-wapper .persons").style.transform = `translate3d(-${val}px, 0, 0)`;
                   
                 }
                
            });

 }
let slide;
   slide = setInterval(slidePersons,4000);

   function slidePersons(){
       
       
       if(root.querySelector(".ani-wapper .persons")){
        const wapperWidth = root.querySelector(".ani-wapper").clientWidth;

                if((80*howManypersons) - wapperWidth < imgsliderdeg) { 
                    root.querySelector(".ani-wapper .persons").style.transform = `translate3d(-${imgsliderdeg}px, 0, 0)`;
                    imgsliderdeg = imgsliderdeg;
                }else{
                    root.querySelector(".ani-wapper .persons").style.transform = `translate3d(-${imgsliderdeg}px, 0, 0)`;
                    imgsliderdeg += 65;
                }
                


            }


        }
 


function recommendeddata(data){
    let recommend = '';
       
           for(let i = 0; i < data.results.length; i++){
               recommend += `
               <div class="sm-items item${i+1} movieclick" data-movieid="${data.results[i].id}">
                       <img src='${data.results[i].poster_path === null?"../404.png":`${imgUrl}${data.results[i].poster_path}`}' alt="">
                       <h3>${data.results[i].title}</h3>
               </div>
               `;
           }
       
    
        
       try{
        root.querySelector(".sm-grid").innerHTML = recommend;
       }catch{
        
       }
        

    root.querySelectorAll('.movieclick').forEach((c) => {
        c.addEventListener("click",() => {
           
        singleMovie(c.dataset.movieid).then(data => {
            howManypersons = 0;
            slide = setInterval(slidePersons,4000);
            mainloader.style.display = "block";

            window.scrollTo(0,0);
            imgsliderdeg = 0;
            singleMovieRender(data);

        });
        recommendedMovies(c.dataset.movieid).then( data => {
            try{
                recommendeddata(data)
            }catch{

            }
            
        }); 
    });
    });

    root.querySelector(".video-btn").addEventListener("click", function(e){
        mainloader.style.display = "block";
        movieVideo(this.dataset.video_id).then(data => video(data,true));
        
    });

    root.querySelector(".video-wapper .nav__handel-bar").addEventListener("click", function(e){
        video(data,false);
    });
}



function video(data,condition){
    mainloader.style.display = "none";
    let iframe;
    if(condition){
        iframe = ` <iframe width="560" height="315" src="https://www.youtube.com/embed/${data.results[0].key}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
    root.querySelector('.video-continer').innerHTML = iframe;
    
    if(condition){
        root.querySelector('.video-wapper').style.display = "inline-block";
    }else{
        root.querySelector('.video-wapper').style.display = "none";
    }
    // 
}



function personRender(data){
    mainloader.style.display = "none";
    let biodata = data.biography.substring(0,900);
    
    let image = "";
        if(data.profile_path == null){
            if(data.gender === 2){
                image = "../actor.svg";
            }else{
                image = "../girl.svg";
            }
        }else{
            image = `${imgUrl}${data.profile_path}`;
        }


    let markup =` 
    <div class="nav__handel-bar">
                <div class="barsActive"></div>
    </div>
    <div class="person-continer">
    
    <div class="sm-img">
            <img src="${image}" alt="">
    </div>
    
    <div class="sm-bio">
    <div class="bio-main">
        <div class="titles b-t">
            <h2>${data.name}</h2>
        </div>
        <div class="rating">
            <h2>birthday</h2>
            <h3>${data.birthday}</h3>
        </div>
        <div class="overviwe">
            <h3>Biography</h3>
            <p>${biodata}<a href="${imdbpersonlink}${data.imdb_id}" target="_blanck">See more</a></p>

        </div>
    </div>
    </div>
    </div>
    
    `;
 root.querySelector(".person-wapper").style.display = "block";
 root.querySelector(".person-wapper").innerHTML = markup;
    root.querySelector(".person-wapper .nav__handel-bar").addEventListener("click",function(){
        root.querySelector(".person-wapper").style.display = "none";
    });
}

export {singleMovieRender,recommendeddata,video}
export {moviecards};























 




