<template>
  <div>
    <div class="text-md-center">
      <p class="font-weight-black display-1">ADD BLOG</p>
      <v-card class="mx-auto" max-width="300">
        <validation-provider name="Title" rules="required" v-slot="{ errors }">
          <v-text-field required label="Title" placeholder="Enter title" v-model="title" outlined></v-text-field>
          <span>{{ errors[0] }}</span>
        </validation-provider>
        <validation-provider name="Author" rules="required" v-slot="{ errors }">
          <v-text-field label="Author" placeholder="Enter author" v-model="author" outlined></v-text-field>
          <span>{{ errors[0] }}</span>
        </validation-provider>
        <validation-provider name="Description" rules="required" v-slot="{ errors }">
          <v-textarea label="Description" placeholder="Description" v-model="content" outlined></v-textarea>
          <span>{{ errors[0] }}</span>
        </validation-provider>
        <v-btn class="my-2" @click="submit()">Save</v-btn>
        <router-link to="/blog-view">
          <v-btn dark @click="cancel()">Cancel</v-btn>
        </router-link>
      </v-card>
    </div>
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
  name: "blogadd",
  data() {
    return {
      title: "",
      content: "",
      author: ""
    };
  },
  methods: {
    ...mapActions(["addBlog"]),
    submit() {
      const data = {
        title: this.title,
        author: this.author,
        content: this.content
      };
      this.addBlog(data).then(() => {
        this.$router.push("/blog-view");
      });
      // .catch(e => {
      //   this.registerFailed = true;
      //   this.registerFailedMsg = e;
      // });
    }
  },
  computed: {
    isComplete() {
      return this.title && this.author && this.content;
    }
  },
  components: {
    ValidationProvider
  }
};
</script>