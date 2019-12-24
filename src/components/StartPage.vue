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
      <div id="app">
  <v-app id="inspire">
    <div>
      <v-data-table
        :items="blogDataForPagination"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer
        class="elevation-1"
        @page-count="pageCount = $event"
      ></v-data-table>
      <div class="text-center pt-2">
        <v-pagination v-model="page" :length="pageCount"></v-pagination>
      <v-text-field
          :value="itemsPerPage"
          label="Items per page"
          type="number"
          min="-1"
          max="15"
          @input="itemsPerPage = parseInt($event, 10)"
        ></v-text-field>
      </div>
    </div>
  </v-app>
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
  data(){
    return{
      // totalData: this.allBlogData.length,
      page: 1,
      pageCount: 0,
      itemsPerPage: 2,
      blogDataForPagination: this.allBlogData.map(each=> each.title)
      //  [
      //   {
      //     name: 'Frozen Yogurt',
      //     calories: 159,
      //     fat: 6.0,
      //     carbs: 24,
      //     protein: 4.0,
      //     iron: '1%',
      //   },
      // ],
    }
  },
  methods: {
    ...mapActions(["fetchAllBlog"]),
    moment: function(date) {
      return moment(date);
    },
   
  },
  filters: {
    truncate(string, value) {
      return (string || "").substring(0, value) + "…   ";
    }
  },
  computed: {
    ...mapGetters([ "allBlogData", "loggedIn"]),
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

