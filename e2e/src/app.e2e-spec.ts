import { AppPage } from './app.po';
import { browser, by, protractor, element } from 'protractor';
import { NavigationHelper } from './navigation_helper.po';

describe('workspace-project App', () => {
  let page: AppPage;
  const navigation: NavigationHelper = new NavigationHelper();
  beforeEach(() => {
    page = new AppPage();
  });

  it('should display search box', () => {
    page.navigateTo();
    var myElement = page.getElementById('search-box');
    expect(myElement.isPresent()).toBeTruthy();

    var myElement = page.getElementById('search-input');
    expect(myElement.isPresent()).toBeTruthy();

    var myElement = page.getElementById('search-icon');
    expect(myElement.isPresent()).toBeTruthy();
  });

  it('should can search product clicking button', () => {
    page.navigateTo();
    page.setElementTextById('search-input', 'Apple');
    page.clickOnElementById('search-icon').then(() => {
      expect(navigation.urlIncludes('search')).toBeTruthy();
      var result = page.getElementById('searchResult');
      expect(result.isPresent()).toBeTruthy();

      var prod = page.getElementById('productsCard').all(by.css('.result'));
      prod.then((items) => {
        expect(items.length).toBe(4);
      });
      browser.sleep(2000);
    });
  });

  it('should can search product pressing enter', () => {
    page.navigateTo();
    page.setElementTextById('search-input', 'Android');
    browser.actions().sendKeys(protractor.Key.ENTER).perform().then(() => {
      expect(navigation.urlIncludes('search')).toBeTruthy();
      var result = page.getElementById('searchResult');
      expect(result.isPresent()).toBeTruthy();

      var prod = page.getElementById('productsCard').all(by.css('.result'));
      prod.then((items) => {
        expect(items.length).toBe(4);
      });
      browser.sleep(2000);
    });
  });

  it('should open product detail', () => {
    browser.actions().sendKeys(protractor.Key.ENTER).perform().then(() => {
      expect(navigation.urlIncludes('search')).toBeTruthy();
      var result = page.getElementById('searchResult');
      expect(result.isPresent()).toBeTruthy();

      var prod = page.getElementById('productsCard').all(by.css('.result'));
      prod.then((items) => {
        expect(items.length).toBe(4);
        
        element(by.css('a')).click();
        expect(page.getElementById('detailContainer').isPresent()).toBeTruthy();
      });
      browser.sleep(2000);
    });
  });
});
