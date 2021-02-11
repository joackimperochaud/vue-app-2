<template>

  <div class="d-flex justify-content-center">
    <b-card class="text-sm-center" title="Activity">
      <b-card-text>
        Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
      </b-card-text>
      <p>
        name: <B>{{ contenu.name }}</B>
        prenom: <B>{{ contenu.nameactivity }}</B>
        Distance km:<B> {{ contenu.distance }}</B>
        Sport practicing:<B> {{ contenu.sport }}</B>
      </p>
      <b-card-text>test</b-card-text>
      <b-button variant="primary">remove</b-button>
      <b-button variant="primary">edit</b-button>
    </b-card>
  </div>
</template>

<script>

export default {
name: "Card",
  props:["contenu"],
  methods:{
  },
}

</script>

<style scoped>

template{
 background-color: darkgray;
}
p{

}
.d-flex{
  margin: 15px;
}

button{
  margin: 2px;
}
</style>
