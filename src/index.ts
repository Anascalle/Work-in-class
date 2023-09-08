import * as components from "./components/export"
import data from "./data/data";
import CharacterCard,{Attributes} from "./components/CharacterCard/CharacterCard";
// import MyButton from "./components/Button/Button";

class AppContainer extends HTMLElement {

    characters: CharacterCard[] =[];
    // buttons: MyButton[] =[];
    constructor(){
        super();
        this.attachShadow({ mode: "open" });


        data.forEach((cards) =>{
            const characterCards = this.ownerDocument.createElement("character-card") as CharacterCard;
            characterCards.setAttribute(Attributes.name,cards.name);
            characterCards.setAttribute(Attributes.gender,cards.gender);
            characterCards.setAttribute(Attributes.image,cards.image);
            characterCards.setAttribute(Attributes.species,cards.species);
            this.characters.push(characterCards);
            // const button = this.ownerDocument.createElement(
            //     "my-button"
            // ) as MyButton;
            // this.buttons.push(button);
      
           
        });
       
    }

    connectedCallback() {
        this.render();
    }

   render(){
        if(this.shadowRoot)
            this.shadowRoot.innerHTML = `
            `
            this.characters.forEach((character) =>{
                this.shadowRoot?.appendChild(character);
            })
            // this.buttons.forEach((button) =>{
            //     this.shadowRoot?.appendChild(button);
            // })

   
    }
}

customElements.define('app-container', AppContainer)