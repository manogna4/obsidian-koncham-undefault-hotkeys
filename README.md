# koncham undefault hotkeys

This is a plugin for [Obsidian](https://obsidian.md)

update as of '2021-03-31':\
the latest version of obsidian (0.11.10) does not require this plugin since it's been handled in the core.

I am leaving this repo here as a record

## what does it do?

CodeMirror sets [default hotkeys](https://codemirror.net/doc/manual.html#commands) that cannot be re-allocated using the Obsidian UI.

This plugins removes some defaults, freeing them up for other commands.

Reasons for removing defaults include:
+ redundant hotkeys
+ not universally useful

### hotkeys removed

| hotkey | reason | details |
| --- | --- | --- |
| `alt+left/right` | same as `home/end` |
| `ctrl+up/down` | same as `up/down` | CodeMirror ignores the `ctrl` |
| `ctrl+shift+up/down` | same as `shift+up/down` | CodeMirror ignores the `ctrl` |


## caveats ⚠

I am a javascript beginner. Please use the plugin with caution. Since it does not access note content, your data should be safe.

This plug in has only been tested on Windows desktop


## known issues

-- none --

please raise issues in github if there are any


## future work

+ [ ]  have toggles to ignore the removal of individual hotkeys
+ [ ]  remove more defaults if required



