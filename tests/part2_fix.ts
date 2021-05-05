import LandingPage from "../pages/LandingPage";
import {errors, accounts} from "../data/data";
import LoginPage from "../pages/LoginPage";
import {Selector} from "testcafe";

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

var errorValue;

