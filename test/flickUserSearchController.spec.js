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

it('displays search results', function() {
  ctrl.doSearch();
  expect(ctrl.searchResult.items).toEqual(items)
})


});
