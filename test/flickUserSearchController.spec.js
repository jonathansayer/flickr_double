describe('flickUserSearchController', function(){
  beforeEach(module('flickrUserSearch'));

  var ctrl
  var httpBackend;

  var items = [
  {
    "login": "tansaku",
    "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
    "html_url": "https://github.com/tansaku"
  },
  {
    "login": "stephenlloyd",
    "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
    "html_url": "https://github.com/stephenlloyd"
  }
];

  beforeEach(inject(function($httpBackend)
  {
    httpBackend = $httpBackend
    httpBackend
      .when("GET", "https://api.flickr.com/services/rest?method=flickr.test.echo&name=hello")
      .respond(
        { items:items }
      )
  }));

  afterEach(function() {
   httpBackend.verifyNoOutstandingExpectation();
   httpBackend.verifyNoOutstandingRequest();
  });

  beforeEach(inject(function($controller) {
    ctrl = $controller('flickrUserSearchController');
    }));

  it('initilises with an empty search result and term', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });

it('displays search results', function(){
  ctrl.searchTerm = 'hello'
  ctrl.doSearch();
  httpBackend.flush();
  expect(ctrl.searchResult.items).toEqual(items)
})


});
