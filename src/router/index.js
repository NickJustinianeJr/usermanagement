import { createWebHistory, createRouter } from "vue-router";
import ListUsers from "../components/users/ListUsers.vue"
import AddUser from "../components/users/AddUser.vue"
import EditUser from "../components/users/EditUser.vue"
import UserDetails from "../components/users/UserDetails.vue"

const routes = [
  {
    path: "/",
    name: "ListUsers",
    component: ListUsers,
  },
   {
    path: "/AddUser",
    name: "AddUser",
    component: AddUser,
  },
  {
    path: '/EditUser/:id',
    name: "EditUser",
    component: EditUser,
  },
  {
    path: '/UserDetails/:id',
    name: "UserDetails",
    component: UserDetails,
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;