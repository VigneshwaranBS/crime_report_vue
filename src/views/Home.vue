<template>
  <div class="main">
    <v-card id="registerCard">
      <div class="form">
        <h1 class="pb-12">JUSTICE</h1>
        <h1 class="title">LOG IN</h1>
        <!-- <div class="google">
          <div class="google-button" @click="socialLogin">
            <img
              class="google-icon"
              href="#"
              src="../assets/icons8-google.svg"
              alt="Image alt"
            />
            <a class="google-word">Continue with Google</a>
          </div>
        </div>
        <p>OR</p> -->
        <form @submit.prevent="login">
          <div class="inputs">
            <div id="input">
              <v-text-field
                label="Email"
                v-model="email"
                type="Email"
                outlined
                required
                dense
                class="mb-n3"
              ></v-text-field>
            </div>

            <div id="input">
              <v-text-field
                label="Password"
                v-model="password"
                :type="show2 ? 'text' : 'password'"
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show2 = !show2"
                outlined
                dense
                class="mb-n3"
                required
              ></v-text-field>
            </div>
          </div>
          <v-btn color="primary" class="white--text" type="submit">
            Sign In
            <v-icon right dark> mdi-arrow-right-circle </v-icon>
          </v-btn>
          <div justify="center">
            <small>
              Create new account ?
              <router-link to="/Register">Register</router-link>
            </small>
          </div>
        </form>
      </div>
      <div class="card-img">
        <lottie-player
          src="https://assets9.lottiefiles.com/temp/lf20_lruRTf.json"
          loop
          background="transparent"
          speed="1"
          style="width: 200px; height: 200px"
          autoplay
        ></lottie-player>
      </div>
    </v-card>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      email: "",
      password: "",
      show2:false,
    };
  },

  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert("Successfully logged in");
          let user = firebase.auth().currentUser;
          let uid= user.uid;
          if (uid== "visDTsf1VgWHnnRwDDCP6FFvgxk1") {
            // User is signed in.
            this.$router.push("/adminPage")
            console.log(user);
          } else {
            // No user is signed in.
            this.$router.push("/officerpanel")
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    },

    
    socialLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)

        .then((result) => {
          var token = result.credential.accessToken;
          console.log(token);
          this.$router.push("/adminPage");
        })
        .catch((err) => {
          alert("Oops. " + err.message);
        });
    },
  },
};
</script>

<style>
.main {
  background-color: #fcf5ff;
  width: 100vw;
  height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

#registerCard {
  display: flex;
  justify-content: space-between;
  border-radius: 18px;
  max-width: 580px;
  height: 80vh;

  width: 70%;
  min-width: 300px;
}
.title {
  font-size: 18px;
  font-weight: bold;
  color: rgb(69, 15, 94);
  margin-bottom: 10px;
}

.form {
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card-img {
  border-radius: 18px;
  background: hsla(196, 93%, 71%, 1);

background: linear-gradient(90deg, hsla(196, 93%, 71%, 1) 0%, hsla(199, 58%, 80%, 1) 49%, hsla(183, 71%, 88%, 1) 100%);

background: -moz-linear-gradient(90deg, hsla(196, 93%, 71%, 1) 0%, hsla(199, 58%, 80%, 1) 49%, hsla(183, 71%, 88%, 1) 100%);

background: -webkit-linear-gradient(90deg, hsla(196, 93%, 71%, 1) 0%, hsla(199, 58%, 80%, 1) 49%, hsla(183, 71%, 88%, 1) 100%);
  width: 50%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
v-btn {
  background-color: green;
}
.google {
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.google-button {
  height: 30px;
  flex-wrap: wrap;
  border-radius: 5px;
  background-color: #eee;
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;
  width: 207px;
}
.google-icon {
  width: 20px;
  height: 20px;
  border-radius: 30px;
  margin-top: 5px;
}
.google-word {
  margin-left: 12px;
  font-size: 14px;
  font-weight: 700;
  color: #000;
  margin-top: 6px;
}
@media (max-width: 780px) {
  .main {
    width: 100vw;
    margin: 0px !important;
  }
  #registerCard {
    height: auto;
    padding: 5px 0px;
    width: 90%;
    display: flex;
    margin: 0px;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
  }
  .form {
    width: 100%;
  }
  .title {
    margin: 0px;
    font-size: 14px;
  }
  .card-img {
    height: 200px;
  }
}
</style>

