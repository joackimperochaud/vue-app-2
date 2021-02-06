
<template>
  <section>
    <div class="wrapper">
      <div class="content">
        <h1>L'application  pour les coureurs et les cyclistes !</h1>
        <form>
          <label class="login"><p>connexion</p></label>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" img="" required>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="password" required>
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button class=" button">Submit</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "Home_page",

}
</script>

<style scoped>

section {
  width: 100%;
  height: 100%;
  background-image: url("https://i.ytimg.com/vi/LWPt5xv6ydA/maxresdefault.jpg") ;
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
h1 {

  margin: 30px;
  font-size: 2em;
  font-family: 'Roboto', sans-serif;
}
/* formumaire*/

form {
  width: 300px;
  height: 400px;
  margin: auto;
  background-color: black;
  border-radius: 10px ;
  padding: 20px;
  margin-bottom: 10%;
  margin-top: 10%;
  background: rgba(0,0,0,0.75);

}

button {
  background-color: orangered;
  text-decoration: none;
  border: none;
  color: white;
  border-radius: 3px;
  min-height: 35px;
  width: 100%;

}
form label .login {
  font-family: 'Bebas Neue', cursive;
}
input {
  background-color: black;


}
.login p{
  font-family: 'Bebas Neue', cursive;
  font-size: 35px;
  color: orangered;
}
</style>
