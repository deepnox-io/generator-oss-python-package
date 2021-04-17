const Generator = require("yeoman-generator")
const _ = require('lodash')
const schema = require("./schema")


module.exports = class extends Generator {

  async prompting() {
    const answers = await this.prompt([
      {
        type: "input",
        name: '{"project": {"name": null } }',
        message: "What is your project name?"
      },
      {
        type: "input",
        name: '{"project": {"description": {"short": null } } }',
        message: "A short description of your project?"
      },
      {
        type: "input",
        name: '{"project": {"description": {"synopsis": null } } }',
        message: "Official synopsis of your project?"
      }
    ]);


    this.schema = schema
    Object.keys(answers).forEach((key) => {
      console.log(`key = ${key}`)
      const finalKey = key.replace('null', `"${answers[key]}"`)
      const o = JSON.parse(finalKey)
      const attr = Object.keys(o)[0]
      console.log(o[attr])
      this.schema[attr] = _.mergeWith( this.schema[attr] ? this.schema[attr] : {}, o[attr])


      console.log('--- ' + attr + ' ' + JSON.stringify(this.schema[attr]))
    })

  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('public/README.md'),
      this.schema
    );
  }
};
