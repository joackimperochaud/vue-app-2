<template>
    <div class="wrapper">
      <div class="content">
        <div class="button-inscription">
          <p>{{titre}}</p>
          <p>welcome {{prenom}}</p>
          <a href="https://fr-fr.facebook.com/"><button  type="submit" class="btn-fb" data-toggle="tooltip" data-placement="top" title="Facebook"  matTooltip="facebook"><img src="assets/photos/facebook.png"></button></a>
          <br>
          <a href="https://myaccount.google.com/"> <button type="submit" class="btn-go" data-toggle="tooltip" data-placement="top" title="Google"  matTooltip="google"><img src="assets/photos/google.png"></button></a>
        </div>
        <form [formGroup]="From" (ngSubmit)="login()">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword">Password</label>
              <input type="password" class="form-control" id="inputPassword" placeholder="Password" >
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputFName">First Name</label>
              <input [(ngModel)]="prenom" name ="prenom" type="text" class="form-control"  formControlName="FirstName" id="inputFName" placeholder="first name" formGroupName="FirstName" required>
            </div>
            <div class="form-group col-md-6">
              <label for="inputLName">Last Name</label>
              <input type="text" class="form-control" formControlName="LastName" id="inputLName" placeholder="first name" formGroupName="LastName" required>
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress2">Address</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="1234 Main St" >
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity" placeholder="(Nantes for example)" >
            </div>
            <div class="form-group col-md-6">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
          </div>
          <button type="submit" class="submit" >Sign in</button>
        </form>
      </div>
    </div>
</template>

<script>
export default {
  name: "Home_page"
}
</script>

<style scoped>
template{
  width: 100%;
  height: 100%;
  background: url("https://www.corsicasporttravel.com/photo/art/grande/9347881-14952089.jpg?v=1461310046") no-repeat;
  background-size: cover;
  color: white;

}
.wrapper{
  display:table;
  width: 100%;
  height: 100%;
}
.content {
  display: table-cell;
  text-align: center;
  vertical-align: middle;

}
form {
  width: 600px;
  height: 500px;
  margin: auto;
  background-color: black;
  padding: 20px;
  background: rgba(0,0,0,0.75);
}



button {
  margin: 10px;
  text-decoration: none;
  border: none;
  color: white;
  border-radius: 3px;
  min-height: 35px;
  width: 50%;
}
/*boutton couleur formulaire inscription*/
.submit {
  background-color: orangered;
}

.button-inscription button{
  width: 300px ;
}
.button-inscription{
  width: 600px;
  margin: auto;
  background-color: black;
  padding: 20px;
  background: rgba(0,0,0,0.75);


}


.btn-fb{
  background-color: #285E8E;
}
.btn-go{
  background-color: white;
}
.btn-go h6{
  color: #272626;
}
.btn-fb img {
  height: 35px;
  padding: 5px;

}
.btn-go img{
  height: 35px;
  padding: 5px;
}

input {
  background-color: black;
}

p {
  font-family: 'Bebas Neue', cursive;
  font-size: 35px;
  color: orangered;
}
select {
  background-color: black;
}

@media (max-width: 770px) {
  form {
    width: 600px;
    height: 700px;
    margin: auto;
    background-color: black;
    padding: 20px;
    background: rgba(0,0,0,0.75);
  }
}
</style>
