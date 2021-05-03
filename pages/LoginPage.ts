import {Selector, t} from 'testcafe';
import {config} from "../config";


class LoginPage {
  url = "https://www.ig.com/ie/login";
  loginField = Selector("input[name=account_id]");
  passwordField = Selector("#nonEncryptedPassword");
  loginButton = Selector("#loginbutton");

  error = Selector('.error');
  passwordError = Selector('.passwordField > div > label'); // TODO: > div > label add descendant label
  loginError = Selector ('.formField > div > label');

  async login(username: string, password: string, retry = config.login_retries ) {
    await t
      .expect(this.loginField.visible).ok('login field is visible')
      .typeText(this.loginField, username)
      .typeText(this.passwordField, password)
      .click(this.loginButton);
      // .expect(this.loader.visible).notOk({timeout: 15000});
    if (await this.error.exists && retry > 0)
      await this.login(username, password, retry--);
  }

  async logout() {
    await t
      .click('.log-in-as')
      .expect(Selector('input[name=login]').exists).ok('User is logged out')
  }
}

export default new LoginPage();
