import './App.css'
import Footer from './Components/Footer';
import Header from './Components/Header'
import { Products } from "./assets/Products.json";

console.log(Products)
function App() {
  const { ring } = useParams();
  return (
    <>
      <Header />
      <Footer />
    </>
  )
}

export default App