
<template>
  <div id="app" >
    <img alt="Vue logo" src="./assets/logo.png">
    <div class = "banner banner4">
            <h4>Work in progress, please check back <strong>often</strong>.  Thanks!
            </h4>
    </div>

    <h1>Welcome to Elsa's Tracker, a Vue.js App</h1><br>


    <div id = "app">
      <button class="btn btn-primary" @click="initDogs" style="text-align:center">Look at the Dogs' JSON
      </button>


      <button><a href="http://elsavelazquez.com/demo_CloudSystemsSoftwareEngineer/pics.html">Look at dog pics</a>working on this</button>


        <button><a href=".search.html">search</a>working on this</button>
      




      <br>

      <div class="col-me-12">
        <Dog
          valid-v-for="(dog, index) in $store.state.dogs"
          :dog="dog"
          key="index"
        />

    </div>
    <div class = "">
        {{$store.state}}
    </div>
  </div>

    <br>
    <p>
      I am building a Vue.js package, 'tracker', for keeping track of stuff using a  timestamp. <br>
      I am keeping track of people training their own service dog.  <br>
      I am borrowing from <a href="https://api.thedogapi.com/v1/images/search?limit=100">api.thedogapi.com</a> 
      while I collect data in this <a href="https://elsavelazquez.com/mongoDB">mongDB</a>.<br>
      My name is Elsa Velazquez, this is 
      <a href="https://github.com/elsaVelazquez" target="_blank" rel="noopener">my github</a><i class="fa fa-github"></i>, and 
      <br> this is my demo app for Cloud Systems Software Engineer work.
    </p>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html" target="_blank">Vue.js RESTful API Consumption with Axios & jQuery</a></li>
      <br>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

Vue.http.get('/http://elsavelazquez.com/demo_CloudSystemsSoftwareEngineer/pics.html', [config]).then(successCallback, errorCallback);

<script>
import { mapActions } from 'vuex'
import Dog from './components/Dog.vue'

export default{
name: 'initDogs',
  methods: mapActions([
    'initDogs'
    ]),
    components: {
    Dog
    },
  }
</script>

methods: {
  ...mapActions('auth', ['logout']),

  logoutRedirect() {
    // Force vuex reset with $router.go
    this.logout().then(() => this.$router.go({ name: 'Login' }))
  },
},




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.center {
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
}
h1 {
  width: 100%;
}
h2 {
  width: 100%;
}
</style>
