export default function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}){
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-5 mt-5 mb-5">
                    <img src={imageURL} alt="" />
                </div>
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div className="col-4 p-5 mt-5 mb-5">
                    <h2 style={{opacity: "0.95", fontSize: "25px"}}>{productName}</h2>
                    <p style={{opacity: "0.95", fontSize: "16px"}}>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{fontSize: "18px"}}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
                        <a href={learnMore} style={{marginLeft: "60px", fontSize: "18px"}}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="mt-4">
                        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="" /></a>
                        <a href={appStore} style={{marginLeft: "28px"}}><img src="media/images/appstoreBadge.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}