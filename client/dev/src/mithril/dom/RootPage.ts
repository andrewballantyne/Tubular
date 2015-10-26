/// <reference path="../../ref.d.ts" />

/**
 * Created by Andrew on 10/25/15.
 */
class RootPage extends BaseMithril {
  public view():MithrilVirtualElement {
    return m('div', {'class': 'container-fluid'}, [
      this.getNav(),
      m('div', {'class': 'contentPane'}, [
        this.getContent()
      ])
    ]);
  }

  protected getNav():MithrilVirtualElement {
    return m('div', {'class': 'navPane navbar'}, [
      m('span', {'class': 'siteTitle'}, "Tubular"),
      m('a', {'class': 'btn btn-link', onclick: this.navGo.bind(this, '')}, 'Home'),
      Main.getState().isLoggedIn() ? // TODO: This won't work as the page change the state variable is re-created
        m('a', {'class': 'btn btn-link', onclick: this.navGo.bind(this, '')}, 'List') :
        "",
      m('a', {'class': 'btn btn-link', onclick: this.navGo.bind(this, 'about')}, 'About'),
      m('a', {'class': 'btn btn-link', onclick: this.navGo.bind(this, 'login')}, 'Login')
    ]);
  }

  /** @abstract **/
  protected getContent():MithrilVirtualElement {
    throw new Error("Abstract RootPage.getContent()");
  }

  private navGo(pageName:string):void {
    window.location.href = window.location.pathname + '?/' + pageName;
  }
}