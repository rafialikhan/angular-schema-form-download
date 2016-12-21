angular.module('schemaForm').config(
    ['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
        function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider) {

          var download = function(name, schema, options) {
            if (schema.type === 'download' || schema.format === 'download') {
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
    ])
