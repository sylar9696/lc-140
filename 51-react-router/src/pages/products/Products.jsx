import { useState, useEffect } from 'react';
// import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);

  const url = import.meta.env.VITE_ENDPOINT_URL;

  useEffect(() => {
    console.log(url);
  });

  useEffect(() => {
    // axios
    //   .get(url)
    //   .then((res) => setProducts(res.data));

    fetch(`${url}`, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {products.map((elem) => {
            return (
              <div key={elem.id} className="col-4">
                <NavLink to={`/products/${elem.id}`}>
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">{elem.name}</h4>
                      <p className="card-text">{elem.ingredients}</p>
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
