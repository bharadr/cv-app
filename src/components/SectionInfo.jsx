import { useState } from 'react';
import '../styles/forms.css'



function EducationEntry({id, removeEntry, handleChange}) {
    return (
        <div className="education-entry">
            <div>
                <div>
                    <label htmlFor="schoolName">School Name:</label>
                    <input type="text" id={`schoolName-${id}`} name="schoolName" onChange={(e) => handleChange(id, e.target.name, e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="degreeMajor">Degree and Major:</label>
                    <input type="text" id={`degreeMajor-${id}`} name="degreeMajor" onChange={(e) => handleChange(id, e.target.name, e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="educationLocation">Location:</label>
                    <input type="text" id={`educationLocation-${id}`} name="educationLocation" onChange={(e) => handleChange(id, e.target.name, e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="startDate">Start Date:</label>
                    <input type="text" id={`education-startDate-${id}`} name="startDate" onChange={(e) => handleChange(id, e.target.name, e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="endDate">End Date:</label>
                    <input type="text" id={`education-endDate-${id}`} name="endDate" onChange={(e) => handleChange(id, e.target.name, e.target.value)}/>
                </div>
            </div>
            <button className="entry-delete-button" onClick={() => removeEntry(id)}>Remove</button>
        </div>
    )
}

function SkillEntry({id, removeEntry, handleChange}) {
    return (
        <div className="skill-entry">
            <div>
                <label htmlFor="skill-name">Skill Name:</label>
                <input type="text" id={`skill-name-${id}`}  name="skill-name" onChange={(e) => handleChange(id, e.target.value)}/>
            </div>
            <button className="entry-delete-button" onClick={() => removeEntry(id)}>Remove</button>
        </div>
    )
}

function WorkplaceEntry({id, removeEntry, handleChange}) {
    return (
        <div className="workplace-entry">
            <div>
                <label htmlFor="companyName">Company Name:</label>
                <input type="text" id={`companyName-${id}`} name="companyName" onChange={(e) => handleChange(id, e.target.name, e.target.value)}/>
                <label htmlFor="companyTitle">Title:</label>
                <input type="text" id={`companyTitle-${id}`} name="companyTitle" onChange={(e) => handleChange(id, e.target.name, e.target.value)}/>
                <label htmlFor="companyLocation">Location:</label>
                <input type="text" id={`companyLocation-${id}`} name="companyLocation" onChange={(e) => handleChange(id, e.target.name, e.target.value)}/>
                <label htmlFor="startDate">Start Date:</label>
                <input type="text" id={`company-startDate-${id}`} name="startDate" onChange={(e) => handleChange(id, e.target.name, e.target.value)}/>
                <label htmlFor="endDate">End Date:</label>
                <input type="text" id={`company-endDate-${id}`} name="endDate" onChange={(e) => handleChange(id, e.target.name, e.target.value)}/>
                <label htmlFor="companyDescription">Description:</label>
                <textarea id={`companyDescription-${id}`} name="companyDescription" onChange={(e) => handleChange(id, e.target.name, e.target.value)}/>
            </div>
            <button className="entry-delete-button" onClick={() => removeEntry(id)}>Remove</button>
        </div>
    )
}


function SectionInfo({name, entries, addEntry, handleChange}) {
  const [isExpanded, setIsExpanded] = useState(false);

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
        {entries.map(entry => {
            if (name === "Educational Background") {
                return <EducationEntry key={entry.key} id={entry.id} removeEntry={entry.removeFn} handleChange={handleChange}/>
            } else if (name === "Professional Experiences") {
                return <WorkplaceEntry key={entry.key} id={entry.id} removeEntry={entry.removeFn} handleChange={handleChange}/>
            } else {
                return <SkillEntry key={entry.key} id={entry.id} removeEntry={entry.removeFn} handleChange={handleChange}/>
            }
            })
        }
        <button className="entry-append-button" onClick={addEntry}>Add Entry</button>
      </div>
    </div>
  )
}

export { SectionInfo, EducationEntry, WorkplaceEntry, SkillEntry }
