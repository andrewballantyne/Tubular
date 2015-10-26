/// <reference path="../../ref.d.ts" />

/**
 * Created by Andrew on 10/25/15.
 */
class AboutPage extends RootPage {
  protected getContent():MithrilVirtualElement[] {
    return [
      this.getHeader("About Page"),
      m("p", "A simple about page... TBD")
    ];
  }
}