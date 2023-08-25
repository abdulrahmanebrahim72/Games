import { Ui } from "./ui.js";

export class Details{
    constructor(){
        document.querySelector('#btnClose').addEventListener('click' , ()=>{
            document.querySelector('#sDetails').classList.add("d-none");
            document.querySelector('#home').classList.remove("d-none");
        });

        this.ui = new Ui();
        this.loadingPage = document.querySelector('.loadingPage');
    }


    async getDetails(gameId){

        this.loadingPage.classList.remove('d-none');

        const gameDetailsFromAPI = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}&rapidapi-key=8e13cdff62msh043b21a79ca61c1p16352ejsn9b10a26980ff`);
        const response = await gameDetailsFromAPI.json();

        this.loadingPage.classList.add('d-none');


        this.ui.displayGameDetails(response);
    }
}