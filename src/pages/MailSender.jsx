import React, { useEffect, useRef, useState } from "react";
import Mail from "./Mail";
import EditMail from "./EditMail";
import "./MailSender.css";
import { useLocation } from "react-router-dom";
import OneTimeMail from "./OneTimeMail";
import ServiceWorks from "./ServiceWorks";


const MailSender = () => {
  const [date, setDate] = useState(null);
  const [validUntil, setValidUntil] = useState(null);
  const [name, setName] = useState(null);
  const [institutionName, setInstitutionName] = useState(null);
  const [addressLine1, setAddressLine1] = useState(null);
  const [addressLine2, setAddressLine2] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [unitPrice,setUnitPrice]=useState(0)
  const [gstPrice, setGstPrice] = useState(0);  
  const [gstForOneYear, setGstForOneYear] = useState(0);
  const [monthTotal, setMonthTotal] = useState(0);
  const [yearTotal, setYearTotal] = useState(0);
  const [yearlyPrice, setYearlyPrice]=useState(0)
  const [complimentaryProducts,setComplimentaryProducts]=useState([])
  const [discount,setDiscount]=useState(0)  
  const [oneTimeGST,setOneTimeGST]=useState(0)  
  const [discountedPrice,setDiscountedPrice]=useState(0)
  const [oneTimeTotal,setOneTimeTotal]=useState(0)
  const [projectTitle,setProjectTitle]=useState(null)
  

  const pageRefs = useRef([]);

  const formatDate = (date) => {
    const [day, month, year] = date.split("/");
    const datef = new Date(`${year}-${month}-${day}`);

    const options = { day: "numeric", month: "long", year: "numeric" };
    return datef.toLocaleDateString("en-GB", options);
  };

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

const calculateGST = (price, gstRate) => { 
       
  const basePrice = Number(price);
  const rate = Number(gstRate);


  if (isNaN(basePrice) || isNaN(rate)) {
    return { error: "Invalid input" };
  }

  const gstAmount = (basePrice * rate) / 100;  
  const total = basePrice + gstAmount;
  const oneYearPrice=basePrice*10
  const oneYearGST=gstAmount*10
  const totalForYear=oneYearPrice+oneYearGST  

  setGstPrice(gstAmount)
  setMonthTotal(total)
  setYearlyPrice(oneYearPrice)
  setGstForOneYear(oneYearGST)
  setYearTotal(totalForYear)
};

const calculateDiscount = (price, discount) => {
  const basePrice = Number(price.toString().replace(/,/g, ''));
  const baseDiscount = Number(discount.toString().replace(/,/g, ''));
  if (isNaN(basePrice) || isNaN(baseDiscount)) {
    console.error("Invalid input: Price or discount is not a valid number.");
    return;
  }
  const discountedPrice = basePrice - baseDiscount;
  const gstOneTimeRef=(discountedPrice*18)/100
  const total=discountedPrice+gstOneTimeRef
  setOneTimeGST(gstOneTimeRef)
  setDiscountedPrice(discountedPrice)
  setOneTimeTotal(total)
};

useEffect(()=>{
  calculateDiscount(price,discount)
},[discount,price])


  useEffect(() => {
    {
      date && setDate(formatDate(date));
    }
  }, [date]);

  useEffect(() => {
    {
      validUntil && setValidUntil(formatDate(validUntil));
    }
  }, [validUntil]);

  useEffect(()=>{
    if(price){
    setPrice(formatIndianCurrency(price))
    }
    calculateGST(price,18)   
    }
  ,[price])

  useEffect(() => {
  if (!isNaN(unitPrice) && !isNaN(quantity)) {
    setPrice(unitPrice * quantity); // 🔹 This is the only calculation you want
  }
}, [quantity,unitPrice]);

  useEffect(()=>{
    {gstPrice&&setGstPrice(formatIndianCurrency(gstPrice))}
  },[gstPrice])

  useEffect(()=>{
    {monthTotal&&setMonthTotal(formatIndianCurrency(monthTotal))}
  },[monthTotal])

  useEffect(()=>{
    {yearTotal&&setYearTotal(formatIndianCurrency(yearTotal))}
  },[yearTotal])

  useEffect(()=>{
    {gstForOneYear&&setGstForOneYear(formatIndianCurrency(gstForOneYear))}
  },[gstForOneYear])

  useEffect(()=>{
    {yearlyPrice&&setYearlyPrice(formatIndianCurrency(yearlyPrice))}
  },[yearlyPrice])

  useEffect(()=>{
    {discount&&setDiscount(formatIndianCurrency(discount))}
  },[discount])

  useEffect(()=>{
    {discountedPrice&&setDiscountedPrice(formatIndianCurrency(discountedPrice))}
  },[discountedPrice])

  useEffect(()=>{
    {oneTimeGST&&setOneTimeGST(formatIndianCurrency(oneTimeGST))}
  },[oneTimeGST])

  useEffect(()=>{
    {oneTimeGST&&setOneTimeGST(formatIndianCurrency(oneTimeGST))}
  },[oneTimeGST])

  useEffect(()=>{
    {oneTimeGST&&setOneTimeGST(formatIndianCurrency(oneTimeGST))}
  },[oneTimeGST])

  useEffect(()=>{
    {oneTimeTotal&&setOneTimeTotal(formatIndianCurrency(oneTimeTotal))}
  },[oneTimeTotal])

  const location = useLocation();
  const { template } = location.state || {}; 

  return (
    <>
      <div className="editor">
        <div className="editor">
          <EditMail
          template={template}
  setDate={setDate}
  setValidUntil={setValidUntil}
  setName={setName}
  setInstitutionName={setInstitutionName}
  setAddressLine1={setAddressLine1}
  setAddressLine2={setAddressLine2}
  setQuantity={setQuantity}
  setPrice={setPrice}
  setGstPrice={setGstPrice}
  setGstForOneYear={setGstForOneYear}
  setMonthTotal={setMonthTotal}
  setYearTotal={setYearTotal}
  setDiscount={setDiscount}
  setUnitPrice={setUnitPrice}
  pageRefs={pageRefs}
  setComplimentaryProducts={setComplimentaryProducts}
  complimentaryProducts={complimentaryProducts}
  setProjectTitle={setProjectTitle}
/>
        </div>
        <div className="mail-view-tab">
          {template=='Subscription Model'&&<Mail date={date} validUntil={validUntil} name={name} institutionName={institutionName}
          addressLine1={addressLine1}
          addressLine2={addressLine2}
          quantity={quantity}
          price={price}
          gstPrice={gstPrice}
          gstForOneYear={gstForOneYear}
          monthTotal={monthTotal}
          yearTotal={yearTotal}
          yearlyPrice={yearlyPrice}
          pageRefs={pageRefs}
          />
          }
          {
            template=='One-Time Purchase'&&<OneTimeMail date={date} validUntil={validUntil} name={name} institutionName={institutionName}
          addressLine1={addressLine1}
          addressLine2={addressLine2}
          quantity={quantity}
          price={price}
          gstPrice={gstPrice}
          gstForOneYear={gstForOneYear}
          monthTotal={monthTotal}
          yearTotal={yearTotal}
          yearlyPrice={yearlyPrice}
          pageRefs={pageRefs}
          discount={discount}
          discountedPrice={discountedPrice}
          oneTimeGST={oneTimeGST}
          oneTimeTotal={oneTimeTotal}
          unitPrice={unitPrice}
          complimentaryProducts={complimentaryProducts}
          />
          }
          {
            template=='Service Works'&&<ServiceWorks date={date} validUntil={validUntil} name={name} institutionName={institutionName}
          addressLine1={addressLine1}
          addressLine2={addressLine2}
          quantity={quantity}
          price={price}
          gstPrice={gstPrice}
          gstForOneYear={gstForOneYear}
          monthTotal={monthTotal}
          yearTotal={yearTotal}
          yearlyPrice={yearlyPrice}
          pageRefs={pageRefs}
          discount={discount}
          discountedPrice={discountedPrice}
          oneTimeGST={oneTimeGST}
          oneTimeTotal={oneTimeTotal}
          unitPrice={unitPrice}
          complimentaryProducts={complimentaryProducts}
          projectTitle={projectTitle}
          setQuantity={setQuantity}/>
          }
        </div>
      </div>
    </>
  );
};

export default MailSender;
