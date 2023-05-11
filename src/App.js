import './App.css';
import Products from './Components/Product/Products';
import { Layout } from './Layout';
import { PrivateRouter } from './PrivateRouter';

function App() {
  return (
    <div className="App">
    <Layout>
      <PrivateRouter/>
    </Layout>

    </div>
  );
}

export default App;
