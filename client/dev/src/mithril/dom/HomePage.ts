/// <reference path="../../ref.d.ts" />

/**
 * Created by Andrew on 10/25/15.
 */
class HomePage extends RootPage {
  protected getContent():MithrilVirtualElement[] {
    return [
      this.getHeader("Home Page"),
      m("p", "Welcome to Tubular. Content undergoing changes.")
    ];
  }
}