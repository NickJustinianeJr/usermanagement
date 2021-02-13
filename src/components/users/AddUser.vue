
<template>
<h2>Add User</h2>


<div class="container">
    <div class="col-md-12">

<form @submit.prevent="onSubmit">

<div class="form-horizontal">
 <div class="form-group">
        <label style="float: left">User Id</label>
        <div class="col-md-5">
            <input type="text" class="form-control" id="userId" v-model="user.id" />
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
                    <input type="submit" value="Add" class="btn btn-success" />
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
  
  name: 'AddUser',
  data() {
    return {
      user: { 
          id: "", 
          userName: '', 
          emailAddress: '', 
          passwordHash: ''
          }
    };
  },
  methods: {
  onSubmit() {
    console.log('Label value: ', this.user);
     console.log('User ID: ', this.user.id);

    axios.post('http://127.0.0.1:8000/api/users', this.user)
                 .then((res) => {
                     //Perform Success Action
                     console.log(res);
                     this.$router.push({ name: 'ListUsers' });
                 })
                 .catch((error) => {
                     // error.response.status Check status code
                     console.log(error);
                 }).finally(() => {
                     //Perform action in always
                 });


    

  }
}
}
</script>