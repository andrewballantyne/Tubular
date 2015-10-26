/// <reference path="../../ref.d.ts" />

/**
 * Created by Andrew on 10/25/15.
 */
class LoginPage extends RootPage {
  protected getContent():MithrilVirtualElement {
    return m("div", [
      m("p", "Login Page"),
      m("button", {'onclick': this.fakeLogin.bind(this)}, "Fake Login")
    ]);
  }

  private fakeLogin():void {
    Main.getState().setLoggedIn(true);
  }
}