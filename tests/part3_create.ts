import LandingPage from "../pages/LandingPage";
import {errors, accounts} from "../data/data";
import LoginPage from "../pages/LoginPage";
import {Selector} from "testcafe";

// PART 3: get coding
fixture(`Login page`)
    .page(LoginPage.url);

// test("Should see two errors when password and login are empty", {
//     await t
//         .click(LandingPage.loginButton)
//         .expect(LoginPage.error.visible).ok();
//     // TODO: finish
// });

