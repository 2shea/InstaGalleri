PhotoGallery.Views.PhotosView = Backbone.View.extend({
  initialize: function () {
    var that = this;
    
    this.$el.on('change', function (event) {
      var newLocation = $(".location-select").val();
      that.changeLocation(newLocation);
    });
    
    this.listenTo(this.collection, 'add', this.render);
    this.currentLocation = "San Francisco"
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
      "Bangkok": {"lat":"13.73", "lng":"100.52"},
      "Cape Town": {"lat":"-33.92", "lng":"18.42"},
      "Disney World": {"lat":"33.81", "lng":"-117.919"},
      "Dodger Stadium": {"lat":"34.07", "lng":"-118.24"},
      "Pyramids of Giza": {"lat":"29.976", "lng":"31.131"},
      "Eiffel Tower": {"lat":"48.858", "lng":"2.29"},
      "Golden Gate Bridge": {"lat":"37.819", "lng":"-122.478"},
      "Times Square": {"lat":"40.759", "lng":"-73.985"},
      "Sydney Opera House": {"lat":"-33.856", "lng":"151.2152"},
      "Bellagio Fountains": {"lat":"36.11", "lng":"-115.17"},
      "Taj Mahal": {"lat":"27.17", "lng":"78.04"},
      "St. Basil's Cathedral": {"lat":"55.75", "lng":"37.62"},
      "Santorini": {"lat":"36.417", "lng":"25.43"},
      "Machu Picchu": {"lat":"-13.16", "lng":"-72.546"},
      "Tower of Pisa": {"lat":"43.723", "lng":"10.397"},
      "Mecca": {"lat":"21.417", "lng":"39.817"},
      "Hagia Sophia": {"lat":"41.01", "lng":"28.98"},
      "Angkor Wat": {"lat":"13.41", "lng":"103.867"},
      "Vatican City": {"lat":"41.90", "lng":"12.45"},
      "Forbidden City": {"lat":"39.91", "lng":"116.397"},
      "Temple of Besakih":{"lat":"-8.37", "lng":"115.45"},
      "Cut Bank": {"lat":"48.63", "lng":"-112.32"}
    }
  },
  
  events: {
    'mouseover .circular': 'floatPhoto'
  },
  
  template: JST['photos/index'],
  
  render: function () {
    var contents = this.template({
      photos: this.collection,
      location: this.currentLocation
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
    this.currentLocation = newLocation;
    this.collection.fetch({
      data: {
        "lat":this.locations[newLocation]["lat"], 
        "lng":this.locations[newLocation]["lng"]
      }
    })
  }
})