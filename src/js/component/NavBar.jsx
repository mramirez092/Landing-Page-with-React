import React from "react";

const NavBar = () => {
    return (
<nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand text-light" href="#">Start Bootstrap</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
        <a class="nav-link text-light" href="#">About</a>
        <a class="nav-link text-light" href="#">Services</a>
        <a class="nav-link text-light" href="#">Contact</a>
      </div>
    </div>
  </div>
</nav>
    );
};

export default NavBar;