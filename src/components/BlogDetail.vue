<template>
  <div>
    <div v-for="data in blog" v-bind:key="data.id">
      <!-- <div v-if="data.id===RouteParams"> -->
      {{data}}
      <!-- </div> -->
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
/* eslint-disable default case, no-console */
export default {
  name: "blogdetail",
  data() {
    return {
      blog: this.blogData,
      routeParams: this.$route.params.id
    };
  },
  methods: { ...mapActions(["fetchBlogDetail"]) },
  computed: { ...mapGetters(["blogDetail", "blogData"]) },

  created() {
    // this.fetchBlogDetail(this.$route.params.id);
    console.log(this.blogData);
  }
};
</script>
