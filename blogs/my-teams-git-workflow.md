---
title: My team's git workflow
description: describing the git workflow we follow on the frontend team at PayPal
tags: git, github, workflow, productivity
---

Most teams will have a git(or any source control) workflow that they follow. Detailing the workflow that we follow in my team at PayPal. We have a team of 8 engineers working on multiple apps at the same. Over time we have created this process detailed below:

### Development Process

1. We have 3 main branches `develop`, `release` and `master`.  All of them are protected such that no one can directly push commits to these branches. The code has to be added only through PR's.

![branches](https://thepracticaldev.s3.amazonaws.com/i/qszky26bugv5qr7a9vrs.png)

2. `develop` is our working branch and everyone creates a new branch from `develop` and then creates a PR to it once they are done.
_On a side note, we follow the [commitizen](https://github.com/commitizen/cz-cli) of writing commit messages. This helps to automate changelogs._
3. We have a CI pipeline that runs the code against `tests`, `eslint` etc. Every PR is reviewed by a couple of engineers.
4. Once PR is approved and passed the CI its merged. We use the `Squash and Merge` option.
_We then `delete` the feature branch._
5. Once the PR is merged we build and deploy the code to a staging environment to be tested. This is where we can do manual testing and end to end testing.

### Release Process
We generally release at the end of every sprint(bi-weekly).
1. When testing is done, we will create a PR from the `develop` branch to the `release` branch. _We also tag this PR with a `release-candidate` tag. This helps to in case we need to go back and see what was exactly released in case of an issue._
2. On this PR, since we are using `commitizen` we generate the changelog using [standard-version](https://www.npmjs.com/package/standard-version). We keep all the changes over time within the `CHANGELOG.md`.
3. We then create a build and deploy. Sanity testing is one last time here.
4. Then we use the build to deploy to production.

### Patch Fixes
1. Development happens from the `develop` branch, in case we need to fix an issue a new branch is cut from `release`.
2. Changes are made, reviewed and tested. Then the PR is merged to `release`.
3. Then the build and deploy process takes place.
4. As a follow-up, we also merge the same code into `develop` to keep both branches in sync.

One thing to add here, everyone in the team has to write access to the main repo. They are free to fork the repo if they choose to. We prefer that all branches be pushed to the main repo so it's easy for anyone to contribute to an existing branch. Once any feature branch is merged, we `delete` it.

Hope this helps any other team looking to get a git workflow going. Curious to see what other teams/companies follow. :thumbsup:
