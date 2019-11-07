<template>
  <div id="app" class="ff">
    <v-parallax height="300" src="../assets/image8.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-left" cols="12">
          <h2 class="subheading">We keep you updated about various articles related to the anime.</h2>
          <h4 class="title">Want your articles to get featured as well?</h4>

          <h1 class="display-1 font-weight-bold yellow--text mb-4">COME JOIN OUR WORLD</h1>

          <router-link to="/register">
            <v-btn class="mx-50 light" medium color="success">Get Started</v-btn>
          </router-link>
        </v-col>
      </v-row>
    </v-parallax>
    <v-app class="bg">
      <div v-for="data in allBlogData" v-bind:key="data.id">
        <v-card max-width="1000" height="200" class="mx-auto pt-1 pa-5 mt-5 mb-5 teal darken-2">
          <v-card-subtitle
            class="pb-0 mb-0 white--text font-weight-medium"
          >{{ moment(data.created_at).format('MMMM Do YYYY') }}</v-card-subtitle>
          <router-link
            :to="{path: `/blog-view/${data.id}`}"
            tag="span"
            class="linkTags"
            onmouseover
          >
            <v-card-title class="display-1 font-weight-black pb-1" v-text="data.title"></v-card-title>
          </router-link>
          <v-card-subtitle
            class="pt-0 mt-0 white--text font-italic font-weight-medium"
          >-{{data.author}}</v-card-subtitle>
          <v-card-subtitle>
            <span class="white--text title">{{ data.content | truncate(30 ) }}</span>
            <router-link
              class="title font-weight-black linkTags"
              :to="{path: `/blog-view/${data.id}`}"
              onmouseover
              tag="span"
            >Read More</router-link>
          </v-card-subtitle>
        </v-card>
      </div>
    </v-app>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
export default {
  name: "startpage",
  methods: {
    ...mapActions(["fetchAllBlog"]),
    moment: function(date) {
      return moment(date);
    }
  },

  filters: {
    truncate(string, value) {
      return (string || "").substring(0, value) + "…   ";
    }
  },
  computed: mapGetters(["allBlogData"]),
  created() {
    this.fetchAllBlog();
  }
};
</script>
<style scoped>
.bg {
  background-image: url("../assets/startpage.jpg");
  background: -webkit-linear-gradient(to left, #4c4c51, #3b3b3f, #1f1f20);
  background: linear-gradient(to left, #4c4c51, #3b3b3f, #1f1f20);
}
</style>

