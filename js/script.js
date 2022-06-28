
// Partendo dal markup in allegato, rifare lo slider usando Vuejs.

// Bonus:
// 1- al click su una thumb, visualizzare in grande
//     l'immagine corrispondente
// 2- applicare l'autoplay allo slider:
//      ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider:
//      bloccare l'autoplay e farlo riprendere quando esce
//      (ripassa lezione)


var app = new Vue(
    {
        el: '#app',
        data:{
            autoplay: null,
            currentActive: 0,

            slides: [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.',
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                }
            ]
            
        },
        methods:{
            nextElement(){
                if(this.currentActive < this.slides.length -1){
                this.currentActive++;
                }else{
                    this.currentActive = 0;
                }
            },   
            prevElement(){
                if(this.currentActive > 0){
                    this.currentActive--;
                }else{
                    this.currentActive = this.slides.length -1;
                }
            },
            setActive(thumbIndex){
                this.currentActive = thumbIndex;
            },
            autoplayOut(){
                this.autoplay = setInterval(this.nextElement, 4000);
            }
        },
        mounted() {
            this.autoplay = setInterval(this.nextElement, 4000);
        }
    }
);


