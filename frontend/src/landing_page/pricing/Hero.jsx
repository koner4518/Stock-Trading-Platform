export default function Hero(){
    return (
        <div className="container">
            <div className="row text-center p-3 mt-5">
                <h2 style={{opacity: "0.9"}}>Pricing</h2>
                <p className="text-muted p-3">Free equity investments and flat &#8377;20 traday and F&60 trades</p>
            </div>

            <div className="row p-5 mt-5" style={{opacity: "0.9"}}>
                <div className="col-4">
                    <img src="media/images/pricing0.svg" alt="" style={{width: "65%"}}/>
                    <h2 className="fs-4 ps-3 pb-3">Free equity delivery</h2>
                    <p className="pe-5" style={{fontSize: "17px"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4">
                    <img src="media/images/intradayTrades.svg" alt="" style={{width: "65%"}}/>
                    <h2 className="fs-4 pe-5 pb-3">Intraday and F&O trades</h2>
                    <p className="pe-5" style={{fontSize: "17px"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4">
                    <img src="media/images/pricing0.svg" alt="" style={{width: "65%"}}/>
                    <h2 className="fs-4 ps-5 pb-3">Free direct MF</h2>
                    <p className="pe-5" style={{fontSize: "17px"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    )
}