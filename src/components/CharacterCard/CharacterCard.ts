export enum Attributes {
 "name" = "name",
 "species" = "species",
 "gender" = "gender",
 "image" = "image",
}

 class CharacterCard extends HTMLElement {
    name?: string;
    species?: string;
    gender?: string;
    image?: string;

    static get observedAttributes(){
        const attributes : Record < Attributes,null> ={
            name: null,
            species: null,
            gender: null,
            image: null,
        }
        return Object.keys(attributes);
    }

    attributeChangedCallback(
        propName: Attributes,
        oldValue: string |undefined,
        newValue: string| undefined){
            this[propName] = newValue;
            this.render();

    }
    constructor(){
        super();
        this.attachShadow({ mode: "open" })
    }
    connectedCallback(){
        this.render();
    }


    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/src/components/CharacterCard/CharacteCard.css">
        <section>
        <h1>${this.name}</h1>
        <img src="${this.image}" alt="Rick and Morty characters">
        <p> Especie:${this.species}</p>
        <p>Genero: ${this.gender}</p>
        <button class="buttonlike">Like</button>
        </section>
        `
    }
}

customElements.define("character-card", CharacterCard)
export default CharacterCard;