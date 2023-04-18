import { lazy } from 'solid-js';
import { Routes, Route } from '@solidjs/router';
import { MainLayout } from './layouts';
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query';

const Products = lazy(() => import('./pages/products'));
const Home = lazy(() => import('./pages/home'));
const SingleProduct = lazy(() => import('./pages/single-product'));

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/products/:productId' component={SingleProduct} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
