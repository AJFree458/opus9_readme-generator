function generateMarkdown(data) {
  return `
# ${data.title}

![GitHub All Releases](https://img.shields.io/github/downloads/${data.username}/${data.title}/total)

## Description

${data.description}

## Table of Content

* [Installation](#installation)

* [Deployment](#deployment)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.install}
\`\`\`

## Deployment

This project's repository is at: [${data.title}](https://github.com/${data.username}/${data.title})

## Usage

${data.usage}

## License

[![GitHub license](https://img.shields.io/static/v1?label=License&message=${data.license}&color=blue)](https://github.com/${data.github}/${data.title})

This project is licensed under the ${data.license} license.

## Contributing

${data.contribution}

## Credit

${data.credit}

## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

<img src="${data.data.avatar_url}" alt="avatar" style="border-radius: 16px" width="30" />

If you have any questions about the repo, open an issue or contact [${data.github}](https://api.github.com/users/${data.github}) directly at ${data.data.email}.
`;
};

module.exports = {generateMarkdown};
