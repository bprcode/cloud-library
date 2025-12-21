(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['author_action_choose'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"card mt-3\">\n    <div class=\"card-header fs-4 fw-semibold\">\n        Choose author to "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"action") || (depth0 != null ? lookupProperty(depth0,"action") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"action","hash":{},"data":data,"loc":{"start":{"line":5,"column":25},"end":{"line":5,"column":35}}}) : helper)))
    + "...\n    </div>\n    <ul class=\"list-group list-group-flush\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"authors") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":8},"end":{"line":12,"column":17}}})) != null ? stack1 : "")
    + "    </ul>\n</div>";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li class=\"list-group-item\">\n            <a class=\"serif h5\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"author_url") || (depth0 != null ? lookupProperty(depth0,"author_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author_url","hash":{},"data":data,"loc":{"start":{"line":10,"column":38},"end":{"line":10,"column":52}}}) : helper)))
    + "/"
    + alias4(container.lambda((depths[1] != null ? lookupProperty(depths[1],"action") : depths[1]), depth0))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"full_name") || (depth0 != null ? lookupProperty(depth0,"full_name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"full_name","hash":{},"data":data,"loc":{"start":{"line":10,"column":68},"end":{"line":10,"column":81}}}) : helper)))
    + "</a>\n        </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"catalog_layout"),depth0,{"name":"catalog_layout","fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n";
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["content"],"data":data,"loc":{"start":{"line":2,"column":22},"end":{"line":15,"column":12}}}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});
templates['author_delete'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"fs-1\">\n    Delete author: "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? lookupProperty(stack1,"full_name") : stack1), depth0))
    + "?\n</div>\n\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"books") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":21,"column":7}}})) != null ? stack1 : "")
    + "\n<div class=\"fs-5 fw-semibold my-4\">\n    <form action=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? lookupProperty(stack1,"author_url") : stack1), depth0))
    + "/delete\" method=\"POST\">\n        Are you sure?\n        <a class=\"btn btn-secondary ms-4 fw-semibold text-decoration-none\" role=\"button\" href=\"/catalog/\">Cancel</a>\n        <button class=\"btn btn-danger ms-2 fw-semibold\">Delete</button>\n    </form>\n</div>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"card mt-4 mb-4\">\n    <div class=\"card-header text-bg-danger\">\n        Note: This will also delete the following works by this author:\n    </div>\n    <ul class=\"list-group list-group-flush\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"books") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":18,"column":17}}})) != null ? stack1 : "")
    + "    </ul>\n</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li class=\"list-group-item\">\n            <a class=\"serif h5\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"book_url") || (depth0 != null ? lookupProperty(depth0,"book_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"book_url","hash":{},"data":data,"loc":{"start":{"line":16,"column":38},"end":{"line":16,"column":50}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":16,"column":52},"end":{"line":16,"column":61}}}) : helper)))
    + "</a>\n        </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"catalog_layout"),depth0,{"name":"catalog_layout","hash":{"no_title":1},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n";
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["content"],"data":data,"loc":{"start":{"line":2,"column":32},"end":{"line":30,"column":12}}}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});
templates['author_detail'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"card mb-4\">\n    <div class=\"card-header d-flex justify-content-between tiny-padding-2 px-sm-3\">\n        <span class=\"overflow-hidden\">\n        <h1 class=\"serif fs-3 mb-1 fw-semibold\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? lookupProperty(stack1,"full_name") : stack1), depth0))
    + "</h1>\n        "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? lookupProperty(stack1,"dob") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":7,"column":121}}})) != null ? stack1 : "")
    + "\n        </span>\n        <span class=\"ui-button-pair\">\n            <a class=\"btn ui-button\" href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? lookupProperty(stack1,"author_url") : stack1), depth0))
    + "/update\"><img src=\"/pencil-fill.svg\" alt=\"Pencil icon click to edit\"></a>\n            <a class=\"btn ui-button\" href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? lookupProperty(stack1,"author_url") : stack1), depth0))
    + "/delete\"><img src=\"/trash.svg\" alt=\"Trash icon click to delete\"></a>\n        </span>\n    </div>\n    <div class=\"card-body pt-2 pb-0\">\n        "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? lookupProperty(stack1,"bio") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":15,"column":74}}})) != null ? stack1 : "")
    + "\n        "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? lookupProperty(stack1,"bio") : stack1),{"name":"unless","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":16,"column":99}}})) != null ? stack1 : "")
    + "\n    </div>\n</div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"books") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":0},"end":{"line":34,"column":7}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h2 class=\"fs-6 mb-0\">"
    + alias3((lookupProperty(helpers,"pretty-date")||(depth0 && lookupProperty(depth0,"pretty-date"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? lookupProperty(stack1,"dob") : stack1),{"name":"pretty-date","hash":{},"data":data,"loc":{"start":{"line":7,"column":48},"end":{"line":7,"column":74}}}))
    + " &ndash; "
    + alias3((lookupProperty(helpers,"pretty-date")||(depth0 && lookupProperty(depth0,"pretty-date"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? lookupProperty(stack1,"dod") : stack1),{"name":"pretty-date","hash":{},"data":data,"loc":{"start":{"line":7,"column":83},"end":{"line":7,"column":109}}}))
    + "</h2>";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? lookupProperty(stack1,"bio") : stack1),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":26},"end":{"line":15,"column":67}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "<p>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</p>";
},"8":function(container,depth0,helpers,partials,data) {
    return "<p class=\"text-muted\"><em>No biography available.</em></p>";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"card\">\n    <div class=\"card-header tiny-padding-2 px-sm-3\">\n        Cataloged works:\n    </div>\n    <ul class=\"list-group list-group-flush\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"books") : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":8},"end":{"line":31,"column":17}}})) != null ? stack1 : "")
    + "    </ul>\n</div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li class=\"list-group-item\">\n            <a class=\"serif h5\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"book_url") || (depth0 != null ? lookupProperty(depth0,"book_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"book_url","hash":{},"data":data,"loc":{"start":{"line":28,"column":38},"end":{"line":28,"column":50}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":28,"column":52},"end":{"line":28,"column":61}}}) : helper)))
    + "</a>\n            <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"snippet") || (depth0 != null ? lookupProperty(depth0,"snippet") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"snippet","hash":{},"data":data,"loc":{"start":{"line":29,"column":15},"end":{"line":29,"column":26}}}) : helper)))
    + "</p>\n        </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"catalog_layout"),depth0,{"name":"catalog_layout","hash":{"no_title":1},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n";
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["content"],"data":data,"loc":{"start":{"line":2,"column":32},"end":{"line":35,"column":12}}}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});
templates['author_form'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"card\">\n    <div class=\"card-header mb-3\"><h1 class=\"fs-3\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":4,"column":51},"end":{"line":4,"column":60}}}) : helper)))
    + "</h1></div>\n\n    <div class=\"container col-md-11\">\n        "
    + ((stack1 = container.invokePartial(lookupProperty(partials,"author_form_body"),depth0,{"name":"author_form_body","fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n    </div>\n</div>\n\n<script>\n    // Keep fields in sync\n    document.getElementById('dod-id').addEventListener('change', event => {\n        let changed = document.getElementById('dod-id').value\n        document.getElementById('yod-id').value = changed.split('-')[0]\n    })\n    document.getElementById('dob-id').addEventListener('change', event => {\n        let changed = document.getElementById('dob-id').value\n        document.getElementById('yob-id').value = changed.split('-')[0]\n    })\n    document.getElementById('yod-id').addEventListener('input', event => {\n        document.getElementById('dod-id').value = ''\n    })\n    document.getElementById('yob-id').addEventListener('input', event => {\n        document.getElementById('dob-id').value = ''\n    })\n</script>";
},"3":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"catalog_layout"),depth0,{"name":"catalog_layout","hash":{"no_title":1,"use_script":"/form-eraser.js"},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n";
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["content"],"data":data,"loc":{"start":{"line":2,"column":61},"end":{"line":28,"column":12}}}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});
templates['author_list'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"card mb-4\">\n    <div class=\"card-header tiny-padding-2 px-sm-3\">\n        <div class=\"d-flex flex-column flex-sm-row justify-content-between\">\n            <span class=\"overflow-hidden pe-0\" style=\"min-width: 13.2em;\">\n            <h1 class=\"serif h2 mb-0\">Browse authors</h1>\n            </span>\n            <span class=\"d-flex mt-2 mb-1 mt-sm-1\">\n                <form class=\"flex-grow-1 mt-0 me-1\" action=\"?q=\">\n                    <span class=\"input-group d-flex\">\n                        <input style=\"flex-grow: 1;\" class=\"form-control header-search-field\" aria-label=\"Search title text\" name=\"q\" type=\"text\" value=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"populate") : depth0)) != null ? lookupProperty(stack1,"search") : stack1), depth0))
    + "\">\n                        <button class=\"btn btn-outline-secondary\" style=\"width: 38px;\" type=\"submit\" aria-label=\"Search button\"><img class=\"search-icon\" src=\"/search.svg\" alt=\"Search icon\"></button>\n                    </span>\n                </form>    \n                <a class=\"btn ui-button\" href=\"/catalog/author/create\"><img src=\"/file-earmark-plus.svg\" alt=\"New entry icon click to create\"></a>\n            </span>\n        </div>\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"pagination_header"),depth0,{"name":"pagination_header","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n    </div>\n\n    <ul class=\"list-group list-group-flush\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"authors") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":4},"end":{"line":35,"column":13}}})) != null ? stack1 : "")
    + "    </ul>\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"pagination_footer"),depth0,{"name":"pagination_footer","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n</div>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <li class=\"list-group-item\">\n        <div class=\"mb-1\">\n            <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"author_url") || (depth0 != null ? lookupProperty(depth0,"author_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author_url","hash":{},"data":data,"loc":{"start":{"line":28,"column":21},"end":{"line":28,"column":35}}}) : helper)))
    + "\" class=\"serif fs-5\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"full_name") || (depth0 != null ? lookupProperty(depth0,"full_name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"full_name","hash":{},"data":data,"loc":{"start":{"line":28,"column":56},"end":{"line":28,"column":69}}}) : helper)))
    + "</a>"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"dob") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":12},"end":{"line":29,"column":124}}})) != null ? stack1 : "")
    + "</div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"blurb") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":8},"end":{"line":33,"column":15}}})) != null ? stack1 : "")
    + "    </li>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"text-muted\"><small>"
    + alias3((lookupProperty(helpers,"pretty-date")||(depth0 && lookupProperty(depth0,"pretty-date"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"dob") : depth0),{"name":"pretty-date","hash":{},"data":data,"loc":{"start":{"line":29,"column":55},"end":{"line":29,"column":74}}}))
    + " &ndash; "
    + alias3((lookupProperty(helpers,"pretty-date")||(depth0 && lookupProperty(depth0,"pretty-date"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"dod") : depth0),{"name":"pretty-date","hash":{},"data":data,"loc":{"start":{"line":29,"column":83},"end":{"line":29,"column":102}}}))
    + "</small></div>";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"mb-2\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"blurb") || (depth0 != null ? lookupProperty(depth0,"blurb") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"blurb","hash":{},"data":data,"loc":{"start":{"line":32,"column":26},"end":{"line":32,"column":35}}}) : helper)))
    + "</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"catalog_layout"),depth0,{"name":"catalog_layout","hash":{"no_title":1,"title":"Authors"},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n";
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["content"],"data":data,"loc":{"start":{"line":2,"column":48},"end":{"line":41,"column":12}}}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});
templates['bookinstance_action_choose'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"card mt-3\">\n    <div class=\"card-header fs-4 fw-semibold\">\n        Choose item to "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"action") || (depth0 != null ? lookupProperty(depth0,"action") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"action","hash":{},"data":data,"loc":{"start":{"line":5,"column":23},"end":{"line":5,"column":33}}}) : helper)))
    + "...\n    </div>\n    <ul class=\"list-group list-group-flush\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":8},"end":{"line":23,"column":17}}})) != null ? stack1 : "")
    + "    </ul>\n</div>";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li class=\"list-group-item\">\n        <div class=\"d-flex justify-content-between align-items-baseline\">\n            <a class=\"\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"book_instance_url") || (depth0 != null ? lookupProperty(depth0,"book_instance_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"book_instance_url","hash":{},"data":data,"loc":{"start":{"line":11,"column":30},"end":{"line":11,"column":51}}}) : helper)))
    + "/"
    + alias4(container.lambda((depths[1] != null ? lookupProperty(depths[1],"action") : depths[1]), depth0))
    + "\">ID #"
    + alias4(((helper = (helper = lookupProperty(helpers,"instance_id") || (depth0 != null ? lookupProperty(depth0,"instance_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"instance_id","hash":{},"data":data,"loc":{"start":{"line":11,"column":71},"end":{"line":11,"column":86}}}) : helper)))
    + "\n                "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":12,"column":16},"end":{"line":12,"column":25}}}) : helper)))
    + ", "
    + alias4(((helper = (helper = lookupProperty(helpers,"full_name") || (depth0 != null ? lookupProperty(depth0,"full_name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"full_name","hash":{},"data":data,"loc":{"start":{"line":12,"column":27},"end":{"line":12,"column":40}}}) : helper)))
    + ". "
    + alias4(((helper = (helper = lookupProperty(helpers,"imprint") || (depth0 != null ? lookupProperty(depth0,"imprint") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imprint","hash":{},"data":data,"loc":{"start":{"line":12,"column":42},"end":{"line":12,"column":53}}}) : helper)))
    + "</a>\n            <span class=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"match")||(depth0 && lookupProperty(depth0,"match"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"Available",{"name":"match","hash":{},"data":data,"loc":{"start":{"line":14,"column":23},"end":{"line":14,"column":49}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":16},"end":{"line":14,"column":71}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"match")||(depth0 && lookupProperty(depth0,"match"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"Maintenance",{"name":"match","hash":{},"data":data,"loc":{"start":{"line":15,"column":23},"end":{"line":15,"column":51}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":16},"end":{"line":15,"column":72}}})) != null ? stack1 : "")
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"status") || (depth0 != null ? lookupProperty(depth0,"status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data,"loc":{"start":{"line":16,"column":18},"end":{"line":16,"column":28}}}) : helper)))
    + "</span>\n        </div>"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(lookupProperty(helpers,"match")||(depth0 && lookupProperty(depth0,"match"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"Available",{"name":"match","hash":{},"data":data,"loc":{"start":{"line":18,"column":19},"end":{"line":18,"column":45}}}),{"name":"unless","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":8},"end":{"line":20,"column":19}}})) != null ? stack1 : "")
    + "\n        </li>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "text-success";
},"6":function(container,depth0,helpers,partials,data) {
    return "text-danger";
},"8":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"fst-italic text-muted\">Due back: "
    + container.escapeExpression((lookupProperty(helpers,"pretty-date")||(depth0 && lookupProperty(depth0,"pretty-date"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"due_back") : depth0),{"name":"pretty-date","hash":{},"data":data,"loc":{"start":{"line":19,"column":53},"end":{"line":19,"column":77}}}))
    + "</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"catalog_layout"),depth0,{"name":"catalog_layout","fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n";
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["content"],"data":data,"loc":{"start":{"line":2,"column":22},"end":{"line":26,"column":12}}}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});
templates['bookinstance_delete'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"fs-1\">\n    Delete inventory item: "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"item") : depth0)) != null ? lookupProperty(stack1,"instance_id") : stack1), depth0))
    + "?\n</div>\n\n<div class=\"fs-5 fw-semibold my-4\">\n    <form action=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"item") : depth0)) != null ? lookupProperty(stack1,"book_instance_url") : stack1), depth0))
    + "/delete\" method=\"POST\">\n        Are you sure?\n        <a class=\"btn btn-secondary ms-4 fw-semibold text-decoration-none\" role=\"button\" href=\"/catalog/\">Cancel</a>\n        <button class=\"btn btn-danger ms-2 fw-semibold\">Delete</button>\n    </form>\n</div>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"catalog_layout"),depth0,{"name":"catalog_layout","hash":{"no_title":1},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n";
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["content"],"data":data,"loc":{"start":{"line":2,"column":32},"end":{"line":14,"column":12}}}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});
templates['bookinstance_detail'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"card\">\n    <div class=\"card-header d-flex justify-content-between tiny-padding-2 px-sm-3\">\n        <span class=\"overflow-hidden\">\n        <h3 class=\"serif\">Inventory item #"
    + alias4(((helper = (helper = lookupProperty(helpers,"instance_id") || (depth0 != null ? lookupProperty(depth0,"instance_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"instance_id","hash":{},"data":data,"loc":{"start":{"line":6,"column":42},"end":{"line":6,"column":57}}}) : helper)))
    + "</h3>\n        </span>\n        <span class=\"ui-button-pair\">\n            <a class=\"btn ui-button\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"book_instance_url") || (depth0 != null ? lookupProperty(depth0,"book_instance_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"book_instance_url","hash":{},"data":data,"loc":{"start":{"line":9,"column":43},"end":{"line":9,"column":64}}}) : helper)))
    + "/update\"><img src=\"/pencil-fill.svg\" alt=\"Pencil icon click to edit\"></a>\n            <a class=\"btn ui-button\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"book_instance_url") || (depth0 != null ? lookupProperty(depth0,"book_instance_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"book_instance_url","hash":{},"data":data,"loc":{"start":{"line":10,"column":43},"end":{"line":10,"column":64}}}) : helper)))
    + "/delete\"><img src=\"/trash.svg\" alt=\"Trash icon click to delete\"></a>\n        </span>\n    </div>\n    <div class=\"card-body pt-2\">\n\n    <div><strong>Title: </strong><a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"book_url") || (depth0 != null ? lookupProperty(depth0,"book_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"book_url","hash":{},"data":data,"loc":{"start":{"line":15,"column":42},"end":{"line":15,"column":54}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"book_title") || (depth0 != null ? lookupProperty(depth0,"book_title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"book_title","hash":{},"data":data,"loc":{"start":{"line":15,"column":56},"end":{"line":15,"column":70}}}) : helper)))
    + "</a></div>\n    <div><strong>Catalog ID: </strong>"
    + alias4(((helper = (helper = lookupProperty(helpers,"instance_id") || (depth0 != null ? lookupProperty(depth0,"instance_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"instance_id","hash":{},"data":data,"loc":{"start":{"line":16,"column":38},"end":{"line":16,"column":53}}}) : helper)))
    + "</div>\n    <div><strong>Imprint: </strong>"
    + alias4(((helper = (helper = lookupProperty(helpers,"imprint") || (depth0 != null ? lookupProperty(depth0,"imprint") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imprint","hash":{},"data":data,"loc":{"start":{"line":17,"column":35},"end":{"line":17,"column":46}}}) : helper)))
    + "</div>\n    <div><strong>Availability: </strong>\n        <span class=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"match")||(depth0 && lookupProperty(depth0,"match"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"Available",{"name":"match","hash":{},"data":data,"loc":{"start":{"line":20,"column":19},"end":{"line":20,"column":45}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":12},"end":{"line":20,"column":67}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"match")||(depth0 && lookupProperty(depth0,"match"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"Maintenance",{"name":"match","hash":{},"data":data,"loc":{"start":{"line":21,"column":19},"end":{"line":21,"column":47}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":12},"end":{"line":21,"column":68}}})) != null ? stack1 : "")
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"status") || (depth0 != null ? lookupProperty(depth0,"status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data,"loc":{"start":{"line":22,"column":14},"end":{"line":22,"column":24}}}) : helper)))
    + "</span></div>\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"due_back") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":4},"end":{"line":23,"column":84}}})) != null ? stack1 : "")
    + "\n    </div>\n</div>";
},"3":function(container,depth0,helpers,partials,data) {
    return "text-success";
},"5":function(container,depth0,helpers,partials,data) {
    return "text-danger";
},"7":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div><strong>Due: </strong>"
    + container.escapeExpression((lookupProperty(helpers,"pretty-date")||(depth0 && lookupProperty(depth0,"pretty-date"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"due_back") : depth0),{"name":"pretty-date","hash":{},"data":data,"loc":{"start":{"line":23,"column":47},"end":{"line":23,"column":71}}}))
    + "</div>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"catalog_layout"),depth0,{"name":"catalog_layout","hash":{"no_title":1,"title":"Inventory item"},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n";
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["content"],"data":data,"loc":{"start":{"line":2,"column":55},"end":{"line":26,"column":12}}}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});
templates['bookinstance_form'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"card\">\n    <div class=\"card-header mb-3\"><h1 class=\"fs-3\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":4,"column":51},"end":{"line":4,"column":60}}}) : helper)))
    + "</h1></div>\n\n    <div class=\"container col-md-10\">\n        <form class=\"mb-4\" action=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"form_action") || (depth0 != null ? lookupProperty(depth0,"form_action") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"form_action","hash":{},"data":data,"loc":{"start":{"line":7,"column":35},"end":{"line":7,"column":50}}}) : helper)))
    + "\" method=\"POST\">\n            \n            <div class=\"row mb-3\">\n                <label for=\"title-id\" class=\"col-form-label col-sm-3\">Title</label>\n                <div class=\"col input-group-has-validation\">\n                    <select class=\"form-select "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"error-check")||(depth0 && lookupProperty(depth0,"error-check"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"trouble") : depth0),"book_id",{"name":"error-check","hash":{},"data":data,"loc":{"start":{"line":12,"column":53},"end":{"line":12,"column":84}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":47},"end":{"line":12,"column":103}}})) != null ? stack1 : "")
    + "\" name=\"book_id\" id=\"title-id\">\n                        <option value=\"default\">Select title...</option>\n                        "
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"bookList") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":24},"end":{"line":14,"column":163}}})) != null ? stack1 : "")
    + "\n                    </select>\n                    <div class=\"invalid-feedback\">"
    + alias4((lookupProperty(helpers,"error-check")||(depth0 && lookupProperty(depth0,"error-check"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"trouble") : depth0),"book_id",{"name":"error-check","hash":{},"data":data,"loc":{"start":{"line":16,"column":50},"end":{"line":16,"column":83}}}))
    + "</div>\n                </div>\n            </div>\n\n            <div class=\"row mb-3\">\n                <label for=\"imprint-id\" class=\"col-form-label col-sm-3\">Imprint</label>\n                <div class=\"col input-group-has-validation\">\n                    <input class=\"form-control "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"error-check")||(depth0 && lookupProperty(depth0,"error-check"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"trouble") : depth0),"imprint",{"name":"error-check","hash":{},"data":data,"loc":{"start":{"line":23,"column":53},"end":{"line":23,"column":84}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":47},"end":{"line":23,"column":103}}})) != null ? stack1 : "")
    + "\" id=\"imprint-id\" name=\"imprint\" type=\"text\" value=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"populate") : depth0)) != null ? lookupProperty(stack1,"imprint") : stack1), depth0))
    + "\">\n                    <div class=\"invalid-feedback\">"
    + alias4((lookupProperty(helpers,"error-check")||(depth0 && lookupProperty(depth0,"error-check"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"trouble") : depth0),"imprint",{"name":"error-check","hash":{},"data":data,"loc":{"start":{"line":24,"column":50},"end":{"line":24,"column":83}}}))
    + "</div>\n                </div>\n            </div>\n\n            <div class=\"row mb-3\">\n                <label for=\"due-id\" class=\"col-form-label col-sm-3\">Due back</label>\n                <div class=\"col input-group-has-validation\">\n                    <input class=\"form-control "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"error-check")||(depth0 && lookupProperty(depth0,"error-check"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"trouble") : depth0),"due_back",{"name":"error-check","hash":{},"data":data,"loc":{"start":{"line":31,"column":53},"end":{"line":31,"column":85}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":47},"end":{"line":31,"column":104}}})) != null ? stack1 : "")
    + "\" id=\"due-id\" name=\"due_back\" type=\"date\" value=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"populate") : depth0)) != null ? lookupProperty(stack1,"due_back") : stack1), depth0))
    + "\">\n                    <div class=\"invalid-feedback\">"
    + alias4((lookupProperty(helpers,"error-check")||(depth0 && lookupProperty(depth0,"error-check"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"trouble") : depth0),"due_back",{"name":"error-check","hash":{},"data":data,"loc":{"start":{"line":32,"column":50},"end":{"line":32,"column":84}}}))
    + "</div>\n                </div>\n            </div>\n\n            <div class=\"row mb-3\">\n                <label for=\"status-id\" class=\"col-form-label col-sm-3\">Status</label>\n                <div class=\"col input-group-has-validation\">\n                    <select class=\"form-select "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"error-check")||(depth0 && lookupProperty(depth0,"error-check"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"trouble") : depth0),"status",{"name":"error-check","hash":{},"data":data,"loc":{"start":{"line":39,"column":53},"end":{"line":39,"column":83}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":47},"end":{"line":39,"column":102}}})) != null ? stack1 : "")
    + "\" name=\"status\" id=\"status-id\">\n                        <option value=\"default\">Select status...</option>\n                        "
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"statusList") : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":24},"end":{"line":41,"column":148}}})) != null ? stack1 : "")
    + "\n                    </select>\n                    <div class=\"invalid-feedback\">"
    + alias4((lookupProperty(helpers,"error-check")||(depth0 && lookupProperty(depth0,"error-check"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"trouble") : depth0),"status",{"name":"error-check","hash":{},"data":data,"loc":{"start":{"line":43,"column":50},"end":{"line":43,"column":82}}}))
    + "</div>\n                </div>\n            </div>\n\n            <div class=\"d-flex justify-content-end\">\n            <button class=\"btn btn-primary fw-semibold\" type=\"submit\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"submit") || (depth0 != null ? lookupProperty(depth0,"submit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"submit","hash":{},"data":data,"loc":{"start":{"line":48,"column":70},"end":{"line":48,"column":80}}}) : helper)))
    + "</button>\n            </div>\n        </form>\n    </div>\n</div>";
},"3":function(container,depth0,helpers,partials,data) {
    return "is-invalid";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<option value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"book_id") || (depth0 != null ? lookupProperty(depth0,"book_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"book_id","hash":{},"data":data,"loc":{"start":{"line":14,"column":57},"end":{"line":14,"column":68}}}) : helper)))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"match-string")||(depth0 && lookupProperty(depth0,"match-string"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"book_id") : depth0),((stack1 = (depths[1] != null ? lookupProperty(depths[1],"populate") : depths[1])) != null ? lookupProperty(stack1,"book_id") : stack1),{"name":"match-string","hash":{},"data":data,"loc":{"start":{"line":14,"column":76},"end":{"line":14,"column":118}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":70},"end":{"line":14,"column":135}}})) != null ? stack1 : "")
    + ">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":14,"column":136},"end":{"line":14,"column":145}}}) : helper)))
    + "</option>";
},"6":function(container,depth0,helpers,partials,data) {
    return "selected";
},"8":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<option value=\""
    + alias2(alias1(depth0, depth0))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(lookupProperty(helpers,"match-string")||(depth0 && lookupProperty(depth0,"match-string"))||container.hooks.helperMissing).call(alias3,depth0,((stack1 = (depths[1] != null ? lookupProperty(depths[1],"populate") : depths[1])) != null ? lookupProperty(stack1,"status") : stack1),{"name":"match-string","hash":{},"data":data,"loc":{"start":{"line":41,"column":72},"end":{"line":41,"column":107}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":66},"end":{"line":41,"column":124}}})) != null ? stack1 : "")
    + ">"
    + alias2(alias1(depth0, depth0))
    + "</option>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"catalog_layout"),depth0,{"name":"catalog_layout","hash":{"no_title":1,"use_script":"/form-eraser.js"},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n";
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["content"],"data":data,"loc":{"start":{"line":2,"column":61},"end":{"line":53,"column":12}}}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});
templates['bookinstance_list'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"card mb-4\">\n    <div class=\"card-header tiny-padding-2 px-sm-3\">\n        <div class=\"d-flex justify-content-between\">\n            <span class=\"overflow-hidden\">\n            <h1 class=\"serif h2 mb-0\">Browse inventory</h1>\n            </span>\n            <span class=\"\">\n                <a class=\"btn ui-button\" href=\"/catalog/inventory/create\"><img src=\"/file-earmark-plus.svg\" alt=\"New entry icon click to create\"></a>\n            </span>\n        </div>\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"pagination_header"),depth0,{"name":"pagination_header","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n    </div>\n\n    <ul class=\"list-group list-group-flush\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":4},"end":{"line":36,"column":13}}})) != null ? stack1 : "")
    + "    </ul>\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"pagination_footer"),depth0,{"name":"pagination_footer","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    \n</div>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <li class=\"list-group-item\">\n        <div class=\"row\">\n            <span class=\"col-sm\">\n                <a class=\"\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"book_instance_url") || (depth0 != null ? lookupProperty(depth0,"book_instance_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"book_instance_url","hash":{},"data":data,"loc":{"start":{"line":23,"column":34},"end":{"line":23,"column":55}}}) : helper)))
    + "\">ID #"
    + alias4(((helper = (helper = lookupProperty(helpers,"instance_id") || (depth0 != null ? lookupProperty(depth0,"instance_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"instance_id","hash":{},"data":data,"loc":{"start":{"line":23,"column":61},"end":{"line":23,"column":76}}}) : helper)))
    + "\n                    "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":24,"column":20},"end":{"line":24,"column":29}}}) : helper)))
    + ", "
    + alias4(((helper = (helper = lookupProperty(helpers,"full_name") || (depth0 != null ? lookupProperty(depth0,"full_name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"full_name","hash":{},"data":data,"loc":{"start":{"line":24,"column":31},"end":{"line":24,"column":44}}}) : helper)))
    + ". "
    + alias4(((helper = (helper = lookupProperty(helpers,"imprint") || (depth0 != null ? lookupProperty(depth0,"imprint") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imprint","hash":{},"data":data,"loc":{"start":{"line":24,"column":46},"end":{"line":24,"column":57}}}) : helper)))
    + "</a>\n            </span>\n            <span class=\"pt-1 pt-sm-0 col-sm-3 status-holder\n                "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"match")||(depth0 && lookupProperty(depth0,"match"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"Available",{"name":"match","hash":{},"data":data,"loc":{"start":{"line":27,"column":22},"end":{"line":27,"column":48}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":16},"end":{"line":27,"column":70}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"match")||(depth0 && lookupProperty(depth0,"match"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"Maintenance",{"name":"match","hash":{},"data":data,"loc":{"start":{"line":28,"column":23},"end":{"line":28,"column":51}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":16},"end":{"line":28,"column":72}}})) != null ? stack1 : "")
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"status") || (depth0 != null ? lookupProperty(depth0,"status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data,"loc":{"start":{"line":29,"column":18},"end":{"line":29,"column":28}}}) : helper)))
    + "</span>\n        </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"due_back") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":4},"end":{"line":33,"column":11}}})) != null ? stack1 : "")
    + "\n    </li>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "text-success";
},"6":function(container,depth0,helpers,partials,data) {
    return "text-danger";
},"8":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"fst-italic text-muted\">Due back: "
    + container.escapeExpression((lookupProperty(helpers,"pretty-date")||(depth0 && lookupProperty(depth0,"pretty-date"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"due_back") : depth0),{"name":"pretty-date","hash":{},"data":data,"loc":{"start":{"line":32,"column":49},"end":{"line":32,"column":73}}}))
    + "</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"catalog_layout"),depth0,{"name":"catalog_layout","hash":{"no_title":1,"title":"Inventory"},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n";
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["content"],"data":data,"loc":{"start":{"line":2,"column":50},"end":{"line":42,"column":12}}}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});
templates['book_action_choose'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"card mt-3\">\n    <div class=\"card-header fs-4 fw-semibold\">\n        Choose book to "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"action") || (depth0 != null ? lookupProperty(depth0,"action") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"action","hash":{},"data":data,"loc":{"start":{"line":5,"column":23},"end":{"line":5,"column":33}}}) : helper)))
    + "...\n    </div>\n    <ul class=\"list-group list-group-flush\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"books") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":8},"end":{"line":16,"column":17}}})) != null ? stack1 : "")
    + "    </ul>\n</div>";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li class=\"list-group-item\">\n        <div class=\"d-flex justify-content-between align-items-baseline\">\n            <a class=\"serif\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"book_url") || (depth0 != null ? lookupProperty(depth0,"book_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"book_url","hash":{},"data":data,"loc":{"start":{"line":11,"column":35},"end":{"line":11,"column":47}}}) : helper)))
    + "/"
    + alias4(container.lambda((depths[1] != null ? lookupProperty(depths[1],"action") : depths[1]), depth0))
    + "\"><h2 class=\"fs-5\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":11,"column":80},"end":{"line":11,"column":89}}}) : helper)))
    + "</h2></a>\n            <a class=\"fst-italic\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"author_url") || (depth0 != null ? lookupProperty(depth0,"author_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author_url","hash":{},"data":data,"loc":{"start":{"line":12,"column":40},"end":{"line":12,"column":54}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"full_name") || (depth0 != null ? lookupProperty(depth0,"full_name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"full_name","hash":{},"data":data,"loc":{"start":{"line":12,"column":56},"end":{"line":12,"column":69}}}) : helper)))
    + "</a>\n        </div>\n        <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"summary") || (depth0 != null ? lookupProperty(depth0,"summary") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summary","hash":{},"data":data,"loc":{"start":{"line":14,"column":11},"end":{"line":14,"column":22}}}) : helper)))
    + "</p>\n        </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"catalog_layout"),depth0,{"name":"catalog_layout","fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n";
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["content"],"data":data,"loc":{"start":{"line":2,"column":22},"end":{"line":19,"column":12}}}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});
templates['book_delete'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"fs-1\">\n    Delete book: "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"book") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "?\n</div>\n\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"instances") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":32,"column":7}}})) != null ? stack1 : "")
    + "\n<div class=\"fs-5 fw-semibold my-4\">\n    <form action=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"book") : depth0)) != null ? lookupProperty(stack1,"book_url") : stack1), depth0))
    + "/delete\" method=\"POST\">\n        Are you sure?\n        <a class=\"btn btn-secondary ms-4 fw-semibold text-decoration-none\" role=\"button\" href=\"/catalog/\">Cancel</a>\n        <button class=\"btn btn-danger ms-2 fw-semibold\">Delete</button>\n    </form>\n</div>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"card mt-4 mb-4\">\n    <div class=\"card-header text-bg-danger\">\n        Note: This will also delete these related inventory items:\n    </div>\n    <ul class=\"list-group list-group-flush\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"instances") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":29,"column":17}}})) != null ? stack1 : "")
    + "    </ul>\n</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li class=\"list-group-item\">\n        <div class=\"d-flex justify-content-between align-items-baseline\">\n            <a class=\"\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"book_instance_url") || (depth0 != null ? lookupProperty(depth0,"book_instance_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"book_instance_url","hash":{},"data":data,"loc":{"start":{"line":17,"column":30},"end":{"line":17,"column":51}}}) : helper)))
    + "\">ID #"
    + alias4(((helper = (helper = lookupProperty(helpers,"instance_id") || (depth0 != null ? lookupProperty(depth0,"instance_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"instance_id","hash":{},"data":data,"loc":{"start":{"line":17,"column":57},"end":{"line":17,"column":72}}}) : helper)))
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":18,"column":16},"end":{"line":18,"column":26}}}) : helper)))
    + ", "
    + alias4(((helper = (helper = lookupProperty(helpers,"imprint") || (depth0 != null ? lookupProperty(depth0,"imprint") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imprint","hash":{},"data":data,"loc":{"start":{"line":18,"column":28},"end":{"line":18,"column":39}}}) : helper)))
    + "</a>\n            <span class=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"match")||(depth0 && lookupProperty(depth0,"match"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"Available",{"name":"match","hash":{},"data":data,"loc":{"start":{"line":20,"column":23},"end":{"line":20,"column":49}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":16},"end":{"line":20,"column":71}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"match")||(depth0 && lookupProperty(depth0,"match"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"Maintenance",{"name":"match","hash":{},"data":data,"loc":{"start":{"line":21,"column":23},"end":{"line":21,"column":51}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":16},"end":{"line":21,"column":72}}})) != null ? stack1 : "")
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"status") || (depth0 != null ? lookupProperty(depth0,"status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data,"loc":{"start":{"line":22,"column":18},"end":{"line":22,"column":28}}}) : helper)))
    + "</span>\n        </div>"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(lookupProperty(helpers,"match")||(depth0 && lookupProperty(depth0,"match"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"Available",{"name":"match","hash":{},"data":data,"loc":{"start":{"line":24,"column":19},"end":{"line":24,"column":45}}}),{"name":"unless","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":8},"end":{"line":26,"column":19}}})) != null ? stack1 : "")
    + "\n        </li>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "text-success";
},"7":function(container,depth0,helpers,partials,data) {
    return "text-danger";
},"9":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"fst-italic text-muted\">Due back: "
    + container.escapeExpression((lookupProperty(helpers,"pretty-date")||(depth0 && lookupProperty(depth0,"pretty-date"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"due_back") : depth0),{"name":"pretty-date","hash":{},"data":data,"loc":{"start":{"line":25,"column":53},"end":{"line":25,"column":77}}}))
    + "</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"catalog_layout"),depth0,{"name":"catalog_layout","hash":{"no_title":1,"title":"Book"},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n";
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["content"],"data":data,"loc":{"start":{"line":2,"column":45},"end":{"line":41,"column":12}}}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});
templates['book_detail'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"card mb-4\">\n    <div class=\"card-header d-flex justify-content-between tiny-padding-2 px-sm-3\">\n        <span class=\"overflow-hidden\">\n        <h1 class=\"fs-3 mb-0 fw-semibold\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"book_info") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</h1>\n        by <a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"book_info") : depth0)) != null ? lookupProperty(stack1,"author_url") : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"book_info") : depth0)) != null ? lookupProperty(stack1,"full_name") : stack1), depth0))
    + "</a>\n        </span>\n        <span class=\"ui-button-pair\">\n            <a class=\"btn ui-button\" href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"book_info") : depth0)) != null ? lookupProperty(stack1,"book_url") : stack1), depth0))
    + "/update\"><img src=\"/pencil-fill.svg\" alt=\"Pencil icon click to edit\"></a>\n            <a class=\"btn ui-button\" href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"book_info") : depth0)) != null ? lookupProperty(stack1,"book_url") : stack1), depth0))
    + "/delete\"><img src=\"/trash.svg\" alt=\"Trash icon click to delete\"></a>\n        </span>\n    </div>\n    \n    <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item\">\n            "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"book_info") : depth0)) != null ? lookupProperty(stack1,"summary") : stack1),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":12},"end":{"line":17,"column":107}}})) != null ? stack1 : "")
    + "\n            "
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"book_info") : depth0)) != null ? lookupProperty(stack1,"summary") : stack1),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":12},"end":{"line":18,"column":60}}})) != null ? stack1 : "")
    + "\n            <small>"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,(depth0 != null ? lookupProperty(depth0,"genre_info") : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":19},"end":{"line":19,"column":103}}})) != null ? stack1 : "")
    + "</small>\n        </li>\n        <li class=\"list-group-item\"><small class=\"text-muted\">ISBN: "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"book_info") : depth0)) != null ? lookupProperty(stack1,"isbn") : stack1), depth0))
    + "</small></li>\n    </ul>\n</div>\n\n<div class=\"card\">\n    <div class=\"card-header d-flex justify-content-between tiny-padding-2 px-sm-3\">\n        <span class=\"overflow-hidden\">\n            Availability:\n        </span>\n        <span class=\"\">\n            <a class=\"btn ui-button mt-0\" href=\"/catalog/inventory/create/"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"book_info") : depth0)) != null ? lookupProperty(stack1,"book_id") : stack1), depth0))
    + "\"><img src=\"/file-earmark-plus.svg\" alt=\"New entry icon click to create\"></a>\n        </span>\n    </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"instances") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":4},"end":{"line":52,"column":11}}})) != null ? stack1 : "")
    + "    </ul>\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias3,(depth0 != null ? lookupProperty(depth0,"instances") : depth0),{"name":"unless","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":54,"column":4},"end":{"line":58,"column":15}}})) != null ? stack1 : "")
    + "</div>";
},"3":function(container,depth0,helpers,partials,data) {
    return "<p class=\"text-muted\"><em>No summary provided.</em></p>";
},"5":function(container,depth0,helpers,partials,data) {
    return "<p>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</p>";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"genre_url") || (depth0 != null ? lookupProperty(depth0,"genre_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"genre_url","hash":{},"data":data,"loc":{"start":{"line":19,"column":48},"end":{"line":19,"column":61}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":19,"column":63},"end":{"line":19,"column":71}}}) : helper)))
    + "</a>"
    + alias4((lookupProperty(helpers,"comma-list")||(depth0 && lookupProperty(depth0,"comma-list"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"comma-list","hash":{},"data":data,"loc":{"start":{"line":19,"column":75},"end":{"line":19,"column":94}}}));
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <ul class=\"list-group list-group-flush\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"instances") : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":4},"end":{"line":51,"column":13}}})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li class=\"list-group-item\">\n            <div class=\"d-flex justify-content-between align-items-baseline\">\n                <a class=\"\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"book_instance_url") || (depth0 != null ? lookupProperty(depth0,"book_instance_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"book_instance_url","hash":{},"data":data,"loc":{"start":{"line":40,"column":34},"end":{"line":40,"column":55}}}) : helper)))
    + "\">ID #"
    + alias4(((helper = (helper = lookupProperty(helpers,"instance_id") || (depth0 != null ? lookupProperty(depth0,"instance_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"instance_id","hash":{},"data":data,"loc":{"start":{"line":40,"column":61},"end":{"line":40,"column":76}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"imprint") || (depth0 != null ? lookupProperty(depth0,"imprint") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imprint","hash":{},"data":data,"loc":{"start":{"line":40,"column":77},"end":{"line":40,"column":88}}}) : helper)))
    + "</a>\n                <span class=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"match")||(depth0 && lookupProperty(depth0,"match"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"Available",{"name":"match","hash":{},"data":data,"loc":{"start":{"line":42,"column":27},"end":{"line":42,"column":53}}}),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":20},"end":{"line":42,"column":75}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"match")||(depth0 && lookupProperty(depth0,"match"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"Maintenance",{"name":"match","hash":{},"data":data,"loc":{"start":{"line":43,"column":27},"end":{"line":43,"column":55}}}),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":43,"column":20},"end":{"line":43,"column":76}}})) != null ? stack1 : "")
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"status") || (depth0 != null ? lookupProperty(depth0,"status") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data,"loc":{"start":{"line":44,"column":22},"end":{"line":44,"column":32}}}) : helper)))
    + "</span>\n            </div>"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(lookupProperty(helpers,"match")||(depth0 && lookupProperty(depth0,"match"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"Available",{"name":"match","hash":{},"data":data,"loc":{"start":{"line":46,"column":23},"end":{"line":46,"column":49}}}),{"name":"unless","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":46,"column":12},"end":{"line":48,"column":23}}})) != null ? stack1 : "")
    + "\n        </li>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "text-success";
},"13":function(container,depth0,helpers,partials,data) {
    return "text-danger";
},"15":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"fst-italic text-muted\">Due back: "
    + container.escapeExpression((lookupProperty(helpers,"pretty-date")||(depth0 && lookupProperty(depth0,"pretty-date"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"due_back") : depth0),{"name":"pretty-date","hash":{},"data":data,"loc":{"start":{"line":47,"column":57},"end":{"line":47,"column":81}}}))
    + "</div>\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "    <p class=\"card-body text-muted pt-2 pb-3 pb-0 mb-0\">\n        No copies in inventory.\n    </p>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"catalog_layout"),depth0,{"name":"catalog_layout","hash":{"no_title":1,"title":"Book"},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n";
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["content"],"data":data,"loc":{"start":{"line":2,"column":45},"end":{"line":61,"column":12}}}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});
templates['book_form'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"card\">\n    <div class=\"card-header mb-3\"><h1 class=\"fs-3\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":4,"column":51},"end":{"line":4,"column":60}}}) : helper)))
    + "</h1></div>\n\n    <div class=\"container col-md-10\">\n        "
    + ((stack1 = container.invokePartial(lookupProperty(partials,"book_form_body"),depth0,{"name":"book_form_body","fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n    </div>\n</div>";
},"3":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"catalog_layout"),depth0,{"name":"catalog_layout","hash":{"no_title":1,"use_script":"/form-eraser.js"},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n";
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["content"],"data":data,"loc":{"start":{"line":2,"column":61},"end":{"line":10,"column":12}}}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});
templates['book_list'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"card mb-4\">\n    <div class=\"card-header tiny-padding-2 px-sm-3\">\n        <div class=\"d-flex flex-column flex-sm-row justify-content-between\">\n            <span class=\"overflow-hidden pe-0\" style=\"min-width: 11.8em;\">\n            <h1 class=\"serif h2 mb-0\">Browse books</h1>\n            </span>\n            <span class=\"d-flex mt-2 mb-1 mt-sm-1\">\n                <form class=\"flex-grow-1 mt-0 me-1\" action=\"?q=\">\n                    <span class=\"input-group d-flex\">\n                        <input style=\"flex-grow: 1;\" class=\"form-control header-search-field\" aria-label=\"Search title text\" name=\"q\" type=\"text\" value=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"populate") : depth0)) != null ? lookupProperty(stack1,"search") : stack1), depth0))
    + "\">\n                        <button class=\"btn btn-outline-secondary\" style=\"width: 38px;\" type=\"submit\" aria-label=\"Search button\"><img class=\"search-icon\" src=\"/search.svg\" alt=\"Search icon\"></button>\n                    </span>\n                </form>    \n                <a class=\"btn ui-button\" href=\"/catalog/book/create\"><img src=\"/file-earmark-plus.svg\" alt=\"New entry icon click to create\"></a>\n            </span>\n        </div>\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"pagination_header"),depth0,{"name":"pagination_header","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n    </div>\n    \n\n    <ul class=\"list-group list-group-flush\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"books") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":4},"end":{"line":38,"column":13}}})) != null ? stack1 : "")
    + "    </ul>\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"pagination_footer"),depth0,{"name":"pagination_footer","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    \n</div>";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <li class=\"list-group-item overflow-hidden\">\n    <div class=\"d-flex justify-content-between align-items-baseline flex-column flex-sm-row\">\n        <span class=\"overflow-hidden\">\n            <a class=\"serif\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"book_url") || (depth0 != null ? lookupProperty(depth0,"book_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"book_url","hash":{},"data":data,"loc":{"start":{"line":30,"column":35},"end":{"line":30,"column":47}}}) : helper)))
    + "\"><h2 class=\"fs-5 mb-1\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":30,"column":71},"end":{"line":30,"column":80}}}) : helper)))
    + "</h2></a>\n        </span>\n        <span class=\"overflow-hidden mb-1 text-start text-sm-end\">\n            <a class=\"fst-italic\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"author_url") || (depth0 != null ? lookupProperty(depth0,"author_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author_url","hash":{},"data":data,"loc":{"start":{"line":33,"column":40},"end":{"line":33,"column":54}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"full_name") || (depth0 != null ? lookupProperty(depth0,"full_name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"full_name","hash":{},"data":data,"loc":{"start":{"line":33,"column":56},"end":{"line":33,"column":69}}}) : helper)))
    + "</a>\n        </span>\n    </div>\n    <p class=\"overflow-hidden\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"snippet") || (depth0 != null ? lookupProperty(depth0,"snippet") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"snippet","hash":{},"data":data,"loc":{"start":{"line":36,"column":31},"end":{"line":36,"column":42}}}) : helper)))
    + "</p>\n    </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"catalog_layout"),depth0,{"name":"catalog_layout","hash":{"no_title":1,"title":"Books"},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n";
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["content"],"data":data,"loc":{"start":{"line":2,"column":46},"end":{"line":44,"column":12}}}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});
templates['catalog_active_home'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"dark-card mb-5\">\n    <div class=\"top-bar pb-4 pt-1 ps-3\"><h1 class=\"serif\">Welcome to the Catalog</h1></div>\n    <div class=\"d-flex recent-outer\" id=\"recent-outer-id\">\n        <div class=\"spotlight-pane\">\n            <div class=\"recently-added\">\n                <div class=\"recent-overlay serif\"><h2 class=\"fw-semibold\">Recently Added</h2></div>\n                <div class=\"camera\">\n                    <!-- book model -->\n                    <div class=\"book-model await-reveal\">\n                        <div class=\"book-face book-front\">\n                            <div class=\"ambient-front\"></div>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"recent_books") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":28},"end":{"line":16,"column":38}}})) != null ? stack1 : "")
    + "                        </div>\n                        <div class=\"book-face book-left\"></div>\n                        <div class=\"book-face book-right\">\n                            <div class=\"ambient-right\"></div>\n                        </div>\n                        <div class=\"book-face book-top\"></div>\n                        <div class=\"ambient-before\"></div>\n                        <div class=\"blob-shadow\"></div>\n                    </div>\n                    <!-- /book model -->\n                </div>\n            </div>\n        </div>\n\n        <!-- Cycling presentation text -->\n        <div class=\"cycle-container\">\n            <div class=\"curtain-right\"></div>\n            <div class=\"d-flex cycle-text\" id=\"cycle-id\">\n                <div class=\"current-pane ps-0 ps-lg-2 pe-3\" id=\"current-pane-id\">\n                    <h2 class=\"cycle-title serif text-break clamp-text clamp-3\" id=\"current-title\"></h2>\n                    <p class=\"text-break clamp-text\" id=\"current-copy\"></p>\n                    <div class=\"d-flex justify-content-end\" style=\"height:auto;\">\n                        <a class=\"fw-semibold carousel-link me-5\" id=\"current-link\" href=\"#\">More...</a>\n                    </div>\n                </div>\n                <div class=\"next-pane ps-0 ps-lg-2 pe-3\" id=\"next-pane-id\">\n                    <h2 class=\"cycle-title serif text-break clamp-text clamp-3\" id=\"next-title\"></h2>\n                    <p class=\"text-break clamp-text\" id=\"next-copy\"></p>\n                    <div class=\"d-flex justify-content-end\" style=\"height:auto;\">\n                        <a class=\"fw-semibold carousel-link me-5\" id=\"next-link\" href=\"#\">More...</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- /cycling presentation text -->\n\n    </div>\n</div>\n\n<!-- Catalog description -->\n<p class=\"ps-3 mb-4 lead\"><i class=\"serif fw-semibold fst-normal\">Archivia</i> is an editable catalog of literary works, featuring:</p>\n<div class=\"mb-5 ps-2 pt-2 landing-info d-flex flex-row justify-content-evenly align-items-center\">    \n    <div class=\"landing-box landing-books d-flex justify-content-center\">\n        <span class=\"landing-count\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"book_count") || (depth0 != null ? lookupProperty(depth0,"book_count") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"book_count","hash":{},"data":data,"loc":{"start":{"line":60,"column":36},"end":{"line":60,"column":50}}}) : helper)))
    + "</span>\n        <span class=\"landing-label\">books</span>\n    </div>\n    <div class=\"landing-box landing-authors d-flex justify-content-center\">\n        <span class=\"landing-count\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"author_count") || (depth0 != null ? lookupProperty(depth0,"author_count") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author_count","hash":{},"data":data,"loc":{"start":{"line":64,"column":36},"end":{"line":64,"column":52}}}) : helper)))
    + "</span>\n        <span class=\"landing-label\">authors</span>\n    </div>\n    <div class=\"landing-box landing-genres d-flex justify-content-center\">\n        <span class=\"landing-count\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"genre_count") || (depth0 != null ? lookupProperty(depth0,"genre_count") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"genre_count","hash":{},"data":data,"loc":{"start":{"line":68,"column":36},"end":{"line":68,"column":51}}}) : helper)))
    + "</span>\n        <span class=\"landing-label\">subjects</span>\n    </div>\n</div>\n<div class=\"d-flex\">\n    <p class=\"lead ms-2 ps-2 pt-3\"><a href=\"/catalog/books\" class=\"fw-semibold\">Browse</a> the catalog or <a href=\"/catalog/book/import\" class=\"fw-semibold\">import</a> a new work today!</p>\n</div>\n<!-- /catalog description -->\n\n<script>\n\nconst log = console.log.bind(console)\nconst select = document.querySelector.bind(document)\nconst el = document.getElementById.bind(document)\n\nconst loadedImages = []\nconst spotlightData = [\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"recent_books") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":85,"column":4},"end":{"line":93,"column":13}}})) != null ? stack1 : "")
    + "]\n\nconst showTime = 8; // seconds for each animation cycle\nconst cycleDelay = 0.75; // seconds to offset the text animation\n\ndocument.documentElement.style.setProperty('--show-time', showTime + 's')\n\nlet loadsWaiting = spotlightData.length\n\n// Populate initial cycling text\nconst highestIndex = Math.max(...spotlightData.map(d => d.index))\nconst initialRecord = spotlightData.find(\n                        d => parseInt(d.index) === highestIndex)\n                        || {\n                            title: '',\n                            snippet: 'No titles yet. Add a book to get '\n                                + 'this catalog started!',\n                            book_url: 'catalog/book/create',\n                        }\nel('current-title').innerHTML = initialRecord.title\nel('current-copy').innerHTML = initialRecord.snippet\nel('current-link').href = initialRecord.book_url\n\nfor (const cover of document.querySelectorAll('.covers')) {\n    if (cover.complete) {\n        if (cover.naturalHeight === 0) {\n            handleImageLoad(failover(cover))\n\n        } else {\n            handleImageLoad(cover)\n        }\n\n        continue\n    }\n\n    cover.addEventListener('load', reactToLoad)\n    cover.addEventListener('error', event => {\n        const replacement = failover(event.target)\n        handleImageLoad(replacement)\n    })\n\n    // Create a replacement element with similar properties,\n    // add it to the DOM, remove the previous element.\n    function failover (element) {\n        element.removeEventListener('load', reactToLoad)\n\n        let div = document.createElement('div')\n        const parsed = new DOMParser().parseFromString(\n            spotlightData[element.dataset.index].title, 'text/html')\n            .documentElement.textContent\n        div.textContent = parsed\n\n        div.classList.add('covers', 'serif', 'fw-semibold', 'fs-5',\n                            'bg-light', 'text-dark', 'text-break',\n                            'overflow-hidden', 'mt-5', 'px-3', 'py-1',\n                            'text-center', 'text-break', 'clamp-text',\n                            'clamp-3')\n        div.width = 180\n        div.height = 300\n        div.dataset.index = element.dataset.index\n        div.style = 'max-height: 300px; --bs-bg-opacity: .6;'\n                    + 'border-top: 8px solid #0008;'\n                    + 'border-bottom: 8px solid #0008;'\n\n        element.after(div)\n        element.parentElement.removeChild(element)\n\n        return div\n    }\n}\n\nfunction reactToLoad (event) {\n    handleImageLoad(event.target)\n}\n\nfunction handleImageLoad(element) {\n\n    loadedImages.push({\n        element: element,\n        aspect: element.width / element.height || 0.6,\n        info: spotlightData[element.dataset.index]\n    })\n\n    // Sort descending based on template index\n    // (which is itself based on serial index -- hence, newest first.)\n    loadedImages.sort((a,b) => b.info.index - a.info.index)\n\n    --loadsWaiting\n    if (loadsWaiting < 1) {\n        select('.book-model').classList.remove('await-reveal')\n        updateCover()\n        setInterval(updateCover, showTime * 1000)\n    }\n}\n\nfunction restartAnimations () {\n    select('.camera').classList.remove('camera-animate')\n    select('.book-model').classList.remove('book-model-animate')\n    select('.book-front').classList.remove('book-front-animate')\n    select('.blob-shadow').classList.remove('blob-shadow-animate')\n    void el('recent-outer-id').offsetWidth // Force reflow\n    \n    setTimeout(() => {\n        select('.camera').classList.add('camera-animate')\n        select('.book-model').classList.add('book-model-animate')\n        select('.book-front').classList.add('book-front-animate')\n        select('.blob-shadow').classList.add('blob-shadow-animate')\n    }, 30)\n    \n\n    // Apply a slight delay to the text cycle:\n    setTimeout(() => {\n        el('cycle-id').classList.remove('cycle-forward-animate')\n        void el('cycle-id').offsetWidth // Force reflow for animation restart\n        el('cycle-id').classList.add('cycle-forward-animate')\n    }, cycleDelay * 1000)\n}\n\nfunction updateCover () {\n    updateCover.counter ??= 0\n    const image = loadedImages[updateCover.counter]\n    const upcoming = loadedImages[(updateCover.counter + 1)\n                                    % loadedImages.length]\n    if (!image) {\n        return\n    }\n\n    setTimeout(() => {\n        el('current-title').innerHTML = image.info.title\n        el('current-copy').innerHTML = image.info.snippet\n        el('current-link').href = image.info.book_url\n        el('next-title').innerHTML = upcoming.info.title\n        el('next-copy').innerHTML = upcoming.info.snippet\n        el('next-link').href = upcoming.info.book_url\n    }, cycleDelay * 1000)\n\n    // Prepare to swap slides:\n    setTimeout(() => {\n        el('current-title').innerHTML = upcoming.info.title\n        el('current-copy').innerHTML = upcoming.info.snippet\n        el('current-link').href = upcoming.info.book_url\n    }, showTime * 0.97 * 1000 + cycleDelay * 1000)\n\n    document.documentElement.style.setProperty(\n        '--book-aspect', image.aspect)\n    \n    for (const e of document.querySelectorAll('.covers')) {\n        e.classList.add('d-none')\n    }\n    image.element.classList.remove('d-none')\n    updateCover.counter++\n    updateCover.counter %= loadedImages.length\n\n    restartAnimations()\n}\n\nfunction abbreviateSnippet (snippet) {\n    const maxLength = 180\n    const minLength = 80\n\n    if (snippet.length <= maxLength) { return snippet }\n\n    const maxedSlice = snippet.slice(0, maxLength)\n    const coherentSlice =\n        maxedSlice.match(/^.*\\s/)?.[0] || maxedSlice // Break on last space\n    const firstSentence =\n        snippet.match('^[^.]*\\.')?.[0] || maxedSlice // Break on last period\n\n    if (firstSentence.length < maxLength\n            && firstSentence.length > minLength) {\n        return firstSentence\n    }\n\n    // Otherwise...\n    return coherentSlice + '...'\n}\n\n</script>";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<img crossorigin src=\"https://covers.openlibrary.org/b/id/"
    + alias4(((helper = (helper = lookupProperty(helpers,"cover_id") || (depth0 != null ? lookupProperty(depth0,"cover_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cover_id","hash":{},"data":data,"loc":{"start":{"line":15,"column":86},"end":{"line":15,"column":98}}}) : helper)))
    + "-M.jpg\" data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":15,"column":118},"end":{"line":15,"column":128}}}) : helper)))
    + "\" class=\"covers\" id=\"cover-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":15,"column":155},"end":{"line":15,"column":165}}}) : helper)))
    + "\">";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    {\n        title: `"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":87,"column":16},"end":{"line":87,"column":25}}}) : helper)))
    + "`,\n        snippet: abbreviateSnippet(`"
    + alias4(((helper = (helper = lookupProperty(helpers,"snippet") || (depth0 != null ? lookupProperty(depth0,"snippet") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"snippet","hash":{},"data":data,"loc":{"start":{"line":88,"column":36},"end":{"line":88,"column":47}}}) : helper)))
    + "`),\n        cover_id: `"
    + alias4(((helper = (helper = lookupProperty(helpers,"cover_id") || (depth0 != null ? lookupProperty(depth0,"cover_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cover_id","hash":{},"data":data,"loc":{"start":{"line":89,"column":19},"end":{"line":89,"column":31}}}) : helper)))
    + "`,\n        book_url: `"
    + alias4(((helper = (helper = lookupProperty(helpers,"book_url") || (depth0 != null ? lookupProperty(depth0,"book_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"book_url","hash":{},"data":data,"loc":{"start":{"line":90,"column":19},"end":{"line":90,"column":31}}}) : helper)))
    + "`,\n        index: `"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":91,"column":16},"end":{"line":91,"column":26}}}) : helper)))
    + "`,\n    },\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"catalog_layout"),depth0,{"name":"catalog_layout","hash":{"stylesheet":"/recent-carousel.css","no_title":1,"no_back":1},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n";
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["content"],"data":data,"loc":{"start":{"line":2,"column":76},"end":{"line":272,"column":12}}}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});
templates['catalog_home'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<p>This mock catalog represents the web interface to a library catalog allowing users to browse, update, add and delete records describing books and their authors, along with the current status of this library's collection.</p>\n<p>It features the ability to import real-world author and book data retrieved from the OpenLibrary API.</p>\n<p>Indexing <strong>"
    + alias4(((helper = (helper = lookupProperty(helpers,"book_count") || (depth0 != null ? lookupProperty(depth0,"book_count") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"book_count","hash":{},"data":data,"loc":{"start":{"line":6,"column":20},"end":{"line":6,"column":34}}}) : helper)))
    + "</strong> books by <strong>"
    + alias4(((helper = (helper = lookupProperty(helpers,"author_count") || (depth0 != null ? lookupProperty(depth0,"author_count") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author_count","hash":{},"data":data,"loc":{"start":{"line":6,"column":61},"end":{"line":6,"column":77}}}) : helper)))
    + "</strong> authors across <strong>"
    + alias4(((helper = (helper = lookupProperty(helpers,"genre_count") || (depth0 != null ? lookupProperty(depth0,"genre_count") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"genre_count","hash":{},"data":data,"loc":{"start":{"line":6,"column":110},"end":{"line":6,"column":125}}}) : helper)))
    + "</strong> genres.</p>\n<p class=\"text-muted\"><i>"
    + alias4(((helper = (helper = lookupProperty(helpers,"available_count") || (depth0 != null ? lookupProperty(depth0,"available_count") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"available_count","hash":{},"data":data,"loc":{"start":{"line":7,"column":25},"end":{"line":7,"column":44}}}) : helper)))
    + " of "
    + alias4(((helper = (helper = lookupProperty(helpers,"total_count") || (depth0 != null ? lookupProperty(depth0,"total_count") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"total_count","hash":{},"data":data,"loc":{"start":{"line":7,"column":48},"end":{"line":7,"column":63}}}) : helper)))
    + " volumes available.</i></p>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"catalog_layout"),depth0,{"name":"catalog_layout","hash":{"no_back":1},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n";
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["content"],"data":data,"loc":{"start":{"line":2,"column":31},"end":{"line":9,"column":12}}}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});
templates['error'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  \n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <p>An error has occurred ("
    + alias4(((helper = (helper = lookupProperty(helpers,"status_code") || (depth0 != null ? lookupProperty(depth0,"status_code") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status_code","hash":{},"data":data,"loc":{"start":{"line":3,"column":30},"end":{"line":3,"column":45}}}) : helper)))
    + "): "
    + alias4(((helper = (helper = lookupProperty(helpers,"error_message") || (depth0 != null ? lookupProperty(depth0,"error_message") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"error_message","hash":{},"data":data,"loc":{"start":{"line":3,"column":48},"end":{"line":3,"column":65}}}) : helper)))
    + "</p>\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"error_stack") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":4,"column":56}}})) != null ? stack1 : "")
    + "\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<pre>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"error_stack") || (depth0 != null ? lookupProperty(depth0,"error_stack") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"error_stack","hash":{},"data":data,"loc":{"start":{"line":4,"column":28},"end":{"line":4,"column":43}}}) : helper)))
    + "</pre>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"lean_layout"),depth0,{"name":"lean_layout","hash":{"mod_title":"Error"},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["mod_content"],"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":5,"column":13}}}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});
templates['form_example'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "";
},"2":function(container,depth0,helpers,partials,data) {
    return "<style>\n.split {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n}\n.split>* {\n    flex: 0 0 0;\n    margin-bottom: 0.5rem;\n}\n</style>\n\n<div class=\"card\">\n    <div class=\"card-header\"><h1 class=\"fs-3\">Welcome to the Example</h1></div>\n    <div class=\"card-body\">\n    <form action=\"\">\n        <fieldset>\n            <legend>I Am Legend</legend>\n            <input type=\"radio\" id=\"rad-a\" name=\"rad-abc\" value=\"a\">\n            <label for=\"rad-a\">Label for rad-a</label>\n            <br>\n            <input type=\"radio\" id=\"rad-b\" name=\"rad-abc\" value=\"b\" checked>\n            <label for=\"rad-b\">Label for rad-b</label>\n            <br>\n            <input type=\"radio\" id=\"rad-c\" name=\"rad-abc\" value=\"c\">\n            <label for=\"rad-c\">Label for rad-c</label>\n        </fieldset>\n        <hr>\n\n        <div class=\"split\">\n            <span class=\"form-check form-switch\">\n            <input type=\"checkbox\" role=\"switch\" id=\"checkbox-id-1\" name=\"check-name-1\">\n            <label for=\"checkbox-id-1\">First checkbox label</label></span>\n            <span>\n            <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" id=\"checkbox-id-2\" name=\"check-name-2\">\n            <label for=\"checkbox-id-2\">Second checkbox label</label></span>\n            <div class=\"container\">\n            <input class=\"form-range\" type=\"range\" id=\"range-id\" name=\"range-name\" min=\"2\" max=\"12\">\n            </div>\n            <span>\n            <label class=\"form-label\" for=\"abc-id\">Letters only, no numbers!?</label>\n            <input class=\"form-control\" type=\"text\" name=\"abc\" id=\"abc-id\" required pattern=\"\\p{L}+\">\n            <div class=\"form-text\">We will spam your e-mail everywhere.</div>\n            </span>\n        </div>\n        <div class=\"mb-2\">\n            <label class=\"form-label\" for=\"optional-id\">This part is optional</label>\n            <input class=\"form-control\" type=\"text\" name=\"optional\" id=\"optional-id\">\n        </div>\n\n        <input class=\"btn btn-primary\" type=\"submit\" value=\"Send me away!\">\n    </form>\n    </div>\n</div>\n\n<script>\nconst abcInput = document.getElementById('abc-id')\n\nabcInput.addEventListener('input', () => {\n    abcInput.classList.remove('is-invalid')\n    abcInput.classList.add('is-valid')\n    abcInput.setCustomValidity('')\n    abcInput.checkValidity()\n})\n\nabcInput.addEventListener('invalid', () => {\n    abcInput.classList.remove('is-valid')\n    abcInput.classList.add('is-invalid')\n    if (abcInput.value.length === 0) {\n        abcInput.setCustomValidity('Zero length??')\n    } else {\n        abcInput.setCustomValidity('Invalid format, sorry')\n    }\n})\n</script>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"catalog_layout"),depth0,{"name":"catalog_layout","fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n";
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["content"],"data":data,"loc":{"start":{"line":2,"column":22},"end":{"line":79,"column":12}}}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});
templates['genre_action_choose'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"card mt-3\">\n    <div class=\"card-header fs-4 fw-semibold\">\n        Choose genre to "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"action") || (depth0 != null ? lookupProperty(depth0,"action") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"action","hash":{},"data":data,"loc":{"start":{"line":5,"column":24},"end":{"line":5,"column":34}}}) : helper)))
    + "...\n    </div>\n    <ul class=\"list-group list-group-flush\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"genres") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":8},"end":{"line":12,"column":17}}})) != null ? stack1 : "")
    + "    </ul>\n</div>";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li class=\"list-group-item\">\n            <a class=\"serif h5\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"genre_url") || (depth0 != null ? lookupProperty(depth0,"genre_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"genre_url","hash":{},"data":data,"loc":{"start":{"line":10,"column":38},"end":{"line":10,"column":51}}}) : helper)))
    + "/"
    + alias4(container.lambda((depths[1] != null ? lookupProperty(depths[1],"action") : depths[1]), depth0))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":10,"column":67},"end":{"line":10,"column":75}}}) : helper)))
    + "</a>\n        </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"catalog_layout"),depth0,{"name":"catalog_layout","fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n";
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["content"],"data":data,"loc":{"start":{"line":2,"column":22},"end":{"line":15,"column":12}}}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});
templates['genre_delete'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"fs-1\">\n    Delete genre: "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"genre") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "?\n</div>\n\n<div class=\"fs-5 fw-semibold my-4\">\n    <form action=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"genre") : depth0)) != null ? lookupProperty(stack1,"genre_url") : stack1), depth0))
    + "/delete\" method=\"POST\">\n        Are you sure?\n        <a class=\"btn btn-secondary ms-4 fw-semibold text-decoration-none\" role=\"button\" href=\"/catalog/\">Cancel</a>\n        <button class=\"btn btn-danger ms-2 fw-semibold\">Delete</button>\n    </form>\n</div>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"catalog_layout"),depth0,{"name":"catalog_layout","hash":{"no_title":1},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n";
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["content"],"data":data,"loc":{"start":{"line":2,"column":32},"end":{"line":14,"column":12}}}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});
templates['genre_detail'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"card mb-4\">\n    <div class=\"card-header d-flex justify-content-between tiny-padding-2 px-sm-3\">\n        <span class=\"overflow-hidden\">\n        <h1 class=\"serif h2 mb-1\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":6,"column":34},"end":{"line":6,"column":43}}}) : helper)))
    + "</h1>\n        <div class=\"text-muted\"><em>"
    + alias4(((helper = (helper = lookupProperty(helpers,"genreCount") || (depth0 != null ? lookupProperty(depth0,"genreCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"genreCount","hash":{},"data":data,"loc":{"start":{"line":7,"column":36},"end":{"line":7,"column":50}}}) : helper)))
    + " title"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(lookupProperty(helpers,"match-string")||(depth0 && lookupProperty(depth0,"match-string"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"genreCount") : depth0),1,{"name":"match-string","hash":{},"data":data,"loc":{"start":{"line":7,"column":66},"end":{"line":7,"column":93}}}),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":56},"end":{"line":7,"column":107}}})) != null ? stack1 : "")
    + " in catalog</em></div>\n        </span>\n        <span class=\"ui-button-pair\">\n            <a class=\"btn ui-button\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"genre_url") || (depth0 != null ? lookupProperty(depth0,"genre_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"genre_url","hash":{},"data":data,"loc":{"start":{"line":10,"column":43},"end":{"line":10,"column":56}}}) : helper)))
    + "/update\"><img src=\"/pencil-fill.svg\" alt=\"Pencil icon click to edit\"></a>\n            <a class=\"btn ui-button\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"genre_url") || (depth0 != null ? lookupProperty(depth0,"genre_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"genre_url","hash":{},"data":data,"loc":{"start":{"line":11,"column":43},"end":{"line":11,"column":56}}}) : helper)))
    + "/delete\"><img src=\"/trash.svg\" alt=\"Trash icon click to delete\"></a>\n        </span>\n    </div>\n\n    <ul class=\"list-group list-group-flush\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"result") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":20,"column":17}}})) != null ? stack1 : "")
    + "    </ul>\n</div>";
},"3":function(container,depth0,helpers,partials,data) {
    return "s";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li class=\"list-group-item\">\n            <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"book_url") || (depth0 != null ? lookupProperty(depth0,"book_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"book_url","hash":{},"data":data,"loc":{"start":{"line":18,"column":21},"end":{"line":18,"column":33}}}) : helper)))
    + "\" class=\"serif fs-5\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":18,"column":54},"end":{"line":18,"column":63}}}) : helper)))
    + "</a>\n        </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"catalog_layout"),depth0,{"name":"catalog_layout","hash":{"no_title":1},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n";
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["content"],"data":data,"loc":{"start":{"line":2,"column":32},"end":{"line":23,"column":12}}}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});
templates['genre_form'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"card\">\n    <div class=\"card-header mb-3\"><h1 class=\"fs-3\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":4,"column":51},"end":{"line":4,"column":60}}}) : helper)))
    + "</h1></div>\n\n    <div class=\"container col-md-10\">\n        <form class=\"mb-4\" action=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"form_action") || (depth0 != null ? lookupProperty(depth0,"form_action") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"form_action","hash":{},"data":data,"loc":{"start":{"line":7,"column":35},"end":{"line":7,"column":50}}}) : helper)))
    + "\" method=\"POST\">\n\n            <label class=\"form-label\" for=\"genre-name-id\">Name</label>\n            <div class=\"input-group has-validation\">\n                <input class=\"form-control "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"error-check")||(depth0 && lookupProperty(depth0,"error-check"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"trouble") : depth0),"name",{"name":"error-check","hash":{},"data":data,"loc":{"start":{"line":11,"column":49},"end":{"line":11,"column":77}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":43},"end":{"line":11,"column":96}}})) != null ? stack1 : "")
    + "\" id=\"genre-name-id\" name=\"name\" type=\"text\" value=\""
    + alias4(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"populate") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\">\n                <button class=\"btn btn-primary fw-semibold\" type=\"submit\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"submit") || (depth0 != null ? lookupProperty(depth0,"submit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"submit","hash":{},"data":data,"loc":{"start":{"line":12,"column":74},"end":{"line":12,"column":84}}}) : helper)))
    + "</button>\n            <div class=\"invalid-feedback\">"
    + alias4((lookupProperty(helpers,"error-check")||(depth0 && lookupProperty(depth0,"error-check"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"trouble") : depth0),"name",{"name":"error-check","hash":{},"data":data,"loc":{"start":{"line":13,"column":42},"end":{"line":13,"column":72}}}))
    + "</div>\n            </div>\n        </form>\n    </div>\n</div>";
},"3":function(container,depth0,helpers,partials,data) {
    return "is-invalid";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"catalog_layout"),depth0,{"name":"catalog_layout","hash":{"no_title":1,"use_script":"/form-eraser.js"},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n";
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["content"],"data":data,"loc":{"start":{"line":2,"column":61},"end":{"line":18,"column":12}}}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});
templates['genre_list'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"card mb-4\">\n    <div class=\"card-header tiny-padding-2 px-sm-3\">\n        <div class=\"d-flex justify-content-between\">\n            <span class=\"overflow-hidden\">\n            <h1 class=\"serif h2 mb-0\">Browse genres</h1>\n            </span>\n            <span class=\"\">\n                <a class=\"btn ui-button\" href=\"/catalog/genre/create\"><img src=\"/file-earmark-plus.svg\" alt=\"New entry icon click to create\"></a>\n            </span>\n        </div>\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"pagination_header"),depth0,{"name":"pagination_header","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n    </div>\n\n    <ul class=\"list-group list-group-flush\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"genres") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":4},"end":{"line":23,"column":13}}})) != null ? stack1 : "")
    + "    </ul>\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"pagination_footer"),depth0,{"name":"pagination_footer","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    \n</div>";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <li class=\"list-group-item\">\n        <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"genre_url") || (depth0 != null ? lookupProperty(depth0,"genre_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"genre_url","hash":{},"data":data,"loc":{"start":{"line":21,"column":17},"end":{"line":21,"column":30}}}) : helper)))
    + "\" class=\"serif fs-5\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":21,"column":51},"end":{"line":21,"column":59}}}) : helper)))
    + "</a>\n    </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"catalog_layout"),depth0,{"name":"catalog_layout","hash":{"no_title":1,"title":"Genres"},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n";
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["content"],"data":data,"loc":{"start":{"line":2,"column":47},"end":{"line":29,"column":12}}}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});
templates['home'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!DOCTYPE html>\n<html lang=\"en\" dir=\"ltr\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n  <link rel=\"icon\" href=\"favicon.svg\">\n\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n  <link href=\"https://fonts.googleapis.com/css2?family=Voltaire&display=swap\" rel=\"stylesheet\">\n\n  <link rel=\"stylesheet\" href=\"/clean-pastel.css\">\n  <title>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":14,"column":9},"end":{"line":14,"column":18}}}) : helper)))
    + "</title>\n</head>\n\n<body>\n  \n  <div class=\"ambient-bg\"></div>\n  <div class=\"center-content\">\n  <h1>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":21,"column":6},"end":{"line":21,"column":15}}}) : helper)))
    + "</h1>\n  <p>Welcome to the "
    + alias4(((helper = (helper = lookupProperty(helpers,"page") || (depth0 != null ? lookupProperty(depth0,"page") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page","hash":{},"data":data,"loc":{"start":{"line":22,"column":20},"end":{"line":22,"column":28}}}) : helper)))
    + " webpage.</p>\n  <div style=\"display: inline-flex; flex-flow: column; margin: 1rem; line-height: 1.8rem;\">\n    <a href=\"/lean\">Check out a lean layout</a>\n    <a href=\"/moo/15\">Or try a dynamic-lookup layout</a>\n    <a href=\"/db/status\">Check the SQL server status</a>\n    <a href=\"/catalog\">Visit the library catalog</a>\n    <form method=\"post\" action=\"/lib/autoload\">\n      <input type=\"submit\" value=\"autoload data\">\n    </form>\n  </div>\n  </div>\n\n</body>\n</html>\n";
},"useData":true});
templates['import_author'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<script defer src=\"/handlebars/handlebars.min-v4.7.7.js\"></script>\n<script type=\"module\" src=\"/import-author.js\"></script>\n<div class=\"card mb-4\">\n    <div class=\"card-header d-flex justify-content-between\">\n        <span>\n        <h1 class=\"serif h2\">Import Author</h1>\n        </span>\n    </div>\n    <div class=\"card-body px-2 px-sm-3\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"script_required"),depth0,{"name":"script_required","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        <div class=\"nojs-hidden col small-max-width\">\n            <label class=\"form-label\" for=\"search-text\">Name</label>\n            <form class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" id=\"search-text\">\n                <button class=\"btn btn-primary px-0\" id=\"search-button\" style=\"width: 6rem;\">\n                    <span class=\"spinner-border spinner-border-sm visually-hidden\" id=\"search-spinner\" role=\"status\" aria-hidden=\"true\"></span>\n                    <span class=\"fw-semibold\">Search</span>\n                    <img class=\"invert align-baseline ms-1\" id=\"magnifying-glass\" src=\"/search.svg\" alt=\"magnifing glass icon, click to search\">\n                </button>\n            </form>\n        </div>\n    </div>\n</div>\n\n<!-- input form modal -->\n<div class=\"modal fade\" id=\"input-modal\" tabindex=\"-1\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title serif\">Import author</h5>\n                <button class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n            </div>\n            <div class=\"modal-body\" id=\"modal-body-id\">\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Cancel</button>\n                <button class=\"btn btn-primary\" id=\"import-button-id\">\n                    <span class=\"spinner-border spinner-border-sm visually-hidden\" id=\"import-spinner\" role=\"status\" aria-hidden=\"true\"></span>\n                    Import\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- search result template -->\n<template id=\"list-template\">\n    <div class=\"card px-0\">\n        <div class=\"card-header tiny-padding-2 px-sm-3\" id=\"list-header\">\n            {{#client-partial pagination_header}}\n        </div>\n        <ul class=\"list-group list-group-flush\">\n            {{#each authors}}\n            <li class=\"list-group-item shade-initially\">\n                <div class=\"row ps-2 px-sm-3\">\n                    <!-- snap bio -->\n                    <div class=\"col-9 col-md-4 px-0 order-0\">\n                        <div class=\"fs-5 serif\">{{name}}</div>\n                        <div class=\"text-muted lh-1\"><small>{{birth_date}}{{#if birth_date}} &ndash; {{/if}}{{death_date}}</small></div>\n                        <div class=\"text-muted\">{{#if top_work}}<small>Author of <em>{{top_work}}</em></small>{{/if}}</div>\n                    </div>\n                    <!-- expandables -->\n                    <div class=\"col ps-1 order-3 order-md-1 overflow-hidden\">\n                        {{#if alternate_names}}\n                        <details>\n                            <summary class=\"text-muted\"><small>Also known as...</small></summary>\n                            <ul>\n                                {{#each alternate_names}}\n                                <li class=\"fs-6 serif\">{{.}}</li>\n                                {{/each}}\n                            </ul>\n                        </details>\n                        {{/if}}\n                        <details class=\"bio\">\n                            <summary class=\"text-muted\"><small>Bio</small></summary>\n                            <p class=\"ps-2\" data-key=\"{{key}}\"><em class=\"text-muted\">Loading...</em></p>\n                        </details>\n                    </div>\n                    <!-- plus button -->\n                    <div class=\"col-3 col-md-1 px-0 order-2 pe-1\" style=\"min-width: 38px;\" align=\"right\">\n                        <button class=\"btn ui-button plus-button\" data-bs-toggle=\"modal\" data-bs-target=\"#input-modal\" data-key=\"{{key}}\"><img src=\"/plus.svg\"></button>\n                    </div>\n\n                </div>\n            </li>\n            {{/each}}\n\n        </ul>\n\n        {{#client-partial pagination_footer}}\n    </div>\n</template>\n\n<!-- div serving as parent for dynamic search results -->\n<div id=\"search-result-id\"></div>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"catalog_layout"),depth0,{"name":"catalog_layout","hash":{"no_title":1},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["content"],"data":data,"loc":{"start":{"line":2,"column":32},"end":{"line":99,"column":12}}}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});
templates['import_book'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<script defer src=\"/handlebars/handlebars.min-v4.7.7.js\"></script>\n<script type=\"module\" src=\"/import-book.js\"></script>\n<div class=\"card mb-4\">\n    <div class=\"card-header d-flex justify-content-between\">\n        <span>\n        <h1 class=\"serif h2\">Import Book</h1>\n        </span>\n    </div>\n    <div class=\"card-body px-2 px-sm-3\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"script_required"),depth0,{"name":"script_required","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        <div class=\"nojs-hidden col small-max-width\">\n            <label class=\"form-label\" for=\"search-text\">Title</label>\n            <form class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" id=\"search-text\">\n                <button class=\"btn btn-primary px-0\" id=\"search-button\" style=\"width: 6rem;\">\n                    <span class=\"spinner-border spinner-border-sm visually-hidden\" id=\"search-spinner\" role=\"status\" aria-hidden=\"true\"></span>\n                    <span class=\"fw-semibold\">Search</span>\n                    <img class=\"invert align-baseline ms-1\" id=\"magnifying-glass\" src=\"/search.svg\" alt=\"magnifing glass icon, click to search\">\n                </button>\n            </form>\n        </div>\n    </div>\n</div>\n\n<!-- input form modal -->\n<div class=\"modal fade\" id=\"input-modal\" tabindex=\"-1\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h1 class=\"modal-title fs-3 serif\">Import book</h1>\n                <button class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n            </div>\n            \n            <h2 class=\"serif fs-4 mt-3 ps-3\">Book</h2>\n            <div class=\"modal-body ps-4\" id=\"modal-body-book\"></div>\n            <hr>\n            <h2 class=\"serif fs-4 ps-3\">Author</h2>\n            <div class=\"modal-body ps-4\" id=\"modal-body-author\"></div>\n            \n\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Cancel</button>\n                <button class=\"btn btn-primary\" id=\"import-button-id\">\n                    <span class=\"spinner-border spinner-border-sm visually-hidden\" id=\"import-spinner\" role=\"status\" aria-hidden=\"true\"></span>\n                    Import\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- search result template -->\n<template id=\"list-template\">\n    <div class=\"card px-0\">\n        <div class=\"card-header tiny-padding-2 px-sm-3\" id=\"list-header\">\n            {{#client-partial pagination_header}}\n        </div>\n        <ul class=\"list-group list-group-flush\">\n            {{#each books}}\n            <li class=\"list-group-item shade-initially\">\n                <div class=\"row\">\n                    <!-- Title, author, date column -->\n                    <div class=\"col-9 col-md-5 ps-2 order-0\">\n                        <div class=\"fs-5 serif mb-1\">{{title}}</div>\n                        {{#if author_name}}\n                        <div class=\"text-muted mb-1 lh-sm\">{{delimit-array author_name ', '}} | {{first_publish_year}}</div>\n                        {{/if}}\n                    </div>\n\n                    <!-- Detail column -->\n                    <div class=\"col ps-2 order-3 order-md-1 overflow-hidden\">\n                        <details class=\"description\">\n                            <summary class=\"text-muted\"><small>Description</small></summary>\n                            <p class=\"\" data-key=\"{{key}}\"><em class=\"text-muted\">Loading...</em></p>\n                        </details>\n                    </div>\n\n                    <!-- plus button -->\n                    <div class=\"col-3 col-md-1 px-0 order-2 pe-1\" style=\"min-width: 38px;\" align=\"right\">\n                        <div><button class=\"btn ui-button plus-button\"\n                            data-bs-toggle=\"modal\"\n                            data-bs-target=\"#input-modal\"\n                            data-key=\"{{key}}\"\n                            data-edition-key=\"{{cover_edition_key}}\"\n                            data-first-author=\"{{author_key.[0]}}\"\n                            data-first-isbn=\"{{isbn.[0]}}\"\n                        ><img src=\"/plus.svg\"></button></div>\n                    </div>\n\n                </div>\n            </li>\n            {{/each}}\n        </ul>\n\n        {{#client-partial pagination_footer}}\n    </div>\n</template>\n\n<!-- div serving as parent for dynamic search results -->\n<div id=\"search-result-id\"></div>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"catalog_layout"),depth0,{"name":"catalog_layout","hash":{"no_title":1},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["content"],"data":data,"loc":{"start":{"line":2,"column":32},"end":{"line":104,"column":12}}}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});
templates['lean_home'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    This message is the failover for a missing lean_layout.\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "This will appear as the main content of the page.";
},"4":function(container,depth0,helpers,partials,data) {
    return "Here is the partial for the header.";
},"6":function(container,depth0,helpers,partials,data) {
    return "<a href=\"/\">Return</a>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"lean_layout"),depth0,{"name":"lean_layout","hash":{"mod_title":"Layout by Passing Inline Templates"},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["mod_content"],"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":7,"column":16}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"args":["mod_head"],"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":10,"column":16}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"args":["mod_foot"],"data":data,"loc":{"start":{"line":11,"column":4},"end":{"line":13,"column":16}}}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});
templates['lean_status'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "";
},"2":function(container,depth0,helpers,partials,data) {
    return "    <link href=\"https://fonts.googleapis.com/css2?family=Oxygen+Mono&display=swap\" rel=\"stylesheet\"> \n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }, buffer = "";

  stack1 = ((helper = (helper = lookupProperty(helpers,"pre") || (depth0 != null ? lookupProperty(depth0,"pre") : depth0)) != null ? helper : container.hooks.helperMissing),(options={"name":"pre","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":9,"column":12}}}),(typeof helper === "function" ? helper.call(alias1,options) : helper));
  if (!lookupProperty(helpers,"pre")) { stack1 = container.hooks.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <table>\n    <tr>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"result") : depth0)) != null ? lookupProperty(stack1,"fields") : stack1),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":6},"end":{"line":14,"column":15}}})) != null ? stack1 : "")
    + "    </tr>\n    <tbody>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"result") : depth0)) != null ? lookupProperty(stack1,"rows") : stack1),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":4},"end":{"line":23,"column":13}}})) != null ? stack1 : "")
    + "    </tbody>\n    </table>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "      <pre>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</pre>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <th scope=\"col\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":13,"column":22},"end":{"line":13,"column":30}}}) : helper)))
    + "</th>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <tr>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":6},"end":{"line":21,"column":15}}})) != null ? stack1 : "")
    + "    </tr>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "        <td>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</td>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"lean_layout"),depth0,{"name":"lean_layout","fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["mod_preload"],"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":5,"column":13}}}) || fn;
  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"args":["mod_content"],"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":26,"column":13}}}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});
templates['no_results'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"text") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":3,"column":64}}})) != null ? stack1 : "")
    + "\n"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":4,"column":8}}}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    return "<p class=\"fs-5\">No results found.</p>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"catalog_layout"),depth0,{"name":"catalog_layout","fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n";
},"1_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"args":["content"],"data":data,"loc":{"start":{"line":2,"column":22},"end":{"line":5,"column":12}}}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});
templates['outer'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!DOCTYPE html>\n<html lang=\"en\" dir=\"ltr\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n  <link rel=\"icon\" href=\"favicon.svg\">\n\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n  <link href=\"https://fonts.googleapis.com/css2?family=Voltaire&display=swap\" rel=\"stylesheet\">\n\n  <link rel=\"stylesheet\" href=\"/pastel.css\">\n  <title>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":14,"column":9},"end":{"line":14,"column":18}}}) : helper)))
    + "</title>\n</head>\n\n<body>\n\n  <div class=\"ambient-bg\"></div>\n  <div class=\"center-content\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"inner-partial"),depth0,{"name":"inner-partial","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  </div>\n\n</body>\n</html>\n";
},"usePartial":true,"useData":true});
templates['partials/catalog_layout'] = template({"1":function(container,depth0,helpers,partials,data) {
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
templates['partials/lean_layout'] = template({"1":function(container,depth0,helpers,partials,data) {
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
templates['partials/script_required'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<noscript>\n<div class=\"row\">\n    <div class=\"col-1 offset-1\">\n        <img class=\"mt-2\" src=\"/code-slash.svg\" width=\"30\">\n    </div>\n    <div class=\"col-8 text-danger\">\n        <h2 class=\"fs-3\">Scripts Required.</h2>\n        <p class=\"mb-0\">This content requires JavaScript to function.</p>\n        <p>Please enable scripts to proceed.</p>\n    </div>\n</div>\n</noscript>\n<script defer>\n    document.addEventListener('DOMContentLoaded', event => {\n        for(const e of document.querySelectorAll('.nojs-hidden')) {\n            e.classList.remove('nojs-hidden')\n        }\n    })\n</script>\n";
},"useData":true});
})();