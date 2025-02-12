<script>
import SideBarLeft from "./components/SideBarLeft.vue";
import SideBarRight from "./components/SideBarRight.vue";

export default {
  data() {
    return {
      // ...
    }
  },
  components: {
    SideBarLeft,
    SideBarRight
  }

}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-2">
        <SideBarLeft/>
      </div>
      <div class="col-lg-8">
        <nav class="navbar bg-info mt-3" data-bs-theme="dark" style="color: black; border-radius: 20px;">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <p class="nav-link" href="#">Number of Trains: </p>
                </li>
                <li class="nav-item">
                  <p class="nav-link" href="#">Number of Lines: </p>
                </li>
                <li class="nav-item">
                  <p class="nav-link" href="#">Max PAX Capacity: </p>
                </li>
                <li class="nav-item">
                  <p class="nav-link">Average Daily PAX: </p>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <input type="button" class="btn btn-info mt-3" id="resetButton" value="Back to Centre"></input>
        <canvas class="my-3" id="gridCanvas" width="800" height="600"></canvas>
        <div class="input-group mb-3">
          <input type="file" class="form-control" id="inputGroupFile02">
          <label class="input-group-text" for="inputGroupFile02">Upload</label>
        </div>       
      </div>
      <div class="col-lg-2">
        <SideBarRight />
      </div>
    </div>
  </div>
</template>

<style scoped></style>