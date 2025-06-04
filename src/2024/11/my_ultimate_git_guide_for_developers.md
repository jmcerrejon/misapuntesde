---
title: My Ultimate Git Guide for Developers
description: My Ultimate Git Guide for Developers
icon: fa-solid fa-code
author: Jose Cerrejon
date: 2024-11-12
category:
    - Developer
tags:
    - Git
---

# My Ultimate Git Guide for Developers

![This is like AI and I imagine Git branches](/images/2024/11/git_branch.jpg "This is like AI and I imagine Git branches")

It never hurts to remember the basic _Git_ commands, and today is that day. In this article that I wrote for my team at one of the companies where I worked, I'll show you how we worked with this version control system on a project that involved six people and almost two years of development.

## What to Know About Branches?

![Git Flow](https://wac-cdn.atlassian.com/dam/jcr:34c86360-8dea-4be4-92f7-6597d4d5bfae/02%20Feature%20branches.svg?cdnVersion=205)

I usually work using _GitFlow_, where we have a _main_ branch, a _develop_ branch, and others that can be _feature/_ or _hotfix/_.

The flow is always the same: from _develop_, new branches are created to work locally and then merged back into _develop_ (remote). When we have reached our goals, _develop_ is merged into _main_ to go into production.

If you are new to _Git_, I recommend that you first read the article [Introduction to Git](https://www.atlassian.com/en/git/tutorials/what-is-git).

## Naming Conventions

Regarding the standard for naming commits, I have recently been using _Conventional Commits_, which is a standard for writing commit messages that you can see at [this link](https://www.conventionalcommits.org/en/v1.0.0/). Here is the format and the most common types:

```sh
<type>[optional scope]: <description with verb in infinitive>

feat: add new functionality
fix: fix a bug
docs: changes in documentation
style: changes that do not affect the meaning of the code (whitespace, formatting, missing semicolons, etc.)
refactor: a code change that neither fixes a bug nor adds a feature
perf: a code change that improves performance
test: add missing tests or correct existing tests
chore: changes to the build process or auxiliary tools and libraries such as documentation generation
```

::: warning Recommendation if you have never used git and no one tells you
Before executing any _Git_ command on your branch and you think you might mess it up (especially until you get used to working with this version control system), **make a backup of the project folder with the current state of the task**. This way, if any disaster occurs that you cannot control, you can revert to a previous state and repeat the process correctly.
:::

## Git File Lifecycle or States

![git commands](https://www.dougmahugh.com/content/images/2019/01/GitCommands-1.png)

The most relevant states (there are several more) are:

-   **Untracked Files**: these are files that **DO NOT** live inside _Git_, only on the hard drive. _Git_ has no record of their existence. For example, a new file that we have created and has not yet been added with `git add`.

```sh
touch my_new_file # untracked
```

-   **Staged Files**: these are files in _Staging_. They live inside _Git_ and there is a record of them because they have been affected by the `git add` command, although not their latest changes. _Git_ already knows about these latest changes, but they have not yet been definitively saved in the repository because the _git commit_ command is missing.

```sh
git add my_new_file # staged
```

-   **Tracked Files**: these are the files that live inside _Git_, have no pending changes, and their latest updates have been saved in the repository thanks to the `git add && git commit` commands.

```sh
git commit my_new_file # tracked
```

## Initializing a Project

The first step is **to initialize the project**. This is done the first time by following a series of steps. The easiest way to do this is to create the project on your Git server (_remote/local Docker container, GitLab, GitHub, etc_) and download it to our system.

It's recommended to install the [Git Flow](https://skoch.github.io/Git-Workflow/) package. We execute the following, which gives you the default values:

```sh
git flow init -d
git branch -m master main # Change the name of the master branch to main if desired
```

::: info
This process **only needs to be done once** by a team member.
:::

## Working with Branches

The first thing we are going to learn is the `git status` command, which will tell us the current state of the repository, with the changes that need to be made, deletions, or if everything is up to date.

-   View _local_ and _remote_ branches:

```sh
git branch -a

    develop
    * main
    remotes/origin/HEAD -> origin/main
    remotes/origin/develop
    remotes/origin/main
```

::: info
We can also use `git branch --no-merged` to see branches that contain changes.
:::

-   Switch to a branch:

```sh
git switch develop

    * develop
    main
```

-   To create a branch and switch to it, we have two options. From _develop_, execute one of the following options:

```sh
# Option 1
git branch feature/api-token && git switch feature/api-token
# Option 2
git switch -c feature/api-token

develop
* feature/api-token
main
```

-   Delete a branch:

```sh
git checkout develop && git branch -D feature/api-token # D = force delete or -d = safe delete and warns if there are changes
```

::: info
If we are inside a branch that we want to delete, we must first **switch out** of it. Deleting a branch that has not been merged can make you lose many hours of work. Make sure you want to delete it. 😉
:::

We can also delete remote branches:

```sh
git push origin --delete feature/api-token
```

_origin_ is a convention that refers to the remote repository.

If we want to delete a branch with changes in _staging_, it may not allow us to delete it. There are several methods. I prefer moving the changes to the _stash_ (a kind of clipboard or temporary memory) that _"cuts"_ all the changes and deletes the branch. The other method is more drastic and deletes all changes made in that branch since it was created:

```sh
git stash -u
git checkout develop
git branch -D branch_name
```

## Essential Git Commands

### git clone

```sh
git clone repository_URL
```

### git fetch

This command downloads the remote content but does not update the local repository's working state, so your current work will not be affected. Similar to the `svn update` command.

```sh
git fetch
git fetch -a -p # for all branches (all) and removes (prune) local branches that no longer exist remotely
```

If you want to know more about this command, read the article: [git fetch](https://www.atlassian.com/en/git/tutorials/syncing/git-fetch).

### git add

Add file(s) to the _staging_ area:

```sh
git add README.md
git add .
git add -a # All changes.
git add -A # New, modified, and deleted files.
git add --ignore-removal . # New and modified files.
git add -u # Modified and deleted files.
```

#### Difference between `git add .`, `git add -a`, and `git add -A`

-   `git add .`: Adds all new and modified files in the current directory and its subdirectories, but does not include deleted files.
-   `git add -a`: Adds all new, modified, and deleted files in the current directory and its subdirectories.
-   `git add -A`: Adds all new, modified, and deleted files **in the entire repository, both in the current directory and anywhere else in the repository**.

::: warning - "José, I always use git add ."
See below my comment about the use of `git add .` and why It's not recommended.
:::

### git stash

Temporarily saves changes to bring them back later.

```sh
git stash # It's like cutting to Git's clipboard
git stash -u # Also saves untracked files.
git stash pop # It's like pasting the last stash from Git's clipboard
git stash save "message" # Saves changes with a message
git stash list # shows what we have in the stash
git stash pop stash@{2} # Recovers from stash with index 2
```

![Stash](https://wac-cdn.atlassian.com/dam/jcr:d6fec41a-dc66-4af6-8b0f-c23d271eaf8e/01.svg?cdnVersion=212)

By default, changes in stash will become _staged_. If you want to remove them, use the `git restore --staged` command.

More info on Stash at the following link: [Git stash](https://www.atlassian.com/en/git/tutorials/saving-changes/git-stash).

### git pull

Fetches data from the remote repository and then merges the changes with the local repository. It's the same as doing `git fetch && git merge origin/$CURRENT_BRANCH`

```sh
git pull -p # -p=prune, removes references to deleted remote branches
git pull --force # overwrites the current local branch
```

### git push

Push local changes to remote.

```sh
git push # -p=prune, removes references to deleted remote branches
git push --force # overwrites the remote branch with the same name
```

Regarding the `--force` parameter, be very careful and use it only when you know exactly what you are doing.

### git rm

Remove files marked as tracked. Better to use `git rm` than `rm` to avoid problems.

```sh
git rm file_name
```

### git merge

Case 1: **DO NOT** want to keep local changes. Maybe you modified a file to test, but you no longer need the modification. The only thing that matters is being up to date with remote changes.

```sh
git fetch
git reset --hard HEAD
git merge origin branch_name # usually develop. @{u} is the same as origin $CURRENT_BRANCH
```

Case 2: You care about local changes:

```sh
git fetch
git pull origin develop
# Resolve conflicts if any
```

### git log

Shows a history of all branches:

```sh
git log
git log --oneline --decorate --graph
git log --pretty=format:'%h - %an, %ar : %s'
```

## .gitconfig File

`~/.gitconfig` or `~/.config/git/config` is where the _git_ configuration is on your computer. From there, we can, for example, create aliases for a list of commands that we usually use so we don't have to type the same thing all the time.

Some useful commands:

```sh
git config --global user.name "John Doe"
git config --global user.email john_doe@dev.com
git config --global core.editor "code --wait" # VSCode as default editor
git config --global -e # Opens .gitconfig file for editing
git config --global core.autocrlf [true, input] # true for Windows / input for Mac/Linux
git config -h # Help on config
```

::: info
Regarding _core.autocrlf_, if there are developers working on different OS, the special characters _carriage Return (CR) and Line Feed (LF)_ will be added by Windows users, so It's necessary to run `git config --global core.autocrlf true`. On _macOS/Linux_ It's not necessary, but It's advisable to assign the value input so that it automatically handles this value.
:::

```sh
# .gitconfig file

[alias]
    pull_force = !"git fetch --all; git reset --hard HEAD; git merge @{u}"
```

## Example of Daily Workflow for Working with Git

Let's see an example of how to work with _Git_ on a project. Let's imagine we are going to work on a new feature that involves authenticating an _API_.

Although my team and I work with common _Git_ commands, I'll also show how it would be done with _GitFlow_.

### 1. Create feature branch

We create a branch parallel to _develop_ where we will work. Generally, using _GitFlow_ it will be a _feature/_ branch, for example:

```sh
git fetch -a -p
git switch develop # In case we are on another branch, you can check where you are with git branch
# Common mode
git switch -c "feature/#HM-01-auth-api"
# GitFlow mode
git flow feature start HM-01-auth-api
```

### 2. Add commits

We have worked on the necessary changes, so we will add them to the _stage_ and then commit:

```sh
git status # to know which files are modified, untracked,...
git add . # or better the names of the files for that commit
git commit -m "feature/#HM-01-auth-api"
```

Regarding the use of `git add .`, It's considered bad practice, as we can unintentionally introduce unnecessary files. Also, commits are usually made according to the files needed for a logic to work and It's easier when doing a code review. For example, if we need to authenticate an _API_ in our task, the correct way would be:

```sh
git add auth/api_auth.py app.py
git commit -m "feature/#HM-01-Add new class & modify routes" # Message text in English and does NOT end with a period
git add readme.md
git commit -m "feature/#HM-01-Update doc" # Verbs in infinitive: add, merge, bump, change, delete, modify, fix,...
git add test/system/api/auth/test_api_auth.py
git commit -m "feature/#HM-01-Add tests for all routes" # It's advised that the message does not exceed 50 characters
```

### 3. Compare with develop

Other developers probably advance in the code and your branch is not up to date. It's necessary to download the new modifications from the _develop_ branch and choose the changes that remain.

```sh
# We are in the feature/ branch, if not we switch to it
git fetch -a -p # Not necessary, but always advisable to keep branches up to date
git pull origin develop # IMPORTANT: This downloads changes from remote develop, NOT from your local develop branch.
```

Now two things can happen, everything is fine (we move to point 4) or there are conflicts that need to be resolved (_merge conflict_).

#### 3.1. Merge conflict. Resolve conflicts in your branch.

We will review with `git status` the files that need to be resolved and resolve them one by one. It's recommended to use a graphical application or a more friendly IDE, as our code now contains merge traces that could be forgotten to remove. Some recommended Git apps are [Sourcetree](https://www.sourcetreeapp.com/), [GitKraken](https://www.gitkraken.com/).

### 4. Push changes to the remote git server

We just need to push the changes to merge them with _develop_. There are three ways to do this: `git merge`, `git rebase`, and the _gitflow_ way.

```sh
# Common mode
# We are in the feature/ branch. If not, we switch to it
git merge origin develop --fast-forward # Option 1
git merge origin develop --squash # Option 2

git rebase origin develop && git merge --fast-forward # Option 3

# GitFlow mode
git flow feature finish HM-01-auth-api
```

The recommended way is to use **_git merge_,** although I'll explain the two options:

-   With `git merge` we combine the commits and make a new commit in _develop_. If the _develop_ branch is very active, this option can _"contaminate"_ the history quite a bit.

-   With `git rebase`, **WE DELETE** the commits from the _feature_ branch, equalize with _develop_, and put new commits on top. The merge would be done with `git merge --fast-forward`.

-   It should be clear that _git rebase_ solves the same problem as _git merge_: they are designed to integrate changes from one branch to another, but in different ways. _git rebase_ is mainly used so that in the _Git_ history, branches other than _main_ and _develop_ of the development team (_features, hotfix_) are not seen, as these parallel branches may not be of interest in the history or if there are many commits and they want to be reordered (5 commits can be merged into 2, for example), we would have the option to use an interactive rebase with `git rebase -i`. It's all a matter of aesthetics when we run `git log`.

-   Another golden rule of _git rebase_ is **NEVER USE IT ON PUBLIC BRANCHES**.

More information at [atlassian.com > merging-vs-rebasing](https://www.atlassian.com/en/git/tutorials/merging-vs-rebasing)

## Tips and Other Commands

### untrack a file

```sh
git rm --cached file_name
```

### Fix a bug in main

To do this, create a `hotfix/xxx` branch locally to fix the problem and merge it into `main`. If everything is correct, we must also merge it with `develop`. Using _gitflow_, you need to run the following command:

```sh
git flow hotfix start HM-01-fix-bug
# Do your Kung-Fu
git flow hotfix finish HM-01-fix-bug
```

### Get remote changes without keeping local changes

You want to delete all _uncommitted_ local changes. Maybe you modified a file to test, but you no longer need the modification. The only thing that matters is being up to date with the remote branch.

```sh
git fetch -a
git stash -u # Optional but advisable
git reset --hard HEAD
git merge --no-ff origin develop # Or alternatively we can do git pull
```

### Delete my changes

If you want to revert to the previous state:

```sh
git reset --soft # Keeps changes
git reset --hard # Deletes even your code. Use with caution
```

### Go to a previous state via an ID without keeping changes

```sh
git log # See the commit ID to which we want to revert
git reset --hard 23j45b3b45hb345b
```

## Interesting Links

-   [Git Guide](https://rogerdudler.github.io/git-guide/index.en.html)
-   [Learn Git Branching](https://learngitbranching.js.org)
-   [Git for Beginners: The Definitive Practical Guide](https://qastack.mx/programming/315911/git-for-beginners-the-definitive-practical-guide)
-   [git-scm.com](https://git-scm.com/doc)
-   [Explain Git with D3](https://onlywei.github.io/explain-git-with-d3/#merge)
-   [Freecodecamp > #Git](https://www.freecodecamp.org/news/tag/git/)
-   [The stacking workflow](https://www.stacking.dev)
