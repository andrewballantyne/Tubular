/// <reference path="../../ref.d.ts" />

/**
 * Created by Andrew on 10/25/15.
 */
class BaseMithril {
  constructor () {
  }

  /** @abstract **/
  public view():MithrilVirtualElement {
    throw new Error("Abstract BaseMithril.view()");
  }

  public controller():void {
  }

  /** @deprecated - may not be necessary **/
  public vm():void {
  }
}