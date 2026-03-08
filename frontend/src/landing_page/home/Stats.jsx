function Stats() {
    return ( 
        <div className="container p-5">
            <div className="row p-5">
                <div className="col-6 p-5">
                    <h2 className="mb-5 fs-2">Trust with confidence</h2>
                    <h2 className="fs-4">Customer-first always</h2>
                    <p className="text-muted mb-4">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    <h2 className="fs-4">No spam or gimmicks</h2>
                    <p className="text-muted mb-4">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="#">Our philosophies.</a></p>
                    <h2 className="fs-4">The Zerodha universe</h2>
                    <p className="text-muted mb-4">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className="fs-4">Do better with money</h2>
                    <p className="text-muted mb-4">With initiatives like <a href="">Nudge</a> and <a href=""> Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col-6 p-5">
                    <img src="media/images/ecosystem.png" style={{width: "140%"}} alt="" />
                    <div className="text-center p-5">
                        <a href="" className="m-4 fs-6 ms-4">Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                        <a href="" className="fs-6 ms-3">Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;