// RICHIESTA: Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

// Inserisco Vue nel JS
const {createApp} = Vue

createApp({

    data(){
        return{
            title : '',
            verde : 'text-green mb-3',
            url : "https://unsplash.it/600/300?image=171"
        }
    },

    // Inserisco le funzioni
    methods: {
        generaTitolo : function () {
            let img = document.getElementById("randomImg")

            if (img.classList.contains("styleNone")) {
                img.classList.remove("styleNone")
                img.classList.add("styleFlex")
            }
            
            else{
                img.classList.remove("styleFlex")
                img.classList.add("styleNone")
            }
            
        }
    }
}).mount('#container');