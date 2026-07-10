import { Icon } from "@raycast/api";

export interface SettingToggle {
	key: "autoRehide" | "showOnHover" | "hideApplicationMenus";
	/** Suffix used in the Raycast command name: toggle-<suffix> */
	commandSuffix: string;
	title: string;
	subtitle: string;
	icon: Icon;
}

export const SETTING_TOGGLES: SettingToggle[] = [
	{
		key: "autoRehide",
		commandSuffix: "auto-rehide",
		title: "Toggle Auto Rehide",
		subtitle: "Turn automatic hidden-section rehide on or off",
		icon: Icon.Clock,
	},
	{
		key: "showOnHover",
		commandSuffix: "show-on-hover",
		title: "Toggle Show on Hover",
		subtitle: "Turn hidden-section reveal on hover on or off",
		icon: Icon.Mouse,
	},
	{
		key: "hideApplicationMenus",
		commandSuffix: "hide-application-menus",
		title: "Toggle Hide Application Menus",
		subtitle: "Turn application menu hiding on or off",
		icon: Icon.AppWindow,
	},
];
