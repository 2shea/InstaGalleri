PhotoGallery.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },
  
  routes: {
    "": "photosView"
  },
  
  photosView: function () {
    var view = new PhotoGallery.Views.PhotosView({
      collection: PhotoGallery.Collections.photos
    })
    this._swapView(view);
    // this.photosFloat();
  },
  
  // photosFloat: function () {
  //  setInterval(function () {
  //     $(".float").each(function (i, el) {
  //       var randX = Math.floor(Math.random()*800),
  //           randY = Math.floor(Math.random()*800);
  //           
  //       $(el).css({"transform":"translate(" + randX + "px," + randY + "px)"})
  //       $(el).addClass("overlap")
  //     })
  //   }, 5000);
  // },
  
  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render());
  }
});
