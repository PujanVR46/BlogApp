<template>
  <v-app-bar height="100" dark app>
    <router-link to="/" tag="span">
      <v-toolbar-title onmouseover class="headline ff linkTags text-uppercase">
        <span class="display-2 font-weight-bold grey--text">ANIME</span>
        <span class="font-weight-light">BLOGS</span>
      </v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <router-link to="/blog-add" tag="span" class="px-5 ff">
      <v-btn>Add Blogs</v-btn>
    </router-link>
    <router-link to="/blog-view" tag="span" class="px-5 ff">
      <v-btn>
        <span class="mr-2">My Blogs</span>
      </v-btn>
    </router-link>
    <router-link to="/login" tag="span" class="px-5 ff">
      <v-btn v-if="token!=''" @click="signout()">
        <span class="mr-2">Logout</span>
      </v-btn>
      <template v-else>
        <v-btn to="/login">
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
<style>
.fixbg {
  background-attachment: fixed;
  background-position: center;
  background-image: url(../assets/image8.jpg);
  background-size: cover;
}
</style>
