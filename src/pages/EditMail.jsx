import React from "react";
import "./EditMail.css";
import { downloadPDF } from "../services/downloadPDF";

const EditMail = ({
  pageRefs,
  setDate,
  setValidUntil,
  setName,
  setInstitutionName,
  setAddressLine1,
  setAddressLine2,
  setQuantity,
  setPrice,
  setDiscount,
  template,
  setUnitPrice,
  complimentaryProducts,
  setComplimentaryProducts,
  setProjectTitle
}) => {
  const handleDownloadPDF = async () => {
    await downloadPDF(pageRefs);
  };

  const handleAddProduct = () => {
    setComplimentaryProducts((prev) => [
      ...prev,
      { productName: "", productQuantity: "" },
    ]);
  };

  const handleProductChange = (index, field, value) => {
  const updated = [...complimentaryProducts];
  updated[index][field] = value;
  setComplimentaryProducts(updated);
};

  return (
    <>
      <div className="edit-mail-container">
        <h1 style={{ textAlign: "center" }}>{template}</h1>
        <h2 style={{ fontWeight: "200" }}>Edit your quotation</h2>
        <div className="edit-mail">
          <div>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="validUntil">Valid Until</label>
            <input
              type="date"
              id="validUntil"
              onChange={(e) => setValidUntil(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="name">Recipient</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="institutionName">Institution Name</label>
            <input
              type="text"
              id="institutionName"
              onChange={(e) => setInstitutionName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="addressLine1">Address Line 1</label>
            <input
              type="text"
              id="addressLine1"
              onChange={(e) => setAddressLine1(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="addressLine2">Address Line 2</label>
            <input
              type="text"
              id="addressLine2"
              onChange={(e) => setAddressLine2(e.target.value)}
            />
          </div>

          {template!='Service Works'&&<div>
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              id="quantity"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>}

          {template=='Service Works'&&
          <div><label htmlFor="Project">Project title</label>
            <input
              type="text"
              id="title"
              onChange={(e) => setProjectTitle(e.target.value)}
            />
          </div>
          }

          <div>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              onChange={(e) => setUnitPrice(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="discount">Discount</label>
            <input
              type="number"
              id="discount"
              onChange={(e) => setDiscount(e.target.value)}
            />
          </div>
          <div></div>

          
        </div>
        <div>
            <div className="comp-head">
                <h3>{template!='Service Works'?'Add complimentary products (if any)':'Add Items'}</h3>
                <button  onClick={handleAddProduct}>
                  Add
                </button>
            </div>

            {complimentaryProducts.map((product, index) => (
              <div key={index} className="comp-prods">
                <label>
                  Product Name {index + 1}  <input
  list={`product-options-${index}`}
  type="text"
  value={product.productName}
  onChange={(e) =>
    handleProductChange(index, "productName", e.target.value)
  }
/>

<datalist id={`product-options-${index}`}>
  <option value="META QUEST 3" />
  <option value="META QUEST 3s" />
  <option value="Carrying Case" />
  <option value="Head Strap" />
  <option value="Hygiene Eye Mask Set" />
  <option value="Cleaning Wipes" />
</datalist>

                </label>
                <label style={{ marginLeft: "1rem" }}>
                  Quantity <input
                    type="number"
                    value={product.productQuantity}
                    onChange={(e) =>
                      handleProductChange(
                        index,
                        "productQuantity",
                        e.target.value
                      )
                    }
                  />
                </label>
              </div>
            ))}
          </div>
        <button
          style={{ backgroundColor: "white" }}
          onClick={handleDownloadPDF}
        >
          Download PDF
        </button>
      </div>
    </>
  );
};

export default EditMail;
