(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['catalog_layout'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<script defer src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"use_script") || (depth0 != null ? lookupProperty(depth0,"use_script") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"use_script","hash":{},"data":data,"loc":{"start":{"line":13,"column":39},"end":{"line":13,"column":53}}}) : helper)))
    + "\"></script>";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<link rel=\"stylesheet\" href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"stylesheet") || (depth0 != null ? lookupProperty(depth0,"stylesheet") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"stylesheet","hash":{},"data":data,"loc":{"start":{"line":17,"column":49},"end":{"line":17,"column":63}}}) : helper)))
    + "\">";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h1 class=\"mb-3\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":111,"column":45},"end":{"line":111,"column":54}}}) : helper)))
    + "</h1>";
},"7":function(container,depth0,helpers,partials,data) {
    return "";
},"9":function(container,depth0,helpers,partials,data) {
    return "<div class=\"mt-4\"><button id=\"back-button\">&laquo; back</button></div>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!DOCTYPE html>\n<html lang=\"en\" dir=\"ltr\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n  <link rel=\"icon\" href=\"/fav-a.svg\">\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n  <link href=\"https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;600&display=swap\" rel=\"stylesheet\"> \n  <link href=\"/bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\" crossorigin=\"anonymous\">\n  <script src=\"/bootstrap/js/bootstrap.bundle.min.js\" crossorigin=\"anonymous\"></script>\n  "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"use_script") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":2},"end":{"line":13,"column":71}}})) != null ? stack1 : "")
    + "\n\n  <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css\">\n  <link rel=\"stylesheet\" href=\"/catalog.css\">\n  "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"stylesheet") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":2},"end":{"line":17,"column":72}}})) != null ? stack1 : "")
    + "\n\n  <title>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":19,"column":9},"end":{"line":19,"column":18}}}) : helper)))
    + " | Catalog</title>\n</head>\n\n<body class=\"body-bg d-flex flex-column min-vh-100\">\n\n  <!-- Top banner -->\n  <header class=\"shelf container-fluid mb-4\" style=\"position: relative; z-index: 20;\">\n    <div class=\"center-xl mb-1 d-flex align-items-center\">\n      <a class=\"serif fs-4 fw-bold me-auto nav-link text-decoration-none\" href=\"/catalog/\">\n      <div class=\"logo-container pt-header\">\n        <img class=\"logo-a\" src=\"/illuminated-a.svg\" alt=\"an ornate manuscript letter A\">\n        <span>Archivia</span>\n      </div>\n      </a>\n          <button class=\"navbar-toggler d-sm-none\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#offcanvas-id\" aria-controls=\"offcanvas-id\">\n            <img class=\"d-sm-none\" width=\"40\" src=\"/golden-hamburger.svg\" alt=\"Expand button for navigation menu\">\n          </button>\n    </div>\n  </header>\n\n  <!-- Body content container -->\n  <div class=\"center-xl\">\n  <div class=\"d-flex overflow-hidden\">\n    <!-- Sidebar - Responsive offcanvas behavior -->\n    <div id=\"offcanvas-id\" class=\"side-links ms-md-2 offcanvas-sm offcanvas-end\">\n      <button type=\"button\" class=\"d-sm-none btn-close\" data-bs-dismiss=\"offcanvas\" data-bs-target=\"#offcanvas-id\" aria-label=\"Close\"></button>\n\n      <div id=\"nav-group\" class=\"pt-4 ps-2\">\n        <ul class=\"list-unstyled ps-0\">\n          <li class=\"mb-1\">\n            <button class=\"btn btn-toggle align-items-center rounded collapsed\" data-bs-toggle=\"collapse\" data-bs-target=\"#books-collapse\" aria-expanded=\"false\">\n              Books\n            </button>\n            <div class=\"collapse\" id=\"books-collapse\" data-bs-parent=\"#nav-group\">\n              <ul class=\"btn-toggle-nav list-unstyled fw-normal pb-1\">\n                <li><a href=\"/catalog/books\" class=\"link-dark rounded\">Browse</a></li>\n                <li><a href=\"/catalog/book/create\" class=\"link-dark rounded\">Create</a></li>\n              </ul>\n            </div>\n          </li>\n          <li class=\"mb-1\">\n            <button class=\"btn btn-toggle align-items-center rounded collapsed\" data-bs-toggle=\"collapse\" data-bs-target=\"#authors-collapse\" aria-expanded=\"false\">\n              Authors\n            </button>\n            <div class=\"collapse\" id=\"authors-collapse\" data-bs-parent=\"#nav-group\">\n              <ul class=\"btn-toggle-nav list-unstyled fw-normal pb-1\">\n                <li><a href=\"/catalog/authors\" class=\"link-dark rounded\">Browse</a></li>\n                <li><a href=\"/catalog/author/create\" class=\"link-dark rounded\">Create</a></li>\n              </ul>\n            </div>\n          </li>\n          <li class=\"mb-1\">\n            <button class=\"btn btn-toggle align-items-center rounded collapsed\" data-bs-toggle=\"collapse\" data-bs-target=\"#genres-collapse\" aria-expanded=\"false\">\n              Genres\n            </button>\n            <div class=\"collapse\" id=\"genres-collapse\" data-bs-parent=\"#nav-group\">\n              <ul class=\"btn-toggle-nav list-unstyled fw-normal pb-1\">\n                <li><a href=\"/catalog/genres\" class=\"link-dark rounded\">Browse</a></li>\n                <li><a href=\"/catalog/genre/create\" class=\"link-dark rounded\">Create</a></li>\n              </ul>\n            </div>\n          </li>\n          <li class=\"mb-1\">\n            <button class=\"btn btn-toggle align-items-center rounded collapsed\" data-bs-toggle=\"collapse\" data-bs-target=\"#inventory-collapse\" aria-expanded=\"false\">\n              Inventory\n            </button>\n            <div class=\"collapse\" id=\"inventory-collapse\" data-bs-parent=\"#nav-group\">\n              <ul class=\"btn-toggle-nav list-unstyled fw-normal pb-1\">\n                <li><a href=\"/catalog/inventory\" class=\"link-dark rounded\">Browse</a></li>\n                <li><a href=\"/catalog/inventory/create\" class=\"link-dark rounded\">Create</a></li>\n              </ul>\n            </div>\n          </li>\n\n          <li class=\"mb-1\">\n            <button class=\"btn btn-toggle align-items-center rounded collapsed\" data-bs-toggle=\"collapse\" data-bs-target=\"#import-collapse\" aria-expanded=\"false\">\n              Import\n            </button>\n            <div class=\"collapse\" id=\"import-collapse\" data-bs-parent=\"#nav-group\">\n              <ul class=\"btn-toggle-nav list-unstyled fw-normal pb-1\">\n                <li><a href=\"/catalog/book/import\" class=\"link-dark rounded\">Book</a></li>\n                <li><a href=\"/catalog/author/import\" class=\"link-dark rounded\">Author</a></li>\n              </ul>\n            </div>\n          </li>\n        </ul>\n      </div>\n      \n    </div>\n    <!-- Central content -->\n    <div class=\"ms-lg-4\" style=\"flex-grow: 1; flex-shrink: 1; width: 0px;\">\n      <div class=\"container mt-4 ms-3 ms-xl-4 me-0 ps-0 pe-almost-5 mb-5 reasonable-width\">\n        "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"no_title") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":111,"column":8},"end":{"line":111,"column":70}}})) != null ? stack1 : "")
    + "\n        "
    + ((stack1 = container.invokePartial(lookupProperty(partials,"content"),depth0,{"name":"content","fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n        "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"no_back") : depth0),{"name":"unless","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":113,"column":8},"end":{"line":113,"column":108}}})) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n  </div>\n  </div>\n\n  <footer class=\"container-fluid pt-2 pb-1 mt-auto bg-opacity-25 bg-dark text-center\">\n    <small>&copy; \n      <a class=\"fw-semibold dark-link\" href=\"https://scintilla.dev\">\n        bprcode&nbsp;<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-github\" viewBox=\"0 0 16 16\">\n        <path d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\"></path>\n        </svg></a>. External data courtesy of \n        <a class=\"fw-semibold dark-link\" href=\"https://openlibrary.org\">OpenLibrary.org</a>.\n    </small>\n  </footer>\n</body>\n</html>\n\n<script>\nwindow.addEventListener('pageshow', event => {\n  const offcanvas = document.getElementById('offcanvas-id')\n  if (event.persisted) {\n    offcanvas.classList.add('skip-transition')\n    setTimeout(() => {\n      offcanvas.classList.remove('skip-transition')\n    }, 200)\n  }\n\n  const closeButton = offcanvas.querySelector('.btn-close')\n  closeButton.dispatchEvent(new Event('click'))\n})\n\nconst backButton = document.getElementById('back-button')\nif (backButton) {\n  backButton.addEventListener('click', () => {\n    history.back()\n  })\n}\n</script>\n";
},"usePartial":true,"useData":true});
Handlebars.partials['lean_layout'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"3":function(container,depth0,helpers,partials,data) {
    return "            Failover primary content\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "            <button id=\"back-button\">Back</button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!DOCTYPE html>\n<html lang=\"en\" dir=\"ltr\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n  <link rel=\"icon\" href=\"/favicon.svg\">\n\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n  <link href=\"https://fonts.googleapis.com/css2?family=Voltaire&display=swap\" rel=\"stylesheet\">\n\n  <link rel=\"stylesheet\" href=\"/clean-pastel.css\">\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"mod_preload"),depth0,{"name":"mod_preload","fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n  <title>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":18,"column":9},"end":{"line":18,"column":18}}}) : helper)))
    + "</title>\n</head>\n\n<body>\n  <div class=\"page-container\">\n    <header>\n      "
    + ((stack1 = container.invokePartial(lookupProperty(partials,"mod_head"),depth0,{"name":"mod_head","fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n    </header>\n\n    <div class=\"ambient-bg\"></div>\n    <div class=\"center-content\">\n    <h1>"
    + alias4(((helper = (helper = lookupProperty(helpers,"mod_title") || (depth0 != null ? lookupProperty(depth0,"mod_title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mod_title","hash":{},"data":data,"loc":{"start":{"line":29,"column":8},"end":{"line":29,"column":21}}}) : helper)))
    + "</h1>\n    <main>"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"mod_content"),depth0,{"name":"mod_content","fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</main>\n    </div>\n    <footer>"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"mod_foot"),depth0,{"name":"mod_foot","fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</footer>\n  </div>\n<script>\nconst backButton = document.getElementById('back-button')\nif (backButton) {\n  backButton.addEventListener('click', () => {\n    history.back()\n  })\n}\n</script>\n</body>\n</html>\n";
},"usePartial":true,"useData":true});
Handlebars.partials['script_required'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<noscript>\n<div class=\"row\">\n    <div class=\"col-1 offset-1\">\n        <img class=\"mt-2\" src=\"/code-slash.svg\" width=\"30\">\n    </div>\n    <div class=\"col-8 text-danger\">\n        <h2 class=\"fs-3\">Scripts Required.</h2>\n        <p class=\"mb-0\">This content requires JavaScript to function.</p>\n        <p>Please enable scripts to proceed.</p>\n    </div>\n</div>\n</noscript>\n<script defer>\n    document.addEventListener('DOMContentLoaded', event => {\n        for(const e of document.querySelectorAll('.nojs-hidden')) {\n            e.classList.remove('nojs-hidden')\n        }\n    })\n</script>\n";
},"useData":true});
})();