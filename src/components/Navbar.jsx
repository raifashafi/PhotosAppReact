import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>



<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">PHOTOS APP</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/">DETAILLS</Link>
        <Link class="nav-link" to="/Search">SEARCH</Link>
        <Link class="nav-link" to="/Delete">DELETE</Link>
        <Link class="nav-link" to="/View">VIEW</Link>
        <Link class="nav-link" to="/ViewNews">VIEW NEWS</Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar