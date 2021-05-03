import {Selector, t} from "testcafe";

class ApplicationForm {
    url = "https://www.ig.com/ie";

    loginButton = Selector('.nt-strip__login-cta');


}

export default new ApplicationForm();