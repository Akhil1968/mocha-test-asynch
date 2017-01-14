var should = require('chai').should();;
var expect = require('chai').expect;


describe("my-test-group", function(){
  var myvar = false;

  beforeEach(function(done){
    setTimeout(function(){
                          myvar = true; 
                          done();
              }, 100);

  });

  it("asynch-test-case", function(){
    expect(myvar).equals(true);
    //myvar.should.equal(true);
  });

});
