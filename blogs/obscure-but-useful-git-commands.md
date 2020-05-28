---
title: Obscure, but useful git commands
description: Not often used git commands like squash, force, log.
tags: git, shell, dev
---

`git` is pretty much the defacto source tool used across the industry. Most engineers either use the `git` CLI or GUI based tools like [git-kraken](https://www.gitkraken.com/) or [sourcetree](https://www.sourcetreeapp.com/). Most editors like VSCode have `git` functionality out of the box.

For folks like me who prefer using the CLI for git, most know the common git commands like `git add`, `git checkout`, `git status` etc...

Over the years have come across a few `git` commands that not widely known but have proven to be useful.

### Pretty Git Log

Most folks used `git log` to see the recent commit history. But by default, it's not in the most useful format to consume.

![git-log](https://thepracticaldev.s3.amazonaws.com/i/4sj60njkv0fji2jab5h2.png)

However, tweaking the `.gitconfig`* file to set up an alias and pretty format it.

```bash
# setup alias in the .gitconfig file
lg = log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --branches
```
Formatted text after the alias is setup

![git-log-pretty](https://thepracticaldev.s3.amazonaws.com/i/ngkq5ryxe6wxmwwn500o.png)

---

### Force Push to Remote

When working on a feature branch, generally one will `rebase` from `master` branch. This rewrites the commit history of the feature branch. If the feature branch is already pushed to a `remote`, we have to use the `git push --force` to push changes to a remote.

However in this case, if someone else from the team has also pushed any change to the branch it will be lost. Instead of using `--force` rather use `--force-with-lease`. This will check with someone else pushed commits to the same branch and prevent overwriting of commits.

---

### Squash Commits
When working on a feature branch there would be multiple commits before its ready for a PR. However, for the sake of keeping things clean, you do not want these multiple commits to be in the PR.

Best way to do this is `squash` the commits into a single one. Use the command `git  rebase -i <sha-id of master>`

This will open an interactive editor where one can pick which commits to keep and which to squash. Also, the messages for commits can be edited.

![git-squash](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1550272144/transcript-images/polish-my-git-feature-branch-before-merging-or-submitting-for-review-git-rebase.jpg)

---

### Stashing

When you need to move to a different while work on the current branch is not complete, `git stash` is a good command to use.

Another time this feature is also very useful when let's say the `master` branch has some updates you need on the feature branch. In this case, using `git pull master --rebase --autostash` is to be used. This command automatically stashed the code, pulls down latest from master, `rebase` aganist it and `pop`'s the stash out.

---

### Cleanup

With time you could end up multiple feature branches on the repo. Most of the braches are merged with `master`. This can cause the local `.git` file to become large causing some slow up.

To prevent aganist this and do some home cleaning use `git branch | grep -v "master" | xargs git branch -D`. This command cleans all branches expect the `master`.

---

*Github has also released a feature where you can [squash the commits](https://help.github.com/en/articles/about-pull-request-merges#squash-and-merge-your-pull-request-commits) while merging a PR. But if using something like Bitbucket or another tool they might not this feature.*


*`.gitconfig` is located in the root directory(`~/.gitconfig `) for Mac.*


*Another set of useful utilities to checkout are [git-extras](https://github.com/tj/git-extras). It has utilites for a bunch of git workflows.*
