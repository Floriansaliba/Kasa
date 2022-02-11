import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import HousingList from "../components/HousingList/HousingList";
import Footer from "../components/Footer/Footer";

const Home = ()=>{
    return(
        <div>
            <Header />
            <Banner />
            <HousingList />
            <Footer />
        </div>
    )
}

export default Home