<template>
  <footer>
    <div class="footer">
      <div class="footer-content">
        <div class="conteneur">
          <div class="footer-section-about">
            <ul>
              <li><h3>About</h3></li>
              <li>Portfolio</li>
              <li>Careers</li>
              <li>Customers</li>
              <li>Service</li>
            </ul>
          </div>
          <div class="footer-section-link">
            <ul>
              <li><h3>Resources</h3></li>
              <li>Blog</li>
              <li>Docs</li>
            </ul>
          </div>

          <div class="footer-section-contact-from">
            <ul>
              <li><h3>Contact</h3></li>
              <li>Help</li>
              <li>Sales</li>
              <li>Advertise</li>
            </ul>
          </div>

          <div class="footer-section-contact-help">
            <div class="ft-main-item">
              <h2 class="ft-title">Stay Updated</h2>
              <p>Subscribe to our newsletter to get our latest news.</p>

              <form>
                <input type="email" name="email" placeholder="Enter email address">
                <input type="submit" value="Subscribe">
              </form>
            </div>
          </div>
        </div>


        <div class="footer-icon">
          <div id="conteneur" >
            <div class="img 1">
              <a href="https://fr-fr.facebook.com/Strava/">
                <img src="assets/photos/facebook.png" matTooltip="Facebook" matTooltipClass="button1" >
              </a>
            </div>

            <div class="img 2">
              <a href="https://twitter.com/strava?lang=fr">
                <img src="assets/photos/twitter.png " matTooltip="Twitter" >
              </a>
            </div>

            <div class="img 3">
              <a href="https://github.com/login">
                <img src="assets/photos/github.png" matTooltip="Github">
              </a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <li>&copy; 2020 Copyright Nowrap Inc.</li>
        </div>
      </div>

    </div>
  </footer>

</template>

<script>
export default {
name: "Footer.vue"
}
</script>

<style scoped>

footer .footer{
  background: gray;
  color: white;
  position: relative;
  border-top: 10px solid orangered;

}

.footer .footer-icon{
  background: gray;
  height:60px ;

}

.footer .footer-bottom{
  background: #272626;
  color: white;
  height: 50px;
  text-align: center;
  padding-top: 20px;
  vertical-align: center;

}

#conteneur{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 12px;

}
img {
  width: 35px;
  height: 35px;
  padding: 5px;
}
.conteneur {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 1.0em;
}
footer li {
  list-style: none;
}
input[type="email"] {
  border: 0;
  padding: 0.625rem;
  margin-top: 0.3125rem;
}
input[type="submit"] {
  background-color: orangered;
  color: #fff;
  cursor: pointer;
  border: 0;
  padding: 0.625rem 0.9375rem;
  margin-top: 0.3125rem;
}
</style>
