/**
 * Created by Andrew on 10/23/15.
 */
var page_root = {
  _pageContainer: null,
  vm: function () {

  },
  controller: function () {

  },
  view: function () {
    return m("div", {class:'container-fluid'}, [
      m("div", {id: 'nav'}, "test"),
      m("div", {id: 'content'})
    ]);
  },
  pageContainer: function () {
    if (this._pageContainer === null) this._pageContainer = document.getElementById('content');
    return this._pageContainer;
  }
};