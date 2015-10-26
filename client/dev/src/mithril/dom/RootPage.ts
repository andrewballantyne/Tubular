/// <reference path="../../ref.d.ts" />

/**
 * Created by Andrew on 10/25/15.
 */
class RootPage extends BaseMithril {
  public view():MithrilVirtualElement {
    return m('div', {'class': 'container-fluid'}, [
      this.getNav(),
      this.getContent()
    ]);
  }

  protected getNav():MithrilVirtualElement {
    return m('div', 'Nav Bar');
  }

  protected getContent():MithrilVirtualElement {
    return m('div', 'Generic Content');
  }
}