/// <reference path="../../ref.d.ts" />

/**
 * Created by Andrew on 10/25/15.
 */
class LoginPage extends RootPage {
  protected getContent():MithrilVirtualElement[] {
    return [
      this.getHeader("Login Page"),
      m("p", "A login page that will get you access to your YouTube account and data."),
      Main.getState().isLoggedIn() ?
        m("p", "Already logged in.") :
        m("button", {'onclick': this.fakeLogin.bind(this)}, "Fake Login")
    ];
  }

  private fakeLogin():void {
    Main.getState().setLoggedIn(true);
  }
}