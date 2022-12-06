import Drawer from "./components/Drawer";
import Card from "./components/Card";
import Header from "./components/Header";

const arr = [
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 1299,
    imageUrl: "/img/sneakers/image1.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 7892,
    imageUrl: "/img/sneakers/image2.jpg",
  },
  {
    name: "Мужские Кроссовки Jordan Air Jordan 11",
    price: 8482,
    imageUrl: "/img/sneakers/image3.jpg",
  },
  {
    name: "Мужские Кроссовки Jordan Air Jordan 11",
    price: 11299,
    imageUrl: "/img/sneakers/image4.jpg",
  },
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
          {arr.map((obj,index) => (
            <Card props={obj} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
