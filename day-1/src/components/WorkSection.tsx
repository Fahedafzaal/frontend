import CardComponent from "./Card";
import { work } from "../data";

function WorkSection() {
    return (
        <section className="w-full max-w-[670px]">
            <h1 className="text-[44px] font-black text-start">Work</h1>
            <div>
                {work.map((item) => (
                    <CardComponent 
                    key={item.title}
                    image={item.image}
                    title={item.title} 
                    year={item.year}
                    category={item.category}
                    description={item.description} 
                    />
                ))}
            </div>
        </section>
    );
}

export default WorkSection;