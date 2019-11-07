<template>
  <div>
    <div class="text-md-center">
      <p class="font-weight-black display-1">LOGIN</p>
      <v-card class="mx-auto" max-width="344">
        <v-text-field label="Email" placeholder="Enter your email here" v-model="email" outlined></v-text-field>
        <v-text-field
          label="Password"
          placeholder="Enter your password here"
          v-model="password"
          outlined
        ></v-text-field>
        <v-btn dark @click="submit()">LOGIN</v-btn>
        <div>
          Haven't registered yet?
          <router-link to="/register">Register Here</router-link>
        </div>
      </v-card>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["login"]),
    submit() {
      // if (this.$refs.loginForm.validate()) {
      const data = {
        email: this.email,
        password: this.password
      };
      this.login(data)
        .then(response => {
          window.localStorage.setItem("authenticated", response.token);
          this.$router.push("/");
        })
        .catch(() => {
          this.loginFailed = true;
        });
      // }
    }
  },
  components: {}
};
</script>