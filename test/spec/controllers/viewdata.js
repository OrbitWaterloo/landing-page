'use strict';

describe('Controller: ViewdataCtrl', function () {

  // load the controller's module
  beforeEach(module('landingOrbitApp'));

  var ViewdataCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewdataCtrl = $controller('ViewdataCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ViewdataCtrl.awesomeThings.length).toBe(3);
  });
});
