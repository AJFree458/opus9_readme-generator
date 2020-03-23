function generateMarkdown(data) {
  return `
# ${data.title},
## ${data.description},
## ${data.table},
## ${data.install},
## ${data.test},
## ${data.usage},
## ${data.contribution},
## ${data.credit},
## ${data.license},
## ${data.questions}
`;
}

module.exports = generateMarkdown;