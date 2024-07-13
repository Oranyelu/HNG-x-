import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Filters from "./Components/Filters";
import Home from "./Components/Home";
import { CartProvider } from "react-use-cart";


function App() {
  return (
    <>
      <Header />
      <section>
        <h1>
          <b>NEW IN: ENGAGEMENT COLLECTION</b>
        </h1>
        <hr />
        <div className="container">
          <aside className="filter">
            <Filters />
          </aside>
          <main className="product-container">
            <CartProvider>
              <Home />
            </CartProvider>
          </main>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
