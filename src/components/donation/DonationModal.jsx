import React,{useState} from 'react'
import paymentMethod from "../../images/payment-method.png";
import "./donation.css"
import qr from "../../images/ngo.jpg"


const DonationModal = () => {
  const [userData, setUserData]=useState({
    name:"",
    email:"",
    phone:"",
    amount:"",
    transactionId:""
  });
  let name, value;
  const postUserData=(event)=>{
name=event.target.name;
value=event.target.value;
setUserData({...userData,[name]:value});
  };

  const submitData= async (event)=>{
    event.preventDefault();
    const {name ,email,phone ,amount,transactionId}=userData;

    if(name&&email&&phone&&amount)
  {  
    const response= await fetch(
      "https://suvernada-foundation-8c6b9-default-rtdb.firebaseio.com//userDataRecords.json",
    { 
      method: "POST",
     Headers: {
      "Content-Type":"application/json",
     },
     body:JSON.stringify({
      name,
      email,
      phone,
      amount,
      transactionId
     })
    }
    );
     if(response){
      setUserData({
        name:"",
        email:"",
        phone:"",
        amount:"",
        transactionId:""
      });
    alert("Form has been updated");}
  }
  else{
    alert("Please fill the form up. Name, Email, Contact number and Amount are mandatory information");
  }
  }

  return <div className="modal fade" id="donationModal" tabIndex="-1" aria-labelledby="donationModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header">
      <h5 class="modal-title" id="donationModalCenterTitle">Make a Donation Now!</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form className='paypal_donate_form' method='POST'>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                    <input type="text" className='form-control' placeholder="Enter Name" name="name" value={userData.name} onChange={postUserData} required/>
                    </div>
                </div>
                <div className="col-md-12">
                <div className="form-group">
                    <input type="email" className='form-control' placeholder="Enter email" name="email" value={userData.email} onChange={postUserData} required/>
                    </div>
                </div>
                <div className="col-md-12">
                <div className="form-group">
                    <input type="number" className='form-control' placeholder="Contact number" name="phone"  value={userData.phone} onChange={postUserData} required/>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                    <label><strong>Bank Details.</strong></label> <br/>
                    <label><strong>Account number: 1178002100004617</strong></label>
                    <label><strong>IFC CODE: PUNB0117800 </strong></label>
                    
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                    <label><strong>You can also pay using our QR.</strong></label>
                    <img src={qr}className='qr' alt='ngo-qr'/>
                    </div>
                </div>
                {/* <div className="col-md-6">
                    <div className="form-group text-black">
                    <label><strong>I Want to Donate for</strong></label>
                    <select name="item_name" class="form-control">
                  <option value="Educate Children">Educate Children</option>
                  <option value="Child Camps">Child Camps</option>
                  <option value="Clean Water for Life">Clean Water for Life</option>
                  <option value="Campaign for Child Poverty">Campaign for Child Poverty</option>
                </select>
                    </div>
                </div> */}
                {/* <div className="col-md-6">
                <div className="form-group">
                    <label><strong>Currency</strong></label>
                    <select name="currency_code" class="form-control">
                  <option value="">Select Currency</option>
                  <option value="USD" selected="selected">USD - U.S. Dollars</option>
                  <option value="HKD">HKD - Hong Kong Dollars</option>
                  <option value="HUF">HUF - Hungarian Forints</option>
                  <option value="INR">INR - Indian Rupee</option>
                  <option value="ILS">ILS - Israeli New Shekels</option>
                  <option value="JPY">JPY - Japanese Yen</option>
                  <option value="MYR">MYR - Malaysian Ringgit</option>
                  <option value="CHF">CHF - Swiss Francs</option>
                  <option value="THB">THB - Thai Baht</option>
                  <option value="TRY">TRY - Turkish Liras</option>
                </select>
                    </div>
                </div> */}
                <div className="col-md-12">
                <div className="form-group">
                <label><strong>Donation amount?</strong></label>
                    <input type="Number" className='form-control' placeholder="Enter the amount" name="amount"  value={userData.amount} onChange={postUserData} required/>
                    </div>
                </div>
                <div className="col-md-12">
                <div className="form-group">
                <label><strong>Enter transaction Id</strong></label>
                    <input type="text" className='form-control' placeholder="Enter transaction id" name="transactionId"  value={userData.transactionId} onChange={postUserData}/>
                    </div>
                </div>
                <div className="col-md-12">
                    <img src={paymentMethod} alt="payment-method"/>
                </div>
            </div>
        </form>
      </div>
      <div className="modal-footer justify-content-center">
        <button type="submit" className="btn btn-primary" onClick={submitData}>Donate now</button>
      </div>
    </div>
  </div>
</div>
}

export default DonationModal