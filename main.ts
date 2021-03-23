import { Plugin} from 'obsidian';

const plugin_name = 'koncham-undefault-hotkeys';

export default class MyPlugin extends Plugin {

	async onload() {

		console.log('loading plugin [' + plugin_name + ']');

		var keymap = {
			"Alt-Right": function () { return },
			"Alt-Left": function () { return },
			"Ctrl-Up": function () { return },
			"Ctrl-Down": function () { return },
			"Shift-Ctrl-Up": function () { return },
			"Shift-Ctrl-Down": function () { return },
		}

		this.registerCodeMirror((cm: CodeMirror.Editor) => {
			cm.addKeyMap(keymap);
		});
	}

	onunload() {
		console.log('unloading plugin [' + plugin_name + ']');
	}
}