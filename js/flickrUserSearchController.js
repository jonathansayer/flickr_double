flickrUserSearch.controller('flickrUserSearchController', ['$resource', function($resource){

  var self = this;
  var searchResult;
  var searchResource = $resource('https://api.flickr.com/services/rest')

  self.doSearch = function() {
    self.searchResult = searchResource.get(
      {method: "flickr.test.echo",
      name: self.searchTerm}
    );
  }

}]);
