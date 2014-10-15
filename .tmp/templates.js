angular.module('easy.form.templates', ['easy-form/templates/components/date-select.html', 'easy-form/templates/components/month-select.html', 'easy-form/templates/form-wrappers/default.html', 'easy-form/templates/input-wrappers/horizontal-form.html', 'easy-form/templates/input-wrappers/inline-form.html', 'easy-form/templates/input-wrappers/none.html', 'easy-form/templates/input-wrappers/vertical-form.html', 'easy-form/templates/inputs/checkbox.html', 'easy-form/templates/inputs/checkboxes.html', 'easy-form/templates/inputs/color.html', 'easy-form/templates/inputs/date.html', 'easy-form/templates/inputs/date_picker.html', 'easy-form/templates/inputs/date_select.html', 'easy-form/templates/inputs/datetime-local.html', 'easy-form/templates/inputs/datetime.html', 'easy-form/templates/inputs/datetime_picker.html', 'easy-form/templates/inputs/email.html', 'easy-form/templates/inputs/i-boolean.html', 'easy-form/templates/inputs/month.html', 'easy-form/templates/inputs/month_select.html', 'easy-form/templates/inputs/number.html', 'easy-form/templates/inputs/password.html', 'easy-form/templates/inputs/radio.html', 'easy-form/templates/inputs/search.html', 'easy-form/templates/inputs/select-multiple.html', 'easy-form/templates/inputs/select.html', 'easy-form/templates/inputs/switch.html', 'easy-form/templates/inputs/tag.html', 'easy-form/templates/inputs/tel.html', 'easy-form/templates/inputs/text-angular.html', 'easy-form/templates/inputs/text.html', 'easy-form/templates/inputs/textarea-autosize.html', 'easy-form/templates/inputs/textarea.html', 'easy-form/templates/inputs/time.html', 'easy-form/templates/inputs/time_picker.html', 'easy-form/templates/inputs/ui-select.html', 'easy-form/templates/inputs/url.html', 'easy-form/templates/messages/default.html']);

angular.module("easy-form/templates/components/date-select.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/components/date-select.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-7\">\n" +
    "        <select class=\"form-control\" name=\"year-select\" ng-model=\"year\" ng-options=\"option.key as option.text for option in yearOptions\">\n" +
    "        </select>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-xs-6\">\n" +
    "        <select class=\"form-control\" name=\"month-select\" ng-model=\"month\" ng-options=\"option.key as option.text for option in monthOptions\">\n" +
    "        </select>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-xs-5\">\n" +
    "        <select class=\"form-control\" name=\"day-select\" ng-model=\"day\" ng-options=\"option.key as option.text for option in dayOptions\">\n" +
    "        </select>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("easy-form/templates/components/month-select.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/components/month-select.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-9\">\n" +
    "        <select class=\"form-control\" name=\"year-select\" ng-model=\"year\" ng-options=\"option.key as option.text for option in yearOptions\">\n" +
    "        </select>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-xs-9\">\n" +
    "        <select class=\"form-control\" name=\"month-select\" ng-model=\"month\" ng-options=\"option.key as option.text for option in monthOptions\">\n" +
    "        </select>\n" +
    "    </div>\n" +
    "</div>");
}]);

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
    "<ng-form name=\"formIn\">\n" +
    "    <div ng-class=\"{'has-error': formIn.inputIn.$invalid}\">\n" +
    "        <label class=\"control-label\" ng-class=\"labelClassArr\" ng-show=\"label\">{{label}}</label>\n" +
    "        <div ng-class=\"controlClassArr\">\n" +
    "            <easy-input-field></easy-input-field>\n" +
    "            <ng-transclude></ng-transclude>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</ng-form>");
}]);

angular.module("easy-form/templates/input-wrappers/inline-form.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/input-wrappers/inline-form.html",
    "<ng-form name=\"formIn\">\n" +
    "    <div ng-class=\"{'has-error': formIn.inputIn.$invalid}\">\n" +
    "        <label class=\"col-sm-{{wrapper[1]}} control-label\" ng-show=\"wrapper[1]\">{{label}}</label>\n" +
    "\n" +
    "        <div class=\"col-sm-{{wrapper[2]}}\" ng-show=\"wrapper[2]\">\n" +
    "            <easy-input-field ng-model=\"model\" easy-input-options=\"easyInputOptions\" placeholder=\"placeholder\"></easy-input-field>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</ng-form>");
}]);

angular.module("easy-form/templates/input-wrappers/none.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/input-wrappers/none.html",
    "<div ng-transclude></div>");
}]);

angular.module("easy-form/templates/input-wrappers/vertical-form.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/input-wrappers/vertical-form.html",
    "<label ng-class=\"labelClassArr\" ng-bind=\"label\"></label>\n" +
    "<easy-input-field ng-class=\"controlClassArr\"></easy-input-field>\n" +
    "<span class=\"help-block\" ng-bind=\"hint\" ng-show=\"hint && !invalidMessage\"></span>\n" +
    "<span class=\"help-block\" ng-bind=\"invalidMessage\" ng-hide=\"hint && !invalidMessage\"></span>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/checkbox.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/checkbox.html",
    "<div class=\"checkbox\" ng-if=\"options.checkbox\">\n" +
    "    <label>\n" +
    "        <input type=\"checkbox\" ng-model=\"model\">\n" +
    "        {{options.checkbox.text}}\n" +
    "    </label>\n" +
    "</div>");
}]);

angular.module("easy-form/templates/inputs/checkboxes.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/checkboxes.html",
    "<div class=\"checkbox\" ng-repeat=\"(value, text) in options.checkboxes.data\">\n" +
    "    <label>\n" +
    "        <input type=\"checkbox\" checklist-model=\"model\" checklist-value=\"value\"> {{text}}\n" +
    "    </label>\n" +
    "</div>\n" +
    "\n" +
    "<pre>{{options}}</pre>");
}]);

angular.module("easy-form/templates/inputs/color.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/color.html",
    "<input name=\"inputIn\" type=\"color\" class=\"form-control\" placeholder=\"{{placeholder}}\" ng-model=\"model\" />\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/date.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/date.html",
    "<input name=\"inputIn\" type=\"date\" class=\"form-control\" placeholder=\"{{placeholder}}\" ng-model=\"model\" />\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/date_picker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/date_picker.html",
    "<div class=\"input-group date\">\n" +
    "    <input name=\"inputIn\" class=\"form-control\" type=\"text\" ng-model=\"model\" easy-datepicker  easy-datepicker-options=\"\"/>\n" +
    "    <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n" +
    "</div>");
}]);

angular.module("easy-form/templates/inputs/date_select.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/date_select.html",
    "<easy-datetime-select ng-model=\"model\">\n" +
    "</easy-datetime-select>");
}]);

angular.module("easy-form/templates/inputs/datetime-local.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/datetime-local.html",
    "<input name=\"inputIn\" type=\"datetime-local\" class=\"form-control\" placeholder=\"{{placeholder}}\" ng-model=\"model\" />\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/datetime.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/datetime.html",
    "<input name=\"inputIn\" type=\"datetime\" class=\"form-control\" placeholder=\"{{placeholder}}\" ng-model=\"model\" />\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/datetime_picker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/datetime_picker.html",
    "<div class=\"input-group date\">\n" +
    "    <input name=\"inputIn\" class=\"form-control\" type=\"text\" ng-model=\"model\" easy-datetimepicker  easy-datetimepicker-options=\"\"/>\n" +
    "    <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n" +
    "</div>");
}]);

angular.module("easy-form/templates/inputs/email.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/email.html",
    "<input name=\"inputIn\" type=\"email\" class=\"form-control\" placeholder=\"{{placeholder}}\" ng-model=\"model\" />\n" +
    "\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/i-boolean.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/i-boolean.html",
    "<div class=\"checkbox\">\n" +
    "    <label class=\"i-ckecks\">\n" +
    "        <input type=\"checkbox\" >\n" +
    "        <i></i>\n" +
    "        {{options}}\n" +
    "    </label>\n" +
    "</div>");
}]);

angular.module("easy-form/templates/inputs/month.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/month.html",
    "<input name=\"inputIn\" type=\"month\" class=\"form-control\" placeholder=\"{{placeholder}}\" ng-model=\"model\" />\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/month_select.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/month_select.html",
    "<easy-datetime-select ng-model=\"model\" min-view=\"month\">\n" +
    "</easy-datetime-select>");
}]);

angular.module("easy-form/templates/inputs/number.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/number.html",
    "<input name=\"inputIn\" type=\"number\" class=\"form-control\" placeholder=\"{{placeholder}}\" ng-model=\"model\" />\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/password.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/password.html",
    "<input name=\"inputIn\" type=\"password\" class=\"form-control\" placeholder=\"{{placeholder}}\" ng-model=\"model\" />\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/radio.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/radio.html",
    "");
}]);

angular.module("easy-form/templates/inputs/search.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/search.html",
    "<input name=\"inputIn\" type=\"search\" class=\"form-control\" placeholder=\"{{placeholder}}\" ng-model=\"model\" />\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/select-multiple.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/select-multiple.html",
    "<select class=\"form-control\" ng-model=\"model\" ng-options=\"option.id as option.text for option in options.select.data\" multiple>\n" +
    "</select>");
}]);

angular.module("easy-form/templates/inputs/select.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/select.html",
    "<select class=\"form-control\" ng-model=\"model\" ng-options=\"option.id as option.text for option in options.select.data\">\n" +
    "</select>");
}]);

angular.module("easy-form/templates/inputs/switch.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/switch.html",
    "<input\n" +
    "        easy-switch\n" +
    "        ng-model=\"isSelected\"\n" +
    "        type=\"checkbox\"\n" +
    "        switch-active=\"{{ isActive }}\"\n" +
    "        switch-size=\"{{ size }}\"\n" +
    "        switch-animate=\"{{ animate }}\"\n" +
    "        switch-label=\"{{ label }}\"\n" +
    "        switch-icon=\"{{ icon }}\"\n" +
    "        switch-on-label=\"{{ onLabel }}\"\n" +
    "        switch-off-label=\"{{ offLabel }}\"\n" +
    "        switch-on=\"{{ on }}\"\n" +
    "        switch-off=\"{{ off }}\" >");
}]);

angular.module("easy-form/templates/inputs/tag.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/tag.html",
    "<div name=\"inputIn\" ui-select2=\"easyInputOptions.select\" ng-model=\"model\" data-placeholder=\"Pick a number\">\n" +
    "</div>");
}]);

angular.module("easy-form/templates/inputs/tel.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/tel.html",
    "<input name=\"inputIn\" type=\"tel\" class=\"form-control\" placeholder=\"{{placeholder}}\" ng-model=\"model\" />\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/text-angular.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/text-angular.html",
    "<div text-angular ng-model=\"model\"></div>");
}]);

angular.module("easy-form/templates/inputs/text.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/text.html",
    "<input name=\"inputIn\" type=\"text\" class=\"form-control\" placeholder=\"{{placeholder}}\" ng-model=\"model\" />\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/textarea-autosize.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/textarea-autosize.html",
    "<textarea name=\"inputIn\" class=\"form-control\" placeholder=\"{{placeholder}}\"\n" +
    "          ng-model=\"model\" msd-elastic></textarea>");
}]);

angular.module("easy-form/templates/inputs/textarea.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/textarea.html",
    "<textarea name=\"inputIn\" class=\"form-control\" placeholder=\"{{placeholder}}\"\n" +
    "          ng-model=\"model\"></textarea>");
}]);

angular.module("easy-form/templates/inputs/time.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/time.html",
    "<input name=\"inputIn\" type=\"time\" class=\"form-control\" placeholder=\"{{placeholder}}\" ng-model=\"model\" />\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/time_picker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/time_picker.html",
    "<div class=\"input-group date\">\n" +
    "    <input name=\"inputIn\" class=\"form-control\" type=\"text\" ng-model=\"model\" easy-datepicker easy-timepicker-options=\"\"/>\n" +
    "    <span class=\"input-group-addon\"><i class=\"fa fa-clock-o\"></i></span>\n" +
    "</div>");
}]);

angular.module("easy-form/templates/inputs/ui-select.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/ui-select.html",
    "<ui-select ng-model=\"model\"\n" +
    "           ng-disabled=\"\"\n" +
    "           reset-search-input=\"\">\n" +
    "    <ui-select-match placeholder=\"placeholder\">{{$select.selected.text}}</ui-select-match>\n" +
    "    <ui-select-choices repeat=\"(value, text) in data\">\n" +
    "        <div ng-bind-html=\"text | highlight: $select.search\"></div>\n" +
    "    </ui-select-choices>\n" +
    "</ui-select>");
}]);

angular.module("easy-form/templates/inputs/url.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/url.html",
    "<input name=\"inputIn\" type=\"url\" class=\"form-control\" placeholder=\"{{placeholder}}\" ng-model=\"model\" />\n" +
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
