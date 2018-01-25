<template>
<q-layout>
<div slot="header">
  <q-toolbar color="primary">
  <img src="~assets/git.png" class="logo">
  <q-toolbar-title>Complain</q-toolbar-title>
    <!--  <q-btn @click="add" padding="7px">
        <strong>Add</strong></q-btn> -->
  </q-toolbar>
  </div>
   <div>
     <h1>{{ msg }}</h1>
       Hello {{ $route.params.name }}
   </div>

<!--Navigation Tab
      <q-tabs slot="footer" align="justify">
      <q-tab  slot="title" name="tab-2" label="feed" icon="assignment" />
      <q-tab slot="title" name="tab-3" label="report" icon="report problem" />
      </q-tabs>
     <!-- <q-search v-model="searchModel"></q-search>
      <q-input v-model="text" stack-label="Stack Label" />-->
<!--<q-pull-to-refresh :handler="refresher">
  <!-- Content, whatever you like 
  <p v-for="item in items">
    Lorem ipsum dolor sit amet...
  </p>
</q-pull-to-refresh>-->
  </q-layout>
</template>

<script>
import { QToolbar, QToolbarTitle, QTab, QTabs, QBtn } from 'quasar'
import db from '../firebase';
var taxi = db.ref('TaxiList')

export default {
    name: 'report',
    data () {
      return {
      msg: 'reportpage'
    }
  },
  components: {
    QToolbar,
    QToolbarTitle,
    QTab,
    QTabs,
    QBtn
  },
  firebase: {
    TaxiList: taxi
  }
}
</script>
<style lang="stylus">
.q-toolbar {
  align:center;
}
.body{
  margin: 110px;
}
.img{
  align:center;
}
.q-toolbar-title {
  text-align:left;
  font-weight:13px;
}
.logo {
  height:35px;
  width:35px;
  margin-left:100px;
}
.toolbar {
  position:0;
  bottom:0!important;
  width: 100%;
}
.input {
  border:5px;
}
</style>
