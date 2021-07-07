import React, { useState, useEffect } from "react";

// Manually initialising merchi object like so:
const merchi = window.SDK.merchi(
  "https://api.merchi.co/",
  "https://websockets.merchi.co/"
);

function App() {
  const [productsState, setProductsState] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    await merchi.products.get(onSuccess, onError, parameters); // Fetch Merchi producs
  }, []);

  function onSuccess(products) {
    setProductsState(products);
    setLoading(false);
  }

  const onError = console.error.bind(console);

  const parameters = { inDomain: 103 }; // inDomain accepts a domain ID to filter products by domain

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="d-flex flex-column align-items-center">
        <h1 className="">Merchi React Bootstrap</h1>
        <p className="">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {loading ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          productsState.map((item, i) => {
            return <li key={i}>{item.name()}</li>;
          })
        )}
      </div>
    </div>
  );
}

export default App;
