angular.module('easy.form.templates', ['template/easy-form/components/date-select.html', 'template/easy-form/components/month-select.html', 'template/easy-form/form-wrappers/default.html', 'template/easy-form/input-wrappers/blank.html', 'template/easy-form/input-wrappers/horizontal_form.html', 'template/easy-form/input-wrappers/inline_form.html', 'template/easy-form/input-wrappers/vertical_form.html', 'template/easy-form/inputs/checkbox.html', 'template/easy-form/inputs/checklist.html', 'template/easy-form/inputs/date.html', 'template/easy-form/inputs/date_picker.html', 'template/easy-form/inputs/date_select.html', 'template/easy-form/inputs/datetime_picker.html', 'template/easy-form/inputs/email.html', 'template/easy-form/inputs/month.html', 'template/easy-form/inputs/month_select.html', 'template/easy-form/inputs/number.html', 'template/easy-form/inputs/password.html', 'template/easy-form/inputs/radio.html', 'template/easy-form/inputs/select.html', 'template/easy-form/inputs/select2.html', 'template/easy-form/inputs/switch.html', 'template/easy-form/inputs/tag.html', 'template/easy-form/inputs/text.html', 'template/easy-form/inputs/textarea.html', 'template/easy-form/inputs/time_picker.html', 'template/easy-form/messages/default.html']);

angular.module("template/easy-form/components/date-select.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/easy-form/components/date-select.html",
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

angular.module("template/easy-form/components/month-select.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/easy-form/components/month-select.html",
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

angular.module("template/easy-form/form-wrappers/default.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/easy-form/form-wrappers/default.html",
    "<ng-form role=\"form\">\n" +
    "    <easy-input ng-repeat=\"field in fields\">\n" +
    "    </easy-input>\n" +
    "    <button type=\"submit\"\n" +
    "            ng-hide=\"options.hideSubmit\">\n" +
    "        {{options.submitCopy || \"Submit\"}}\n" +
    "    </button>\n" +
    "</ng-form>");
}]);

angular.module("template/easy-form/input-wrappers/blank.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/easy-form/input-wrappers/blank.html",
    "<div ng-transclude></div>");
}]);

angular.module("template/easy-form/input-wrappers/horizontal_form.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/easy-form/input-wrappers/horizontal_form.html",
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

angular.module("template/easy-form/input-wrappers/inline_form.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/easy-form/input-wrappers/inline_form.html",
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

angular.module("template/easy-form/input-wrappers/vertical_form.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/easy-form/input-wrappers/vertical_form.html",
    "<label ng-class=\"labelClassArr\" ng-bind=\"label\"></label>\n" +
    "<div class=\"clearfix\"></div>\n" +
    "<easy-input-field ng-class=\"controlClassArr\"></easy-input-field>\n" +
    "<div class=\"clearfix\"></div>\n" +
    "<span class=\"help-block\" ng-bind=\"hint\" ng-show=\"hint\"></span>\n" +
    "<div class=\"clearfix\"></div>\n" +
    "<span class=\"help-block\" ng-bind=\"invalidMessage\" ng-show=\"invalidMessage\"></span>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("template/easy-form/inputs/checkbox.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/easy-form/inputs/checkbox.html",
    "");
}]);

angular.module("template/easy-form/inputs/checklist.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/easy-form/inputs/checklist.html",
    "<div class=\"checkbox\" ng-repeat=\"(key, text) in options.checklist\">\n" +
    "    <input name=\"inputIn\" type=\"checkbox\" checklist-model=\"model\" checklist-value=\"key\" ng-disabled=\"ngDisabled\">{{text}}\n" +
    "</div>");
}]);

angular.module("template/easy-form/inputs/date.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/easy-form/inputs/date.html",
    "<input name=\"inputIn\" type=\"date\" class=\"form-control\" placeholder=\"{{placeholder}}\" ng-model=\"model\" />\n" +
    "");
}]);

angular.module("template/easy-form/inputs/date_picker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/easy-form/inputs/date_picker.html",
    "<div class=\"input-group date\">\n" +
    "    <input name=\"inputIn\" class=\"form-control\" type=\"text\" ng-model=\"model\" easy-datepicker  easy-datepicker-options=\"\"/>\n" +
    "    <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n" +
    "</div>");
}]);

angular.module("template/easy-form/inputs/date_select.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/easy-form/inputs/date_select.html",
    "<easy-datetime-select ng-model=\"model\">\n" +
    "</easy-datetime-select>");
}]);

angular.module("template/easy-form/inputs/datetime_picker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/easy-form/inputs/datetime_picker.html",
    "<div class=\"input-group date\">\n" +
    "    <input name=\"inputIn\" class=\"form-control\" type=\"text\" ng-model=\"model\" easy-datetimepicker  easy-datetimepicker-options=\"\"/>\n" +
    "    <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n" +
    "</div>");
}]);

angular.module("template/easy-form/inputs/email.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/easy-form/inputs/email.html",
    "<input name=\"inputIn\" type=\"email\" class=\"form-control\" placeholder=\"{{placeholder}}\" ng-model=\"model\" />\n" +
    "");
}]);

angular.module("template/easy-form/inputs/month.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/easy-form/inputs/month.html",
    "<input name=\"inputIn\" type=\"month\" class=\"form-control\" placeholder=\"{{placeholder}}\" ng-model=\"model\" />\n" +
    "");
}]);

angular.module("template/easy-form/inputs/month_select.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/easy-form/inputs/month_select.html",
    "<easy-datetime-select ng-model=\"model\" min-view=\"month\">\n" +
    "</easy-datetime-select>");
}]);

angular.module("template/easy-form/inputs/number.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/easy-form/inputs/number.html",
    "");
}]);

angular.module("template/easy-form/inputs/password.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/easy-form/inputs/password.html",
    "<input name=\"inputIn\" type=\"password\" class=\"form-control\" placeholder=\"{{placeholder}}\" ng-model=\"model\" />\n" +
    "");
}]);

angular.module("template/easy-form/inputs/radio.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/easy-form/inputs/radio.html",
    "");
}]);

angular.module("template/easy-form/inputs/select.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/easy-form/inputs/select.html",
    "<select class=\"form-control\" ng-model=\"model\" ng-options=\"option.id as option.text for option in options.select.data\">\n" +
    "</select>");
}]);

angular.module("template/easy-form/inputs/select2.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/easy-form/inputs/select2.html",
    "<div name=\"inputIn\" ui-select2=\"options.select\" ng-model=\"model\">\n" +
    "</div>");
}]);

angular.module("template/easy-form/inputs/switch.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/easy-form/inputs/switch.html",
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

angular.module("template/easy-form/inputs/tag.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/easy-form/inputs/tag.html",
    "<div name=\"inputIn\" ui-select2=\"easyInputOptions.select\" ng-model=\"model\" data-placeholder=\"Pick a number\">\n" +
    "</div>");
}]);

angular.module("template/easy-form/inputs/text.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/easy-form/inputs/text.html",
    "<input name=\"inputIn\" type=\"text\" class=\"form-control\" placeholder=\"{{placeholder}}\" ng-model=\"model\" />\n" +
    "");
}]);

angular.module("template/easy-form/inputs/textarea.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/easy-form/inputs/textarea.html",
    "<textarea name=\"inputIn\"  class=\"form-control\" placeholder=\"{{placeholder}}\" ng-model=\"model\"></textarea>");
}]);

angular.module("template/easy-form/inputs/time_picker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/easy-form/inputs/time_picker.html",
    "<div class=\"input-group date\">\n" +
    "    <input name=\"inputIn\" class=\"form-control\" type=\"text\" ng-model=\"model\" easy-datepicker easy-timepicker-options=\"\"/>\n" +
    "    <span class=\"input-group-addon\"><i class=\"fa fa-clock-o\"></i></span>\n" +
    "</div>");
}]);

angular.module("template/easy-form/messages/default.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/easy-form/messages/default.html",
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
