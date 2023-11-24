import Banner from "../../Components/Banner/Banner";
import ExtraSection from "../../Components/ExtraSection/ExtraSection";
import HomeCategory from "../../Components/HomeCategory/HomeCategory";
import Membership from "../../Components/Membership/Membership";
import Nav from "../../Components/Nav/Nav";

const Home = () => {
    return (
      <div>
        <Nav></Nav>
        <Banner></Banner>
        <HomeCategory></HomeCategory>
        <ExtraSection></ExtraSection>
        <Membership></Membership>
      </div>
    );
};

export default Home;