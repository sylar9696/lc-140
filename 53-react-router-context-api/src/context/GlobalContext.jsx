import { createContext, useState, useContext } from 'react';
import axios from 'axios';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    
  const [products, setProducts] = useState([]);

  const [singlePizza, setSinglePizza] = useState({
    id: '',
    name: '',
    image: '',
    ingredients: [],
  });

  const url = import.meta.env.VITE_ENDPOINT_URL;

  //chimate api
  //chimata per ottenere tutte le pizze
  const fetchData = () => {
    axios.get(url).then((res) => setProducts(res.data));
  };

  //chimata api per la singola pizza
  const getPizzaId = (id) => {
    axios.get(`${url}/${id}`).then((res) => setSinglePizza(res.data));
  };

  const value = {
    products,
    singlePizza,
    fetchData,
    getPizzaId
  }


  return(
    <GlobalContext.Provider value={ value }>
        {children}
    </GlobalContext.Provider>
  )

};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
