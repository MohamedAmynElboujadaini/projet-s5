import { useState } from 'react';
import './App.css';
import Home from './views/Home.jsx';
import Footer from './components/footer.jsx';
import Navbar from './components/navbar.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from './views/Products.jsx';
import Account from './views/Account.jsx';
import Profile from './views/Profile.jsx';
import UserName from './components/username.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/*" element={<Products/>}>

          <Route index element={<div>This is /products</div>} />
          <Route path=":UserName" element={<UserName/>} />
          <Route path="test" element={<div>This is /products/test</div>} />

        </Route>
        <Route path="/account" element={<Account />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;