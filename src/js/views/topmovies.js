
import imgUrl from './popular';


export default function renderTopMovies(data){

    for(let i = 1; i <= 5; i++){
        document.querySelector(`.slider-container-2__grid .slider-grid__item${i}`).setAttribute('data-movieid',`${data.results[i].id}`);
        document.querySelector(`.slider-container-2__grid .slider-grid__item${i}`).innerHTML = `
        <img src="${imgUrl}${data.results[i].poster_path}" alt="">
        <h3>${data.results[i].title}</h3>
        `;
    }

}