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

    Main.instance.create();
  }

  public static getState():State {
    return Main.instance.state;
  }

  private state:State;
  private mithrilMain:MithrilMain;

  constructor() {
    this.state = new State();
  }

  /**
   * Creates the visible instance.
   */
  public create():void {
    this.mithrilMain = new MithrilMain();
  }
}