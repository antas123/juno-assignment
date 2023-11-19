import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

const CloseAccount = ({ setModalClose }) => {
  const [activateSubmit, setActivateSubmit] = useState(false);
  const [err, setErr] = useState(false);
  const [formData, setFormdata] = useState({
    email: "",
    fileUAR: false,
    reason: "",
    note: "",
    chargeClosureFee: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
  
    if (type === "radio" && name === "UAR") {
      setFormdata((prevData) => ({
        ...prevData,
        fileUAR: value === e.target.value, 
      }));
    } else {
      setFormdata((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };
  
// console.log(formData)
  
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    
    if(!formData.email || !formData.reason || !formData.note || formData.fileUAR===false)
   {
     setErr(true)
     return
    }
    setModalClose(false);
    alert("request sent to close the account")

  };

  useEffect(() => {
    if (formData.email && formData.reason && formData.note) {
      setActivateSubmit(true);
    }
  }, [formData]);

  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal-header">
          <h3 className="text-2xl font-semibold">Close Account</h3>
          {/* <button onClick={() => setShowCloseAccountModal(false)} className='close-button'>
          </button> */}
          <FontAwesomeIcon
            onClick={() => setModalClose(false)}
            icon={faXmark}
            style={{ color: "#000000", fontSize: "x-large", marginTop: "15px" }}
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
             style={{
                  border: err && formData.email === "" ? "2px solid red" : "0.125rem solid #cbd5e0"
                }}
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              type="email"
              name="email"
              id="email"
            />
            {err && formData.email==="" ? (
            <div style={{ color: "red" }}>Required</div>
          ) : null}
          </div>

          <div className="radio-group">
            <label className="radio-label" htmlFor="email">
              Want to file UAR
            </label>
            <input
              onChange={handleChange}
              type="radio"
              name="UAR"
              value="yes"
              id="yes"
            />
            <label className="radio-label" htmlFor="UAR">
              Yes
            </label>
            <input
              onChange={handleChange}
              type="radio"
              name="UAR"
              value="no"
              id="no"
            />
            <label className="radio-label" htmlFor="UAR">
              No
            </label>

          </div>
          {err && formData.fileUAR===false ? (
            <div style={{ color: "red" }}>Required</div>
          ) : null}

          <div className="form-group">
            <label className="label" htmlFor="reason">
              Reason
            </label>
            <select
             style={{
                  border: err && formData.reason === "" ? "2px solid red" : "0.125rem solid #cbd5e0"
                }}
              value={formData.reason}
              onChange={handleChange}
              className="select-field"
              name="reason"
              id="reason"
            >
              <option value="">-- Select --</option>
              <option value="Flagging logistics triggered">
                Flagging logistics triggered
              </option>
            </select>
            {err && formData.reason==="" ? (
            <div style={{ color: "red" }}>Required</div>
          ) : null}
          </div>

          <div className="form-group">
            <label className="label" htmlFor="note">
              Note
            </label>
            <textarea
          style={{
                  border: err && formData.note === "" ? "2px solid red" : "0.125rem solid #cbd5e0"
                }}
              value={formData.note}
              onChange={handleChange}
              className="textarea-field"
              name="note"
              id="note"
            />
            {err && formData.note==="" ? (
            <div style={{ color: "red" }}>Required</div>
          ) : null}
          </div>

          <div className="confirm-group">
            <div>
              <input
                value={formData.chargeClosureFee}
                onChange={handleChange}
                type="radio"
                name="confirm"
                id="confirm"
              />
              <label className="confirm-label" htmlFor="confirm">
                Charge closure fee
              </label>
            </div>
            <button
              // disabled={activateSubmit}
              type="submit"
              style={{border:"none"}}
              className={`confirm-button ${
                activateSubmit && "confirm-button-active"
              }`}
            >
              Close Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CloseAccount;