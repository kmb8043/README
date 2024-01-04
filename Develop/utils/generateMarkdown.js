// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)'
  }
  if(license === 'Apache'){
    return '![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)(https://opensource.org/licenses/Apache-2.0)'
  }
  if(license === 'GPL'){
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
  if(license === 'None'){
    return 'None'
  }
  }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {
//  return `/* Copyright (c) [year] [fullname] */`;
//}
//return "";


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {
//  return "";
//}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description 
${data.description}

## Screenshot
${data.screenshot}


## Link to deployed application URL
${data.link}

## GitHub
${data.Github}

## Table of Contents
  * Installation
  * Usage
  * GitHub
  * Contributors
  * Lisence

## Installation
To install the application, follow these steps:

${data.install}

## How to use this application
${data.usage}

## Contributors
${data.contributors}

## License
${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
