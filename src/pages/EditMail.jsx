import React from "react";
import './EditMail.css'
import { downloadPDF } from "../services/downloadPDF";


const EditMail = ({pageRefs,setDate, setValidUntil, setName, setInstitutionName,
  setAddressLine1,
  setAddressLine2,
  setQuantity,
  setPrice,
  setDiscount,
  template
  }) => {

const handleDownloadPDF = async () => {
    await downloadPDF(pageRefs)
  };
  return (
    <>
      <div className="edit-mail-container">
        <h1 style={{textAlign:'center'}}>{template}</h1>
        <h2 style={{fontWeight:'200'}}>Edit your quotation</h2>
        <div className="edit-mail">
            <div>
                <label htmlFor="date">Date</label>
                <input type="date" id="date" onChange={(e)=>setDate(e.target.value)}/>
            </div>
    
            <div>
                <label htmlFor="validUntil">Valid Until</label>
                <input type="date" id="validUntil" onChange={(e)=>setValidUntil(e.target.value)}/>
            </div>
    
            <div>
                <label htmlFor="name">Recipient</label>
                <input type="text" id="name" onChange={(e)=>setName(e.target.value)}/>
            </div>
    
            <div>
                <label htmlFor="institutionName">Institution Name</label>
                <input type="text" id="institutionName" onChange={(e)=>setInstitutionName(e.target.value)}/>
        
            </div>
    
            <div>
                <label htmlFor="addressLine1">Address Line 1</label>
                <input type="text" id="addressLine1" onChange={(e)=>setAddressLine1(e.target.value)}/>
            </div>
    
            <div>
                <label htmlFor="addressLine2">Address Line 2</label>
                <input type="text" id="addressLine2" onChange={(e)=>setAddressLine2(e.target.value)}/>
            </div>
    
            <div>
                <label htmlFor="quantity">Quantity</label>
                <input type="number" id="quantity" onChange={(e)=>setQuantity(e.target.value)}/>
            </div>
    
            <div>
                <label htmlFor="price">Price</label>
                <input type="number" id="price" onChange={(e)=>setPrice(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="discount">Discount</label>
                <input type="number" id="discount" onChange={(e)=>setDiscount(e.target.value)}/>
            </div>
        </div>
        <button onClick={handleDownloadPDF}>Download PDF</button>
      </div>
    </>
  );
};

export default EditMail;
