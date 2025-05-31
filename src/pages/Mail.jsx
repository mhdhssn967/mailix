import React, { useEffect, useRef } from "react";
import "./Mail.css";
import OQ from "../assets/OQ.png";
import seal from "../assets/seal.png";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


const Mail = ({pageRefs, date, validUntil, name, institutionName, addressLine1, addressLine2,quantity,price, gstPrice,gstForOneYear,monthTotal,yearTotal, yearlyPrice}) => {
  

  const priceSection=useRef(null)
  useEffect(() => {
  if (price) {
    priceSection.current?.scrollIntoView({ behavior: 'smooth' });
  }
}, [price]);
  

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
              <p>{date || 'Date'}</p>
            </div>
            {/* to adress */}
            <div className="to-adress">
              <p>
                To, <br />
                <strong>{name || 'Recipient Name'}</strong> <br />
                <strong className>  {institutionName || 'Institution Name'}</strong> <br />
                {addressLine1 || 'Address Line 1'} <br />
                {addressLine2 || 'Address Line 2'}
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
              <p>Dear Team, </p>
              <p>
                It was a pleasure demonstrating our flagship product, Happy
                Moves, at your esteemed center recently. We appreciate the
                opportunity to showcase how our innovative physiotherapy VR tool
                can enhance the rehabilitation experience for your patients,
                making their journey towards recovery more engaging and
                effective.
              </p>
              <p>
                {" "}
                Please find the detailed quotation enclosed with this letter. We
                believe that this is a fantastic opportunity for the{" "}
                <span>{institutionName ||'Institution Name'} </span> to
                integrate cutting-edge VR technology into your rehabilitation
                programs at an exceptional value. <br /> Thank you for
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
              <p>{date || 'Date'}</p>
            </div>

            <div className="quotation-table-div">
              <table className="quotation-table">
                <thead>
                  <tr>
                    <th>ITEM</th>
                    <th>QTY</th>
                    <th>PRICE(INR)</th>
                    <th>GST(18%)</th>
                    <th>TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>HAPPY MOVES -SUBSCRIPTION (Per Month)</td>
                    <td>{quantity || 'Quantity'}</td>
                    <td>{price || "Price"}</td>
                    <td>{gstPrice || 'GST'}</td>
                    <td>{monthTotal || 'Total'}</td>
                  </tr>
                  <tr>
                    <td>HAPPY MOVES -SUBSCRIPTION (For 1 Year)</td>
                    <td>{quantity || 'Quantity'}</td>
                    <td>{yearlyPrice || 'Price'}</td>
                    <td>{gstForOneYear || 'GST'}</td>
                    <td>{yearTotal || 'Total'}</td>
                  </tr>
                </tbody>
              </table>
              <p className="tip">
                By taking 1 year subscription you are saving flat INR 24,000/-
              </p>
            </div>
            <p
              style={{
                height: "550px",
                display: "flex",
                textAlign: "center",
                alignItems: "end",
              }}
            >
              Please note that the VR device must be purchased separately by the
              clinic. The HappyMoves software is compatible with Meta Quest 2,
              3S, and 3 headsets, with Meta Quest 3 recommended for optimal
              performance and future update compatibility.
            </p>
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
              <p>{date || 'Date'}</p>
            </div>

            <div className="license-agreement">
              <h2 style={{ textDecoration: "underline", textAlign: "center" }}>
                SOFTWARE LICENSE AGREEMENT
              </h2>

              <p>
                <strong>Software License Agreement</strong> ("Agreement") is
                entered into between Oqulix, hereinafter referred to as
                "Licensor," and the entity or individual licensing the software,
                hereinafter referred to as "Licensee." This Agreement governs
                the use of the Happy Moves software.
              </p>
              <ol>
                <li>
                  <strong>License Grant:</strong>{" "}
                  <ul>
                    <li>
                      Subject to the terms and conditions of this Agreement,
                      Licensor grants Licensee a non-exclusive, non-transferable
                      license to use the Happy Moves software.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Scope of Use:</strong>
                  <ul>
                    <li>
                      Happy Moves is not a healthcare product. It is intended
                      for rehabilitation, therapy, and wellness purposes.
                    </li>
                    <li>
                      Licensee acknowledges that Happy Moves is not a substitute
                      for professional healthcare advice, diagnosis, or
                      treatment.
                    </li>
                    <li>
                      Licensee acknowledges that if any problems arise during
                      the use of Happy Moves, Oqulix will not be held
                      responsible.
                    </li>
                    <li>
                      Licensee agrees to ensure that the software is used under
                      the guidance of a certified therapist or healthcare
                      professional.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Feedback and Update Policy:</strong>
                  <ul>
                    <li>
                      Oqulix values client feedback and suggestions for
                      enhancing the Happy Moves software.
                    </li>
                    <li>
                      While Oqulix appreciates and considers all suggestions,
                      including those from hospitals, it is important to note
                      that not all suggestions will be implemented.
                    </li>
                    <li>
                      The company reserves the right to selectively incorporate
                      feedback into future updates, prioritizing based on
                      development needs and strategic considerations.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Intellectual Property:</strong>{" "}
                  <ul>
                    <li>
                      The Happy Moves software, including all intellectual
                      property rights, remains the exclusive property of Oqulix.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
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
              <p>{date || 'Date'}</p>
            </div>

            <div className="license-agreement">
              <h2 style={{ textDecoration: "underline", textAlign: "center" }}>
                SOFTWARE LICENSE AGREEMENT
              </h2>

              <ol start={5}>
                <li>
                  <strong>
                    Confidentiality of Pricing Details and Software Content:
                  </strong>
                  <ul>
                    <li>
                      Licensee agrees to maintain strict confidentiality
                      regarding the pricing details of the Happy Moves software,
                      as well as any offers or subsidies provided by Oqulix.
                      This information shall not be disclosed to any third
                      party, media, or on the internet.
                    </li>
                    <li>
                      Additionally, Licensee commits not to publish the software
                      content, including any proprietary information, to any
                      third party or third-party applications without the
                      explicit written consent of Oqulix.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Protection Against Cloning:</strong>
                  <ul>
                    <li>
                      Licensee acknowledges that any attempts to clone,
                      reproduce, or replicate the Happy Moves software without
                      explicit authorization from Oqulix will be considered
                      malpractice.
                    </li>
                    <li>
                      In the event of unauthorized cloning, Licensee agrees to
                      pay compensation to Oqulix for damages incurred.
                    </li>
                    <li>
                      Oqulix reserves the right to pursue legal action to
                      protect its intellectual property rights.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Subscription Plan Terms:</strong>
                  <ul>
                    <li>
                      Oqulix offers Happy Moves on a monthly subscription basis.
                      By subscribing, the client agrees to pay a recurring
                      monthly fee as per the selected plan.
                    </li>
                    <li>
                      Subscriptions renew automatically each month unless
                      canceled. Clients can cancel the subscription at any time
                      by providing a 10-day prior written notice before the next
                      billing cycle.
                    </li>
                    <li>
                      No partial refunds will be provided for unused
                      subscription days.
                    </li>
                    <li>
                      During the subscription period, clients will receive full
                      access to the Happy Moves platform, regular updates, and
                      eligible technical support. All software and content
                      remain the intellectual property of Oqulix.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Term and Termination:</strong>{" "}
                  <ul>
                    <li>
                      This Agreement is effective upon acceptance and shall
                      continue until terminated by either party. Either party
                      may terminate this Agreement upon breach by the other
                      party.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Limitation of Liability:</strong>
                  <ul>
                    <li>
                      In no event shall Oqulix be liable for any indirect,
                      incidental, special, consequential, or punitive damages
                      arising out of or in connection with the use or inability
                      to use the Happy Moves software.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
          <div className="page-footer">
            <a href="https://www.oqulix.com">www.oqulix.com</a>
          </div>
        </div>

       

        {/* Page 5 */}
        <h2>Page 5</h2>
        <div className="page" ref={(el) => (pageRefs.current[4] = el)}>
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
              <p>{date || 'Date'}</p>
            </div>

            <div className="license-agreement">
              <h2 style={{ textDecoration: "underline", textAlign: "center" }}>
                SOFTWARE LICENSE AGREEMENT
              </h2>

              <ol start={10}>
  <li><strong>Governing Law:</strong>
    <ul>
      <li>This Agreement shall be governed by and construed in accordance with the laws of [Jurisdiction].</li>
      <li>Any disputes arising out of or in connection with this Agreement shall be resolved through arbitration in accordance with the rules of the [Arbitration Organization].</li>
    </ul>
  </li>

  <li><strong>Miscellaneous:</strong>
    <ul>
      <li>This Agreement constitutes the entire understanding between the parties and supersedes all prior negotiations, understandings, or agreements.</li>
      <li>Any modifications to this Agreement must be in writing and signed by both parties.</li>
      <li>By accepting this Agreement, the Licensee acknowledges that they have read and understood the terms and conditions and agree to be bound by them.</li>
    </ul>
  </li>
</ol>
            </div>
          </div>
          <div className="page-footer">
            <a href="https://www.oqulix.com">www.oqulix.com</a>
          </div>
        </div>

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
              <p>{date || 'Date'}</p>
            </div>

            <div className="license-agreement end-statement-div">
              <div>
                  <h2 style={{ textDecoration: "underline", textAlign: "center" }}>
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
                         Thank you for choosing Happy Moves for your therapeutic needs. We are excited about the
         prospect of contributing to the success of your firm.
         We kindly request an advance payment 50% of TOTAL PRICE for your confirmation and a
         balance payment 50% of TOTAL PRICE  before the day of implementation.
                     </strong>
                 </p>
                  <p>Please make the payments within the specified timelines mentioned in the payment terms.</p>
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

export default Mail;
