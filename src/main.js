import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyDhR3Qu2Z64CiLX5L1YABz6YMEC_8HPd5c",
  authDomain: "crimereportingapplicatio-75122.firebaseapp.com",
  databaseURL: "https://crimereportingapplicatio-75122-default-rtdb.firebaseio.com",
  projectId: "crimereportingapplicatio-75122",
  storageBucket: "crimereportingapplicatio-75122.appspot.com",
  messagingSenderId: "151903156507",
  appId: "1:151903156507:web:45ceccbba785285a33fbbe",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
