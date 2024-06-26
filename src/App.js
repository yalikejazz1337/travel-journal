import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Card from "./components/card";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Card
          src="https://source.unsplash.com/WLxQvbMyfas"
          location="JAPAN"
          title="Mount Fuji"
          date="12 Jan, 2021 - 24 Jan, 2021"
          description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        />
        <Card
          src="https://source.unsplash.com/JmuyB_LibRo"
          location="AUSTRALIA"
          title="Sydney Opera House"
          date="05 Mar, 2021 - 15 Mar, 2021"
          description="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings"
        />
        <Card
          src="https://source.unsplash.com/3PeSjpLVtLg"
          location="NORWAY"
          title="Geirangerfjord"
          date="01 Oct, 2021 - 18 Nov, 2021"
          description="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
        />
      </div>
    </div>
  );
}

export default App;
