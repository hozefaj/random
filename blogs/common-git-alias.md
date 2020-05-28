---
title: Common Git Alias
description: this post describes what git alias is some common ones
tags: git, github
---

This posts will help you understand what a `git` alias is and some of the basic ones I use.

### What's a `git` alias?
In the computer science domain, alias means an alternative name or label that refers to a file, command, address, or other items, and can be used to locate or access it.

So, basically with `git` alias, the idea is that you create shorter alias for the most commonly used commands, to reduce the amount of typing that you do.

### How to use them?
To use them, add the commands to your `.bash_profile`, `.bashrc` or `.gitconfig` file. Once you add them run the `source .bash_profile` command.

You can add them by using [command line](https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases) also, but would not recommend it as it would be very verbose and difficult to manage over time.
```
$ git config --global alias.co checkout
```

### Common commands
```
alias gc='git checkout'
alias gcm='git commit -m'
alias gs='git status'
alias ga='git add --all'
alias gp='git pull --rebase'
alias gb='git branch -vv'
alias gr='git remote -v'
alias grt='git reset --hard'
alias gpub='git push origin master'
alias grp='git rebase master'
alias gd='git branch -D'
alias gm='git merge'
alias gmx='git merge -X theirs'
alias gk='gitk &'
alias gda='git branch | grep -v "develop" | grep -v "release" | xargs git branch -D'
alias gf='git fetch'
alias gl='git log -3'

# cleans all branches locally that have already been merged.
alias gcmb="git branch --merged | grep -Ev '(^\*|develop)' | xargs git branch -d"
```

Another good resource here to enable a quicker workflow I also use the [`git-extras`](https://github.com/tj/git-extras). It allows an abstraction on more complicated git workflows.
