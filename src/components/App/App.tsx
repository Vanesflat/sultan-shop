import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../enums';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import Catalog from '../../pages/Catalog';
import ProductPage from '../../pages/ProductPage';
import { useEffect } from 'react';
import Basket from '../../pages/Basket';
import { fetchProductsAction } from '../../store/api-actions';
import { getProducts } from '../../store/reducers/Products/selectors';

function App(): JSX.Element {
  const products = useAppSelector(getProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductsAction());
  }, [dispatch]);

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
