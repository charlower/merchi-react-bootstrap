// Manually initialising merchi object like so:
const merchi = window.SDK.merchi(
  "https://api.merchi.co/",
  "https://websockets.merchi.co/"
);
// Example fetching some products
function onSuccess(products) {
  console.log("Ok, got some products!");
  console.log(products.length);
  for (const product of products) {
    console.log(product);
  }
}

const onError = console.error.bind(console);

const parameters = { inDomain: 103 }; // inDomain accepts a domain ID to filter products by domain

merchi.products.get(onSuccess, onError, parameters);

function App() {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="d-flex flex-column align-items-center">
        <h1 className="">Merchi React Bootstrap</h1>
        <p className="">
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    </div>
  );
}

export default App;
