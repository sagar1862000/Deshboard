import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import AddProduct from "./AddProduct";
import ProductInfo from "./ProductInfo";
function App() {
  return (
    <>
   <Router>
    <Routes>
      <Route path="/" element={<Sidebar/>} />
      <Route path="Dashboard" element={<Dashboard/>}/>
      <Route path="AddProduct" element={<AddProduct/>} />
      <Route path="ProductInfo" element={<ProductInfo/>} />
    </Routes>
   </Router>
   </>
  );
}

export default App;
