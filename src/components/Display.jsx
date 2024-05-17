import '../App.css'

function Display({personalInfo}) {
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
            {personalInfo.fullName}
            {personalInfo.address}
            {personalInfo.email}
            {personalInfo.phoneNumber}
            {personalInfo.summary}
        </div>
        <div id="display-workplace-info">
            {personalInfo.fullName}
            {personalInfo.address}
            {personalInfo.email}
            {personalInfo.phoneNumber}
            {personalInfo.summary}
        </div>
        <div id="display-skills-info">
            {personalInfo.fullName}
            {personalInfo.address}
            {personalInfo.email}
            {personalInfo.phoneNumber}
            {personalInfo.summary}
        </div>

    </div>
  )
}

export default Display
