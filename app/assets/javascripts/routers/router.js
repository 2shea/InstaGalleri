PhotoGallery.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },
  
  routes: {
    "": "fetchPhotos"
  },
  
  fetchPhotos: function () {
    console.log(PhotoGallery.Collections.photos);
    
    // $.ajax({
  //     type: "GET",
  //     url: "https://api.instagram.com/v1/media/search?lat=" + lat + "&lng=" + 
  //     lng + "&client_id=" + INSTAGRAM_CLIENT_ID,
  //     success: function (data) {
  //       console.log(data)
  //     }
  //   })
  },
  
  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render());
  }
});
