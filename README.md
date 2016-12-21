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
  "properties": {
    "Document": {
      "title": "Download Application Form",
      "type": "string",
      "format": "download",
      "url": "http://zool.in/web/wp-content/uploads/2012/05/001_like.jpg"
    }
  }
}

scope.form = [
  {
    "key": "Document"
  }
]
```
