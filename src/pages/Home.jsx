import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import HousingList from "../components/HousingList/HousingList";
import Footer from "../components/Footer/Footer";
import Dropdown from "../components/Dropdown/Dropdown";

const Home = ()=>{
    return(
        <div>
            <Header />
            <Banner />
            <HousingList />
            <Footer />
            <Dropdown title="titre" text="efaefagargzergzergzrgzergzergzre"/>
        </div>
    )
}

export default Home