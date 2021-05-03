/*
Our Intern worked on this test in the last few days of his internship.
Unfortunately intern didn't have time to finish it and no code review was done.

Can you fix it so it runs and passes code review?
 */

import LandingPage from "../pages/LandingPage";
import {errors, accounts} from "../data/data";
import LoginPage from "../pages/LoginPage";
import {Selector} from "testcafe";


// PART 1: get familiar with TESTCAFE, describe what you see
fixture(`Login negative tests`)
    .page(LandingPage.url);

    // .afterEach(async t => //TODO: is this needed?
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


// PART 2: fix errors
fixture(`Login page`)
    .page(LoginPage.url);

test("Should not log in with locked account", async t => {
    await t
        .typeText(LoginPage.loginField, accounts.invalidAccount.login)
        .typeText(LoginPage.passwordError, accounts.invalidAccount.password)
        .click(LoginPage.loginButton)
    // TODO: wait for error page to load
    ;

    errorValue = Selector('h1').innerText;
});


test("Should test error value", async t => {
    await t
        .expect(errorValue).eql("Your account has been locked");
});

var errorValue; // TODO: why is this not ok?


// PART 3: get coding
fixture(`Login page`)
    .page(LoginPage.url);

// test("Should see two errors when password and login are empty", {
//     await t
//         .click(LandingPage.loginButton)
//         .expect(LoginPage.error.visible).ok();
//     // TODO: finish
// });

