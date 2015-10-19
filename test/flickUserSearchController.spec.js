describe('flickUserSearchController', function(){
  beforeEach(module('flickrUserSearch'));

  var ctrl

  beforeEach(inject(function($controller) {
    ctrl = $controller('flickrUserSearchController');
    }));

  it('initilises with an empty search result and term', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });


});
