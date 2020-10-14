These are some random code snippets that I found usedul

[taking screen shots from videos](http://davidwalsh.name/create-screenshots-videos)
```bash
ffmpeg -i myvideo.webm -ss 00:00:01 -vframes 1 first-frame.png

# removing audio from video
ffmpeg -i MusicVideo.webm -vcodec copy -an MusicVideoNoAudio.webm

# squashing Commits
git rebase -i HEAD~4
git rebase -i origin/publish

# check if a process is running
ps -ax | grep <process-name>

# To search for something within a folder…doing a recursive search
grep -rli ’Search term' /path/to/search/

# git count of files stage/unstage
git status | grep 'modified:' | wc -l

# find number of files in directory recursively
find . -type f | wc -l

# Search all ".js" files for "debounce"
find . -name "*.[js]" -exec grep -i -H "debounce" {} \;

# Find all directory with name "home".
find . -name home -type d

# delete all branches except develop & release
git branch | grep -v "develop" | grep -v “release” | xargs git branch -D
git branch | grep -v “master” | xargs git branch -D

# automatically stashes…pulls latest…rebase(if necessary)…and then pop the stash
git pull --rebase --autostash

```

```js
// display JSON tree structure for objects
console.log(JSON.stringify(yourObject, null, 2))

// pause execution to debug hard to get CSS
setTimeout(() => {debugger}, 3000);
```
