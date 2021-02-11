<template>
    <!-- As a link -->
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#" @click="$router.push('/')"><h2>STRAVA</h2></a>
      </div>
    </nav>

</template>

<script>
export default {
name: "navbar",
  props :['test']

}
</script>

<style >
nav  h2 {
  font-family: 'Bebas Neue', cursive;
  color: orangered;
  margin-left: 80%;
  margin-top: 10px;

}
</style>
