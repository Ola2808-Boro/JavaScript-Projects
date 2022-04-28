const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const form = document.querySelector('form');
const input = document.querySelector('input');
const main = document.querySelector('main');

async function getMovies(url){

    const response = await fetch(url);
    const responseData = await response.json();

    console.log(responseData);


    showMovies(responseData);
}
function showMovies(responseData){

    main.innerHTML='';

    responseData.results.forEach((item)=>{
        
        const div = document.createElement('div');
        div.classList.add('movie');
        div.innerHTML=`
        <div class="img">
            <img src="${IMGPATH+item.poster_path}" alt="${item.title}">
        </div>
        <div class="movie-info">
            <h3>${item.title}</h3>
            <span class="${getClassByRate(item.vote_average)}">${item.vote_average}</span>
        </div>
        <div class="overview">
            <h2>${item.title}</h2>
            ${item.overview};
            <h3>Release date: <span>${item.release_date}</span></h3>
            
        </div>
        `;
        main.appendChild(div);

    })
}
form.addEventListener('submit',(event)=>{

    event.preventDefault();
    const text = input.value;
    if(text){
        getMovies(SEARCHAPI+ text);
        input.value ='';
    }

    
    
})

function getClassByRate(vote_average){

    if(vote_average>=8){

        return 'green';
    }
    else if(vote_average>=5){
        return 'orange';
    }
    else{
        return 'red';
    }
}

getMovies(APIURL);