import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AddProduct from "./pages/addproduct/AddProduct";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Product from "./pages/product/Product";

function App() {
  const state = {
    donanimArsivi: [
      {
        id: 1,
        title: "KLAVYE",
        image:
          "https://i.ytimg.com/vi/-uqkKf6gw38/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAW9XuY5CQiwbgk-eOYrdgmsY_sSg",
        info: "BU FİYATA DAHA İYİ OYUNCU EKİPMANLARI YOK",
        adet: 1,
      },
      {
        id: 2,
        title: "MASAÜSTÜ BİLGİSAYAR",
        image:
          "https://i.ytimg.com/vi/g2B8v6UzwGU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCvcDtTcWU8Kd5VnyEp-CwUkUIlDQ",
        info: "MONİTÖR DAHİL FİYAT PERFORMANS OYUNCU BİLGİSAYARI",
        adet: 1,
      },
      {
        id: 3,
        title: "MASAÜSTÜ BİLGİSAYAR",
        image:
          "https://i.ytimg.com/vi/P56O3uK93qQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDv32wUZjcVOqQ3UTKc1YgZyiqZcg",
        info: "6999 TL F/P KRALI TOPLAMA OYUN BİLGİSAYARI",
        adet: 1,
      },
      {
        id: 4,
        title: "EKRAN KARTI",
        image:
          "https://i.ytimg.com/vi/C15ZrrUOjq4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBFo3avZ4OjsgN7JGPMIrqADVZUfw",
        info: "BU RTX 4080 BİR HARİKA DOSTUM - AMA KEŞKE 16GB OLMASAYDI",
        adet: 1,
      },
      {
        id: 5,
        title: "MOUSE",
        image:
          "https://i.ytimg.com/vi/eaXq5ok0Ez0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDB3YAjvJfyN49MBAnlrV3xUPrBnQ",
        info: "ADAMLAR HİLE GİBİ OYUNCU FARESİ YAPMIŞ",
        adet: 1,
      },
      {
        id: 6,
        title: "AMD İŞLEMCİ",
        image:
          "https://i.ytimg.com/vi/O7bhOzpPuPc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkeiy_VF98oBpFprK5XcdNP9J9gQ",
        info: "AMD RESMEN INTEL İLE DALGA GEÇİYOR",
        adet: 1,
      },
    ],
    kucukBurjuvazi: [
      {
        id: 1,
        title: "RENAULT CLİO",
        image:
          "https://i.ytimg.com/vi/79K5wWxW4QA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBk5UBL4Sced4pk3AwpIuTBmCIOmw",
        info: "BAYANDAN 2015 MODEL BMW 3.2O ARAÇ ",
        adet: 1,
      },
      {
        id: 2,
        title: "RANGE ROVER",
        image:
          "https://i.ytimg.com/vi/t8NdCYws5fo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-LmYfkKKOIYvYBCXv8iZVn-Bm9g",
        info: "BAYANDAN 2018 MODEL RANGE ROVER SPORT ",
        adet: 1,
      },
      {
        id: 3,
        title: "VOLKSWAGEN POLO",
        image:
          "https://i.ytimg.com/vi/4YvjZSoLHD0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBBH_-qOycm-gpy--qbt8im7u92AA",
        info: "VOLKSWAGEN POLO 1.0 VE 72 BEYGİR ARAÇ",
        adet: 1,
      },
      {
        id: 4,
        title: "VOLKSWAGEN GOLF",
        image:
          "https://i.ytimg.com/vi/nCwTpwGER14/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD8iF-VuHwRwzNVdqlGNHZjx49kKA",
        info: "SİNOPTAN VW GOLF MANUEL 1.2 BENZİNLİ ARAÇ",
        adet: 1,
      },
      {
        id: 5,
        title: "VOLKSWAGEN CADDY",
        image:
          "https://i.ytimg.com/vi/cDIsb7LYWDY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYeEX6Qj9flSYVccAD4-7i-HkOeA",
        info: "2018 MODEL DİZEL 180 BEYGİR VOLKSWAGEN CADDY",
        adet: 1,
      },
      {
        id: 6,
        title: "BMW 4.20 CABRİO",
        image:
          "https://i.ytimg.com/vi/LwY1mR2XxdQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7arhIWB55Mb53NPHMpdlBREEeiw",
        info: "2016 MODEL BENZİNLİ BMW 4.20 CABRİO M-SPORT ",
        adet: 1,
      },
    ],
  };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home donanimArsivi={state.donanimArsivi} kucukBurjuvazi={state.kucukBurjuvazi}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/donanim-arsivi" element={<Product products={state.donanimArsivi} title={"Donanım Arşivi İlanları"}/>} />
        <Route path="/kucuk-burjuvazi" element={<Product products={state.kucukBurjuvazi} title={"Küçük Burjuvazi İlanları"}/>} />
        <Route path="/add" element={<AddProduct />} />s
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
