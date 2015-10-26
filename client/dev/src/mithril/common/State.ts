/**
 * Created by Andrew on 10/25/15.
 */
class State {
  private loggedIn:boolean;

  constructor() {
    this.loggedIn = false;
  }

  public isLoggedIn():boolean {
    return this.loggedIn;
  }

  public setLoggedIn(loggedIn:boolean):void {
    this.loggedIn = loggedIn;
  }
}