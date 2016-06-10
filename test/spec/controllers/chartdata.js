'use strict';

describe('Controller: ChartdataCtrl', function () {

  // load the controller's module
  beforeEach(module('landingOrbitApp'));

  var ChartdataCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChartdataCtrl = $controller('ChartdataCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ChartdataCtrl.awesomeThings.length).toBe(3);
  });
});
