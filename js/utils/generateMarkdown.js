function renderLicenseBadge(license) {
  if(license == "MIT"){
    let userBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    return userBadge;
  }
  if(license == "GNU GPLv3"){
    let userBadge =  "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]";
    return userBadge;
  }
  else{
    let userBadge = "";
    return userBadge;
  }
  
}

function renderLicenseLink(license) {
  if(license == "MIT"){
    let userLink = "https://opensource.org/licenses/MIT";
    return userLink;
  }
  if(license == "GNU GPLv3"){
    let userLink =  "https://www.gnu.org/licenses/lgpl-3.0";
    return userLink
  }
  else{
    let userLink = '';
    return userLink;
  }
  
}


function renderLicenseSection(data) {
  if(data == "MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
      
    This product is covered under the MIT license.
    `;
  }
  if(data == "GNU GPLv3"){
    return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)
      

    This product is covered under the GNU GPLv3 license.
    `;
  }
  if(data == "Choose Later"){
    return `
    ========ADD CUSTOM LICENSE HERE===========
    `;
  }
  else{
    return '';
  }
}


function generateMarkdown(data) {
  // renderLicenseBadge(data.license);
  // renderLicenseLink(data.license);


  return `# ${data.title}

  ${renderLicenseSection(data.license)}

  ## Description:
  
  ${data.description}

  ## Table of Contents:
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contribute}

  ## Tests

  ${data.tests}

  ## Questions

  https://github.com/${data.github}

  If you have any questions about this application, direct them to the email below:
  ${data.email}

`;
}

module.exports = generateMarkdown;



