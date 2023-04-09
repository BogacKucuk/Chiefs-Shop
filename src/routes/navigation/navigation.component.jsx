import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { ReactComponent as MyLogo } from "../../assets/crown.svg";

import * as NavigationStyles from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationStyles.NavigationContainer>
        {/* LOGO */}
        <NavigationStyles.LogoContainer to="/">
          <MyLogo className="logo" />
        </NavigationStyles.LogoContainer>

        {/* NAV LINKS */}
        <NavigationStyles.NavLinks>
          <NavigationStyles.NavLink to="/shop">
            SHOP
          </NavigationStyles.NavLink>
          {
            currentUser ? (
              <NavigationStyles.NavLink as="span" onClick={signOutUser}>
                SIGN OUT
              </NavigationStyles.NavLink>
            ) : (
              <NavigationStyles.NavLink className="nav-link" to="/auth">
                SIGN IN
              </NavigationStyles.NavLink>
            )
          }
          <CartIcon />
        </NavigationStyles.NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationStyles.NavigationContainer>
      <Outlet />
    </Fragment>

  )
}

export default Navigation;