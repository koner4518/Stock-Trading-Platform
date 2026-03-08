import { Link } from "react-router-dom";

function Hero() {
    return ( 
        <>
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <img src="media/images/homeHero.png" alt="hero image" className="mb-5"/>
                <h2 className="mt-5">Invest in everything</h2>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <Link class="nav-link" aria-current="page" to="/signup"><button className="p-2 btn btn-primary mb-5" style={{width: "17%", margin: "0 auto", fontSize: "1.4rem"}}>Signup For Free</button></Link>
            </div>
        </div>
        </>

     );
}

export default Hero;