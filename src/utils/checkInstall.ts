import { getApplications } from "@raycast/api";

export const THAW_INSTALL_URL = "https://github.com/stonerl/Thaw";

const isThawApp = (value?: string): boolean => {
	if (!value) {
		return false;
	}

	const normalizedValue = value.trim().toLowerCase();
	return (
		/^thaw(?:[\s._-]?(?:debug|dev))?$/.test(normalizedValue) ||
		/(?:[.-]thaw(?:[.-](?:debug|dev))?)$/.test(normalizedValue)
	);
};

export const findThawApplication = async () => {
	const apps = await getApplications();
	return apps.find((app) => {
		const pathName = app.path
			.split("/")
			.pop()
			?.replace(/\.app$/i, "");

		return [app.name, app.localizedName, app.bundleId, pathName].some(
			isThawApp,
		);
	});
};

export const isThawInstalled = async (): Promise<boolean> => {
	return Boolean(await findThawApplication());
};
