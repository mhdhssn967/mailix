import OQ from "../assets/OQ.png";
import "./Mail.css";
import seal from "../assets/seal.png";
import React, { useEffect, useRef, useState } from "react";

const ServiceWorks = ({
  pageRefs,
  date,
  validUntil,
  name,
  institutionName,
  addressLine1,
  addressLine2,
  quantity,
  price,
  gstPrice,
  gstForOneYear,
  monthTotal,
  yearTotal,
  yearlyPrice,
  discount,
  discountedPrice,
  oneTimeGST,
  oneTimeTotal,
  complimentaryProducts,
  unitPrice,
  setQuantity,
  projectTitle
}) => {
  const priceSection = useRef(null);
  useEffect(() => {
    if (price) {
      priceSection.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [price]);

  setQuantity(1)

  const formatIndianCurrency = (input) => {
  // Remove commas and whitespace
  const cleaned = input.toString().replace(/,/g, '').trim();

  // Convert to number
  const num = Number(cleaned);

  // Validate number
  if (isNaN(num)) return "Invalid number";

  // Format in Indian locale
  return new Intl.NumberFormat('en-IN').format(num);
};

const [percentageValues,setPercentageValues]=useState({thirty:0,fifty:0,twenty:0})

const [cleanTotal,setCleanTotal]=useState(0)
useEffect(()=>{
const cleaned = oneTimeTotal.toString().replace(/,/g, '').trim();
  const num = Number(cleaned);
  setCleanTotal(num)
},[oneTimeTotal])



useEffect(() => {
  if (cleanTotal) {
    const thirtyVal = cleanTotal * 0.3;
    const fiftyVal = cleanTotal * 0.5;
    const twentyVal = cleanTotal * 0.2;

    setPercentageValues({
      thirty: formatIndianCurrency(thirtyVal),
      fifty: formatIndianCurrency(fiftyVal),
      twenty: formatIndianCurrency(twentyVal),
    });
  }
}, [cleanTotal]);
  return (
    <>
      <div className="container-mail-page">
        <h2>Page 1</h2>
        <div className="page" ref={(el) => (pageRefs.current[0] = el)}>
          <div className="mail-header">
            <img src={OQ} alt="" />
            <div className="adress">
              <p>
                <strong>OQULIX Pvt. Ltd.</strong> <br />
                14/291 N, Suite 48M 1st Floor,
                <br /> A Square Building,
                <br />
                Edappally ,Edathala P O,
                <br />
                Ernakulam, Kerala, 683561
                <br />
                <i className="fa-solid fa-phone"></i> +91 9447433005
                <br />
                <i className="fa-solid fa-envelope"></i> contact@oqulix.com
                <br />
                CIN: U62099KL2023PTC084540
              </p>
            </div>
          </div>
          <div className="main-page">
            <div className="main-page-heading">
              <div className="left">
                <h1>Quotation</h1>
                <p>Valid until {validUntil}</p>
              </div>
              <p>{date || "Date"}</p>
            </div>
            {/* to adress */}
            <div className="to-adress">
              <p>
                To,
                {name && (
                  <>
                    {" "}
                    <br />
                    <strong>{name || "Recipient Name"}</strong>
                  </>
                )}{" "}
                <br />
                <strong>{institutionName || "Institution Name"}</strong> <br />
                {addressLine1 || "Address Line 1"} <br />
                {addressLine2 || "Address Line 2"}
              </p>
            </div>
            <div className="to-adress">
              <p>
                From, <br />
                <strong> OQULIX PVT. LTD</strong> <br />
                Suite 48M 1st Floor, A Square Building, <br />
                Edappally, Edathala P O, Ernakulam, Kerala <br />
                683561
              </p>
            </div>

            {/* mail */}
            <div className="mail-content">
              <p>Dear {institutionName}, </p>
              <p>
                Thank you for choosing <strong>Oqulix</strong>. We are excited to
                work with you on the <strong>{projectTitle || 'Project'}</strong> and
                are committed to delivering effective and reliable solutions
                tailored to your needs. As discussed, our focus will be on
                providing high-quality services that enhance the overall
                performance and user experience. We aim to ensure smooth
                collaboration and timely delivery throughout the course of this
                engagement.  
              </p>
              <p>
                 <br /> Thank you for
                considering our proposal.
              </p>
            </div>
            <div className="regards">
              <p>
                Regards <br />
                Team <strong>OQULIX</strong>
              </p>
              <div className="seal-div">
                <img className="seal-img" src={seal} alt="" />
              </div>
            </div>
          </div>

          <div className="page-footer">
            <a href="https://www.oqulix.com">www.oqulix.com</a>
          </div>
        </div>

        {/* page 2 */}
        <h2>Page 2</h2>
        <div className="page" ref={(el) => (pageRefs.current[1] = el)}>
          <div className="mail-header" ref={priceSection}>
            <img src={OQ} alt="" />
            <div className="adress">
              <p>
                <strong>OQULIX Pvt. Ltd.</strong> <br />
                14/291 N, Suite 48M 1st Floor,
                <br /> A Square Building,
                <br />
                Edappally ,Edathala P O,
                <br />
                Ernakulam, Kerala, 683561
                <br />
                <i className="fa-solid fa-phone"></i> +91 9447433005
                <br />
                <i className="fa-solid fa-envelope"></i> contact@oqulix.com
                <br />
                CIN: U62099KL2023PTC084540
              </p>
            </div>
          </div>
          <div className="main-page">
            <div className="main-page-heading">
              <div className="left">
                <h1>Item Description</h1>
              </div>
              <p>{date || "Date"}</p>
            </div>

            {/* <div className="quotation-table-div">
              <table className="quotation-table">
                <thead>
                  <tr>
                    <th>ITEM</th>
                    <th>TIME(WEEKS)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>HAPPY MOVES - STANDARD</td>
                    <td>{quantity || "Quantity"}</td>
                  </tr>
                </tbody>
              </table>
            </div> */}

            {complimentaryProducts.length > 0 && (
              <div className="quotation-table-div">
                <table className="quotation-table">
                  <thead>
                    <tr>
                      <th>ITEM</th>
                      <th>TIME (WEEKS)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {complimentaryProducts.map((item, index) => (
                      <tr key={index}>
                        <td style={{ whiteSpace: 'pre-line' }} >{item.productName}</td>
                        <td >{item.productQuantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <table className="total-table">
              <tbody>
                <tr>
                  <td>SUBTOTAL</td> <tr>INR {price}</tr>
                </tr>
                {discount != 0 && (
                  <>
                    <tr className="discount">
                      <td>DISCOUNT</td> <tr>INR {discount}</tr>
                    </tr>
                    <tr className="discount-total">
                      <td>DISCOUNTED PRICE</td> <tr>INR {discountedPrice}</tr>
                    </tr>
                  </>
                )}
                <tr>
                  <td>GST 18%</td> <tr>INR {oneTimeGST}</tr>
                </tr>
                <tr className="total-price">
                  <td>TOTAL PRICE</td>
                  <td>INR {oneTimeTotal}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="page-footer">
            <a href="https://www.oqulix.com">www.oqulix.com</a>
          </div>
        </div>

        {/* page 3 */}
        <h2>Page 3</h2>
        <div className="page" ref={(el) => (pageRefs.current[2] = el)}>
          <div className="mail-header">
            <img src={OQ} alt="" />
            <div className="adress">
              <p>
                <strong>OQULIX Pvt. Ltd.</strong> <br />
                14/291 N, Suite 48M 1st Floor,
                <br /> A Square Building,
                <br />
                Edappally ,Edathala P O,
                <br />
                Ernakulam, Kerala, 683561
                <br />
                <i className="fa-solid fa-phone"></i> +91 9447433005
                <br />
                <i className="fa-solid fa-envelope"></i> contact@oqulix.com
                <br />
                CIN: U62099KL2023PTC084540
              </p>
            </div>
          </div>
          <div className="main-page">
            <div className="main-page-heading">
              <div className="left">
                <p></p>
              </div>
              <p>{date || "Date"}</p>
            </div>

            <div className="license-agreement">
              <h2 style={{ textDecoration: "underline", textAlign: "center" }}>
                PAYMENT TERMS
              </h2>

            
              <ol> <li>
  <strong>Advance Payment (Project Confirmation)</strong>
  <ul>
    <li>
      30% (INR {percentageValues.thirty}) of the total project cost shall be payable upon confirmation of the project. This amount will serve as an advance payment and is required before the commencement of initial development work. Work will begin once this payment is received.
    </li>
  </ul>
</li>
 <li> <strong>Visualization Presentation Payment (Development Milestone)</strong> <ul> <li> 50% (INR {percentageValues.fifty}) of the total project cost shall be due upon completion of the core development stage, including all deliverables as per the agreed scope. This payment must be made prior to the formal presentation or review of the developed components. </li> </ul> </li> <li> <strong>Project Completion Payment (Before Delivery)</strong> <ul> <li> The remaining 20% (INR {percentageValues.twenty}) of the total project cost shall be payable upon completion of all final deliverables and functionalities. This payment is required before the final handover or deployment of the project. </li> </ul> </li> </ol>
            </div>
      <h3 style={{marginTop:'380px',textAlign:'center'}}>Please make the payments within the specified timelines mentioned in the payment terms.</h3>
          </div>
          <div className="page-footer">
            <a href="https://www.oqulix.com">www.oqulix.com</a>
          </div>
        </div>

        {/* Page 4 */}
        <h2>Page 4</h2>
        <div className="page" ref={(el) => (pageRefs.current[3] = el)}>
          <div className="mail-header">
            <img src={OQ} alt="" />
            <div className="adress">
              <p>
                <strong>OQULIX Pvt. Ltd.</strong> <br />
                14/291 N, Suite 48M 1st Floor,
                <br /> A Square Building,
                <br />
                Edappally ,Edathala P O,
                <br />
                Ernakulam, Kerala, 683561
                <br />
                <i className="fa-solid fa-phone"></i> +91 9447433005
                <br />
                <i className="fa-solid fa-envelope"></i> contact@oqulix.com
                <br />
                CIN: U62099KL2023PTC084540
              </p>
            </div>
          </div>
          <div className="main-page">
            <div className="main-page-heading">
              <div className="left">
                <p></p>
              </div>
              <p>{date || "Date"}</p>
            </div>

            <div className="license-agreement">
              <h2 style={{ textDecoration: "underline", textAlign: "center" }}>
                TERMS AND CONDITIONS
              </h2>
<ol>
    
                 <li>
                      <strong>Ownership Rights </strong><br />
        All content, assets, and deliverables developed as part of this project shall remain the sole property of the client.
                 </li>
    
    <li>
        <strong>Confidentiality</strong> <br />
        Both parties agree to maintain strict confidentiality regarding all project-related information, including proprietary data, technical details, and communication. No such information shall be disclosed to any third party without prior written consent.
    </li>
    
    <li>
        <strong>Scope & Additional Work</strong> <br />
        Any features, changes, or requests not explicitly included in the agreed scope of work or quotation will be treated as additional work and may incur extra charges. Such requests will be reviewed and quoted separately before execution.
    </li>
</ol>
            </div>
          </div>
          <div className="page-footer">
            <a href="https://www.oqulix.com">www.oqulix.com</a>
          </div>
        </div>

        {/* Page 5 */}
      

        {/* Page 6 */}

        <h2>Page 6</h2>
        <div className="page" ref={(el) => (pageRefs.current[5] = el)}>
          <div className="mail-header">
            <img src={OQ} alt="" />
            <div className="adress">
              <p>
                <strong>OQULIX Pvt. Ltd.</strong> <br />
                14/291 N, Suite 48M 1st Floor,
                <br /> A Square Building,
                <br />
                Edappally ,Edathala P O,
                <br />
                Ernakulam, Kerala, 683561
                <br />
                <i className="fa-solid fa-phone"></i> +91 9447433005
                <br />
                <i className="fa-solid fa-envelope"></i> contact@oqulix.com
                <br />
                CIN: U62099KL2023PTC084540
              </p>
            </div>
          </div>
          <div className="main-page">
            <div className="main-page-heading">
              <div className="left">
                <p></p>
              </div>
              <p>{date || "Date"}</p>
            </div>

            <div className="license-agreement end-statement-div">
              <div>
                <h2
                  style={{ textDecoration: "underline", textAlign: "center" }}
                >
                  BANK ACCOUNT DETAILS
                </h2>
                <h3>Please find our bank details below for the payment</h3>
                <ul className="bank-details">
                  <li>- Bank Name: HDFC BANK</li>
                  <li>- Account Holder: OQULIX PVT. LTD</li>
                  <li>- Account Number: 50200090596672</li>
                  <li>- IFSC Code: HDFC0004587</li>
                </ul>
              </div>

              <div className="end-statement">
                <p>
                  <strong>
                    Thank you for choosing OQULIX. We are excited about the prospect of contributing
 to the success of {institutionName || 'Your company'}
                  </strong>
                </p>
            
              </div>
            </div>
          </div>
          <div className="page-footer">
            <a href="https://www.oqulix.com">www.oqulix.com</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceWorks;