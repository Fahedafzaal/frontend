import Card from "./components/card";
import patternQuotation from "/bg-pattern-quotation.svg"
import { testimonials } from "./data";

function App() {
  return (
    <>
      <main className="flex flex-col gap-4 p-8 bg-gray-100 lg:h-screen">
        <div className="max-w-lg lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-8 lg:m-12 lg:max-w-[85rem] m-auto lg:mx-auto lg:my-auto">
          <Card
            name={testimonials[0].name}
            title={testimonials[0].title}
            headline={testimonials[0].headline}
            quote={testimonials[0].quote}
            image={testimonials[0].image}
            className="bg-purple-500 text-white order-1 col-span-2 relative"
          >
            <div className="hidden lg:block absolute top-0 right-20 bg-no-repeat bg-contain pointer-events-none z-0">
              <img src={patternQuotation} alt="pattern quotation" className="w-full h-full" />
            </div>
          </Card>
          <Card
            name={testimonials[1].name}
            title={testimonials[1].title}
            headline={testimonials[1].headline}
            quote={testimonials[1].quote}
            image={testimonials[1].image}
            className="bg-gray-500 text-white order-2"
          />
          <Card
            name={testimonials[2].name}
            title={testimonials[2].title}
            headline={testimonials[2].headline}
            quote={testimonials[2].quote}
            image={testimonials[2].image}
            className="bg-white text-black order-4"
          />
          <Card
            name={testimonials[3].name}
            title={testimonials[3].title}
            headline={testimonials[3].headline}
            quote={testimonials[3].quote}
            image={testimonials[3].image}
            className="bg-slate text-white col-span-2 order-5"
          />
          <Card
            name={testimonials[4].name}
            title={testimonials[4].title}
            headline={testimonials[4].headline}
            quote={testimonials[4].quote}
            image={testimonials[4].image}
            className="bg-white text-black row-span-2 order-3"
          />
        </div>
      </main>

      <div className="attribution text-center text-lg text-gray-400">
        Challenge by <a href="https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/fahedafzaal" target="_blank">Fahed Afzaal</a>.
      </div>
    </>
  );
}

export default App;
