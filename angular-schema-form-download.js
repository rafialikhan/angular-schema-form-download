angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/download/angular-schema-form-download.html","<div class=\"form-group\" ng-class=\"{\'has-error\': hasError()}\">\n    <div>\n       <a class=\"btn btn-default btn-primary\" download href=\"{{form.path}}\" role=\"button\">{{form.title || \'Download\'}}</a>\n    </div>\n    <span class=\"help-block\">{{ (hasError() && errorMessage(schemaError())) || form.description}}</span>\n</div>");}]);
angular.module('schemaForm').config(
    ['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
        function(schemaFormProvider,  schemaFormDecoratorsProvider) {

          //Add to the bootstrap directive
          schemaFormDecoratorsProvider.addMapping(
              'bootstrapDecorator',
              'download',
              'directives/decorators/bootstrap/download/angular-schema-form-download.html'
          );
          schemaFormDecoratorsProvider.createDirective(
              'download',
              'directives/decorators/bootstrap/download/angular-schema-form-download.html'
          );
        }
    ])
