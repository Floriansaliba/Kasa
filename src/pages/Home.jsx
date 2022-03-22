import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import HousingList from "../components/HousingList/HousingList";
import Footer from "../components/Footer/Footer";
import "./Home.css"

const Home = ()=>{
    return(
        <div className="home-frame">
            <Header />
            <Banner />
            <HousingList />
            <Footer />
        </div>
    )
}

export default Home