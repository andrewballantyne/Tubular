/// <reference path="../../ref.d.ts" />

/**
 * Created by Andrew on 10/25/15.
 */
class Main {
  private static instance:Main = null;
  public static start():void {
    if (Main.instance === null)
      Main.instance = new Main();
    else
      throw new Error("Cannot start Main more than once");

    Main.instance.init();
  }

  public static getState():State {
    return Main.instance.state;
  }

  public state:State;

  private homePage:HomePage;
  private aboutPage:AboutPage;
  private loginPage:LoginPage;

  constructor() {
    this.state = new State();

    this.setupPages();
  }

  private setupPages():void {
    this.homePage = new HomePage();
    this.aboutPage = new AboutPage();
    this.loginPage = new LoginPage();
  }

  public init():void {
    m.route(document.body, '/', {
      '/': this.homePage,
      '/about': this.aboutPage,
      '/login': this.loginPage
    });
  }
}