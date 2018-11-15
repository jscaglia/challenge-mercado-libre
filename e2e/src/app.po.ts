import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  public getElementById(elem: string) {
    return element(by.id(elem));
  }

  public getElementByClass(elem: string) {
    return element(by.css('.'+elem));
  }
  
  public clickOnElementById(id) {
		return element(by.id(id)).click();
  }
  
  public setElementTextById(elementId, text) {
		element(by.id(elementId)).sendKeys(text);
	}
}
