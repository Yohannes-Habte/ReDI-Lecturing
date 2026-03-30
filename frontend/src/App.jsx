import { pageSection, typography } from "./styles/global";
import ProductList from "./components/ProductList";

const App = () => {
  return (
   <section className={pageSection.base}>
      <h1 className={typography.heading}>Hello, React!</h1>

      <ProductList />
    </section>
  );
};

export default App;
