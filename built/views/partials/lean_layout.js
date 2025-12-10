var Handlebars = require("handlebars");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['lean_layout.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"3":function(container,depth0,helpers,partials,data) {
    return "            Failover primary content\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "            <button id=\"back-button\">Back</button>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!DOCTYPE html>\r\n<html lang=\"en\" dir=\"ltr\">\r\n<head>\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n\r\n  <link rel=\"icon\" href=\"/favicon.svg\">\r\n\r\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\r\n  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\r\n  <link href=\"https://fonts.googleapis.com/css2?family=Voltaire&display=swap\" rel=\"stylesheet\">\r\n\r\n  <link rel=\"stylesheet\" href=\"/clean-pastel.css\">\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"mod_preload"),depth0,{"name":"mod_preload","fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n  <title>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":18,"column":9},"end":{"line":18,"column":18}}}) : helper)))
    + "</title>\r\n</head>\r\n\r\n<body>\r\n  <div class=\"page-container\">\r\n    <header>\r\n      "
    + ((stack1 = container.invokePartial(lookupProperty(partials,"mod_head"),depth0,{"name":"mod_head","fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n    </header>\r\n\r\n    <div class=\"ambient-bg\"></div>\r\n    <div class=\"center-content\">\r\n    <h1>"
    + alias4(((helper = (helper = lookupProperty(helpers,"mod_title") || (depth0 != null ? lookupProperty(depth0,"mod_title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mod_title","hash":{},"data":data,"loc":{"start":{"line":29,"column":8},"end":{"line":29,"column":21}}}) : helper)))
    + "</h1>\r\n    <main>"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"mod_content"),depth0,{"name":"mod_content","fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</main>\r\n    </div>\r\n    <footer>"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"mod_foot"),depth0,{"name":"mod_foot","fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</footer>\r\n  </div>\r\n<script>\r\nconst backButton = document.getElementById('back-button')\r\nif (backButton) {\r\n  backButton.addEventListener('click', () => {\r\n    history.back()\r\n  })\r\n}\r\n</script>\r\n</body>\r\n</html>\r\n";
},"usePartial":true,"useData":true});
