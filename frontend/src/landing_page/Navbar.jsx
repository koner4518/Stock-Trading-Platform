import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom sticky-top"
      style={{ backgroundColor: "#FFF" }}
    >
      <div class="container p-2">
        <Link class="navbar-brand" to="/">
          <img src="media/images/logo.svg" alt="" style={{ width: "25%" }} />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a className="nav-link" href={`${import.meta.env.VITE_DASHBOARD_URL}/signup`}>
              Signup
            </a>
            <Link class="nav-link" to="/about">
              About
            </Link>
            <Link class="nav-link" to="/products">
              Products
            </Link>
            <Link class="nav-link" to="/pricing">
              Pricing
            </Link>
            <Link class="nav-link" to="/support">
              Support
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;