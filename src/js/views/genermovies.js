import imgUrl from './popular';


function renderactionMovies(data){
 for(let i = 1; i <= 10; i++){
    document.querySelector(`.popular-movies-2__grid .pm2-grid-item${i}`).classList.add('movieid');
    document.querySelector(`.popular-movies-2__grid .pm2-grid-item${i}`).setAttribute('data-movieid',`${data.results[i].id}`);
     document.querySelector(`.popular-movies-2__grid .pm2-grid-item${i}`).innerHTML =  `
     <img src="${imgUrl}${data.results[i].poster_path}" alt="">
     <h3>${data.results[i].title}</h3>
     ` ;

 }
}

export default renderactionMovies;