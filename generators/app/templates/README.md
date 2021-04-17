[![Build Status][circleci-image]][circleci-url]
[![PyPI version][pypi-image]][pypi-url]
[![Codacy quality][codacy-quality-image]][codacy-quality-url]
[![Codacy coverage][codacy-coverage-image]][codacy-coverage-url]
[![License][license-image]][license-url]
<img src="https://github.com/hampusborgos/country-flags/raw/main/svg/<%= license.author.company.country.code %>.svg" width="16" />

# <%= project.name %>

> <%= project.description.short %>

## Table of Contents

* [Synopsis](#synopsis)
* [Usage](#usage)
* [Installation](#installation)
* [Build](#build)
* [Tests](#tests)
* [Compatibility](#compatibility)
* [Issues](#issues)
* [Contributing](#contributing)
* [Credits](#credits)
* [Resources](#resources)
* [History](#history)
* [License](#license)

## <a name="synopsis">Synopsis</a>

<%= project.description.synopsis %>

## <a name="usage">Usage</a>

```python

import <%= package.name %>

```

## <a name="installation">Installation</a>

```bash
pip3 install <%= package.name %>
```

## <a name="build">Build</a>

```bash
python3 setup.py build
```

## <a name="tests">Tests</a>

```bash
python3 setup.py test
```


## <a name="compatibility">Compatibility</a>

<% package.compatibility.python.versions.forEach((version) =>{ %>
* [Python <%= version %>](https://docs.python.org/3/whatsnew/<%= version %>.html).
<% }); %>
  

## <a name="issues"> Issues</a>

Feel free to [submit issues](https://github.com/<%= vcs.github.organization %>/<%= vcs.github.repository_name %>/issues) and enhancement requests.

## <a name="contributing">Contributing</a>

Please refer to project's style guidelines and guidelines for submitting patches and additions. In general, we follow the "fork-and-pull" Git workflow.

1. **Fork** the repo on GitHub
2. **Clone** the project to your own machine
3. **Commit** changes to your own branch
4. **Push** your work back up to your fork
5. Submit a **Pull request** so that we can review your changes

**NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## <a name="credits">Credits</a>


## <a name="resources">Resources</a>

## <a name="history">History</a>

Please refer to [the changelog file](CHANGELOG.md).

## <a name="license">License</a>

>
> [The MIT License](https://opensource.org/licenses/MIT)
>
> Copyright (c) <%= license.copyright.years %> [<%= license.author.company.name %>](<%= license.author.company.url %>), <%= license.author.company.city %>, <%= license.author.company.country.name %> <img src="https://github.com/hampusborgos/country-flags/raw/main/svg/<% license.author.company.country.code %>.svg" width="16" />
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
>

[pypi-image]: https://img.shields.io/pypi/v/<%= package.name %>.svg
[pypi-url]: https://pypi.python.org/pypi/<%= package.name %>/

[circleci-image]: https://circleci.com/gh/<%= vcs.github.organization %>/<%= vcs.github.repository %>.svg?style=shield
[circleci-url]: https://app.circleci.com/pipelines/github/<%= vcs.github.organization %>/<%= vcs.github.repository %>

[codacy-quality-image]: https://app.codacy.com/project/badge/Grade/<%= integrations.codacy.token %>
[codacy-quality-url]: https://www.codacy.com?utm_source=github.com&utm_medium=referral&utm_content=<%= vcs.github.organization %>/<%= vcs.github.repository %>&utm_campaign=Badge_Coverage

[codacy-coverage-image]: https://app.codacy.com/project/badge/Coverage/<%= integrations.codacy.token %>
[codacy-coverage-url]: https://www.codacy.com?utm_source=github.com&utm_medium=referral&utm_content=<%= vcs.github.organization %>/<%= vcs.github.repository %>&utm_campaign=Badge_Coverage

[license-img]: https://img.shields.io/pypi/l/<%= package.name %>.svg
[license-url]: https://pypi.python.org/pypi/<%= package.name %>/

[flag-img]: https://img.shields.io/pypi/l/<%= package.name %>.svg
[flag-url]: https://pypi.python.org/pypi/<%= package.name %>/
