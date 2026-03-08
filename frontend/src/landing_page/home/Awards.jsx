function Awards() {
    return ( 
        <div className="container p-5 mb-5">
            <div className="row">
                <div className="col-6">
                    <img src="media/images/largestBroker.svg" alt="" />
                </div>

                <div className="col-6 mt-3">
                    <h2>Largest stock broker in India</h2>
                    <p className="mb-3">2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className="row">
                        <div className="col-6 p-5">
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6 p-5">
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. securities</li>
                            </ul>
                        </div>
                        <img src="media/images/pressLogos.png" alt="" style={{width: "90%"}}/>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Awards;