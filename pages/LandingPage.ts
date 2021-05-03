import {Selector, t} from "testcafe";

class LandingPage {
    url = "https://www.ig.com/ie";

    loginButton = Selector('.nt-strip__login-cta');


}

export default new LandingPage();