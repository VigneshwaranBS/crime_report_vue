<template>
  <v-app>
    <v-app-bar color="purple darken-2 " app dark>
      <div id="nav">
        <!-- <div class="anim">
          <lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_WZ1sT4.json"
            loop
            background="transparent"
            speed="1"
            style="width: 150px; height: 150px"
            autoplay
          ></lottie-player>
        </div> -->
        <h2>Crime Reporting Application</h2>
        <v-spacer></v-spacer>
        <!-- <div class="logout"><button @click="logout">Logout</button></div> -->
        <v-btn text class="white--text" type="submit" @click="logout">
          Log Out
          <v-icon right dark> mdi-logout-variant </v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import firebase from "firebase";
export default {
  name: "App",

  data: () => ({
    //
  }),
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("Successfully logged out");
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error.message);
          this.$router.push("/");
        });
    },
  },
};
</script>

<style >
#nav {
  display: flex;
  /* justify-content: flex-end; */
}
</style>
