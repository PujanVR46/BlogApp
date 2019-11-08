<template>
  <v-app class="bg">
    <div class="text-md-center ff">
      <v-card class="px-6 py-6 mb-5 mt-12 mx-auto teal darken-2" max-width="400" min-height="400">
        <p class="display-2 mt-0 font-weight-bold white--text my-10">LOGIN</p>
        <form>
          <v-text-field
            dark
            label="Email"
            placeholder="Enter your email here"
            v-model="email"
            outlined
            v-validate="'required|email'"
            :error-messages="errors.collect('email')"
            data-vv-name="email"
            required
          ></v-text-field>

          <v-text-field
            dark
            label="Password"
            v-validate="'required|max:10'"
            :counter="10"
            :error-messages="errors.collect('password')"
            data-vv-name="password"
            placeholder="Enter your password here"
            v-model="password"
            v-on:keyup.enter="submit()"
            type="password"
            outlined
          ></v-text-field>

          <div class="pa-2">
            <v-btn dark x-large @click="submit()">LOGIN</v-btn>
          </div>
        </form>
        <div class="mt-3 white--text">
          Haven't registered yet?
          <router-link to="/register" class="linkTags" onmouseover tag="span">REGISTER HERE</router-link>
        </div>
      </v-card>
      <v-snackbar v-model="snackbar" :timeout="timeout">Invalid Credentials.</v-snackbar>
    </div>
  </v-app>
</template>
<script>
import { mapActions } from "vuex";
import Vue from "vue";
import VeeValidate from "vee-validate";

/* eslint-disable default case, no-console */

Vue.use(VeeValidate);

export default {
  name: "login",
  $_veeValidate: {
    validator: "new"
  },
  data() {
    return {
      email: "",
      password: "",
      timeout: 3000,
      snackbar: false,
      dictionary: {
        attributes: {
          email: "E-mail Address"
        },
        custom: {
          password: {
            required: () => "password can not be empty",
            max: "The password field may not be greater than 10 characters"
          }
        }
      }
    };
  },
  methods: {
    ...mapActions(["login"]),
    submit() {
      this.$validator.validateAll().then(res => {
        if (res) {
          const data = {
            email: this.email,
            password: this.password
          };
          this.login(data)
            .then(() => {
              this.$router.push("/");
            })
            .catch(() => {
              this.loginFailed = true;
              this.snackbar = true;
            });
        }
      });
    }
  }
};
</script>
<style scoped>
.bg {
  background-image: url("../assets/image8.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>