import { Details } from "./details.js";
import { Ui } from "./ui.js";

export class Home{

    constructor(){
        let links = document.querySelectorAll('a.nav-link');

        for (const navLink of links) {
            navLink.addEventListener('click' , ()=>{

                this.changeActiveLink(navLink);
                this.getGames(navLink.getAttribute("category"));
            })
        }

        this.ui = new Ui();
        this.details = new Details();

        this.loadingPage = document.querySelector('.loadingPage');
        this.sDetails = document.querySelector('#sDetails');
        this.home = document.querySelector('#home');

        this.getGames("MMORPG");
    }


    changeActiveLink(navLink){
        document.querySelector('nav a.nav-link.active').classList.remove("active");
        navLink.classList.add("active");
    }


    async getGames(term){

        this.loadingPage.classList.remove('d-none');

        const apiGames = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${term}&rapidapi-key=8e13cdff62msh043b21a79ca61c1p16352ejsn9b10a26980ff`);
        const response = await apiGames.json();
        
        this.loadingPage.classList.add('d-none');
        

        this.ui.displayGames(response)

        // game details
        let allGames = document.querySelectorAll('.innerCol');
        for (const game of allGames) {
            game.addEventListener('click' , (e) =>{
                sDetails.classList.remove("d-none");
                home.classList.add("d-none");

                this.details.getDetails(game.getAttribute("game-details"));
            })
        }
    }

}