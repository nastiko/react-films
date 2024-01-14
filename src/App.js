import NavBar from "./components/NavBar"
import Main from "./components/Main"
import Footer from "./components/Footer"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Main
                key={item.id} // need to set unique id
                {...item} //don't need to write every value in object like these: img={item.coverImg} rating={item.stats.rating}
            />
        )
    })


    return (
        <div className="w-full h-screen bg-[#23252c]">
            <div className="w-full lg:w-[992px] h-screen bg-[#1a1b21] p-12 mx-auto">
                <NavBar/>
                <div className="flex overflow-auto gap-4">
                    {cards}
                </div>
                <Footer />
            </div>
        </div>
    );
}
