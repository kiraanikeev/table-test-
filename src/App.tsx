import { Route, Routes, Link } from 'react-router-dom';
import DataPage from './components/DataPage';
import productsData from './data/products.json';
import pricePlansData from './data/pricePlans.json';
import pagesData from './data/pages.json';
import { Product, PricePlan, Page } from './types';
const App = () => {
  return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/price-plans">Price Plans</Link>
            </li>
            <li>
              <Link to="/pages">Pages</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/products" element={<DataPage<Product>
            data={productsData}
            columns={['id', 'name', { key: 'active', header: <span>Status</span> }, 'createdAt']}
          />} />
          <Route path="/price-plans" element={<DataPage<PricePlan>
            data={pricePlansData}
            columns={['id', 'description', 'active', 'createdAt', 'removedAt']}
          />} />
          <Route path="/pages" element={<DataPage<Page>
            data={pagesData}
            columns={['id', 'title', 'active', 'updatedAt', 'publishedAt']}
          />} />
          <Route path="/" element={<h1>First page.</h1>} />
        </Routes>
      </div>
  );
};

export default App;