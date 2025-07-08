import Card from './components/Card';
import { cards } from './data';
// import cartIcon from '/icon-cart.svg'

function App() {
  return (
    <>
      <main className="flex flex-col gap-4 p-8">
        <div className="typography text-center mt-4">
          <h2>Reliable, efficient delivery</h2>
          <h1>Powered by Technology</h1>
          <p className="mt-3">Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
        </div>

        <div className="mt-6 flex flex-col gap-8">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
