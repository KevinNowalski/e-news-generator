const app = Vue.createApp({
    data(){
        return {
            content: '',
            image: '',
            readMore: '',
            title: '',
            date: ''
        }
    },
    created() {
        fetch('https://inshortsapi.vercel.app/news?category=entertainment')
            .then(result => result.json())
            .then(data => {
            console.log("data",data);
            this.content = data.data[0].content;
            this.image = data.data[0].imageUrl;
            this.readMore = data.data[0].readMoreUrl;
            this.title = data.data[0].title;
            this.date = data.data[0].date;
        });
    }
})

app.mount('#app');