/// <reference path="../../ref.d.ts" />

/**
 * Created by Andrew on 10/25/15.
 */
class Main {
  public static start():void {
    new Main();
  }

  private homePage:RootPage;

  constructor() {
    this.setupPages();

    this.mithrilInit();
  }

  public setupPages():void {
    this.homePage = new HomePage();
  }

  public mithrilInit():void {
    m.route(document.body, '/', {
      '/': this.homePage
    });
  }
}