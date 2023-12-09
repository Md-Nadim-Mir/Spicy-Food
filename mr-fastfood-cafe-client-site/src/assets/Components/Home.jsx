import Banner from "./Banner";
import Brand from "./Brand";
import Chef from "./Chef";
import Delivery from "./Delivery";
import Sample from "./Sample";


const gradientStyle = {
    background: 'linear-gradient(to right,#ac8d9a, #557c93)',
    /* Other CSS properties */

};

const Home = () => {
    return (

        // style={gradientStyle}

        <div>

            <Banner></Banner>

            <Brand></Brand>
            <Sample></Sample>
            <Chef></Chef>

            <Delivery></Delivery>
        </div>
    );
};

export default Home;