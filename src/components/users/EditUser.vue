
<template>
<h2>Edit User</h2>


<div class="container">
    <div class="col-md-12">

<form @submit.prevent="onSubmit">

<div class="form-horizontal">
 <div class="form-group">
        <label style="float: left">User Id</label>
        <div class="col-md-5">
            <input type="text" class="form-control" id="userId" v-model="user.userId" />
        </div>

      <label style="float: left">User Name</label>
        <div class="col-md-5">
            <input type="text" class="form-control" id="userName" v-model="user.userName" />
        </div>

         <label style="float: left">Email Address</label>
        <div class="col-md-5">
            <input type="text" class="form-control" id="emailAddress" v-model="user.emailAddress" />
        </div>

         <label style="float: left">PasswordHash</label>
        <div class="col-md-5">
            <input type="text" class="form-control" id="passwordHash" v-model="user.passwordHash" />
        </div>

 </div>

        <br /><br />
                <div class="form-group">
                  <div class="col-md-offset-2 col-md-10">
                    <input type="submit" value="Save" class="btn btn-success" />
                    &nbsp;
                    <router-link class="btn btn-danger btn-sm" to="/">Cancel</router-link>
                  </div>
                </div>

   

  </div>

  </form>


</div>
</div>

</template>


<script>
import axios from 'axios';

export default {
  name: 'EditUser',
  data() {
    return {
      user: { 
          userId: "", 
          userName: '', 
          emailAddress: '', 
          passwordHash: ''
          }
    };
  },
  methods: {
  onSubmit() {
    console.log('Label value: ', this.user);
     console.log('User ID: ', this.user.userId);
     
    //  var product = {
    //    productId: this.user.userId,
    //    name: this.user.userName,
    //     description: this.user.emailAddress,
    //      modelNumber: this.user.passwordHash,
    //      imageName: this.user.userName
    //  }

    //  console.log(product);

    axios.put('http://127.0.0.1:8000/api/users/' + this.$route.params.id, this.user)
                 .then((res) => {
                     //Perform Success Action
                     console.log(res);
                      this.$router.push({ name: 'UserDetails', params: { id: this.$route.params.id }});
                 })
                 .catch((error) => {
                     // error.response.status Check status code
                     console.log(error);
                 }).finally(() => {
                     //Perform action in always
                 });


        }
    },

    created () {

      console.log(this.$route.params.id);
           axios.get('http://127.0.0.1:8000/api/users/' + this.$route.params.id)
                 .then((res) => {
                     //Perform Success Action
                    console.log(res.data);
                     this.user.userId = res.data[0].id;
                     this.user.userName = res.data[0].userName;
                     this.user.emailAddress = res.data[0].emailAddress;
                     this.user.passwordHash = res.data[0].passwordHash;
                     console.log(this.user);
                 })
                 .catch((error) => {
                     // error.response.status Check status code
                     console.log(error);
                 }).finally(() => {
                     //Perform action in always
                 });

    }
}
</script>