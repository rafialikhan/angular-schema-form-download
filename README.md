# angular-schema-form-download
An [angular schema form](https://github.com/json-schema-form/angular-schema-form) - [plugin](https://github.com/json-schema-form/angular-schema-form/blob/development/docs/extending.md) to display a download button.

Installation
------------

The easiest way is to install is with bower, this will also include dependencies:
```bash
bower install angular-schema-form-download
```

The download add-on adds a new form type, `download`.

|   Form Type    |       Becomes       |
|:---------------|:-------------------:|
|   download     |  download button    |

| Schema             |   Default Form type  |
|:-------------------|:------------:|
| "type": "string" and "format": "download"   |   download   |

Example
-----------------
Below is an example. It's written in javascript instead of pure schema and form so the use of the download object is supported.

```javascript
scope.schema = {
  "type": "object",
  "title": "Application Form",
  "description": "This is the description of the Application form."
  "properties": {
    "DOCUMENT": {
      "title": "Download Application Form",
      "type": "string",
      "format": "download",
      "cssClass": "btn-primary",
      "url": "http://zool.in/web/wp-content/uploads/2012/05/001_like.jpg",
      "description": "This is an application form that can be downloaded for your reference."
    }
  }
}
```
The schema should be able to render the form on its own, but if you want to modify or add a button using the form, then the structure is below.

```
scope.form = [
  {
    key: "DOCUMENT",
    type: "download",
    title: "This is a download button.",
    cssClass: "btn-warning",
    description: "Sample description"
  }
]
```
