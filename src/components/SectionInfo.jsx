import { useState } from 'react';
import '../styles/forms.css'



function EducationEntry({id, removeEntry, handleChange, contents}) {
    return (
        <div className="education-entry">
            <div>
                <label htmlFor="schoolName">School Name:</label>
                <input type="text" id={`schoolName-${id}`} name="schoolName"  value={contents.schoolName} onChange={(e) => handleChange(id, e.target.name, e.target.value)}/>
                <label htmlFor="degreeMajor">Degree and Major:</label>
                <input type="text" id={`degreeMajor-${id}`} name="degreeMajor" value={contents.degreeMajor} onChange={(e) => handleChange(id, e.target.name, e.target.value)}/>
                <label htmlFor="educationLocation">Location:</label>
                <input type="text" id={`educationLocation-${id}`} name="educationLocation" value={contents.educationLocation} onChange={(e) => handleChange(id, e.target.name, e.target.value)}/>
                <label htmlFor="startDate">Start Date:</label>
                <input type="text" id={`education-startDate-${id}`} name="startDate" value={contents.startDate} onChange={(e) => handleChange(id, e.target.name, e.target.value)}/>
                <label htmlFor="endDate">End Date:</label>
                <input type="text" id={`education-endDate-${id}`} name="endDate" value={contents.endDate} onChange={(e) => handleChange(id, e.target.name, e.target.value)}/>
            </div>
            <button className="entry-delete-button" onClick={() => removeEntry(id)}>Remove</button>
        </div>
    )
}

function SkillEntry({id, removeEntry, handleChange, skillName}) {
    return (
        <div className="skill-entry">
            <div>
                <label htmlFor="skill-name">Skill Name:</label>
                <input type="text" id={`skill-name-${id}`}  name="skill-name" value={skillName} onChange={(e) => handleChange(id, e.target.value)}/>
            </div>
            <button className="entry-delete-button" onClick={() => removeEntry(id)}>Remove</button>
        </div>
    )
}

function WorkplaceEntry({id, removeEntry, handleChange, contents}) {
    return (
        <div className="workplace-entry">
            <div>
                <label htmlFor="companyName">Company Name:</label>
                <input type="text" id={`companyName-${id}`} name="companyName" value={contents.companyName} onChange={(e) => handleChange(id, e.target.name, e.target.value)}/>
                <label htmlFor="companyTitle">Title:</label>
                <input type="text" id={`companyTitle-${id}`} name="companyTitle" value={contents.companyTitle} onChange={(e) => handleChange(id, e.target.name, e.target.value)}/>
                <label htmlFor="companyLocation">Location:</label>
                <input type="text" id={`companyLocation-${id}`} name="companyLocation" value={contents.companyLocation} onChange={(e) => handleChange(id, e.target.name, e.target.value)}/>
                <label htmlFor="startDate">Start Date:</label>
                <input type="text" id={`company-startDate-${id}`} name="startDate" value={contents.startDate} onChange={(e) => handleChange(id, e.target.name, e.target.value)}/>
                <label htmlFor="endDate">End Date:</label>
                <input type="text" id={`company-endDate-${id}`} name="endDate" value={contents.endDate} onChange={(e) => handleChange(id, e.target.name, e.target.value)}/>
                <label htmlFor="companyDescription">Description:</label>
                <textarea id={`companyDescription-${id}`} name="companyDescription" value={contents.companyDescription} onChange={(e) => handleChange(id, e.target.name, e.target.value)}/>
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
                return <EducationEntry key={entry.key} id={entry.id} removeEntry={entry.removeFn} handleChange={handleChange} contents={entry.contents}/>
            } else if (name === "Professional Experiences") {
                return <WorkplaceEntry key={entry.key} id={entry.id} removeEntry={entry.removeFn} handleChange={handleChange} contents={entry.contents}/>
            } else {
                return <SkillEntry key={entry.key} id={entry.id} removeEntry={entry.removeFn} handleChange={handleChange} skillName={entry.contents.skillName}/>
            }
            })
        }
        <button className="entry-append-button" onClick={addEntry}>Add Entry</button>
      </div>
    </div>
  )
}

export { SectionInfo, EducationEntry, WorkplaceEntry, SkillEntry }
