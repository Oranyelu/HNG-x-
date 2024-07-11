import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Products } from "./assets/Products.json";
import ProductCard from "./Components/ProductCard";
import Filters from "./Components/Filters"


console.log(Products);
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
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </main>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
