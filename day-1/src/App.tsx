import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import WorkSection from "./components/WorkSection";

function App() {


  return (
    <div className="max-w-[1440px] mx-auto min-h-screen flex flex-col">
      <HeaderComponent />
      <main className="flex flex-col items-center justify-center">
        <WorkSection />
      </main>
      <FooterComponent />
    </div>
  )
}

export default App
