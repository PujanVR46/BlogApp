<template>
  <div>
    <div class="text-md-center">
      <p class="font-weight-black display-1">Register</p>
      <v-card class="mx-auto" max-width="344">
        <v-text-field label="Name" placeholder="Enter your name here" v-model="name" outlined></v-text-field>
        <v-text-field label="Email" placeholder="Enter your email here" v-model="email" outlined></v-text-field>
        <v-text-field
          label="Password"
          placeholder="Enter your password here"
          v-model="password"
          outlined
        ></v-text-field>
        <v-btn dark @click="submit()">Register</v-btn>
        <div>
          Already a member?
          <router-link to="/login">Login Here</router-link>
        </div>
      </v-card>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "register",
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["register"]),
    submit() {
      const data = {
        name: this.name,
        email: this.email,
        password: this.password
      };
      this.register(data)
        .then(response => {
          window.localStorage.setItem("authenticated", response.token);
          this.$router.push("/");
        })
        .catch(e => {
          this.registerFailed = true;
          this.registerFailedMsg = e;
        });
    }
  },
  components: {}
};
</script>