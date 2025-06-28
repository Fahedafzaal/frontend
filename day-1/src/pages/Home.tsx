import profile from "../assets/profile.png";

function Home() {
    return (
        <>
            <section className="grid grid-cols-2 gap-x-20 items-center w-full p-24">
                <div className="space-y-6">
                    <h1 className="text-5xl font-bold text-start line-clamp-2">Hi, I am John,
                    Creative Technologist</h1>
                    <p className="text-base font-normal text-start line-clamp-3">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                        Velit officia consequat duis enim velit mollit. 
                        Exercitation veniam consequat sunt nostrud amet.</p>
                    <button className="text-xl font-medium text-white bg-(--color-secondary) w-52 h-11 px-4 py-2 my-2">
                        Download Resume
                    </button>
                </div>
                <div className="justify-self-end">
                    <img src={profile} alt="John Doe" />    
                </div>

            </section>

            <section className="w-full p-36 bg-(--color-quaternary)">

            </section>
        </>
    )
}

export default Home;