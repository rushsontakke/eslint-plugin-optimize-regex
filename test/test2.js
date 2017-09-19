var MethodNotAllowedTest = require("../jsc/MethodNotAllowed/MethodNotAllowed");
describe("MethodNotAllowed Suite", function() {
    beforeEach(function(){
      var Context = function(){
        };
        Context.prototype = {
            setVariable: function(propertyName, propertyValue){
            this[propertyName] = propertyValue;
            },
            getVariable: function(propertyName){
              return this[propertyName];
            }
        };
        context = new Context();
    });

    it("Negative: Invalid Method ", function() {
        context.setVariable("errorJSON", "a42_generic_invalid_method");
	expect(methodNotAllowed).toThrow();
        expect(context.getVariable("errorJSON")).toBe("a42_generic_invalid_method");
    });

});


