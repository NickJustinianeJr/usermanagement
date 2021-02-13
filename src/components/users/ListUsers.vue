
<template>
    <h2>List of Users</h2>
    <br /><br /><br />

<p>
    <router-link class="btn btn-primary btn-sm" to="/AddUser">Add User</router-link>
</p>
<br />

<table class="table table-condensed table-bordered">
    <thead>
    <tr>
        <th>
           
            User ID
          
        </th>
        <th>
           User Name
        </th>
        <th>
           PasswordHash
        </th>
        <th>
           Email Address
        </th>
        <th></th>
    </tr>
</thead>

<tbody>
    <tr v-for="(user, x) in users" :key="x">
        <td>
             <router-link :to="{ name: 'UserDetails', params: { id: user.id }}">
             {{ user.id }} 
              </router-link>
             
        </td>
        <td>
           {{ user.userName }}
        </td>
        <td>
                {{ user.passwordHash }}
        </td>
        <td>
                {{ user.emailAddress }}
        </td>
        <td>
              <router-link class="btn btn-primary btn-sm" :to="{ name: 'UserDetails', params: { id: user.id }}">
                Browse
              </router-link>
              &nbsp;|&nbsp;
             <router-link class="btn btn-info btn-sm" :to="{ name: 'EditUser', params: { id: user.id }}">
            Edit
            </router-link>
            &nbsp;|&nbsp;
           <button type="button" class="btn btn-danger btn-sm"  v-on:click="deleteUser(user.id)" >
            Delete
            </button>
        </td>
    </tr>
</tbody>

</table>

</template>


<script>
import axios from 'axios';


export default {
  name: 'ListUsers',
 data (){
    return {

    users: []
    
    }
  }, 
  
  methods: {

      deleteUser: function (param) {
          console.log("deleteUser: " + param);

           axios.delete('http://127.0.0.1:8000/api/users/' + param)
                 .then((res) => {
                     //Perform Success Action
                     console.log(res);
                     console.log("success");
                    //  this.$router.push({ name: 'ListUsers' });
                 })
                 .catch((error) => {
                     // error.response.status Check status code
                     console.log(error);
                 }).finally(() => {
                     //Perform action in always
                 });

         axios.get('http://127.0.0.1:8000/api/users/')
                 .then((res) => {
                     //Perform Success Action
                     console.log(res);
                     this.users = res.data;
                 })
                 .catch((error) => {

                     console.log(error);
                     // error.response.status Check status code
                 }).finally(() => {
                     //Perform action in always
                 });


                 alert("Product has been deleted");

                //  this.$router.push({ path: '/' });

                // this.created();

      }

  },

  created () {

        axios.get('http://127.0.0.1:8000/api/users')
                 .then((res) => {
                     //Perform Success Action
                     console.log(res);
                     this.users = res.data;
                 })
                 .catch((error) => {

                     console.log(error);
                     // error.response.status Check status code
                 }).finally(() => {
                     //Perform action in always
                 });
  }
}
</script>