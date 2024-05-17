import { useState } from 'react';
import '../styles/forms.css'



function EducationEntry({id, removeEntry}) {
    return (
        <div className="education-entry">
            <div>
                <label htmlFor="schoolName">School Name:</label>
                <input type="text" id={`schoolName-${id}`} name="schoolName"/>
            </div>
            <div>
                <label htmlFor="degree-major">Degree and Major:</label>
                <input type="text" id={`degree-major-${id}`} name="degree-major"/>
            </div>
            <div>
                <label htmlFor="education-location">Location:</label>
                <input type="text" id={`education-location-${id}`} name="education-location"/>
            </div>
            <div>
                <label htmlFor="education-start-date">Start Date:</label>
                <input type="text" id={`education-start-date-${id}`} name="education-start-date"/>
            </div>
            <div>
                <label htmlFor="education-end-date">End Date:</label>
                <input type="text" id={`education-end-date-${id}`} name="education-end-date"/>
            </div>
            <button className="entry-delete-button" onClick={() => removeEntry(id)}>Remove</button>
        </div>
    )
}

function SkillEntry({id, removeEntry}) {
    return (
        <div className="skill-entry">
            <div>
                <label htmlFor="skill-name">Skill Name:</label>
                <input type="text" id={`skill-name-${id}`}  name="skill-name"/>
            </div>
            <button className="entry-delete-button" onClick={() => removeEntry(id)}>Remove</button>
        </div>
    )
}

function WorkplaceEntry({id, removeEntry}) {
    return (
        <div className="workplace-entry">
            <div>
                <label htmlFor="companyName">Company Name:</label>
                <input type="text" id={`companyName-${id}`} name="companyName"/>
            </div>
            <div>
                <label htmlFor="company-title">Title:</label>
                <input type="text" id={`company-title-${id}`} name="company-title"/>
            </div>
            <div>
                <label htmlFor="company-location">Location:</label>
                <input type="text" id={`company-location-${id}`} name="company-location"/>
            </div>
            <div>
                <label htmlFor="company-start-date">Start Date:</label>
                <input type="text" id={`company-start-date-${id}`} name="company-start-date"/>
            </div>
            <div>
                <label htmlFor="company-end-date">End Date:</label>
                <input type="text" id={`company-end-date-${id}`} name="company-end-date"/>
            </div>
            <div>
                <label htmlFor="company-description">Description:</label>
                <input type="text" id={`company-end-date-${id}`} name="company-description"/>
            </div>
            <button className="entry-delete-button" onClick={() => removeEntry(id)}>Remove</button>
        </div>
    )
}


function SectionInfo({name}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [entries, setEntries] = useState([]);

  function removeEntry(id) {
    setEntries((prevEntries) => prevEntries.filter(entry => entry.id !== id));
  };

  function addEntry() {
    let id = Date.now();
    let component;
    if (name === 'Educational Background') {
        component = <EducationEntry key={id} id={id} removeEntry={removeEntry}/>;
    } else if (name === 'Professional Experiences') {
        component = <WorkplaceEntry key={id} id={id} removeEntry={removeEntry}/>;
    } else {
        component = <SkillEntry key={id} id={id} removeEntry={removeEntry}/>;
    }
    const newEntry = {id, component};
    setEntries([...entries, newEntry]);
  }

  // Function to toggle the expanded section visibility
  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="form-section">
      <div className="form-top-section">
        <p>{name}</p>
        <button className="form-expand-button" onClick={toggleExpand}>{isExpanded ? "Collapse" : "Expand"}</button>
      </div>
      <div className="form-expanded-section" style={{ display: isExpanded ? 'flex' : 'none'}}>
        {entries.map(entry => entry.component)}
        <button className="entry-append-button" onClick={addEntry}>Add Entry</button>
      </div>
    </div>
  )
}

export { SectionInfo, EducationEntry, WorkplaceEntry, SkillEntry }
