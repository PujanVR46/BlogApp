<template>
  <v-app-bar height="60" dark app>
    <router-link to="/" tag="span">
      <v-toolbar-title onmouseover class="headline ff linkTags text-uppercase">
        <span class="display-1 font-weight-bold grey--text">ANIME</span>
        <span class="font-weight-light">BLOGS</span>
      </v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>

    <template v-if="loggedIn==true">
      <router-link to="/blog-view" tag="span" class="px-5 ff">
        <v-btn text small>
          <span>My Blogs</span>
        </v-btn>
      </router-link>
      <router-link to="/blog-add" tag="span" class="px-3 ff">
        <v-btn class="mr-2" text small>
          <v-icon class="font-weight-bold">add</v-icon>Add Blogs
        </v-btn>
      </router-link>

      <v-btn text small @click="signout()">
        <span class="mr-2">Logout</span>
      </v-btn>
    </template>
    <template v-else>
      <v-btn text to="/login" small>
        <span class="mr-2">Login</span>
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script>
/* eslint-disable default case, no-console */
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "header",
  methods: {
    ...mapMutations(["logout"]),
    signout() {
      window.localStorage.setItem("authenticated", "");
      this.logout();
      this.$router.push("/login");
    }
  },
  computed: mapGetters(["loggedIn"])
};
</script>
<style>
.fixbg {
  background-attachment: fixed;
  background-position: center;
  background-image: url(../assets/image8.jpg);
  background-size: cover;
}
</style>
