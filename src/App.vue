<template>
  <v-app>
    <v-app-bar
      absolute
      color="primary"
      dark
    >
      <v-toolbar-title>Crime Reporting Portal</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text type="submit" @click="logout">
          Log Out
          <v-icon right > mdi-logout-variant </v-icon>
        </v-btn>
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

<style>

 .v-main{
  margin-top: 65px;
 }
</style>