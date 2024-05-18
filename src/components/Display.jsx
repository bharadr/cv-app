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

function EducationEntrySection({schoolName, degreeMajor, startdate, endDate, location}) {
    return (
            <div className="display-education-entry">
                <div className="display-educationHeader">{schoolName} - <i>{degreeMajor}</i></div>
                <div className="display-educationDetails">{startdate} - {endDate}, {location}</div>
            </div>
    )
}

function WorkplaceEntrySection({companyName, title, startdate, endDate, location, description}) {
    return (
            <div className="display-workplace-entry">
                <div className='displayWorkplaceTop'>
                    <div className="display-workplaceHeader">{companyName} - {title}</div>
                    <div className="display-workplaceDetails">{startdate} - {endDate}, {location}</div>
                </div>
                <div className="display-workplaceDescription"><pre>{description}</pre></div>
            </div>
    )
}






function Display({personalInfo, skillEntries, educationEntries, workplaceEntries}) {
  return (
    <div id="displaySection">
        <PersonalInfoSection fullName={personalInfo.fullName} address={personalInfo.address} email={personalInfo.email} phoneNumber={personalInfo.phoneNumber} summary={personalInfo.summary}></PersonalInfoSection>
        <div id="display-education-info">
            <p className='sectionHeader'>Education</p>
            {educationEntries.map((entry, index) => (
                <EducationEntrySection key={index} schoolName={entry.contents.schoolName} degreeMajor={entry.contents.degreeMajor} location={entry.contents.educationLocation} startdate={entry.contents.startDate} endDate={entry.contents.endDate}></EducationEntrySection>
            ))}
        </div>
        <div id="display-workplace-info">
            <p className='sectionHeader'>Professional Experience</p>
            {workplaceEntries.map((entry, index) => (
                <WorkplaceEntrySection key={index} companyName={entry.contents.companyName} title={entry.contents.companyTitle} location={entry.contents.companyLocation} startdate={entry.contents.startDate} endDate={entry.contents.endDate} description={entry.contents.companyDescription}></WorkplaceEntrySection>
            ))}
        </div>
        <div id="display-skills-info">
            <p className='sectionHeader'>Skills</p>
            {skillEntries.map((entry, index) => (
            <div key={index}>{entry.contents.skillName}</div>
            ))}
        </div>
    </div>
  )
}

export default Display
