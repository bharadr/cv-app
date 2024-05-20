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

const defaultWorkplaceEntries = [
  {
    key: 0,
    id: 0,
    contents: {
      'companyName': 'Bobble',
      'companyTitle': 'Senior Software Engineer - Infrastructure',
      'companyLocation': 'Burlingame, CA',
      'startDate': '01/2014',
      'endDate': '10/2017',
      'companyDescription': `Co-led the Bobble backend team, with 200M+ users and 1M+ DAU.
      Used Node.js, Postgres, Redis, Elasticsearch and Cassandra.
      Implemented sharing posts, adding topics to posts, likes, mentions in an agile team.
      Used Elasticsearch to query hundreds of millions of documents accurately and return results in under a second.`
    },
  },
  {
    key: 1,
    id: 1,
    contents: {
      'companyName': 'Bobble',
      'companyTitle': 'Senior Software Engineer - Infrastructure',
      'companyLocation': 'Burlingame, CA',
      'startDate': '01/2014',
      'endDate': '10/2017',
      'companyDescription': `Co-led the Bobble backend team, with 200M+ users and 1M+ DAU.
      Used Node.js, Postgres, Redis, Elasticsearch and Cassandra.
      Implemented sharing posts, adding topics to posts, likes, mentions in an agile team.
      Used Elasticsearch to query hundreds of millions of documents accurately and return results in under a second.`
    },
  },
  {
    key: 2,
    id: 2,
    contents: {
      'companyName': 'Bobble',
      'companyTitle': 'Senior Software Engineer - Infrastructure',
      'companyLocation': 'Burlingame, CA',
      'startDate': '01/2014',
      'endDate': '10/2017',
      'companyDescription': `Co-led the Bobble backend team, with 200M+ users and 1M+ DAU.
      Used Node.js, Postgres, Redis, Elasticsearch and Cassandra.
      Implemented sharing posts, adding topics to posts, likes, mentions in an agile team.
      Used Elasticsearch to query hundreds of millions of documents accurately and return results in under a second.`
    },
  },
]

const defaultEducationEntries = [
  {
    key: 0,
    id: 0,
    contents: {
      'schoolName': 'Stanford University',
      'degreeMajor': 'B.S. Computer Science',
      'educationLocation': 'Palo Alto, CA',
      'startDate': '01/2014',
      'endDate': '10/2017',
    },
  },
  {
    key: 1,
    id: 1,
    contents: {
      'schoolName': 'Stanford University',
      'degreeMajor': 'B.S. Computer Science',
      'educationLocation': 'Palo Alto, CA',
      'startDate': '01/2014',
      'endDate': '10/2017',
    },
  },
  {
    key: 2,
    id: 2,
    contents: {
      'schoolName': 'Stanford University',
      'degreeMajor': 'B.S. Computer Science',
      'educationLocation': 'Palo Alto, CA',
      'startDate': '01/2014',
      'endDate': '10/2017',
    },
  },
]

const defaultSkillEntries = [
  {
    key: 0,
    id: 0,
    contents: {
      'skillName': 'C++'
    },
  },
  {
    key: 1,
    id: 1,
    contents: {
      'skillName': 'Writing'
    },
  },
  {
    key: 2,
    id: 2,
    contents: {
      'skillName': 'Tableau'
    },
  },
]


function App() {
  const [personalInfo, setPersonalInfo] = useState(defaultPersonalInfo);
  const [workplaceEntries, setWorkplaceEntries] = useState(defaultWorkplaceEntries);
  const [educationEntries, setEducationEntries] = useState(defaultEducationEntries);
  const [skillEntries, setSkillEntries] = useState(defaultSkillEntries);

  const handlePersonalInfoChange = (field, value) => {
    setPersonalInfo(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const addWorkplaceEntry = () => {
    let id = Date.now();
    const newEntry = {
        key: id,
        id: id,
        contents: {},
    };
    setWorkplaceEntries([...workplaceEntries, newEntry]);
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

  const addEducationEntry = () => {
    let id = Date.now();
    const newEntry = {
        key: id,
        id: id,
        contents: {},
    };
    setEducationEntries([...educationEntries, newEntry]);
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

  const addSkillEntry = () => {
    let id = Date.now();
    const newEntry = {
        key: id,
        id: id,
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
        <SectionInfo name="Educational Background" entries={educationEntries} addEntry={addEducationEntry} handleChange={handleEducationalChange} stateSetter={setEducationEntries}></SectionInfo>
        <SectionInfo name="Professional Experiences" entries={workplaceEntries} addEntry={addWorkplaceEntry} handleChange={handleWorkplaceChange} stateSetter={setWorkplaceEntries}></SectionInfo>
        <SectionInfo name="Skills" entries={skillEntries} addEntry={addSkillEntry} handleChange={handleSkillChange} stateSetter={setSkillEntries}></SectionInfo>
      </div>
      <Display personalInfo={personalInfo} skillEntries={skillEntries} educationEntries={educationEntries} workplaceEntries={workplaceEntries}></Display>
    </div>
  )
}

export default App