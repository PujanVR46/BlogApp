<template>
  <div>
    <v-app class="bgregister">
      <div class="text-md-center ff">
        <p class="display-2 font-weight-bold white--text my-10">Register</p>
        <v-card class="px-6 py-6 mb-5 mx-auto teal darken-2" max-width="400" min-height="400">
          <validation-provider name="Name" rules="required" v-slot="{ errors }">
            <v-text-field
              dark
              label="Name"
              placeholder="Enter your name here"
              v-model="name"
              outlined
            ></v-text-field>
            <div class="subtitle-2 mt-0">{{ errors[0] }}</div>
          </validation-provider>
          <validation-provider dark name="Email" rules="required" v-slot="{ errors }">
            <v-text-field
              label="Email"
              dark
              placeholder="Enter your email here"
              v-model="email"
              outlined
            ></v-text-field>
            <div class="subtitle-2 mt-0">{{ errors[0] }}</div>
          </validation-provider>
          <validation-provider dark name="Password" rules="required" v-slot="{ errors }">
            <v-text-field
              label="Password"
              dark
              :rules="required"
              placeholder="Enter your password here"
              v-model="password"
              type="password"
              outlined
            ></v-text-field>
            <div class="subtitle-2 mt-0">{{ errors[0] }}</div>
          </validation-provider>
          <div class="pa-2">
            <v-btn dark x-large @click="submit()">Register</v-btn>
          </div>
          <div class="mt-3">
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
import { ValidationProvider, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
extend("required", {
  ...required,
  message: "This field is required"
});
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
  components: {
    ValidationProvider
  }
};
</script>
<style scoped >
.bgregister {
  background-image: url("../assets/image1.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>