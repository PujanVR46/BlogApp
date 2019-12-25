<template>
  <div id="app" class="ff">
    <v-parallax height="350" src="../assets/image8.jpg" class="bg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h2 class="subheading">We keep you updated about various articles related to the anime.</h2>
          <h4 class="title">Want your articles to get featured as well?</h4>

          <h1 class="display-1 font-weight-bold yellow--text mb-4">COME JOIN OUR WORLD</h1>
          <router-link v-if="loggedIn==false" to="/register" tag="span">
            <v-btn color="success">GET STARTED</v-btn>
          </router-link>
          <router-link v-else to="/blog-add" tag="span">
            <v-btn color="success">ADD BLOGS</v-btn>
          </router-link>
        </v-col>
      </v-row>
    </v-parallax>
    <v-app class="bg">
      <div v-for="data in allBlogData" v-bind:key="data.id">
        <v-card max-width="1000" height="200" class="mx-auto pt-1 pa-5 mt-5 mb-5 teal darken-2">
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
          <v-card-subtitle class="pb-0 pt-0">
            <span class="white--text title">{{ data.content | truncate(50 ) }}</span>
            <router-link
              class="title font-weight-black linkTags"
              :to="{path: `/blog-view/${data.id}`}"
              onmouseover
              tag="span"
            >Read More</router-link>
          </v-card-subtitle>
          <v-card-subtitle
            class="pb-0 mb-0 white--text text-right font-weight-medium"
          >{{ moment(data.created_at).format('MMMM Do YYYY') }}</v-card-subtitle>
        </v-card>
      </div>
      <div class="pb-2">
        <v-btn class="ma-3" large @click="prevPage">Previous</v-btn>
        <v-btn class="ma-3" large dark @click="nextPage">Next</v-btn>
      </div>
    </v-app>
  </div>
</template>

<script>
/* eslint-disable default case, no-console */
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
export default {
  name: "startpage",
  data() {
    console.log(this.allBlogData, "rere");
    return {
      // totalData: this.allBlogData.length,
      noOfItemPerPage: 2,
      currentPage: 1
    };
  },
  methods: {
    ...mapActions(["fetchAllBlog"]),
    moment: function(date) {
      return moment(date);
    },
    nextPage: function() {
      if (this.currentPage * this.noOfItemPerPage < this.allBlogData.length) {
        this.currentPage++;

        const arr = [];
        for (
          let i = this.currentPage - 2;
          i < this.currentPage + this.noOfItemPerPage;
          i++
        ) {
          // for (let j = 0; j < this.noOfItemPerPage * (i + 1); j++) {
          arr.push(this.allBlogData[i]);
          return arr;
          // }
        }
        console.log(arr, "arrr");
      }
    },
    prevPage: function() {
      if (this.currentPage > 1) this.currentPage--;
      console.log(this.currentPage, "cccc");
    }
  },
  filters: {
    truncate(string, value) {
      return (string || "").substring(0, value) + "…   ";
    }
  },
  computed: {
    ...mapGetters(["allBlogData", "loggedIn"])
  },
  created() {
    this.fetchAllBlog();
    // let totalData= this.allBlogData.length;
  }
};
</script>
<style scoped>
.bg {
  background-color: #393939;
}
</style>

