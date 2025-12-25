(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['author_form_body'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "is-invalid";
},"3":function(container,depth0,helpers,partials,data) {
    return "<details><summary class=\"text-muted\"><small>Details</small></summary>";
},"5":function(container,depth0,helpers,partials,data) {
    return "</details>";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"d-flex justify-content-end\">\n    <button class=\"btn btn-primary fw-semibold\" type=\"submit\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"submit") || (depth0 != null ? lookupProperty(depth0,"submit") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"submit","hash":{},"data":data,"loc":{"start":{"line":60,"column":62},"end":{"line":60,"column":72}}}) : helper)))
    + "</button>\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<form class=\"mb-4\" id=\"author-form\" action=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"form_action") || (depth0 != null ? lookupProperty(depth0,"form_action") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"form_action","hash":{},"data":data,"loc":{"start":{"line":1,"column":44},"end":{"line":1,"column":59}}}) : helper)))
    + "\" method=\"POST\">\n    <div class=\"row mb-3\">\n        <label for=\"first-id\" class=\"required-star col-form-label col-sm-4\">First name</label>\n        <div class=\"col input-group-has-validation\">\n            <input class=\"form-control "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"error-check")||(depth0 && lookupProperty(depth0,"error-check"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"trouble") : depth0),"first_name",{"name":"error-check","hash":{},"data":data,"loc":{"start":{"line":5,"column":45},"end":{"line":5,"column":79}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":39},"end":{"line":5,"column":98}}})) != null ? stack1 : "")
    + "\" id=\"first-id\" name=\"first_name\" type=\"text\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? lookupProperty(stack1,"first_name") : stack1), depth0))
    + "\">\n            <div class=\"invalid-feedback\">"
    + alias3((lookupProperty(helpers,"error-check")||(depth0 && lookupProperty(depth0,"error-check"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"trouble") : depth0),"first_name",{"name":"error-check","hash":{},"data":data,"loc":{"start":{"line":6,"column":42},"end":{"line":6,"column":78}}}))
    + "</div>\n        </div>\n    </div>\n\n    <div class=\"row mb-3\">\n        <label for=\"last-id\" class=\"col-form-label col-sm-4\">Last name</label>\n        <div class=\"col input-group-has-validation\">\n            <input class=\"form-control "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"error-check")||(depth0 && lookupProperty(depth0,"error-check"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"trouble") : depth0),"last_name",{"name":"error-check","hash":{},"data":data,"loc":{"start":{"line":13,"column":45},"end":{"line":13,"column":78}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":39},"end":{"line":13,"column":97}}})) != null ? stack1 : "")
    + "\" id=\"last-id\" name=\"last_name\" type=\"text\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? lookupProperty(stack1,"last_name") : stack1), depth0))
    + "\">\n            <div class=\"invalid-feedback\">"
    + alias3((lookupProperty(helpers,"error-check")||(depth0 && lookupProperty(depth0,"error-check"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"trouble") : depth0),"last_name",{"name":"error-check","hash":{},"data":data,"loc":{"start":{"line":14,"column":42},"end":{"line":14,"column":77}}}))
    + "</div>\n        </div>\n    </div>\n\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"collapse") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":4},"end":{"line":18,"column":96}}})) != null ? stack1 : "")
    + "\n\n    <div class=\"row mb-3\">\n        <label for=\"dob-id\" class=\"col-form-label col-sm-4\">Date (or year) of birth</label>\n        <div class=\"col input-group-has-validation\">\n            <label class=\"text-muted\" for=\"dob-id\">Date</label>\n            <input class=\"form-control "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"error-check")||(depth0 && lookupProperty(depth0,"error-check"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"trouble") : depth0),"dob",{"name":"error-check","hash":{},"data":data,"loc":{"start":{"line":24,"column":45},"end":{"line":24,"column":72}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":39},"end":{"line":24,"column":91}}})) != null ? stack1 : "")
    + "\" id=\"dob-id\" name=\"dob\" type=\"date\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? lookupProperty(stack1,"dob") : stack1), depth0))
    + "\">\n            <div class=\"invalid-feedback\">"
    + alias3((lookupProperty(helpers,"error-check")||(depth0 && lookupProperty(depth0,"error-check"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"trouble") : depth0),"dob",{"name":"error-check","hash":{},"data":data,"loc":{"start":{"line":25,"column":42},"end":{"line":25,"column":71}}}))
    + "</div>\n        </div>\n        <div class=\"col input-group-has-validation\">\n            <label class=\"text-muted\" for=\"yob-id\">Year</label>\n            <input class=\"form-control "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"error-check")||(depth0 && lookupProperty(depth0,"error-check"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"trouble") : depth0),"yob",{"name":"error-check","hash":{},"data":data,"loc":{"start":{"line":29,"column":45},"end":{"line":29,"column":72}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":39},"end":{"line":29,"column":91}}})) != null ? stack1 : "")
    + "\" id=\"yob-id\" name=\"yob\" type=\"text\" value=\""
    + alias3((lookupProperty(helpers,"extract-year")||(depth0 && lookupProperty(depth0,"extract-year"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? lookupProperty(stack1,"dob") : stack1),{"name":"extract-year","hash":{},"data":data,"loc":{"start":{"line":29,"column":135},"end":{"line":29,"column":162}}}))
    + "\">\n            <div class=\"invalid-feedback\">"
    + alias3((lookupProperty(helpers,"error-check")||(depth0 && lookupProperty(depth0,"error-check"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"trouble") : depth0),"yob",{"name":"error-check","hash":{},"data":data,"loc":{"start":{"line":30,"column":42},"end":{"line":30,"column":71}}}))
    + "</div>\n        </div>\n    </div>\n\n    <div class=\"row mb-3\">\n        <label for=\"dod-id\" class=\"col-form-label col-sm-4\">Date (or year) of death</label>\n        <div class=\"col input-group-has-validation\">\n            <label class=\"text-muted\" for=\"dod-id\">Date</label>\n            <input class=\"form-control "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"error-check")||(depth0 && lookupProperty(depth0,"error-check"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"trouble") : depth0),"dod",{"name":"error-check","hash":{},"data":data,"loc":{"start":{"line":38,"column":45},"end":{"line":38,"column":72}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":39},"end":{"line":38,"column":91}}})) != null ? stack1 : "")
    + "\" id=\"dod-id\" name=\"dod\" type=\"date\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? lookupProperty(stack1,"dod") : stack1), depth0))
    + "\">\n            <div class=\"invalid-feedback\">"
    + alias3((lookupProperty(helpers,"error-check")||(depth0 && lookupProperty(depth0,"error-check"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"trouble") : depth0),"dod",{"name":"error-check","hash":{},"data":data,"loc":{"start":{"line":39,"column":42},"end":{"line":39,"column":71}}}))
    + "</div>\n        </div>\n        <div class=\"col input-group-has-validation\">\n            <label class=\"text-muted\" for=\"yod-id\">Year</label>\n            <input class=\"form-control "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"error-check")||(depth0 && lookupProperty(depth0,"error-check"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"trouble") : depth0),"yod",{"name":"error-check","hash":{},"data":data,"loc":{"start":{"line":43,"column":45},"end":{"line":43,"column":72}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":43,"column":39},"end":{"line":43,"column":91}}})) != null ? stack1 : "")
    + "\" id=\"yod-id\" name=\"yod\" type=\"text\" value=\""
    + alias3((lookupProperty(helpers,"extract-year")||(depth0 && lookupProperty(depth0,"extract-year"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? lookupProperty(stack1,"dod") : stack1),{"name":"extract-year","hash":{},"data":data,"loc":{"start":{"line":43,"column":135},"end":{"line":43,"column":162}}}))
    + "\">\n            <div class=\"invalid-feedback\">"
    + alias3((lookupProperty(helpers,"error-check")||(depth0 && lookupProperty(depth0,"error-check"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"trouble") : depth0),"yod",{"name":"error-check","hash":{},"data":data,"loc":{"start":{"line":44,"column":42},"end":{"line":44,"column":71}}}))
    + "</div>\n        </div>\n    </div>\n\n    <div class=\"row mb-3\">\n        <label for=\"bio-id\" class=\"col-form-label col-sm-4\">Biography</label>\n        <div class=\"col input-group-has-validation\" id=\"bio-container\">\n            <textarea name=\"bio\" id=\"bio-id\" cols=\"30\" rows=\"10\" class=\"form-control\">"
    + alias3(alias4(((stack1 = (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? lookupProperty(stack1,"bio") : stack1), depth0))
    + "</textarea>\n            <div class=\"invalid-feedback\" id=\"bio-errors\"></div>\n        </div>\n    </div>\n\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"collapse") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":56,"column":4},"end":{"line":56,"column":37}}})) != null ? stack1 : "")
    + "\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"submit") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":58,"column":4},"end":{"line":62,"column":11}}})) != null ? stack1 : "")
    + "</form>\n\n<script type=\"module\">\n\nimport {attachSummarizer} from '/attach-bookbot.js'\n\nattachSummarizer()\n\n</script>\n";
},"useData":true});
Handlebars.partials['book_form_body'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <input class=\"d-none\" name=\"work_key\" type=\"text\" value=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"work_key") || (depth0 != null ? lookupProperty(depth0,"work_key") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"work_key","hash":{},"data":data,"loc":{"start":{"line":3,"column":61},"end":{"line":3,"column":73}}}) : helper)))
    + "\" id=\"work-test\">\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "is-invalid";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"row mb-3\">\n        <label for=\"select-author-id\" class=\"col-form-label col-sm-3 required-star\">Author</label>\n        <div class=\"col input-group-has-validation\">\n            <select name=\"author_id\" id=\"select-author-id\" class=\"form-select "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"error-check")||(depth0 && lookupProperty(depth0,"error-check"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"trouble") : depth0),"author_id",{"name":"error-check","hash":{},"data":data,"loc":{"start":{"line":18,"column":84},"end":{"line":18,"column":117}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":78},"end":{"line":18,"column":136}}})) != null ? stack1 : "")
    + "\">\n                <option value=\"-1\">Select author...</option>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"authors") : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":16},"end":{"line":22,"column":25}}})) != null ? stack1 : "")
    + "            </select>\n            <div class=\"invalid-feedback\">"
    + container.escapeExpression((lookupProperty(helpers,"error-check")||(depth0 && lookupProperty(depth0,"error-check"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"trouble") : depth0),"author_id",{"name":"error-check","hash":{},"data":data,"loc":{"start":{"line":24,"column":42},"end":{"line":24,"column":77}}}))
    + "</div>\n        </div>\n    </div>\n";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <option value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"author_id") || (depth0 != null ? lookupProperty(depth0,"author_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author_id","hash":{},"data":data,"loc":{"start":{"line":21,"column":31},"end":{"line":21,"column":44}}}) : helper)))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"match-string")||(depth0 && lookupProperty(depth0,"match-string"))||alias2).call(alias1,((stack1 = (depths[1] != null ? lookupProperty(depths[1],"populate") : depths[1])) != null ? lookupProperty(stack1,"author_id") : stack1),(depth0 != null ? lookupProperty(depth0,"author_id") : depth0),{"name":"match-string","hash":{},"data":data,"loc":{"start":{"line":21,"column":52},"end":{"line":21,"column":98}}}),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":46},"end":{"line":21,"column":115}}})) != null ? stack1 : "")
    + ">"
    + alias4(((helper = (helper = lookupProperty(helpers,"last_name") || (depth0 != null ? lookupProperty(depth0,"last_name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"last_name","hash":{},"data":data,"loc":{"start":{"line":21,"column":116},"end":{"line":21,"column":129}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"last_name") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":129},"end":{"line":21,"column":155}}})) != null ? stack1 : "")
    + alias4(((helper = (helper = lookupProperty(helpers,"first_name") || (depth0 != null ? lookupProperty(depth0,"first_name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"first_name","hash":{},"data":data,"loc":{"start":{"line":21,"column":155},"end":{"line":21,"column":169}}}) : helper)))
    + "</option>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "selected";
},"9":function(container,depth0,helpers,partials,data) {
    return ", ";
},"11":function(container,depth0,helpers,partials,data) {
    return "<details><summary><small>Categories</small></summary>";
},"13":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"row mb-3\">\n        <label for=\"genre-checkboxes\" class=\"col-form-label col-sm-3\">Suggestions</label>\n        <div class=\"col d-flex flex-wrap justify-content-between\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"suggestions") : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":57,"column":12},"end":{"line":62,"column":21}}})) != null ? stack1 : "")
    + "        </div>\n    </div>\n";
},"14":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"form-check min-tiny w-100\">\n                <input type=\"checkbox\" class=\"form-check-input\" name=\"suggestion-"
    + alias4(((helper = (helper = lookupProperty(helpers,"suggestion_id") || (depth0 != null ? lookupProperty(depth0,"suggestion_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"suggestion_id","hash":{},"data":data,"loc":{"start":{"line":59,"column":81},"end":{"line":59,"column":98}}}) : helper)))
    + "\" id=\"scb-"
    + alias4(((helper = (helper = lookupProperty(helpers,"suggestion_id") || (depth0 != null ? lookupProperty(depth0,"suggestion_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"suggestion_id","hash":{},"data":data,"loc":{"start":{"line":59,"column":108},"end":{"line":59,"column":125}}}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":59,"column":134},"end":{"line":59,"column":142}}}) : helper)))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"find-in")||(depth0 && lookupProperty(depth0,"find-in"))||alias2).call(alias1,(depths[1] != null ? lookupProperty(depths[1],"suggestionChecks") : depths[1]),"suggestion_id",(depth0 != null ? lookupProperty(depth0,"suggestion_id") : depth0),{"name":"find-in","hash":{},"data":data,"loc":{"start":{"line":59,"column":150},"end":{"line":59,"column":209}}}),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":59,"column":144},"end":{"line":59,"column":225}}})) != null ? stack1 : "")
    + ">\n                <label class=\"text-break\" for=\"scb-"
    + alias4(((helper = (helper = lookupProperty(helpers,"suggestion_id") || (depth0 != null ? lookupProperty(depth0,"suggestion_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"suggestion_id","hash":{},"data":data,"loc":{"start":{"line":60,"column":51},"end":{"line":60,"column":68}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":60,"column":70},"end":{"line":60,"column":78}}}) : helper)))
    + "</label>\n            </div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "checked";
},"17":function(container,depth0,helpers,partials,data) {
    return "</details>";
},"19":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"d-flex justify-content-end\">\n    <button class=\"btn btn-primary fw-semibold\" type=\"submit\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"submit") || (depth0 != null ? lookupProperty(depth0,"submit") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"submit","hash":{},"data":data,"loc":{"start":{"line":71,"column":62},"end":{"line":71,"column":72}}}) : helper)))
    + "</button>\n    </div>\n";
},"21":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"genre_id") || (depth0 != null ? lookupProperty(depth0,"genre_id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"genre_id","hash":{},"data":data,"loc":{"start":{"line":83,"column":4},"end":{"line":83,"column":16}}}) : helper)))
    + ",\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<form class=\"mb-4\" id=\"book-form\" action=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"form_action") || (depth0 != null ? lookupProperty(depth0,"form_action") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"form_action","hash":{},"data":data,"loc":{"start":{"line":1,"column":42},"end":{"line":1,"column":57}}}) : helper)))
    + "\" method=\"POST\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"work_key") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":4,"column":11}}})) != null ? stack1 : "")
    + "\n    <div class=\"row mb-3\">\n        <label for=\"title-id\" class=\"col-form-label col-sm-3 required-star\">Title</label>\n        <div class=\"col input-group-has-validation\">\n            <input class=\"form-control "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"error-check")||(depth0 && lookupProperty(depth0,"error-check"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"trouble") : depth0),"title",{"name":"error-check","hash":{},"data":data,"loc":{"start":{"line":9,"column":45},"end":{"line":9,"column":74}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":39},"end":{"line":9,"column":93}}})) != null ? stack1 : "")
    + "\" id=\"title-id\" name=\"title\" type=\"text\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? lookupProperty(depth0,"populate") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "\">\n            <div class=\"invalid-feedback\">"
    + alias3((lookupProperty(helpers,"error-check")||(depth0 && lookupProperty(depth0,"error-check"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"trouble") : depth0),"title",{"name":"error-check","hash":{},"data":data,"loc":{"start":{"line":10,"column":42},"end":{"line":10,"column":73}}}))
    + "</div>\n        </div>\n    </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"omit_author") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":4},"end":{"line":27,"column":15}}})) != null ? stack1 : "")
    + "\n    <div class=\"row mb-3\">\n        <label for=\"isbn-id\" class=\"col-form-label col-sm-3\">ISBN</label>\n        <div class=\"col input-group-has-validation\">\n            <input class=\"form-control "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"error-check")||(depth0 && lookupProperty(depth0,"error-check"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"trouble") : depth0),"isbn",{"name":"error-check","hash":{},"data":data,"loc":{"start":{"line":32,"column":45},"end":{"line":32,"column":73}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":39},"end":{"line":32,"column":92}}})) != null ? stack1 : "")
    + "\" id=\"isbn-id\" name=\"isbn\" type=\"text\" value=\""
    + alias3(alias4(((stack1 = (depth0 != null ? lookupProperty(depth0,"populate") : depth0)) != null ? lookupProperty(stack1,"isbn") : stack1), depth0))
    + "\">\n            <div class=\"invalid-feedback\">"
    + alias3((lookupProperty(helpers,"error-check")||(depth0 && lookupProperty(depth0,"error-check"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"trouble") : depth0),"isbn",{"name":"error-check","hash":{},"data":data,"loc":{"start":{"line":33,"column":42},"end":{"line":33,"column":72}}}))
    + "</div>\n        </div>\n    </div>\n\n    <div class=\"row mb-3\">\n        <label for=\"summary-id\" class=\"col-form-label col-sm-3\">Summary</label>\n        <div class=\"col input-group-has-validation\" id=\"summary-container\">\n            <textarea rows=\"10\" class=\"form-control "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"error-check")||(depth0 && lookupProperty(depth0,"error-check"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"trouble") : depth0),"summary",{"name":"error-check","hash":{},"data":data,"loc":{"start":{"line":40,"column":58},"end":{"line":40,"column":89}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":52},"end":{"line":40,"column":108}}})) != null ? stack1 : "")
    + "\" id=\"summary-id\" name=\"summary\" type=\"text\" rows=\"4\">"
    + alias3(alias4(((stack1 = (depth0 != null ? lookupProperty(depth0,"populate") : depth0)) != null ? lookupProperty(stack1,"summary") : stack1), depth0))
    + "</textarea>\n            <div class=\"invalid-feedback\" id=\"summary-errors\">"
    + alias3((lookupProperty(helpers,"error-check")||(depth0 && lookupProperty(depth0,"error-check"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"trouble") : depth0),"summary",{"name":"error-check","hash":{},"data":data,"loc":{"start":{"line":41,"column":62},"end":{"line":41,"column":95}}}))
    + "</div>\n        </div>\n    </div>\n\n\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"condense") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":46,"column":4},"end":{"line":46,"column":80}}})) != null ? stack1 : "")
    + "\n    <div class=\"row mb-3\">\n        <label for=\"genre-checkboxes\" class=\"col-form-label col-sm-3\">Genres</label>\n        <div class=\"col d-flex flex-wrap justify-content-between\" id=\"genre-checkboxes-container\">\n        </div>\n    </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"suggestions") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":53,"column":4},"end":{"line":65,"column":11}}})) != null ? stack1 : "")
    + "\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"condense") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":67,"column":4},"end":{"line":67,"column":37}}})) != null ? stack1 : "")
    + "\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"submit") : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":69,"column":4},"end":{"line":73,"column":11}}})) != null ? stack1 : "")
    + "</form>\n\n<script type=\"module\">\n\nimport {attachSummarizer} from '/attach-bookbot.js'\nimport {populateAuthorIds, populateGenreCheckboxes} from '/attach-tables.js'\n\nconst genreCheckList = [\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"genreChecks") : depth0),{"name":"each","hash":{},"fn":container.program(21, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":82,"column":4},"end":{"line":84,"column":13}}})) != null ? stack1 : "")
    + "]\n\nattachSummarizer()\npopulateAuthorIds("
    + alias3(alias4(((stack1 = (depth0 != null ? lookupProperty(depth0,"populate") : depth0)) != null ? lookupProperty(stack1,"author_id") : stack1), depth0))
    + ")\npopulateGenreCheckboxes(new Set(genreCheckList))\n\n</script>\n";
},"useData":true,"useDepths":true});
Handlebars.partials['pagination_footer'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"noResults") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":1,"column":18},"end":{"line":22,"column":0}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n<div class=\"card-footer text-end pb-1 pt-1 px-0\">\n    <small class=\"text-muted\">page&nbsp;</small>\n    <span class=\"pagination-control\">"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"firstPage") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":7,"column":12}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"previousPage") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":11,"column":13}}})) != null ? stack1 : "")
    + "<span class=\"current-page\">&nbsp;"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"currentPage") || (depth0 != null ? lookupProperty(depth0,"currentPage") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"currentPage","hash":{},"data":data,"loc":{"start":{"line":12,"column":37},"end":{"line":12,"column":52}}}) : helper)))
    + "&nbsp;</span>"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"nextPage") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":4},"end":{"line":16,"column":12}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"lastPage") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":4},"end":{"line":19,"column":13}}})) != null ? stack1 : "")
    + "</span>\n</div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a href=\"?page="
    + alias4(((helper = (helper = lookupProperty(helpers,"firstPage") || (depth0 != null ? lookupProperty(depth0,"firstPage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstPage","hash":{},"data":data,"loc":{"start":{"line":6,"column":23},"end":{"line":6,"column":36}}}) : helper)))
    + "&limit="
    + alias4(((helper = (helper = lookupProperty(helpers,"limit") || (depth0 != null ? lookupProperty(depth0,"limit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"limit","hash":{},"data":data,"loc":{"start":{"line":6,"column":43},"end":{"line":6,"column":52}}}) : helper)))
    + "\" data-page=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"firstPage") || (depth0 != null ? lookupProperty(depth0,"firstPage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstPage","hash":{},"data":data,"loc":{"start":{"line":6,"column":65},"end":{"line":6,"column":78}}}) : helper)))
    + "\" data-limit=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"limit") || (depth0 != null ? lookupProperty(depth0,"limit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"limit","hash":{},"data":data,"loc":{"start":{"line":6,"column":92},"end":{"line":6,"column":101}}}) : helper)))
    + "\">&nbsp;"
    + alias4(((helper = (helper = lookupProperty(helpers,"firstPage") || (depth0 != null ? lookupProperty(depth0,"firstPage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstPage","hash":{},"data":data,"loc":{"start":{"line":6,"column":109},"end":{"line":6,"column":122}}}) : helper)))
    + "&nbsp;</a>";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"moreBefore") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":8},"end":{"line":9,"column":89}}})) != null ? stack1 : "")
    + "<a href=\"?page="
    + alias4(((helper = (helper = lookupProperty(helpers,"previousPage") || (depth0 != null ? lookupProperty(depth0,"previousPage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"previousPage","hash":{},"data":data,"loc":{"start":{"line":10,"column":23},"end":{"line":10,"column":39}}}) : helper)))
    + "&limit="
    + alias4(((helper = (helper = lookupProperty(helpers,"limit") || (depth0 != null ? lookupProperty(depth0,"limit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"limit","hash":{},"data":data,"loc":{"start":{"line":10,"column":46},"end":{"line":10,"column":55}}}) : helper)))
    + "\" data-page=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"previousPage") || (depth0 != null ? lookupProperty(depth0,"previousPage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"previousPage","hash":{},"data":data,"loc":{"start":{"line":10,"column":68},"end":{"line":10,"column":84}}}) : helper)))
    + "\" data-limit=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"limit") || (depth0 != null ? lookupProperty(depth0,"limit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"limit","hash":{},"data":data,"loc":{"start":{"line":10,"column":98},"end":{"line":10,"column":107}}}) : helper)))
    + "\">&nbsp;"
    + alias4(((helper = (helper = lookupProperty(helpers,"previousPage") || (depth0 != null ? lookupProperty(depth0,"previousPage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"previousPage","hash":{},"data":data,"loc":{"start":{"line":10,"column":115},"end":{"line":10,"column":131}}}) : helper)))
    + "&nbsp;</a>";
},"8":function(container,depth0,helpers,partials,data) {
    return "<span class=\"page-ellipsis text-muted\">&hellip;</span>";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a href=\"?page="
    + alias4(((helper = (helper = lookupProperty(helpers,"nextPage") || (depth0 != null ? lookupProperty(depth0,"nextPage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nextPage","hash":{},"data":data,"loc":{"start":{"line":14,"column":23},"end":{"line":14,"column":35}}}) : helper)))
    + "&limit="
    + alias4(((helper = (helper = lookupProperty(helpers,"limit") || (depth0 != null ? lookupProperty(depth0,"limit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"limit","hash":{},"data":data,"loc":{"start":{"line":14,"column":42},"end":{"line":14,"column":51}}}) : helper)))
    + "\" data-page=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"nextPage") || (depth0 != null ? lookupProperty(depth0,"nextPage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nextPage","hash":{},"data":data,"loc":{"start":{"line":14,"column":64},"end":{"line":14,"column":76}}}) : helper)))
    + "\" data-limit=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"limit") || (depth0 != null ? lookupProperty(depth0,"limit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"limit","hash":{},"data":data,"loc":{"start":{"line":14,"column":90},"end":{"line":14,"column":99}}}) : helper)))
    + "\">&nbsp;"
    + alias4(((helper = (helper = lookupProperty(helpers,"nextPage") || (depth0 != null ? lookupProperty(depth0,"nextPage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nextPage","hash":{},"data":data,"loc":{"start":{"line":14,"column":107},"end":{"line":14,"column":119}}}) : helper)))
    + "&nbsp;</a>"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"moreAfter") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":15,"column":88}}})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a href=\"?page="
    + alias4(((helper = (helper = lookupProperty(helpers,"lastPage") || (depth0 != null ? lookupProperty(depth0,"lastPage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastPage","hash":{},"data":data,"loc":{"start":{"line":18,"column":23},"end":{"line":18,"column":35}}}) : helper)))
    + "&limit="
    + alias4(((helper = (helper = lookupProperty(helpers,"limit") || (depth0 != null ? lookupProperty(depth0,"limit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"limit","hash":{},"data":data,"loc":{"start":{"line":18,"column":42},"end":{"line":18,"column":51}}}) : helper)))
    + "\" data-page=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"lastPage") || (depth0 != null ? lookupProperty(depth0,"lastPage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastPage","hash":{},"data":data,"loc":{"start":{"line":18,"column":64},"end":{"line":18,"column":76}}}) : helper)))
    + "\" data-limit=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"limit") || (depth0 != null ? lookupProperty(depth0,"limit") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"limit","hash":{},"data":data,"loc":{"start":{"line":18,"column":90},"end":{"line":18,"column":99}}}) : helper)))
    + "\">&nbsp;"
    + alias4(((helper = (helper = lookupProperty(helpers,"lastPage") || (depth0 != null ? lookupProperty(depth0,"lastPage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastPage","hash":{},"data":data,"loc":{"start":{"line":18,"column":107},"end":{"line":18,"column":119}}}) : helper)))
    + "&nbsp;</a>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"allResults") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":22,"column":7}}})) != null ? stack1 : "")
    + "\n";
},"useData":true});
Handlebars.partials['pagination_header'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "No results found.";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"allResults") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":9,"column":13}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"plural-s")||(depth0 && lookupProperty(depth0,"plural-s"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"total") : depth0),{"name":"plural-s","hash":{},"data":data,"loc":{"start":{"line":6,"column":10},"end":{"line":6,"column":26}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":6,"column":38}}})) != null ? stack1 : "")
    + " "
    + alias3(((helper = (helper = lookupProperty(helpers,"total") || (depth0 != null ? lookupProperty(depth0,"total") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"total","hash":{},"data":data,"loc":{"start":{"line":6,"column":39},"end":{"line":6,"column":48}}}) : helper)))
    + " result"
    + alias3((lookupProperty(helpers,"plural-s")||(depth0 && lookupProperty(depth0,"plural-s"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"total") : depth0),{"name":"plural-s","hash":{},"data":data,"loc":{"start":{"line":6,"column":55},"end":{"line":6,"column":73}}}))
    + ":";
},"5":function(container,depth0,helpers,partials,data) {
    return "All";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias4(((helper = (helper = lookupProperty(helpers,"countStart") || (depth0 != null ? lookupProperty(depth0,"countStart") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"countStart","hash":{},"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":8,"column":18}}}) : helper)))
    + " to "
    + alias4(((helper = (helper = lookupProperty(helpers,"countEnd") || (depth0 != null ? lookupProperty(depth0,"countEnd") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"countEnd","hash":{},"data":data,"loc":{"start":{"line":8,"column":22},"end":{"line":8,"column":34}}}) : helper)))
    + " of "
    + alias4(((helper = (helper = lookupProperty(helpers,"total") || (depth0 != null ? lookupProperty(depth0,"total") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"total","hash":{},"data":data,"loc":{"start":{"line":8,"column":38},"end":{"line":8,"column":47}}}) : helper)))
    + " results:";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"tiny-padding-2 text-muted\" id=\"results-header\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"noResults") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":10,"column":7}}})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});
})();