import '../App.css'

function PersonalInfoSection({fullName, address, email, phoneNumber, summary}) {
    return (
        <div id="display-personal-info">
            <div id="personal-contact">
                <div>{address}</div>
                <div>
                    <div>{email}</div>
                    <div>{phoneNumber}</div>
                </div>
            </div>
            <div id="personal-name">{fullName}</div>
            <div id="personal-description">{summary}</div>
        </div>
    )
}




function Display({personalInfo, skillEntries, educationEntries, workplaceEntries}) {
  return (
    <div id="displaySection">
        <PersonalInfoSection fullName={personalInfo.fullName} address={personalInfo.address} email={personalInfo.email} phoneNumber={personalInfo.phoneNumber} summary={personalInfo.summary}></PersonalInfoSection>
        <div id="display-education-info">
            {educationEntries.map((entry, index) => (
                <div key={index}>{entry.contents.schoolName} {entry.contents.startDate} {entry.contents.endDate} {entry.contents.degreeMajor} {entry.contents.educationLocation}</div>
            ))}
        </div>
        <div id="display-workplace-info">
            {workplaceEntries.map((entry, index) => (
                <div key={index}>{entry.contents.companyName} {entry.contents.companyTitle} {entry.contents.endDate} {entry.contents.startDate} {entry.contents.companyLocation} {entry.contents.companyDescription}</div>
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
