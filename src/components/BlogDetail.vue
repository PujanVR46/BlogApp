<template>
  <v-app class="bg">
    <div v-for="data of allBlogData" v-bind:key="data.id">
      <div v-if="data.id == routeValue">
        <v-card max-width="1000" height="100%" class="mx-auto ff pt-1 pa-5 mt-5 mb-5 teal darken-2">
          <v-card-subtitle
            class="pb-0 mb-0 text-right white--text font-weight-medium"
          >{{ moment(data.created_at).format('MMMM Do YYYY') }}</v-card-subtitle>

          <v-card-title class="display-2 font-weight-black pt-1 pb-0" v-text="data.title"></v-card-title>

          <v-card-subtitle
            class="pt-0 mt-0 white--text font-italic font-weight-large"
          >-{{data.author}}</v-card-subtitle>
          <v-card-subtitle>
            <span class="blogContent">{{ data.content}}</span>
          </v-card-subtitle>
        </v-card>
      </div>
    </div>
  </v-app>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
/* eslint-disable default case, no-console */
export default {
  name: "blogdetail",
  data() {
    return {
      routeValue: this.$route.params.id
    };
  },
  methods: {
    ...mapActions(["fetchAllBlog"]),

    moment: function(date) {
      return moment(date);
    }
  },
  computed: { ...mapGetters(["allBlogData"]) },

  created() {
    this.fetchAllBlog();
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
.blogContent {
  font-family: cursive;
  font-size: 20px;
  color: aliceblue;
}
</style>
