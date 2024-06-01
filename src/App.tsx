import { Route, Routes, NavLink  } from 'react-router-dom';
import DataPage from './components/DataPage';
import productsData from './data/products.json';
import pricePlansData from './data/pricePlans.json';
import pagesData from './data/pages.json';
import { Product, PricePlan, Page } from './types';

const App = () => {
  return (
      <div className="container mx-auto p-4">
        <nav className="mb-4">
          <NavLink to="/products" className="mr-4">Products</NavLink>
          <NavLink to="/price-plans" className="mr-4">Price Plans</NavLink>
          <NavLink to="/pages" className="mr-4">Pages</NavLink>
        </nav>
        <Routes>
            <Route path="/products" element={<DataPage<Product>
            data={productsData}
            fieldToEdit="name"
          />} />
          <Route path="/price-plans" element={<DataPage<PricePlan>
            data={pricePlansData}
            fieldToEdit="description"
          />} />
          <Route path="/pages" element={<DataPage<Page>
            data={pagesData}
            fieldToEdit="title"
          />} />
       
       
        </Routes>
      </div>
  );
};

export default App;
