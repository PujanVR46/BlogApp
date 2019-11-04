<template>
<div>
<div>
<Header/>
</div>
<div class="text-md-center">
 <p class="font-weight-black display-1">LOGIN</p>
   <v-card
    class="mx-auto"
    max-width="344"
  >
  
          <v-text-field
            label="Email"
            placeholder="Enter your email here"
            v-model="login.email"
            outlined
            
          ></v-text-field>
          <v-text-field
            label="Password"
            placeholder="Enter your password here"
            v-model="login.password"
            outlined
            
          ></v-text-field>
          <v-btn dark>LOGIN</v-btn>
          <div>Haven't registered yet? <router-link to='/register'>Register Here</router-link></div>
  </v-card>
</div>
</div>
</template>
<script>
import Header from './Header.vue'
export default {
    name: 'login',
    data(){
        return{
            login:{
                email:'',
                password: '',
            }
        }
    },
    components:{
        Header
    }

}
</script>