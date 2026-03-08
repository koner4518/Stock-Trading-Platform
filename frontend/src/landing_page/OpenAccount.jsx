import { Link } from "react-router-dom";

function OpenAccount() {
    return ( 
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <h2 className="mt-5">Open a Zerodha account</h2>
                <p className='mt-4'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <Link class="nav-link" aria-current="page" to="/signup"><button className="p-2 btn btn-primary mb-5 mt-4" style={{width: "17%", margin: "0 auto", fontSize: "1.4rem"}}>Signup For Free</button></Link>
            </div>
        </div>
     );
}

export default OpenAccount;