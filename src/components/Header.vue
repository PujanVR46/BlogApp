<template>
  <v-app-bar dark app>
    <router-link to="/" tag="span">
      <v-toolbar-title class="headline text-uppercase">
        <span>ANIME/MANGA</span>
        <span class="font-weight-light">BLOGS</span>
      </v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <router-link to="/blog-add" tag="span">
      <v-btn>Add Blog</v-btn>
    </router-link>
    <router-link to="/blog-view" tag="span">
      <v-btn>My Blog</v-btn>
    </router-link>
    <router-link to="/login" tag="span">
      <v-btn text v-if="token!=''" @click="signout()">
        <span class="mr-2">Logout</span>
      </v-btn>
      <template v-else>
        <v-btn text to="/login">
          <span class="mr-2">Login</span>
        </v-btn>
      </template>
    </router-link>
  </v-app-bar>
</template>

<script>
/* eslint-disable default case, no-console */
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "header",
  components: {
    //
  },

  methods: {
    ...mapMutations(["logout"]),
    signout() {
      window.localStorage.setItem("authenticated", "");
      this.logout();
      this.$router.push("/login");
    }
  },
  data: () => ({
    //
  }),
  computed: mapGetters(["token"])
};
</script>
