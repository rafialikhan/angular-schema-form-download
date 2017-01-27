angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/download/angular-schema-form-download.html","<div class=\"form-group\" ng-class=\"{\'has-error\': hasError()}\">\n    <div>\n       <a download-options data-id=\"{{form.schema.id || \'download\'}}\" class=\"btn btn-default {{ (form.schema.cssClass || form.cssClass) || \'btn-primary\' }}\" download href=\"{{(form.schema.url || form.url)}}\" role=\"button\" target=\"_blank\">{{form.title || \'Download\'}}</a>\n    </div>\n    <span class=\"help-block\">{{ (hasError() && errorMessage(schemaError())) || (form.schema.description || form.description)}}</span>\n</div>");}]);
angular.module('schemaForm').config(
    ['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
        function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider) {

          var download = function(name, schema, options) {
            if (schema.type === 'string' && schema.format === 'download') {
              var f = schemaFormProvider.stdFormObj(name, schema, options);
              f.key  = options.path;
              f.type = 'download';
              options.lookup[sfPathProvider.stringify(options.path)] = f;
              return f;
            }
          };

          schemaFormProvider.defaults.string.unshift(download);
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
    ]);

angular.module('schemaForm').directive('downloadOptions', function() {
  return {
      restrict : 'A',
      controller : function($scope, $rootScope) {
        $scope.notifyClick = function(ele) {
          $rootScope.$emit('DownloadTriggered', {
            element : ele
          })
        };
      },
      link : function(scope, ele, attr) {
        angular.element(ele).click(function() {
          scope.notifyClick(ele);
        });
      }
    };
});
