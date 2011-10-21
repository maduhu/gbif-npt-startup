(function($){
  Drupal.GM3.region = function(map){
    // Point object.
    this.GM3 = map;
    this.geo = new google.maps.Geocoder();
    this.countries = new Object();
    // Add Regions sent from server.
    if(this.GM3.libraries.region.regions) {
      for( var i in this.GM3.libraries.region.regions) {
        for( var j in this.GM3.libraries.region.regions[i]) {
          // Execute the callback to get the Polygon. This Polygon should then
          // be added to the map, but without it being editable.
          var self = this;
          $.ajax({url: Drupal.settings.gm3_region.callback + '/' + i + '/' + this.GM3.libraries.region.regions[i][j], success: function(data, textStatus, jqXHR){
            var polygons = eval(data);
            for( var i in polygons) {
              self.GM3.children.polygon.add_polygon(polygons[i], false);
            }
          }})
        }
      }
    }
  }
  Drupal.GM3.region.prototype.active = function(){
    this.GM3.google_map.setOptions({draggableCursor: 'pointer'});
  }
  Drupal.GM3.region.prototype.event = function(event_type, event, event_object){
    switch(this.GM3.active_class){
      case 'region':
        switch(event_type){
          case 'click':
            var self = this;
            this.geo.geocode({location: event.latLng}, function(result, status){
              if(status === 'OK') {
                for(i in result) {
                  if(result[i].types[0] && result[i].types[0] == 'country' && result[i].types[1] && result[i].types[1] == 'political') {
                    var region_name = result[i].address_components[0]['long_name'];
                    var region_code = result[i].address_components[0]['short_name'];
                    console.log(region_name);
                    if(self.countries[region_code] == region_name) {
                      self.countries[region_code] = undefined;
                    } else {
                      self.countries[region_code] = region_name;
                    }
                  }
                }
              } else {
                alert(Drupal.t('There has been an error with Google\'s service.  Please try again later.'));
              }
            });
            break;
          case 'rightclick':
            this.GM3.set_active_class('default');
            break;
        }
        break;
    }
  }
  Drupal.GM3.region.prototype.highlight_region = function(){

  }
})(jQuery);