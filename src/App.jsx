import { useState } from 'react';


import './App.css'
import PersonalInfo from "./components/PersonalInfo";
import {SectionInfo} from "./components/SectionInfo";
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
  const [skillEntries, setSkillEntries] = useState([]);
  const [educationEntries, setEducationEntries] = useState([]);
  const [workplaceEntries, setWorkplaceEntries] = useState([]);

  // Handler function to update the state
  const handlePersonalInfoChange = (field, value) => {
    setPersonalInfo(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const removeWorkplaceEntry = (id) => {
    setWorkplaceEntries((prevEntries) => prevEntries.filter(entry => entry.id !== id));
  }

  const addWorkplaceEntry = () => {
    let id = Date.now();
    const newEntry = {
        key: id,
        id: id,
        removeFn: removeWorkplaceEntry,
        contents: {},
    };
    setWorkplaceEntries([...workplaceEntries, newEntry]);
  }

  const removeEducationEntry = (id) => {
    setEducationEntries((prevEntries) => prevEntries.filter(entry => entry.id !== id));
  }

  const addEducationEntry = () => {
    let id = Date.now();
    const newEntry = {
        key: id,
        id: id,
        removeFn: removeEducationEntry,
        contents: {},
    };
    setEducationEntries([...educationEntries, newEntry]);
  }

  const removeSkillEntry = (id) => {
    setSkillEntries((prevEntries) => prevEntries.filter(entry => entry.id !== id));
  }

  const addSkillEntry = () => {
    let id = Date.now();
    const newEntry = {
        key: id,
        id: id,
        removeFn: removeSkillEntry,
        contents: {
          'skillName': '',
        },
    };
    setSkillEntries([...skillEntries, newEntry]);
  }

  const handleSkillChange = (id, value) => {
    const index = skillEntries.findIndex((entry) => entry.id === id);
    if (index !== -1) {
      let desiredEntry = skillEntries[index];
      const updatedEntry = {
        ...desiredEntry,
        contents: {
          skillName: value,
        },
      };
      const updatedEntries = [
        ...skillEntries.slice(0, index),
        updatedEntry,
        ...skillEntries.slice(index + 1),
      ];
      setSkillEntries(updatedEntries)
    }
  }

  const handleEducationalChange = (id, field, value) => {
    const index = educationEntries.findIndex((entry) => entry.id === id);
    if (index !== -1) {
      let desiredEntry = educationEntries[index];
      const updatedEntry = {
        ...desiredEntry,
        contents: {
          ...desiredEntry.contents,
          [field]: value,
        },
      };
      const updatedEntries = [
        ...educationEntries.slice(0, index),
        updatedEntry,
        ...educationEntries.slice(index + 1),
      ];
      setEducationEntries(updatedEntries)
    }
  }

  const handleWorkplaceChange = (id, field, value) => {
    const index = workplaceEntries.findIndex((entry) => entry.id === id);
    if (index !== -1) {
      let desiredEntry = workplaceEntries[index];
      const updatedEntry = {
        ...desiredEntry,
        contents: {
          ...desiredEntry.contents,
          [field]: value,
        },
      };
      const updatedEntries = [
        ...workplaceEntries.slice(0, index),
        updatedEntry,
        ...workplaceEntries.slice(index + 1),
      ];
      setWorkplaceEntries(updatedEntries)
    }
  }




  return (
    <div id="overallLayout">
      <div id="userBar">
        <h1>Resume Builder</h1>
        <PersonalInfo fullName={personalInfo['fullName']}
          address={personalInfo['address']}
          email={personalInfo['email']}
          phoneNumber={personalInfo['phoneNumber']}
          summary={personalInfo['summary']}
          handleChange={handlePersonalInfoChange}>
        </PersonalInfo>
        <SectionInfo name="Educational Background" entries={educationEntries} addEntry={addEducationEntry} handleChange={handleEducationalChange}></SectionInfo>
        <SectionInfo name="Professional Experiences" entries={workplaceEntries} addEntry={addWorkplaceEntry} handleChange={handleWorkplaceChange}></SectionInfo>
        <SectionInfo name="Skills" entries={skillEntries} addEntry={addSkillEntry} handleChange={handleSkillChange}></SectionInfo>
      </div>
      <Display personalInfo={personalInfo} skillEntries={skillEntries} educationEntries={educationEntries} workplaceEntries={workplaceEntries}></Display>
    </div>
  )
}

export default App