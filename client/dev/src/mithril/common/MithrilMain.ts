/// <reference path="../../ref.d.ts" />

/**
 * Created by Andrew on 10/25/15.
 */
class MithrilMain {
  private pageNav:{[pageId:string]:RootPage};

  constructor() {
    this.setupPages();
    this.mithrilStart();
  }

  private setupPages():void {
    this.pageNav = {
      'home': new HomePage(),
      'list': new ListPage(),
      'about': new AboutPage(),
      'login': new LoginPage()
    };
  }

  private mithrilStart():void {
    m.route.mode = 'hash'; // allows state to be saved

    m.route(document.body, 'home', this.pageNav);
  }
}