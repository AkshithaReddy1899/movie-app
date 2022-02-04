const Nav = (arr) => {
  document.getElementById('header').innerHTML = `<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Movies</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"><img src="https://cdn-icons.flaticon.com/png/128/4204/premium/4204600.png?token=exp=1643984719~hmac=d94652bb1374b56ec083981a2bc30c7c" alt="menu"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" href="#">Movies(${arr.length})</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Language</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Country</a>
        </li>
      </ul>
    </div>
  </div>
</nav>`;
};

export default Nav;