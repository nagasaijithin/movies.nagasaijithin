//style sheet
import './scss/main.scss';


// popular movies render
import popularMovies from './js/modules/popular';
import {renderPopular, renderPopularError} from './js/views/popular';

// toprated movies 
import topMovies from './js/modules/topmovies';
import renderTopMovies from './js/views/topmovies';

//upcoming 
import upComingMovies from  './js/modules/upcoming';
import renderUpcoming from './js/views/upcoming';

// gener movies 
import genermovies from './js/modules/genermovies';
import renderactionMovies from './js/views/genermovies'


//nav bar 
import handelbarnav from './js/modules/handelbar';
import rendernav from './js/views/handelbar'
// simple actions form all pages actions
import {handelbar, navhoverImage, navtoggle} from './js/modules/simpleactions';

//all type of movies perpose
import {alltypes,form,input} from "./js/modules/allmovies";
import alltypemovies from "./js/views/allmovies";

//search
import search from './js/modules/search';


//single movies
import singleMovie from './js/modules/singlemovies';
import recommendedMovies from "./js/modules/recommended";
import {moviecards} from './js/views/singlemovie';
import {singleMovieRender,recommendeddata} from './js/views/singlemovie';


const mainloader = document.querySelector(".main-loader");

document.querySelector(".popular-movies .button").addEventListener("click", function(e){
     mainloader.style.display = "block";
     popularMovies(1).then(data => alltypemovies(data,"Popular",0,false,true,true));
});

document.querySelector(".popular-movies-2 .button").addEventListener("click",function(e){
     mainloader.style.display = "block";
     genermovies(28,1).then(data => alltypemovies(data,"Action",0,false,true,false));
})
handelbar.addEventListener("click",navtoggle);

moviecards.forEach((c) => {
     c.addEventListener("click",() => {
          mainloader.style.display = "block";
          singleMovie(c.dataset.movieid).then(data => singleMovieRender(data,c.dataset.movieid));
          recommendedMovies(c.dataset.movieid).then(data => recommendeddata(data));
          
     })
})
window.addEventListener("mousemove",navhoverImage);


document.querySelectorAll(".movieclick").forEach(function(mc){
     
     mc.addEventListener('click', function(){
          window.scrollTo(0,0);
     });
})


alltypes.forEach(function(each)  {
     each.addEventListener('click', e => {
          mainloader.style.display = "block";
          let dataid = parseInt(each.dataset.id);
          genermovies(dataid,1).then(data => alltypemovies(data,e.target.textContent,dataid,false));
     })
});

form.addEventListener('submit', function(e){
     if(input.value === ""){

     }else{
          mainloader.style.display = "block";
          search(input.value,1).then(data => alltypemovies(data,input.value,28,true));
     }
     

     e.preventDefault();
});

               
          popularMovies(1)
          .then(data => {
          renderPopular(data);
          })
          .catch(error => renderPopularError(error));

          topMovies()
          .then(data => renderTopMovies(data))
          .catch(error => console.log(error));

          upComingMovies()
          .then(data => renderUpcoming(data))
          .catch(error => console.log(error));

          genermovies(28,1)
          .then(data => renderactionMovies(data))
          .catch(error => console.log(error));   

          handelbarnav()
          .then(data => rendernav(data))
          .catch(error => console.log(error));

     


