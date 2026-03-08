export default function RightSection({imageURL, productName, productDescription, learnMore}){
    return (
        <div className="container">
            <div className="row">
                <div className="col-5 p-5 mt-5">
                    <h2 className="mt-5" style={{opacity: "0.95", fontSize: "25px"}}>{productName}</h2>
                    <p style={{opacity: "0.95", fontSize: "16px"}}>{productDescription}</p>
                    <a href={learnMore} style={{fontSize: "18px"}}>Learn more<i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-6 ps-5">
                    <img src={imageURL} alt="" />
                </div>
            </div>
        </div>
    )
}