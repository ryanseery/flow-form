'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var type = function (obj) { return Object.prototype.toString.call(obj).slice(8, -1); };
function assignError(value) {
    switch (type(value)) {
        case 'Sting':
            return !value.length;
        case 'Number':
            return !value.toString().length;
        case 'Object':
            return !Object.keys(value).length;
        case 'Array':
            return value.length;
        default:
            return false;
    }
}

var formData = {
    data: {},
    error: {},
    focus: {},
};
var FormContext = React.createContext({});
var ACTIONS;
(function (ACTIONS) {
    ACTIONS["SET_DEFAULT_VALUE"] = "SET_DEFAULT_VALUE";
    ACTIONS["UPDATE_VALUE"] = "UPDATE_VALUE";
    ACTIONS["UPDATE_FOCUS"] = "UPDATE_FOCUS";
    ACTIONS["CLEAR_FORM"] = "CLEAR_FORM";
})(ACTIONS || (ACTIONS = {}));
function reducer(state, action) {
    var _a, _b, _c;
    var type = action.type, id = action.id, value = action.value, error = action.error;
    switch (type) {
        case ACTIONS.SET_DEFAULT_VALUE: {
            // make state copy
            var stateCopy = __assign({}, state);
            // update state copy
            // don't mutate state yet
            if (typeof id === 'string' && !stateCopy.data[id]) {
                stateCopy.data[id] = '';
                stateCopy.error[id] = error;
                stateCopy.focus[id] = false;
            }
            // return copy
            return stateCopy;
        }
        case ACTIONS.UPDATE_VALUE: {
            if (typeof id === 'string') {
                return __assign(__assign({}, state), { data: __assign(__assign({}, state.data), (_a = {}, _a[id] = value, _a)) });
            }
        }
        case ACTIONS.UPDATE_FOCUS: {
            if (typeof id === 'string') {
                return __assign(__assign({}, state), { focus: __assign(__assign({}, state.focus), (_b = {}, _b[id] = !state.focus[id], _b)), error: __assign(__assign({}, state.error), (_c = {}, _c[id] = assignError(value), _c)) });
            }
        }
        case ACTIONS.CLEAR_FORM:
            return __assign({}, formData);
        default:
            console.error('State Reducer Error');
            return state;
    }
}
var FormWrapper = function (_a) {
    var children = _a.children;
    var _b = React.useReducer(reducer, formData), state = _b[0], dispatch = _b[1];
    var actions = React.useMemo(function () {
        return {
            setValue: function (_a) {
                var id = _a.id, value = _a.value, error = _a.error;
                return dispatch({ type: ACTIONS.SET_DEFAULT_VALUE, id: id, value: value, error: error });
            },
            updateValue: function (_a) {
                var id = _a.id, value = _a.value, error = _a.error;
                return dispatch({ type: ACTIONS.UPDATE_VALUE, id: id, value: value, error: error });
            },
            updateFocus: function (_a) {
                var id = _a.id;
                return dispatch({ type: ACTIONS.UPDATE_FOCUS, id: id });
            },
            clearForm: function () { return dispatch({ type: ACTIONS.CLEAR_FORM }); },
        };
    }, []);
    return (React.createElement(FormContext.Provider, { value: __assign(__assign({}, state), actions) }, children));
};

var toKebabCase = function (str) {
    if (typeof str !== 'string') {
        throw new TypeError('toKebabCase called on non-string');
    }
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/\s+/g, '-')
        .toLowerCase();
};

var toCamelCase = function (str) {
    if (typeof str !== 'string') {
        throw new TypeError('toCamelCase called on non-string');
    }
    return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) { return (index === 0 ? word.toLowerCase() : word.toUpperCase()); })
        .replace(/\s+/g, '');
};

function useFormData(_a) {
    var id = _a.id, value = _a.value, error = _a.error, validate = _a.validate;
    var _b = React.useContext(FormContext), data = _b.data, setValue = _b.setValue, updateValue = _b.updateValue, updateFocus = _b.updateFocus;
    React.useEffect(function () {
        setValue({ id: id, value: value, error: error });
    }, []);
    var handleChange = function (e) {
        e.persist();
        updateValue({
            id: e.target.name,
            value: e.target.value.toLowerCase(),
            error: validate ? validate(e.target.value) : false,
        });
    };
    var handleFocus = function (e) {
        e.persist();
        updateFocus({ id: e.target.name });
    };
    return {
        value: data[id],
        error: error[id],
        handleChange: handleChange,
        handleFocus: handleFocus,
    };
}

var Error = function (_a) {
    var id = _a.id, errMsg = _a.errMsg;
    return React.createElement("span", { className: id + "-error" }, errMsg);
};

var Text = function (_a) {
    var id = _a.id, type = _a.type, className = _a.className, placeholder = _a.placeholder, required = _a.required, validate = _a.validate, errMsg = _a.errMsg;
    var _b = useFormData({
        id: id,
        value: '',
        error: required !== null && required !== void 0 ? required : false,
        validate: validate,
    }), value = _b.value, error = _b.error, handleChange = _b.handleChange, handleFocus = _b.handleFocus;
    console.log('test test: ', validate && validate(value));
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { id: id, name: id, value: value || '', onChange: handleChange, onFocus: handleFocus, onBlur: handleFocus, type: type, placeholder: placeholder, style: { display: "block" }, className: "flow-form-input " + className + "-input", required: required }),
        error && React.createElement(Error, { id: id, errMsg: errMsg !== null && errMsg !== void 0 ? errMsg : id + " error." })));
};

var Number = function (_a) {
    var id = _a.id, type = _a.type, className = _a.className, placeholder = _a.placeholder, required = _a.required, validate = _a.validate, errMsg = _a.errMsg;
    var _b = useFormData({
        id: id,
        value: 0,
        error: required !== null && required !== void 0 ? required : false,
        validate: validate,
    }), value = _b.value, error = _b.error, handleChange = _b.handleChange, handleFocus = _b.handleFocus;
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { id: id, name: id, value: value || '', onChange: handleChange, onFocus: handleFocus, onBlur: handleFocus, type: type, placeholder: placeholder, style: { display: "block" }, className: "flow-form-input " + className + "-input", required: required }),
        error && React.createElement(Error, { id: id, errMsg: errMsg !== null && errMsg !== void 0 ? errMsg : id + " error." })));
};

var Input = function (_a) {
    var children = _a.children, _b = _a.type, type = _b === void 0 ? 'text' : _b, placeholder = _a.placeholder, required = _a.required, validate = _a.validate, errMsg = _a.errMsg;
    var kebabCase = toKebabCase(children !== null && children !== void 0 ? children : '');
    var camelCase = toCamelCase(children !== null && children !== void 0 ? children : '');
    var defaultProps = {
        id: camelCase,
        type: type,
        className: kebabCase,
        placeholder: placeholder,
        required: required,
        validate: validate,
        errMsg: errMsg,
    };
    return (React.createElement("label", { htmlFor: camelCase, className: "flow-form-label " + kebabCase + "-label", style: { display: "block" } },
        children,
        (function () {
            switch (type) {
                case 'text':
                    return React.createElement(Text, __assign({}, defaultProps));
                case 'number':
                    return React.createElement(Number, __assign({}, defaultProps));
                default:
                    return React.createElement(Text, __assign({}, defaultProps));
            }
        })()));
};

var FormComponent = function (_a) {
    var children = _a.children, onSubmit = _a.onSubmit, className = _a.className, customSubmit = _a.customSubmit, reset = _a.reset;
    var _b = React.useContext(FormContext), data = _b.data, error = _b.error, focus = _b.focus, clearForm = _b.clearForm;
    return (React.createElement(React.Fragment, null,
        React.createElement("form", { className: "flow-form " + (className || ''), style: { marginRight: '10em' }, onSubmit: function (e) {
                e.preventDefault();
                onSubmit(data);
            } },
            React.createElement("fieldset", { disabled: false, "aria-busy": false, style: { border: "none" } },
                children,
                !customSubmit && (React.createElement("button", { type: "submit", className: "flow-form-submit" }, "Submit")),
                reset && (React.createElement("button", { type: "button", className: "flow-form-reset", onClick: clearForm }, "Clear")))),
        React.createElement("pre", null, JSON.stringify({ data: data, error: error, focus: focus }, null, 2))));
};
var FlowForm = function (_a) {
    var children = _a.children, onSubmit = _a.onSubmit, className = _a.className, customSubmit = _a.customSubmit, reset = _a.reset;
    return (React.createElement(FormWrapper, null,
        React.createElement(FormComponent, { onSubmit: onSubmit, className: className, customSubmit: customSubmit, reset: reset }, children)));
};

exports.FlowForm = FlowForm;
exports.Input = Input;
//# sourceMappingURL=index.js.map
