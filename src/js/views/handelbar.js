function rendernav(data){
    for(let i = 0;i < data.genres.length; i++){
        document.querySelector(`.nav-items .item${i + 1}`).innerHTML = `${data.genres[i].name}`;
        document.querySelector(`.nav-items .item${i + 1}`).setAttribute("data-id",`${data.genres[i].id}`)
    }

}
export default rendernav;