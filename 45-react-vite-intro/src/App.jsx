import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {

  //centralizzazione dei dati
  const slogan = "Molisana, pasta sana!"

  const links = [
    { id: 1, text: 'Home', url: '#', current: false },
    { id: 2, text: 'Prodotti', url: '#', current: true },
    { id: 3, text: 'Chi Siamo', url: '#', current: false },
    { id: 4, text: 'Contatti', url: '#', current: false },
  ];



  return (
    <>
      <Header slogan={slogan} links={ links }/>
      <Main />
      <Footer />
    </>
  )
}

export default App
