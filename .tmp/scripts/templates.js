angular.module('easy.form.templates', ['easy-form/templates/form-wrappers/default.html', 'easy-form/templates/input-wrappers/horizontal-form.html', 'easy-form/templates/input-wrappers/inline-form.html', 'easy-form/templates/input-wrappers/no-label.html', 'easy-form/templates/input-wrappers/none.html', 'easy-form/templates/input-wrappers/vertical-form.html', 'easy-form/templates/inputs/checkbox.html', 'easy-form/templates/inputs/checkboxes.html', 'easy-form/templates/inputs/color.html', 'easy-form/templates/inputs/date.html', 'easy-form/templates/inputs/datepicker.html', 'easy-form/templates/inputs/datetime-local.html', 'easy-form/templates/inputs/datetime.html', 'easy-form/templates/inputs/datetimepicker.html', 'easy-form/templates/inputs/email.html', 'easy-form/templates/inputs/month.html', 'easy-form/templates/inputs/number.html', 'easy-form/templates/inputs/password.html', 'easy-form/templates/inputs/radios.html', 'easy-form/templates/inputs/search.html', 'easy-form/templates/inputs/select.html', 'easy-form/templates/inputs/switch.html', 'easy-form/templates/inputs/tag.html', 'easy-form/templates/inputs/tel.html', 'easy-form/templates/inputs/text-angular.html', 'easy-form/templates/inputs/text.html', 'easy-form/templates/inputs/textarea-autosize.html', 'easy-form/templates/inputs/textarea.html', 'easy-form/templates/inputs/time.html', 'easy-form/templates/inputs/timepicker.html', 'easy-form/templates/inputs/ui-select.html', 'easy-form/templates/inputs/url.html', 'easy-form/templates/inputs/week.html', 'easy-form/templates/messages/default.html']);

angular.module("easy-form/templates/form-wrappers/default.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/form-wrappers/default.html",
    "<ng-form role=\"form\">\n" +
    "    <easy-input ng-repeat=\"field in fields\">\n" +
    "    </easy-input>\n" +
    "    <button type=\"submit\"\n" +
    "            ng-hide=\"options.hideSubmit\">\n" +
    "        {{options.submitCopy || \"Submit\"}}\n" +
    "    </button>\n" +
    "</ng-form>");
}]);

angular.module("easy-form/templates/input-wrappers/horizontal-form.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/input-wrappers/horizontal-form.html",
    "<label class=\"control-label\" ng-class=\"::labelClassArr\" translate=\"{{label}}\"></label>\n" +
    "\n" +
    "<div class='form-control-wrapper' ng-class=\"::controlClassArr\">\n" +
    "    <easy-input-field></easy-input-field>\n" +
    "    <span class=\"help-block\" translate=\"{{hint}}\" ng-show=\"hint && !invalidMessage\"></span>\n" +
    "    <span class=\"help-block\" translate=\"{{invalidMessage}}\" ng-hide=\"hint && !invalidMessage\"></span>\n" +
    "</div>\n" +
    "");
}]);

angular.module("easy-form/templates/input-wrappers/inline-form.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/input-wrappers/inline-form.html",
    "<label ng-class=\"::labelClassArr\" translate=\"{{::label}}\"></label>\n" +
    "<easy-input-field ng-class=\"::controlClassArr\"></easy-input-field>\n" +
    "\n" +
    "");
}]);

angular.module("easy-form/templates/input-wrappers/no-label.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/input-wrappers/no-label.html",
    "<easy-input-field ng-class=\"::controlClassArr\"></easy-input-field>\n" +
    "<span class=\"help-block\" translate=\"{{hint}}\" ng-show=\"hint && !invalidMessage\"></span>\n" +
    "<span class=\"help-block\" translate=\"{{invalidMessage}}\" ng-hide=\"hint && !invalidMessage\"></span>\n" +
    "\n" +
    "");
}]);

angular.module("easy-form/templates/input-wrappers/none.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/input-wrappers/none.html",
    "<easy-input-field ng-class=\"::controlClassArr\"></easy-input-field>\n" +
    "\n" +
    "");
}]);

angular.module("easy-form/templates/input-wrappers/vertical-form.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/input-wrappers/vertical-form.html",
    "<label ng-class=\"::labelClassArr\" translate=\"{{label}}\"></label>\n" +
    "<easy-input-field ng-class=\"::controlClassArr\"></easy-input-field>\n" +
    "<span class=\"help-block\" translate=\"{{hint}}\" ng-show=\"hint && !invalidMessage\"></span>\n" +
    "<span class=\"help-block\" translate=\"{{invalidMessage}}\" ng-hide=\"hint && !invalidMessage\"></span>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/checkbox.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/checkbox.html",
    "<div class=\"checkbox\">\n" +
    "    <label>\n" +
    "        <input type=\"checkbox\" name=\"inputIn\" ng-model=\"model\" ng-disabled=\"ngDisabled\">\n" +
    "        <span translate=\"{{options.checkbox.text}}\"></span>\n" +
    "    </label>\n" +
    "</div>");
}]);

angular.module("easy-form/templates/inputs/checkboxes.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/checkboxes.html",
    "<div class=\"checkbox\" ng-repeat=\"item in options.checkboxes.collection\" ng-if=\"!options.checkboxes.inline\">\n" +
    "    <label>\n" +
    "        <input type=\"checkbox\" name=\"inputIn\" checklist-model=\"model\" checklist-value=\"item.key\"\n" +
    "               ng-disabled=\"ngDisabled\">\n" +
    "        <span translate=\"{{item.text}}\"></span>\n" +
    "    </label>\n" +
    "</div>\n" +
    "\n" +
    "<label class=\"checkbox-inline\" ng-repeat=\"item in options.checkboxes.collection\" ng-if=\"options.checkboxes.inline\">\n" +
    "    <input type=\"checkbox\" name=\"inputIn\" checklist-model=\"model\" checklist-value=\"item.key\" ng-disabled=\"ngDisabled\">\n" +
    "    <span translate=\"{{item.text}}\"></span>\n" +
    "</label>\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/color.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/color.html",
    "<input name=\"inputIn\" type=\"color\" class=\"form-control\" placeholder=\"{{::placeholder | translate}}\" ng-model=\"model\" ng-disabled=\"ngDisabled\"/>\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/date.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/date.html",
    "<input name=\"inputIn\" type=\"date\" class=\"form-control\" placeholder=\"{{::placeholder | translate}}\" ng-model=\"model\"  ng-disabled=\"ngDisabled\"/>\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/datepicker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/datepicker.html",
    "<div class=\"input-group date\">\n" +
    "    <input name=\"inputIn\" class=\"form-control\" type=\"text\" ng-model=\"model\" easy-datepicker easy-datepicker-options=\"\"/>\n" +
    "    <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n" +
    "</div>\n" +
    "\n" +
    "<p class=\"input-group\">\n" +
    "    <input type=\"text\" class=\"form-control\" datepicker-popup=\"{{format}}\" ng-model=\"model\"\n" +
    "           min-date=\"minDate\" max-date=\"'2015-06-22'\" datepicker-options=\"options.datepicker\"\n" +
    "           date-disabled=\"disabled(date, mode)\" ng-required=\"true\" close-text=\"Close\"/>\n" +
    "    <span class=\"input-group-btn\">\n" +
    "        <button type=\"button\" class=\"btn btn-default\" ng-click=\"open($event)\"><i\n" +
    "            class=\"glyphicon glyphicon-calendar\"></i></button>\n" +
    "    </span>\n" +
    "</p>\n" +
    "\n" +
    "<input name=\"inputIn\" type=\"text\" class=\"form-control\" placeholder=\"{{placeholder}}\" ng-model=\"model\" ng-disabled=\"ngDisabled\"/>\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/datetime-local.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/datetime-local.html",
    "<input name=\"inputIn\" type=\"datetime-local\" class=\"form-control\" placeholder=\"{{placeholder | translate}}\" ng-model=\"model\"  ng-disabled=\"ngDisabled\"/>\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/datetime.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/datetime.html",
    "<input name=\"inputIn\" type=\"datetime\" class=\"form-control\" placeholder=\"{{placeholder | translate}}\" ng-model=\"model\"  ng-disabled=\"ngDisabled\" />\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/datetimepicker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/datetimepicker.html",
    "<div class=\"input-group date\">\n" +
    "    <input name=\"inputIn\" class=\"form-control\" type=\"text\" ng-model=\"model\" easy-datetimepicker  easy-datetimepicker-options=\"\"/>\n" +
    "    <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n" +
    "</div>");
}]);

angular.module("easy-form/templates/inputs/email.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/email.html",
    "<input name=\"inputIn\" type=\"email\" class=\"form-control\" placeholder=\"{{placeholder | translate}}\" ng-model=\"model\" ng-disabled=\"ngDisabled\"/>\n" +
    "\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/month.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/month.html",
    "<input name=\"inputIn\" type=\"month\" class=\"form-control\" placeholder=\"{{placeholder | translate}}\" ng-model=\"model\"  ng-disabled=\"ngDisabled\"/>\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/number.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/number.html",
    "<input name=\"inputIn\" type=\"number\" class=\"form-control\" placeholder=\"{{placeholder | translate}}\" ng-model=\"model\" ng-disabled=\"ngDisabled\"/>\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/password.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/password.html",
    "<input name=\"inputIn\" type=\"password\" class=\"form-control\" placeholder=\"{{placeholder | translate}}\" ng-model=\"model\"  ng-disabled=\"ngDisabled\"/>\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/radios.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/radios.html",
    "<div class=\"radio\" ng-repeat=\"item in options.radios.collection\" ng-if=\"!options.radios.inline\">\n" +
    "    <label>\n" +
    "        <input type=\"radio\" name=\"{{name}}\" ng-value=\"item.key\" ng-model=\"$parent.$parent.model\" ng-disabled=\"ngDisabled\">\n" +
    "        <span translate=\"{{item.text}}\"></span>\n" +
    "    </label>\n" +
    "</div>\n" +
    "\n" +
    "<label class=\"radio-inline\" ng-repeat=\"item in options.radios.collection\" ng-if=\"options.radios.inline\">\n" +
    "    <input type=\"radio\" name=\"{{name}}\" ng-value=\"item.key\" ng-model=\"$parent.$parent.model\" ng-disabled=\"ngDisabled\">\n" +
    "    <span translate=\"{{item.text}}\"></span>\n" +
    "</label>");
}]);

angular.module("easy-form/templates/inputs/search.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/search.html",
    "<input name=\"inputIn\" type=\"search\" class=\"form-control\" placeholder=\"{{placeholder | translate}}\" ng-model=\"model\" ng-disabled=\"ngDisabled\" />\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/select.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/select.html",
    "<!--single of objects-->\n" +
    "<select class=\"form-control\"\n" +
    "        ng-model=\"$parent.model\"\n" +
    "        ng-disabled=\"ngDisabled\"\n" +
    "        ng-if=\"!options.select.multiple && !options.select.selectOptions\"\n" +
    "        ng-options=\"item for item in options.select.collection\">\n" +
    "</select>\n" +
    "\n" +
    "<!--multiple of objects-->\n" +
    "<select class=\"form-control\"\n" +
    "        ng-model=\"$parent.model\"\n" +
    "        ng-disabled=\"ngDisabled\"\n" +
    "        multiple\n" +
    "        ng-if=\"options.select.multiple && !options.select.selectOptions\"\n" +
    "        ng-options=\"item for item in options.select.collection\" >\n" +
    "</select>\n" +
    "\n" +
    "<!--single of objects with customize selectOptions-->\n" +
    "<select class=\"form-control\"\n" +
    "        ng-model=\"$parent.model\"\n" +
    "        ng-disabled=\"ngDisabled\"\n" +
    "        ng-if=\"!options.select.multiple && options.select.selectOptions\"\n" +
    "        ng-options=\"{{options.select.selectOptions()}}\">\n" +
    "</select>\n" +
    "\n" +
    "<!--multiple of objects with customize selectOptions-->\n" +
    "<select class=\"form-control\"\n" +
    "        ng-model=\"$parent.model\"\n" +
    "        ng-disabled=\"ngDisabled\"\n" +
    "        multiple\n" +
    "        ng-if=\"options.select.multiple && options.select.selectOptions\"\n" +
    "        ng-options=\"{{options.select.selectOptions()}}\">\n" +
    "</select>\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/switch.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/switch.html",
    "<input\n" +
    "        easy-switch\n" +
    "        ng-model=\"isSelected\"\n" +
    "        type=\"checkbox\"\n" +
    "        switch-active=\"{{ isActive }}\"\n" +
    "        switch-size=\"{{ ::size }}\"\n" +
    "        switch-animate=\"{{ ::animate }}\"\n" +
    "        switch-label=\"{{ label | translate }}\"\n" +
    "        switch-icon=\"{{ icon }}\"\n" +
    "        switch-on-label=\"{{ onLabel }}\"\n" +
    "        switch-off-label=\"{{ offLabel }}\"\n" +
    "        switch-on=\"{{ on }}\"\n" +
    "        switch-off=\"{{ off }}\" >");
}]);

angular.module("easy-form/templates/inputs/tag.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/tag.html",
    "<tags-input name=\"inputIn\"  ng-model=\"model\"></tags-input>");
}]);

angular.module("easy-form/templates/inputs/tel.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/tel.html",
    "<input name=\"inputIn\" type=\"tel\" class=\"form-control\" placeholder=\"{{placeholder | translate}}\" ng-model=\"model\" ng-disabled=\"ngDisabled\"/>\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/text-angular.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/text-angular.html",
    "<div text-angular ng-model=\"model\" ta-disabled=\"ngDisabled\"></div>");
}]);

angular.module("easy-form/templates/inputs/text.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/text.html",
    "<input name=\"inputIn\" type=\"text\" class=\"form-control\" placeholder=\"{{placeholder | translate}}\" ng-model=\"model\" ng-disabled=\"ngDisabled\"/>\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/textarea-autosize.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/textarea-autosize.html",
    "<textarea name=\"inputIn\" class=\"form-control\" placeholder=\"{{placeholder | translate}}\"\n" +
    "          ng-model=\"model\" ng-disabled=\"ngDisabled\" msd-elastic></textarea>");
}]);

angular.module("easy-form/templates/inputs/textarea.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/textarea.html",
    "<textarea name=\"inputIn\" class=\"form-control\" placeholder=\"{{placeholder | translate}}\"\n" +
    "          ng-model=\"model\" ng-disabled=\"ngDisabled\" maxlength=\"5000\"></textarea>");
}]);

angular.module("easy-form/templates/inputs/time.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/time.html",
    "<input name=\"inputIn\" type=\"time\" class=\"form-control\" placeholder=\"{{placeholder | translate}}\" ng-model=\"model\"/>\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/timepicker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/timepicker.html",
    "<div class=\"input-group date\">\n" +
    "    <input name=\"inputIn\" class=\"form-control\" type=\"text\" ng-model=\"model\" easy-datepicker easy-timepicker-options=\"\"/>\n" +
    "    <span class=\"input-group-addon\"><i class=\"fa fa-clock-o\"></i></span>\n" +
    "</div>");
}]);

angular.module("easy-form/templates/inputs/ui-select.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/ui-select.html",
    "<!--single of objects-->\n" +
    "<ui-select ng-model=\"$parent.$parent.model\"\n" +
    "           ng-disabled=\"ngDisabled\"\n" +
    "           search-enabled=\"{{options.uiSelect.searchEnabled != false}}\"\n" +
    "           ng-if=\"!options.uiSelect.multiple && !options.uiSelect.bindProperty\">\n" +
    "    <ui-select-match placeholder=\"{{placeholder}}\">{{options.uiSelect.formatResult($select.selected)}}</ui-select-match>\n" +
    "    <ui-select-choices repeat=\"item in options.uiSelect.collection | filter: $select.search\"\n" +
    "                       refresh=\"options.uiSelect.refresh($select.search)\"\n" +
    "                       refresh-delay=\"0\">\n" +
    "        <div ng-bind-html=\"options.uiSelect.formatSelection(item) | highlight: $select.search\"></div>\n" +
    "    </ui-select-choices>\n" +
    "</ui-select>\n" +
    "\n" +
    "<!--multiple of objects-->\n" +
    "<ui-select ng-model=\"$parent.$parent.model\"\n" +
    "           ng-disabled=\"ngDisabled\"\n" +
    "           search-enabled=\"{{options.uiSelect.searchEnabled != false}}\"\n" +
    "           ng-if=\"options.uiSelect.multiple && !options.uiSelect.bindProperty\"\n" +
    "           multiple>\n" +
    "    <ui-select-match placeholder=\"{{placeholder}}\">{{options.uiSelect.formatResult($item)}}</ui-select-match>\n" +
    "    <ui-select-choices repeat=\"item in options.uiSelect.collection | filter:$search.search\"\n" +
    "                       refresh=\"options.uiSelect.refresh($select.search)\"\n" +
    "                       refresh-delay=\"0\">\n" +
    "        <div ng-bind-html=\"options.uiSelect.formatSelection(item)\"></div>\n" +
    "    </ui-select-choices>\n" +
    "</ui-select>\n" +
    "\n" +
    "<!--single of objects with single property binding-->\n" +
    "<ui-select ng-model=\"$parent.$parent.model\"\n" +
    "           ng-disabled=\"ngDisabled\"\n" +
    "           search-enabled=\"{{options.uiSelect.searchEnabled != false}}\"\n" +
    "           ng-if=\"!options.uiSelect.multiple && options.uiSelect.bindProperty\">\n" +
    "    <ui-select-match placeholder=\"{{placeholder}}\">{{options.uiSelect.formatResult($select.selected)}}</ui-select-match>\n" +
    "    <ui-select-choices repeat=\"item[options.uiSelect.bindProperty] as item in options.uiSelect.collection | filter: $select.search\"\n" +
    "                       refresh=\"options.uiSelect.refresh($select.search)\"\n" +
    "                       refresh-delay=\"0\">\n" +
    "        <div ng-bind-html=\"options.uiSelect.formatSelection(item) | highlight: $select.search\"></div>\n" +
    "    </ui-select-choices>\n" +
    "</ui-select>\n" +
    "\n" +
    "<!--multiple of objects with single property binding-->\n" +
    "<ui-select ng-model=\"$parent.$parent.model\"\n" +
    "           ng-disabled=\"ngDisabled\"\n" +
    "           search-enabled=\"{{options.uiSelect.searchEnabled != false}}\"\n" +
    "           ng-if=\"options.uiSelect.multiple && options.uiSelect.bindProperty\"\n" +
    "           multiple>\n" +
    "    <ui-select-match placeholder=\"{{placeholder}}\">{{options.uiSelect.formatResult($item)}}</ui-select-match>\n" +
    "    <ui-select-choices repeat=\"item[options.uiSelect.bindProperty] in options.uiSelect.collection | filter: $search.search\"\n" +
    "                       refresh=\"options.uiSelect.refresh($select.search)\"\n" +
    "                       refresh-delay=\"0\">\n" +
    "        <div ng-bind-html=\"options.uiSelect.formatSelection(item)\"></div>\n" +
    "    </ui-select-choices>\n" +
    "</ui-select>\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/url.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/url.html",
    "<input name=\"inputIn\" type=\"url\" class=\"form-control\" placeholder=\"{{placeholder | translate}}\" ng-model=\"model\" ng-disabled=\"ngDisabled\"/>\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/week.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/week.html",
    "<input name=\"inputIn\" type=\"week\" class=\"form-control\" placeholder=\"{{placeholder | translate}}\" ng-model=\"model\"  ng-disabled=\"ngDisabled\"/>\n" +
    "");
}]);

angular.module("easy-form/templates/messages/default.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/messages/default.html",
    "<div>\n" +
    "    <div class=\"alert alert-success\" ng-if=\"ngModel.notice\">\n" +
    "        {{ngModel.notice}}\n" +
    "    </div>\n" +
    "    <div class=\"alert alert-danger\" ng-if=\"ngModel.error || ngModel.errors\">\n" +
    "        {{ngModel.error}}\n" +
    "        {{ngModel.errors}}\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
