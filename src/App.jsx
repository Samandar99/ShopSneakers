import Drawer from "./components/Drawer";
import Card from "./components/Card";
import Header from "./components/Header";

const arr = [
  { name: "Мужские Кроссовки Nike Blazer Mid Suede", price: 12999 },
  { name: "Мужские Кроссовки Nike Air Max 270", price: 78892 },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex aling-center justify-between mb-40">
          <h1>Все крассовоки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex">
          <Card arr={arr} />
        </div>
      </div>
    </div>
  );
}

export default App;
