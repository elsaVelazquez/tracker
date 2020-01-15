import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vue'
import axios from 'axios'

Vue.config.productionTip = false

import store from './store'

//store.commit('INIT_TIMELINE', [{test: 'test_timeline'}, 
//	{test2: 'test_timeline_2'}])

// new Vue({
// 	store,
// 	vuetify: new Vuetify(),
// 	render: h => h(App),
//   }).$mount('#app')


//this is the same as above
new Vue({
	store,
	el: '#app',
	vuetify: new Vuetify(),
	render: h => h(App),
	data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://api.thedogapi.com/v1/images/search?limit=1')
      .then(response => (this.info = response))
  }
})

