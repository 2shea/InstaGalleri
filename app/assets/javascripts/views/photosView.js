PhotoGallery.Views.PhotosView = Backbone.View.extend({
  initialize: function () {
    var that = this;
    
    this.$el.on('change', function (event) {
      var newLocation = $(".location-select").val();
      that.changeLocation(newLocation);
    });
    
    this.listenTo(this.collection, 'change add reset', this.render);
    
    this.locations = {
      "San Francisco": {"lat":"37.77", "lng":"-122.42"},
      "New York": {"lat":"40.7", "lng":"-74"},
      "Los Angeles": {"lat":"34.05", "lng":"-118.24"},
      "Las Vegas": {"lat":"36.1146", "lng":"-115.1728"},
      "Sydney": {"lat":"-33.8", "lng":"151.2"},
      "Tokyo": {"lat":"35.69", "lng":"139.7"},
      "Moscow": {"lat":"55.76", "lng":"37.61"},
      "Sao Paulo": {"lat":"-23.55", "lng":"-46.63"},
      "Rio de Janeiro": {"lat":"-22.9", "lng":"-43"},
      "London": {"lat":"51.5", "lng":"-0.13"},
      "Bangkok": {"lat":"13.73", "lng":"100.52"}
    }
  },
  
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
  },
  
  changeLocation: function (newLocation) {
    var that = this;
    this.collection.fetch({
      data: {
        "lat":this.locations[newLocation]["lat"], 
        "lng":this.locations[newLocation]["lng"]
      }// ,
//       success: function () {
//         that.render();
//       }
    })
  }
})