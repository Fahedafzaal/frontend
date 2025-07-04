import productImageMobile from "/image-product-mobile.jpg";
import productImageDesktop from "/image-product-desktop.jpg";
import cartIcon from '/icon-cart.svg'

function App() {
  return (
    <>
      <main>
        <div className="bg-cream flex items-center justify-center h-screen w-full overflow-auto">
          <div className="card bg-white rounded-lg overflow-hidden m-2 sm:m-4 max-w-sm lg:max-w-2xl lg:flex">
            <div className="card-image lg:w-1/2 lg:h-full">
              <picture className="lg:h-full">
                <source
                  srcSet={productImageDesktop}
                  media="(min-width: 1024px)"
                />
                <img
                  className="w-full h-full object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-t-none"
                  src={productImageMobile}
                  alt="Product Image"
                />
              </picture>
            </div>
            <div className="card-content flex flex-col gap-4 p-6 lg:w-1/2 lg:justify-center lg:space-y-4 lg:p-8">
              <div className="card-content-title">
                <h1 className="font-montserrat text-sm tracking-widest font-medium text-gray uppercase">
                  Perfume
                </h1>
                <h2 className="font-fraunces text-2xl md:text-4xl font-bold lg:pt-4">
                  Gabrielle Essence Eau De Parfum
                </h2>
              </div>
              <div className="card-content-description">
                <p className="font-montserrat text-sm lg:text-base font-medium text-gray">
                  A floral, solar and voluptuous interpretation composed by
                  Olivier Polge, Perfumer-Creator for the House of CHANEL.
                </p>
              </div>
              <div className="card-content-price flex items-center gap-4">
                <h2 className="font-fraunces text-green-500 text-2xl md:text-3xl">
                  $149.99
                </h2>
                <p className="text-gray line-through text-sm">$169.99</p>
              </div>
              <div className="card-content-button">
                <button className="bg-green-500 hover:bg-green-700 text-white font-montserrat py-2 px-4 rounded-lg w-full flex items-center justify-center gap-3">
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
