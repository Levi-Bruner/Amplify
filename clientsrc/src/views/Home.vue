<template>
  <div class="home text-center">
    <h6
      style="color:purple; padding-top: 2em"
    >Have you ever heard a song and thought "My friend is going to love this I should send it to them"</h6>

    <h1 style="padding-top: 4em">Welcome to Amplify</h1>
    <h3 style="color:purple; padding-top: 1em ">A place where music is shared freely</h3>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner" style="padding-top:8em">
        <div class="carousel-item active">
          <img src="../assets/amplify3.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/amplify4.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/amplify5.png" class="d-block w-100" alt="..." />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="container-fluid">
      <div class="row" style="padding-top: 10em">
        <div class="col-sm-6">
          <h1>About Us</h1>
          <br />
          <h4
            style="color:purple;"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsum, incidunt consequatur quam perspiciatis, soluta tempore eaque eligendi ex ipsa laborum ad et ullam in praesentium voluptates? Vero, a dolor.</h4>
        </div>
        <div class="col-sm-6">
          <img src="../assets/amplify6.png" alt />
        </div>
      </div>

      <div class="row" style="padding-top: 8em">
        <div class="col-sm-6">
             <img class="img-responsive" src="../assets/amplify7.png" alt />
        </div>
        <div class="col-sm-6"> <h1>Helping Artists</h1>
          <br />
          <h4
            style="color:purple;"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsum, incidunt consequatur quam perspiciatis, soluta tempore eaque eligendi ex ipsa laborum ad et ullam in praesentium voluptates? Vero, a dolor.</h4>
        </div>
        </div>
        <footer><img src="../assets/amplify.png" style=""></footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style>
h1 {
  color: white;
}
</style>
