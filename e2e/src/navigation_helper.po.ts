import { browser, by, element, Key } from 'protractor';

export class NavigationHelper {
	public navigateTo(url) {
		return browser.get(url);
	}

	public urlIncludes(url: string) {
		return browser.getCurrentUrl().then(function(actualUrl) {
			return actualUrl.includes(url);
		});
	}
}
