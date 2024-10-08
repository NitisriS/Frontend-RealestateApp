import "./homepage.scss";
import SearchBar from "../../components/search/searchbar";


function Homepage(){
    return(
        <div className="homepage">
            <div className="textContainer">
                <div className="wrapper">
                <h1 className="title">Find Real Estate & Get Your Dream Place. 
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptate ipsam unde deleniti consectetur minima omnis illum, dolore quaerat architecto necessitatibus cum iste praesentium non nihil ullam voluptatem atque est?</p>
                <SearchBar />
                <div className="boxes">
                    <div className="box">
                        <h1>16+</h1>
                        <h2>Years of Experience</h2>
                    </div>
                    <div className="box">
                        <h1>200</h1>
                        <h2>Award Gained</h2>
                    </div>
                    <div className="box">
                        <h1>1200+</h1>
                        <h2>Property Ready</h2>
                    </div>
                </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="background-image" />
            </div>

        </div>
    )
}

export default Homepage;