<template>
  <v-app class="bg">
    <div class="text-md-center ff">
      <p class="display-2 font-weight-bold white--text my-10">LOGIN</p>
      <v-card class="px-6 py-6 mb-5 mx-auto teal darken-2" max-width="400" min-height="400">
        <validation-provider name="Email" rules="required" v-slot="{ errors }">
          <v-text-field
            dark
            label="Email"
            placeholder="Enter your email here"
            v-model="email"
            outlined
          ></v-text-field>
          <div class="subtitle-2 mt-0">{{ errors[0] }}</div>
        </validation-provider>
        <validation-provider name="Password" rules="required" v-slot="{ errors }">
          <v-text-field
            dark
            label="Password"
            placeholder="Enter your password here"
            v-model="password"
            type="password"
            outlined
          ></v-text-field>
          <div class="subtitle-2 mt-0">{{ errors[0] }}</div>
        </validation-provider>
        <div class="pa-2">
          <v-btn dark x-large @click="submit()">LOGIN</v-btn>
        </div>
        <div class="mt-3">
          Haven't registered yet?
          <router-link to="/register" class="linkTags" onmouseover tag="span">REGISTER HERE</router-link>
        </div>
      </v-card>
    </div>
  </v-app>
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
  components: {
    ValidationProvider
  }
};
</script>
<style scoped>
.bg {
  background-image: url("../assets/image5.jpg");
  background-attachment: fixed;
  background-position: top;
  background-size: cover;
}
</style>