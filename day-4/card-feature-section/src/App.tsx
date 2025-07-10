import Card from "./components/Card";
import { cards } from "./data";
// import cartIcon from '/icon-cart.svg'

function App() {
  return (
    <>
      <main className="flex flex-col gap-4 p-8">
        <div className="typography text-center mt-4">
          <h2>Reliable, efficient delivery</h2>
          <h1>Powered by Technology</h1>
          <p className="mt-3 max-w-xl mx-auto lg:mt-6">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>

        <div 
          className="
            mt-6 mx-auto
            flex flex-col gap-8
            lg:flex-row lg:items-center lg:mt-16
            ">
          <Card 
            title={cards[0]!.title}
            description={cards[0]!.description}
            icon={cards[0]!.icon}
            color={cards[0]!.color}
          />
          <div className="flex flex-col gap-8">
            <Card 
              title={cards[1]!.title}
              description={cards[1]!.description}
              icon={cards[1]!.icon}
              color={cards[1]!.color}
            />
            <Card 
              title={cards[2]!.title}
              description={cards[2]!.description}
              icon={cards[2]!.icon}
              color={cards[2]!.color}
            />
          </div>
          <Card 
            title={cards[3]!.title}
            description={cards[3]!.description}
            icon={cards[3]!.icon}
            color={cards[3]!.color}
          />
        </div>
      </main>
      <footer>
        <p className="attribution text-xs text-center mt-28">
          Challenge by <a href="https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK" target="_blank">Frontend Mentor</a>. 
          Coded by <a className="text-[#3e52a3]" href="https://github.com/Fahedafzaal">Fahed Afzaal</a>.
        </p>
      </footer>
    </>
  );
}

export default App;
