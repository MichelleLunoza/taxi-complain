<template>
    <div class="body">
      <div class="img">
        <img src="~assets/taxi.png" class="logo">
        </div>
        <div class="taxi-text">
        <h4 align="center"><strong>Taxi Complain</strong></h4>
        <router-link to="/feed">
          <button class="btn">Start</button></router-link>
    
    </div>
    </div>
</template>

<script>

const feed = { template: '<div>feed</div>' }




import { } from 'quasar'
import db from '../firebase';
var taxi = db.ref('TaxiList')

export default {
}
</script>
<style lang="stylus">

body{
  background-color:lightblue;
  height:100%;
  width:100%;
}
.logo{
 height:150px;
 width:150px;
}
.img{
  margin-left: 130px;
  margin-top:140px;
}
h4 {
  font-family: 'Apple Chancery', cursive;
}
.btn {
    background-color: #3498DB;
    border: none;
    color: white;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px 0px 130px;
    margin-top: 10px;
    border-radius:8px;
    width:140px;
}


</style>
