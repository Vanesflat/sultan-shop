import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../enums';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import Catalog from '../../pages/Catalog';
import ProductPage from '../../pages/ProductPage';
import { loadProducts } from '../../store/reducers/ProductSlice';
import { useEffect } from 'react';
import Basket from '../../pages/Basket';

function App(): JSX.Element {
  const { products } = useAppSelector((state) => state.productsReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Catalog}
            element={<Catalog products={products} />}
          />
          <Route
            path={AppRoute.Product}
            element={<ProductPage products={products} />}
          />
          <Route
            path={AppRoute.Basket}
            element={<Basket />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
