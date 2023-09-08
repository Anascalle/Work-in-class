// export enum Message {
//     "message" = "message",
// }

// class MyButton extends HTMLElement {
//     message?: string;
   
    

//     static get observedAttributes() {
//         const attributes: Record<Message, null> = {
//             message: null,
//         };
//         return Object.keys(attributes);
//     }
//     onButtonClicked() {
//         this.mount;
//         this.render();
//     }



//     connectedCallback(){
//         this.render();
//     }

//     constructor() {
//         super();
//         this.attachShadow({ mode: "open" });
//         this.addEventListener("click", this.onButtonClicked.bind(this));

//         this.button = this.ownerDocument.createElement('button');
//         this.button.textContent = ' I Like';
//         this.button.addEventListener("click",this.onButtonClicked);
//     }

  

    
//     render() {
//         if (this.shadowRoot) {
//             this.shadowRoot.innerHTML = `
//                 <section>
//                     <button>${this.message}</button>
//                 </section>
//             `;
       
//         }
//         }
//     }


// customElements.define("my-button", MyButton);
// export default MyButton;
