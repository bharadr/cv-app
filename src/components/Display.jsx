import '../App.css'

function Display({personalInfo, skillEntries, educationEntries, workplaceEntries}) {
  return (
    <div id="displaySection">
        <div id="display-personal-info">
            {personalInfo.fullName}
            {personalInfo.address}
            {personalInfo.email}
            {personalInfo.phoneNumber}
            {personalInfo.summary}
        </div>
        <div id="display-education-info">
            {educationEntries.map((entry, index) => (
                <div key={index}>{entry.contents.schoolName} {entry.contents.startDate} {entry.contents.endDate} {entry.contents.degreeMajor} {entry.contents.educationLocation}</div>
            ))}
        </div>
        <div id="display-workplace-info">
            {workplaceEntries.map((entry, index) => (
                <div key={index}>{entry.contents.companyName} {entry.contents.companyTitle} {entry.contents.endDate} {entry.contents.startDate} {entry.contents.educationLocation}</div>
            ))}
        </div>
        <div id="display-skills-info">
            {skillEntries.map((entry, index) => (
            <div key={index}>{entry.contents.skillName}</div>
            ))}
        </div>
    </div>
  )
}

export default Display
