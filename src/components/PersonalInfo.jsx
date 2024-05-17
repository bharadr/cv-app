import { useState } from 'react';
import '../styles/forms.css'

function PersonalInfo({fullName, address, email, phoneNumber, summary, handleChange}) {
  // State to manage the visibility of the expanded section
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the expanded section visibility
  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="form-section">
      <div className="form-top-section">
        <p>Personal Information</p>
        <button className="form-expand-button" id="personal-info-button" onClick={toggleExpand}>{isExpanded ? "Collapse" : "Expand"}</button>
      </div>
      <div className="form-expanded-section" id="personal-info-section" style={{ display: isExpanded ? 'flex' : 'none'}}>
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" id="fullName" name="fullName" value={fullName} onChange={(e) => handleChange('fullName', e.target.value)}/>
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" value={address} onChange={(e) => handleChange('address', e.target.value)}/>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" value={email} onChange={(e) => handleChange('email', e.target.value)}/>
        <label htmlFor="phone-number">Phone Number:</label>
        <input type="text" id="phone-number" name="phone-number" value={phoneNumber} onChange={(e) => handleChange('phoneNumber', e.target.value)}/>
        <label htmlFor="summary">Summary:</label>
        <input type="text" id="summary" name="summary" value={summary} onChange={(e) => handleChange('summary', e.target.value)}/>
      </div>
    </div>
  )
}

export default PersonalInfo
