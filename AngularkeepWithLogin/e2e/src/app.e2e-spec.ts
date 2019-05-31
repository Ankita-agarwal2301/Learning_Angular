//import { AppPage } from './app.po';
import { browser, logging,element,by } from 'protractor';

describe('workspace-project App', () => {
  //let page: AppPage;

  // beforeEach(() => {
  //   //   page = new AppPage();
  // });

  // it('should display welcome message', () => {
  //   page.navigateTo();
  //   expect(page.getTitleText()).toEqual('Welcome to angularkeep!');
  // });

  it('should launch application with login view',()=>{
    browser.get('/');
    expect(browser.getCurrentUrl()).toContain('login');
    browser.sleep(3000);
  });

  it('should allow user to login and on success redirects to notes view', ()=>{
    let loginElements = element.all(by.css('input'));
    loginElements.get(0).sendKeys('admin');
    loginElements.get(1).sendKeys('password');

    let loginButton = element(by.css('button'));
    loginButton.click();
    browser.sleep(3000);
    expect(browser.getCurrentUrl()).toContain('noteview');
   // browser.sleep(3000);
  })


  it('should count no of notes should match with notes count in db',()=>{
    let cardNo = element.all(by.css('mat-card'));
    expect(cardNo.count()).toBe(10);
  })

  it('count no of notes  after adding a newnote', () => {
    element(by.css('mat-expansion-panel-header')).click();
   browser.sleep(300);
    element(by.css('input')).sendKeys('New Note');
    element(by.css('textarea')).sendKeys('New title');
    element(by.css('button')).click();
    let cardNo = element.all(by.css('mat-card'));
    expect(cardNo.count()).toBe(11);
    browser.sleep(3000);
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
