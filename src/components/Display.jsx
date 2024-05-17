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
        <div id="display-skills-info">
            {skillEntries.map((entry, index) => (
            <div key={index}>{entry.contents.skillName}</div>
            ))}
        </div>
        <div id="display-education-info">
            {educationEntries.map((entry, index) => (
                <>
                <div key={index}>{entry.contents.schoolName}</div>
                <div key={index}>{entry.contents.startDate}</div>
                <div key={index}>{entry.contents.endDate}</div>
                <div key={index}>{entry.contents.degreeMajor}</div>
                <div key={index}>{entry.contents.educationLocation}</div>
                </>
            ))}
        </div>
        <div id="display-workplace-info">
            {workplaceEntries.map((entry, index) => (
                <>
                <div key={index}>{entry.contents.companyName}</div>
                <div key={index}>{entry.contents.companyTitle}</div>
                <div key={index}>{entry.contents.endDate}</div>
                <div key={index}>{entry.contents.degreeMajor}</div>
                <div key={index}>{entry.contents.educationLocation}</div>
                </>
            ))}
        </div>


    </div>
  )
}

export default Display
