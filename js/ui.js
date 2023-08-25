export class Ui{
    constructor(){}

    displayGames(games){
        let gamesFromApi = ``;

        for (let i = 0; i < games.length; i++) {
            gamesFromApi += `
            <div class="col-lg-3 col-md-4">
                <div game-details="${games[i].id}" class="innerCol h-100">
                    <figure class="text-white p-3 pb-0 mb-0 h-100">
                        <img src="${games[i].thumbnail}" class="w-100 mb-4" alt="game photo">
                        <figcaption class="d-flex justify-content-between">
                            <h3 class="h6 small ">${games[i].title}</h3>
                            <span class="bg-primary px-2 py-1 rounded-2 small">Free</span>
                        </figcaption>
                        <p class="text-secondary text-center small text-break mt-1">${games[i].short_description.split(" ",8)}</p>
                    </figure>
                    <div class="bContent text-white d-flex justify-content-between px-3 py-2 small">
                        <span class="px-2 small rounded-2">${games[i].genre}</span>
                        <span class="px-2 small rounded-2">${games[i].platform}</span>
                    </div>
                </div>
            </div>
            `;
        }

        document.querySelector('.Games').innerHTML = gamesFromApi;

    }


    displayGameDetails(singleGame){
        const gameBox = `
        <div class="col-md-4">
            <img src="${singleGame.thumbnail}" class="w-100" alt="game photo">
          </div>
          <div class="col-md-8">
            <h3 class="mb-3">Title: ${singleGame.title}</h3>
            <h6 class="mb-3">Category: <span class="bg-info text-black px-1 small rounded-2 ">${singleGame.genre}</span></h6>
            <h6 class="mb-3">Platform: <span class="bg-info text-black px-1 small rounded-2 ">${singleGame.platform}</span></h6>
            <h6 class="mb-3">Status: <span class="bg-info text-black px-1 small rounded-2 ">${singleGame.status}</span></h6>
            <p class="small">${singleGame.description}</p>
            <a id="gameUrl" href="${singleGame.game_url}" target="_blank" class="btn btn-outline-warning text-white">Show Game</a>
          </div>
        `;

        document.querySelector('#detailsRow').innerHTML = gameBox;
    }
}


