export default function Team() {
  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center fs-4 mb-5" style={{ opacity: "0.9" }}>
          People
        </h2>
      </div>
      <div className="row">
        <div className="col-6 text-center mt-4">
          <img
            src="media/images/nithinKamath.jpg"
            alt=""
            style={{ borderRadius: "100%", width: "40%" }}
          />
          <h4 className="p-4 fs-5" style={{ opacity: "0.9" }}>
            Nithin Kamath
          </h4>
          <h5 className="fs-6" style={{ opacity: "0.8" }}>
            Founder, CEO
          </h5>
        </div>
        <div className="col-5 mt-4">
          <p style={{fontSize: "1rem"}}>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p style={{fontSize: "1rem"}}>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p style={{fontSize: "1rem"}}>Playing basketball is his zen.</p>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}
