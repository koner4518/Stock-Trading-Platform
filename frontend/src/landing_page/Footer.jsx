import React from 'react';

function Footer() {
    return ( 
        <footer style={{backgroundColor: "rgb(250,250,250)"}}>
        <div className="container">
            <div className="row mt-5 p-5">
                <div className="col">
                    <img src="media/images/logo.svg" alt="" style={{width: "55%", marginBottom: "1rem"}}/>
                    <p style={{fontSize: "16px"}}>&copy; 2010 - 2026, Zerodha Broking Ltd. <br /> All rights reserved.</p>
                </div>
                <div className="col" style={{lineHeight: "2"}}>
                    <h4>Account</h4>
                    <a className="footer-link" href='#'>Open demat account</a><br></br>
                    <a className="footer-link" href='#'>Minor demat account</a><br></br>
                    <a className="footer-link" href='#'>NRI demat account</a><br></br>
                    <a className="footer-link" href='#'>Commodity</a><br></br>
                    <a className="footer-link" href='#'>Dematerialisation</a><br></br>
                    <a className="footer-link" href='#'>Fund transfer</a><br></br>
                    <a className="footer-link" href='#'>MTF</a><br></br>
                    <a className="footer-link" href='#'>Referral program</a>
                </div>
                <div className="col" style={{lineHeight: "2"}}>
                    <h4>Support</h4>
                    <a className="footer-link" href=""> Contact us </a> <br />
                    <a className="footer-link" href=""> Support portal </a> <br />
                    <a className="footer-link" href=""> How to file a complaint? </a> <br />
                    <a className="footer-link" href=""> Status of your complaints </a> <br />
                    <a className="footer-link" href=""> Bulletin </a> <br />
                    <a className="footer-link" href=""> Circular </a> <br />
                    <a className="footer-link" href=""> Z-Connect blog </a> <br />
                    <a className="footer-link" href=""> Downloads </a> <br />
                </div>
                <div className="col" style={{lineHeight: "2"}}>
                    <h4>Company</h4>
                    <a className="footer-link" href=""> About </a> <br />
                    <a className="footer-link" href=""> Philosophy </a> <br />
                    <a className="footer-link" href=""> Press & media </a> <br />
                    <a className="footer-link" href=""> Careers </a> <br />
                    <a className="footer-link" href=""> Zerodha Cares (CSR) </a> <br />
                    <a className="footer-link" href=""> Zerodha.tech </a> <br />
                    <a className="footer-link" href=""> Open source </a> <br />
                </div>
            </div>
            <div className='mt-5 fs-8 text-muted footer-p'>
                <p className='fs-6'>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="" className='fs-6'>complaints@zerodha.com</a>, for DP related to <a href="" className='fs-6'>dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                <p>Procedure to file a complaint on <a href="" className='fs-6'>SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                <a href="" className='fs-6'>Smart Online Dispute Resolution | Grievances Redressal Mechanism</a>
                <p className='fs-6'>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                <p className='fs-6'>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                <p className='fs-6'>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href="" className='fs-6'>create a ticket here</a>.</p>
                <p className='fs-6'>*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.</p>
            </div>

            <div className="row mb-4 mt-4">
                <div className="col text-center">
                    <a href="" className="footer-link me-3 fs-6">NSE</a>
                    <a href="" className="footer-link me-3 fs-6">BSE</a>
                    <a href="" className="footer-link me-3 fs-6">MCX</a>
                    <a href="" className="footer-link me-3 fs-6">Terms & conditions</a>
                    <a href="" className="footer-link me-3 fs-6">Policies & procedures</a>
                    <a href="" className="footer-link me-3 fs-6">Privacy policy</a>
                    <a href="" className="footer-link me-3 fs-6">Disclosure</a>
                    <a href="" className="footer-link me-3 fs-6">For investor's attention</a>
                    <a href="" className="footer-link fs-6">Investor charter</a>
                </div>
            </div>
        </div>

        </footer>
     );
}

export default Footer;