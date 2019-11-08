<template>
  <div>
    <v-app class="bgregister">
      <div class="text-md-center ff">
        <v-card class="px-6 py-6 mb-5 mt-12 mx-auto teal darken-2" max-width="400" min-height="400">
          <p class="display-2 mb-7 font-weight-bold white--text">Register</p>
          <form>
            <v-text-field
              dark
              label="Name"
              placeholder="Enter your name here"
              v-model="name"
              outlined
              v-validate="'required'"
              :error-messages="errors.collect('name')"
              data-vv-name="name"
              required
            ></v-text-field>

            <v-text-field
              label="Email"
              dark
              placeholder="Enter your email here"
              v-model="email"
              outlined
              v-validate="'required|email'"
              :error-messages="errors.collect('email')"
              data-vv-name="email"
              required
            ></v-text-field>

            <v-text-field
              label="Password"
              dark
              placeholder="Enter your password here"
              v-model="password"
              type="password"
              outlined
              v-validate="'required|max:10'"
              :counter="10"
              :error-messages="errors.collect('password')"
              data-vv-name="password"
            ></v-text-field>

            <div class="pa-2">
              <v-btn dark x-large @click="submit()">Register</v-btn>
            </div>
          </form>
          <div class="mt-3 white--text">
            Already a member?
            <router-link class="linkTags" onmouseover to="/login" tag="span">LOGIN HERE</router-link>
          </div>
        </v-card>
      </div>
    </v-app>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import Vue from "vue";
import VeeValidate from "vee-validate";

/* eslint-disable default case, no-console */

Vue.use(VeeValidate);
export default {
  name: "register",
  $_veeValidate: {
    validator: "new"
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
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
    ...mapActions(["register"]),
    submit() {
      this.$validator.validateAll().then(res => {
        if (res) {
          const data = {
            name: this.name,
            email: this.email,
            password: this.password
          };
          this.register(data).then(() => {
            this.$router.push("/");
          });
        }
      });
    }
  }
};
</script>
<style scoped >
.bgregister {
  background-image: url("../assets/image8.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>