new Vue({
  el: '#app',
  data: {
    title: 'Becoming a Vue Ninja',
    name: 'Ryker',
    url: "http://www.youtube.com",
    classes: ["one", "two"]
  },
  
  methods: {
    greet(time){
      return `Live long and prosper on this good ${time} in your journey whilst ${this.title}, ${this.name}`
    }
  }
})