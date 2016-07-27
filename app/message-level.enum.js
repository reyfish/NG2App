System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MessageLevel;
    return {
        setters:[],
        execute: function() {
            (function (MessageLevel) {
                MessageLevel[MessageLevel["Success"] = 1] = "Success";
                MessageLevel[MessageLevel["Info"] = 2] = "Info";
                MessageLevel[MessageLevel["Warning"] = 3] = "Warning";
                MessageLevel[MessageLevel["Error"] = 4] = "Error";
            })(MessageLevel || (MessageLevel = {}));
            exports_1("MessageLevel", MessageLevel);
        }
    }
});
//# sourceMappingURL=message-level.enum.js.map