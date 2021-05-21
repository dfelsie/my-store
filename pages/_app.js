import "../styles/globals.css";
import {
  CartContext,
  useCartState,
} from "../hooks/use-cart.solution.js";

function MyApp({ Component, pageProps }) {
  <CartContext.Provider value={cart}>
    return <Component {...pageProps} />
  </CartContext.Provider>;
}

export default MyApp;
