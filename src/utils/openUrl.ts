import { open, showHUD } from "@raycast/api";
import { URL, URLSearchParams } from "node:url";
import { findThawApplication, THAW_INSTALL_URL } from "./checkInstall";
import { showError } from "./error";

export type ThawUrlQuery = Record<string, string | undefined>;

export const buildThawUrl = (action: string, query?: ThawUrlQuery): string => {
	const url = new URL(`thaw://${action}`);
	const searchParams = new URLSearchParams();

	for (const [key, value] of Object.entries(query ?? {})) {
		if (value) {
			searchParams.set(key, value);
		}
	}

	url.search = searchParams.toString();
	return url.toString();
};

export const openThawUrl = async (
	action: string,
	successMessage: string,
	query?: ThawUrlQuery,
) => {
	try {
		const thawApplication = await findThawApplication();
		if (!thawApplication) {
			await showHUD(`Thaw is not installed. Get it at: ${THAW_INSTALL_URL}`);
			return false;
		}

		await open(buildThawUrl(action, query));
		await showHUD(successMessage);
		return true;
	} catch (error) {
		await showError(error);
		return false;
	}
};
