(()=>{"use strict";const e=[{name:"Mickey Mouse",species:"Ratón",gender:"Masculino",image:"https://m.media-amazon.com/images/I/51An5aUR4WL._AC_UF1000,1000_QL80_.jpg"},{name:"Minnie Mouse",species:"Ratón",gender:"Femenino",image:"https://i.pinimg.com/550x/e3/38/b6/e338b6249b067d90582986254d279989.jpg"},{name:"Donald Duck",species:"Pato",gender:"Masculino",image:"https://nationaltoday.com/wp-content/uploads/2021/06/donald_duck.jpg"},{name:"Daisy Duck",species:"Pato",gender:"Femenino",image:"https://i.pinimg.com/originals/7e/b1/a6/7eb1a69fcad56caf94053cfcaaeff24a.jpg"}];var t;!function(e){e.name="name",e.species="species",e.gender="gender",e.image="image"}(t||(t={}));class n extends HTMLElement{static get observedAttributes(){return Object.keys({name:null,species:null,gender:null,image:null})}attributeChangedCallback(e,t,n){this[e]=n,this.render()}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n        <link rel="stylesheet" href="/src/components/CharacterCard/CharacteCard.css">\n        <section>\n        <h1>${this.name}</h1>\n        <img src="${this.image}" alt="Rick and Morty characters">\n        <p> Especie:${this.species}</p>\n        <p>Genero: ${this.gender}</p>\n        <button class="buttonlike">Like</button>\n        </section>\n        `)}}customElements.define("character-card",n);class a extends HTMLElement{constructor(){super(),this.characters=[],this.attachShadow({mode:"open"}),e.forEach((e=>{const n=this.ownerDocument.createElement("character-card");n.setAttribute(t.name,e.name),n.setAttribute(t.gender,e.gender),n.setAttribute(t.image,e.image),n.setAttribute(t.species,e.species),this.characters.push(n)}))}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML="\n            "),this.characters.forEach((e=>{var t;null===(t=this.shadowRoot)||void 0===t||t.appendChild(e)}))}}customElements.define("app-container",a)})();