import { Link } from "react-router-dom"

export default function Universe(){
    return(
        <div className="container mt-5">
            <div className=" row text-center" style={{opacity: "0.9", fontWeight: "450"}}>
                <h2 >The Zerodha Universe</h2>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                <div className="col-4 p-5">
                    <img src="media/images/zerodhaFundhouse.png" alt=""  style={{width: "50%"}}/>
                    <p className="p-3 text-muted" style={{fontSize: "15px"}}>Asset Management</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/images/sensibullLogo.svg" alt="" style={{width: "50%"}}/>
                    <p className="p-4 text-small text-muted" style={{fontSize: "15px"}}>Options trading Platform</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/images/goldenpiLogo.png" alt="" style={{width: "50%"}}/>
                    <p className="p-3 text-small text-muted" style={{fontSize: "15px"}}>Bonds Trading Platform</p>
                </div>

                <div className="col-4 p-5">
                    <img src="media/images/smallcaseLogo.png" alt=""  style={{width: "50%"}}/>
                    <p className="p-3 text-muted" style={{fontSize: "15px"}}>Asset Management</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/images/streakLogo.png" alt="" style={{width: "40%"}}/>
                    <p className="p-3 text-small text-muted" style={{fontSize: "15px"}}>Options trading Platform</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/images/dittoLogo.png" alt="" style={{width: "37%"}}/>
                    <p className="p-3 text-small text-muted" style={{fontSize: "15px"}}>Bonds Trading Platform</p>
                </div>
                <Link class="nav-link" aria-current="page" to="/signup"><button className="p-2 btn btn-primary mb-5" style={{width: "17%", margin: "0 auto", fontSize: "1.4rem"}}>Signup For Free</button></Link>
            </div>
        </div>
    )
}