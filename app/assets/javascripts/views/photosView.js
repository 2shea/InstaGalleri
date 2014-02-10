PhotoGallery.Views.PhotosView = Backbone.View.extend({
  events: {
    'mouseover .circular': 'floatPhoto'
  },
  
  template: JST['photos/index'],
  
  render: function () {
    var contents = this.template({
      photos: this.collection
    });
    this.$el.html(contents);
    return this.$el;
  },
  
  floatPhoto: function (event) {
    var randX = Math.floor(Math.random()* 400 - 200),
        randY = Math.floor(Math.random()* 400 - 200),
        pos = $(event.target).offset();
            
    $(event.target).css({"transform":"translate(" + randX + "px," + randY + "px)"});
    setTimeout(function () {
      $(event.target).css({"transform":"translate(" + pos[0] + "px," + pos[1] + "px)"})
    }, 3000)
    
    console.log($(event.target).offset())
  }
})