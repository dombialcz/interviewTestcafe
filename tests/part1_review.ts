import LandingPage from "../pages/LandingPage";
import {errors, accounts} from "../data/data";
import LoginPage from "../pages/LoginPage";
import {Selector} from "testcafe";

// PART 1: get familiar with TESTCAFE, describe what you see
fixture(`Login negative tests`)
    .page(LandingPage.url);

// .afterEach(async t =>
//     await Login.logout());

test("Should display landing page", async t => {
    await t
        .expect(LandingPage.loginButton.visible).ok();

    await t
        .click(LandingPage.loginButton);
}).meta('smoke', 'true');

test("Should see error when login is empty", async t => {
    await t
        .wait(1000); // wait for page to load
    await t
        .click(LandingPage.loginButton);
    await t
        .typeText(LoginPage.passwordField, "test")
        .click(LoginPage.loginButton)
        .wait(1000) // wait for error to appear
        .expect(LoginPage.loginError.innerText).contains(errors.passwordRequired);
}).meta('login', 'true');

test("Should see error when password is empty", async t => {
    await t
        .wait(1000);
    await t
        .click(LandingPage.loginButton);
    await t
        .typeText(LoginPage.passwordField, "test")
        .click(LoginPage.loginButton)
        .wait(1000) // wait for error to appear
        .expect(LoginPage.error.visible).ok();
}).meta('login', 'true');
