<template>
    
<div class="container">
<div class="row">
    <div class="col-md-12 col-sm-12 col-xs-12" style="text-align: left !important;">
 <dl class="dl-horizontal" style="text-align: left !important;">
                        <dt>
                          User ID
                        </dt>

                        <dd>
                           {{ user.userId }}
                        </dd>

                        <dt style="margin-top: 25px;">
                          User Name
                        </dt>

                        <dd>
                            {{ user.userName }}
                        </dd>

                        <dt style="margin-top: 25px;">
                           Email Address
                        </dt>

                        <dd>
                            {{ user.emailAddress }}
                        </dd>

                        <dt style="margin-top: 25px;">
                           Password Hash
                        </dt>

                        <dd>
                            {{ user.passwordHash }}
                        </dd>


                    </dl>
                       <br /> <br /> <br />
                <div class="form-link">
                    <router-link class="btn btn-info btn-sm" :to="{ name: 'EditUser', params: { id: this.$route.params.id }}">
                        Edit</router-link>
                        &nbsp;|&nbsp;
                    <router-link class="btn btn-danger btn-sm" to="/">Back</router-link>
                </div>

                </div>

         

    </div>
</div>


</template>


<script>
import axios from 'axios';


export default {
  name: 'UserDetails',
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

   created () {

           axios.get('http://127.0.0.1:8000/api/users/' + this.$route.params.id)
                 .then((res) => {
                     //Perform Success Action
                    //  console.log(res);
                      console.log(res.data);
                     this.user.userId = res.data[0].id;
                    this.user.userName = res.data[0].userName;
                     this.user.emailAddress = res.data[0].emailAddress;
                     this.user.passwordHash = res.data[0].passwordHash;
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