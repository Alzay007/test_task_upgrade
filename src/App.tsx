import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ProductProvider } from "./context/ProductProvider";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { ProductListPage } from "./pages/ProductListPage";
import { AccountPage } from "./pages/AccountPage";

import './App.scss';

const App: React.FC = () => {
  return (
    <Router>
      <ProductProvider>
        <>
          <Header email="mike-dawson@gmail.com" />

          <div className='section'>
            <SideBar />
            <main>
              <Routes>
                <Route path="/" element={<ProductListPage />} />
                <Route path="/account" element={<AccountPage />} />
              </Routes>
            </main>
          </div>
        </>
      </ProductProvider>
    </Router>
  );
};

export default App;

