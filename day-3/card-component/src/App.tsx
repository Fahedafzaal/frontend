import productImageMobile from "/image-product-mobile.jpg";
import productImageDesktop from "/image-product-desktop.jpg";
import cartIcon from '/icon-cart.svg'

function App() {
  return (
    <>
      <main>
        <div className="container bg-cream flex items-center justify-center h-screen">
          <div className="card bg-white rounded-lg overflow-hidden m-4 max-w-md">
            <div className="card-image">
              <picture>
                <source
                  srcSet={productImageDesktop}
                  media="(min-width: 1440px)"
                />
                <img
                  className="rounded-t-lg"
                  src={productImageMobile}
                  alt="Product Image"
                />
              </picture>
            </div>
            <div className="card-content flex flex-col gap-4 p-6">
              <div className="card-content-title">
                <h1 className="font-montserrat text-sm tracking-widest font-medium text-gray uppercase">
                  Perfume
                </h1>
                <h2 className="font-fraunces text-2xl font-bold">
                  Gabrielle Essence Eau De Parfum
                </h2>
              </div>
              <div className="card-content-description">
                <p className="font-montserrat text-sm font-medium text-gray">
                  A floral, solar and voluptuous interpretation composed by
                  Olivier Polge, Perfumer-Creator for the House of CHANEL.
                </p>
              </div>
              <div className="card-content-price flex items-center gap-4">
                <h2 className="font-fraunces text-green-500 text-2xl">
                  $149.99
                </h2>
                <p className="text-gray line-through text-sm">$169.99</p>
              </div>
              <div className="card-content-button">
                <button className="bg-green-500 text-white font-montserrat py-2 px-4 rounded-lg w-full flex items-center justify-center gap-3">
                  <img src={cartIcon} className="w-4 h-4"/>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
