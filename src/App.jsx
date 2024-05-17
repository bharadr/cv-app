import { useState } from 'react';


import './App.css'
import PersonalInfo from "./components/PersonalInfo";
import {SectionInfo, EducationEntry, WorkplaceEntry, SkillEntry } from "./components/SectionInfo";
import Display from "./components/Display";

const defaultPersonalInfo = {
  'fullName': 'John Doe',
  'address': '9919 Harcourt Ln',
  'email': 'johndoe@gmail.com',
  'phoneNumber': '999-999-9999',
  'summary': 'An Aspiring Entreprenuer now looking for a gig to pay the bills!',
}

function App() {
  const [personalInfo, setPersonalInfo] = useState(defaultPersonalInfo);
  const [skillInfo, setSkillInfo] = useState([]);
  /*
  const [educationInfo, setEducationInfo] = useState(defaultEducationInfo);
  const [workplaceInfo, setWorkplaceInfo] = useState(defaultWorkPlaceInfo);
  */

  // Handler function to update the state
  const handlePersonalInfoChange = (field, value) => {
    setPersonalInfo(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };


  return (
    <div id="overallLayout">
      <div id="userBar">
        <PersonalInfo fullName={personalInfo['fullName']}
          address={personalInfo['address']}
          email={personalInfo['email']}
          phoneNumber={personalInfo['phoneNumber']}
          summary={personalInfo['summary']}
          handleChange={handlePersonalInfoChange}>
        </PersonalInfo>
        <SectionInfo name="Educational Background"></SectionInfo>
        <SectionInfo name="Professional Experiences"></SectionInfo>
        <SectionInfo name="Skills"></SectionInfo>
      </div>
      <Display personalInfo={personalInfo}></Display>
    </div>
  )
}

export default App
