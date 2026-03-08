export default function Hero(){
    return (
        <section className="container-fluid" id="supportHero">
            <div className="p-5 mt-5" id="supportWrapper">
                <p style={{fontSize: "24px"}}>Support Portal</p>
                <a href="" style={{color: "white", fontWeight: "400"}}>Track Tickets</a>
            </div>

            <div className="row " style={{marginLeft: "8%"}}>
                <div className="col-5 p-5">
                    <h2 className="fs-3">Search for an answer or browse help topics to create a ticket</h2>
                    <input className="mb-3 mt-3" type="text" placeholder="Eg: How do I open my account, How do I activate F&O..."/> <br />
                    <a href="">Track account opening</a>
                    <a href="">Track account activation</a>
                    <a href="">Intraday margins</a>
                    <a href="">Kite user manual</a>
                </div>
                <div className="col-1"></div>
                <div className="col-5 m-5 ">
                    <h2 className="fs-3">Featured</h2>
                    <ol style={{lineHeight: "2.2"}}>
                        <li><a href="">Current Takeovers and Delisting - January 2026</a></li>
                        <li><a href="">Latest Intraday Leverages - MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </section>
    )
}