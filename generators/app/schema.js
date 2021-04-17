module.exports = {
  project: {
    name: "<project.name>",
    description: {
      short: "<project.description.short>",
      synopsis: "<project.description.synopsis>"
    }
  },
  package: {
    name: "<package.name>",
    version: "<project.version>",
    compatibility: {
      python: {
        versions: [
          3.7,
          3.8,
          3.9
        ]
      }
    }
  },
  license: {
    name: "<license.name>",
    description: "<license.description>",
    copyright: {
      years: "<license.copyright.years>"
    },
    author: {
      name: "<license.author.name>",
      company: {
        name: "<license.author.company.name>",
        email: "<license.author.company.email>",
        url: "<license.author.company.url>",
        city: "<license.author.company.city>",
        country: {
          name: "<license.author.company.country.name>",
          code: "<license.author.company.country.code>"
        }
      }
    }
  },
  vcs: {
    github: {
      organization: "<vcs.github.organization>",
      repository: "<vcs.github.repository>"
    }
  },
  integrations: {
    codacy: {
      token: "<integrations.codacy.token>"
    }
  }
}
