// RICHIESTA: Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

// Inserisco Vue nel JS
const {createApp} = Vue

createApp({
    data(){
        return{
            message : 'Hello'
        }
    }
}).mount('#title')