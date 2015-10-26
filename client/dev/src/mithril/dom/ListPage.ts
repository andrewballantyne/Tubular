/// <reference path="../../ref.d.ts" />

/**
 * Created by Andrew on 10/25/15.
 */
class ListPage extends RootPage {
  protected getContent():MithrilVirtualElement[] {
    if (!Main.getState().isLoggedIn()) {
      // Page not visible until logged in
      this.navGo('home');
      return;
    }
    return [
      this.getHeader("List Page"),
      m("p", "The list page is only visible once you login, and will contain various listings of YouTube data.")
    ];
  }
}