<template>
  <div class="page">
    <div class="content">
      <h1> Enregistrer son activité!</h1>
      <div>

        <div class="closed"></div>

        <div class="d-flex justify-content-center" STYLE="margin: 30px">
          <!--bouton de la modale-->
          <b-button @click="$bvModal.show('modal-scoped')">ADD</b-button>
        </div>

        <b-modal id="modal-scoped">
          <template #modal-header>
            <h5>
              Activity recording</h5>
          </template>

          <template #default>
            <!--formulaire-->
            <form ref="form" @submit.stop.prevent="AjoutEnregistrement">
              <b-form-group
                  label="Name"
                  label-for="name-input"
                  invalid-feedback="Name is required"

              >
                <b-form-input
                    id="name-input"
                    v-model="nouvelleEntree.name"

                    required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                  label="Name of Activity"
                  label-for="nameactivity-input"
                  invalid-feedback="Name is required"

              >
                <b-form-input
                    id="nameactivity-input"
                    v-model="nouvelleEntree.nameactivity"

                    required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                  label="Distance traveled"
                  label-for="name-input"
                  invalid-feedback="Name is required"

              >
                <b-form-input
                    id="distance-input"
                    v-model="nouvelleEntree.distance"

                    required
                ></b-form-input>
              </b-form-group>


              <b-form-group
                  label="Sport practicing"
                  label-for="name-input"
                  invalid-feedback="Name is required"
              >
                <b-form-input
                    id="sport-input"
                    v-model="nouvelleEntree.sport"
                    required
                ></b-form-input>
              </b-form-group>

            </form>

          </template>

          <template #modal-footer="{ ok, cancel }">

            <b-button size="sm" variant="success" @click="ok(AjoutEnregistrement($event))">
              OK
            </b-button>
            <b-button size="sm" variant="danger" @click="cancel()">
              Cancel
            </b-button>
          </template>
        </b-modal>
      </div>

      <div v-for="(card, index) in cards" :key="index">
        <Card :contenu="card"></Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: "Enregistrement",
  data() {
    return {

      nouvelleEntree : {
        name: String,
        nameactivity: String,
        distance: Number,
        sport: String
      },
          card: {
        name: String,
        nameactivity: String,
        distance: Number,
        sport: String
      },
        cards: [],

    }
  },
  mounted() {
    this.nouvelleEntree.name = "";
    this.nouvelleEntree.nameactivity = "";
    this.nouvelleEntree.distance = 0;
    this.nouvelleEntree.sport = "";

  },
  components:{Card},
  methods: {
    AjoutEnregistrement($event) {
      console.log(this.nouvelleEntree.sport)
      this.card.name =this.nouvelleEntree.name
      this.card.name =this.nouvelleEntree.sport
      this.card.name =this.nouvelleEntree.distance
      this.card.name =this.nouvelleEntree.nameactivity
      this.cards.push(this.nouvelleEntree)
      console.log("cards",this.cards)

      console.log("ajoutenregistrement", $event)
    }
  }
}

</script>

<style scoped>
.closed{

        border: solid 2px grey ;
        width: 500px;
        background: grey;
        margin-right: auto;
        margin-left: auto;
        margin-top: 137px;


}

h1{
  text-align: center;
  color: orangered;
  margin-top:217px ;

}
button {
  border-radius: 50px;
  margin-top: 20px;
  margin-bottom: 20px;

}

</style>
