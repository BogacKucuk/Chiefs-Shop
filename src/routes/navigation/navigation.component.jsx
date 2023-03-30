import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as MyLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        {/* LOGO */}
        <Link className="logo-container" to="/">
          <MyLogo className="logo"/>
        </Link>

        {/* NAV LINKS */}
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>

  )
}

export default Navigation;