console.log('js');

const shellApp = angular.module('ShellApp', [] )  //the empty array will be filled with dependencies in the future

shellApp.controller('ShellController', [function(){
    let self = this;
    self.number = 7;
}])
