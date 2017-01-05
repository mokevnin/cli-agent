# cli-agent

[![Code Climate](https://codeclimate.com/github/mokevnin/cli-agent/badges/gpa.svg)](https://codeclimate.com/github/mokevnin/cli-agent)
[![Issue Count](https://codeclimate.com/github/mokevnin/cli-agent/badges/issue_count.svg)](https://codeclimate.com/github/mokevnin/cli-agent)
[![Build Status](https://travis-ci.org/mokevnin/cli-agent.svg?branch=master)](https://travis-ci.org/mokevnin/cli-agent)

## Setup

```
npm install cli-agent --save-dev
```

## Using

```javascript
// @see tests
const interaction = new CLIAgent(/* path to program */);
let year;
const result = await interaction.wait(/hello/i)
  .wait(/question/i)
  .send('2014\n')
  .wait(/year is (\d+)/, (matches) => {
    year = matches[1];
  })
  .start();
```
