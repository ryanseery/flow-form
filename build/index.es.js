import { createContext, useReducer, useMemo, createElement, useContext, useEffect, Fragment } from 'react';

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

var initialState = {
    data: {},
    error: {},
};
var FormContext = createContext({});
var ACTIONS;
(function (ACTIONS) {
    ACTIONS["SET_DEFAULT_VALUE"] = "SET_DEFAULT_VALUE";
    ACTIONS["UPDATE_VALUE"] = "UPDATE_VALUE";
    ACTIONS["UPDATE_BLUR"] = "UPDATE_BLUR";
    ACTIONS["CLEAR_FORM"] = "CLEAR_FORM";
})(ACTIONS || (ACTIONS = {}));
function reducer(state, action) {
    var _a, _b;
    var type = action.type, id = action.id, value = action.value, error = action.error;
    switch (type) {
        case ACTIONS.SET_DEFAULT_VALUE: {
            var stateCopy = __assign({}, state);
            if (typeof id === 'string' && !stateCopy.data[id]) {
                stateCopy.data[id] = '';
                stateCopy.error[id] = false;
            }
            return stateCopy;
        }
        case ACTIONS.UPDATE_VALUE: {
            if (typeof id === 'string') {
                return __assign(__assign({}, state), { data: __assign(__assign({}, state.data), (_a = {}, _a[id] = value, _a)) });
            }
        }
        case ACTIONS.UPDATE_BLUR: {
            if (typeof id === 'string') {
                return __assign(__assign({}, state), { error: __assign(__assign({}, state.error), (_b = {}, _b[id] = error, _b)) });
            }
        }
        case ACTIONS.CLEAR_FORM:
            return __assign({}, initialState);
        default:
            console.error('State Reducer Error');
            return state;
    }
}
var FormWrapper = function (_a) {
    var children = _a.children;
    var _b = useReducer(reducer, initialState), state = _b[0], dispatch = _b[1];
    var actions = useMemo(function () {
        return {
            setValue: function (_a) {
                var id = _a.id, value = _a.value, error = _a.error;
                return dispatch({ type: ACTIONS.SET_DEFAULT_VALUE, id: id, value: value, error: error });
            },
            updateValue: function (_a) {
                var id = _a.id, value = _a.value, error = _a.error;
                return dispatch({ type: ACTIONS.UPDATE_VALUE, id: id, value: value, error: error });
            },
            updateBlur: function (_a) {
                var id = _a.id, error = _a.error;
                return dispatch({ type: ACTIONS.UPDATE_BLUR, id: id, error: error });
            },
            clearForm: function () { return dispatch({ type: ACTIONS.CLEAR_FORM }); },
        };
    }, []);
    return (createElement(FormContext.Provider, { value: __assign(__assign({}, state), actions) }, children));
};

var Form = function (_a) {
    var children = _a.children, onSubmit = _a.onSubmit, className = _a.className, style = _a.style, customSubmit = _a.customSubmit, reset = _a.reset;
    var _b = useContext(FormContext), data = _b.data, clearForm = _b.clearForm;
    return (createElement("form", { className: "flow-form " + className, style: style, onSubmit: function (e) {
            e.preventDefault();
            onSubmit(data);
        } },
        createElement("fieldset", { disabled: false, "aria-busy": false, style: { border: "none" } },
            children,
            !customSubmit && (createElement("button", { type: "submit", className: "flow-form-submit" }, "Submit")),
            reset && (createElement("button", { type: "button", className: "flow-form-reset", onClick: clearForm }, "Clear")))));
};
var FlowForm = function (_a) {
    var children = _a.children, onSubmit = _a.onSubmit, className = _a.className, style = _a.style, customSubmit = _a.customSubmit, reset = _a.reset, _b = _a.initialValues, initialValues = _b === void 0 ? {} : _b;
    return (createElement(FormWrapper, { initialValues: initialValues },
        createElement(Form, { onSubmit: onSubmit, className: className, style: style, customSubmit: customSubmit, reset: reset }, children)));
};

function toKebabCase(str) {
    if (typeof str !== 'string') {
        throw new TypeError('toKebabCase called on non-string');
    }
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/\s+/g, '-')
        .toLowerCase();
}

function toCamelCase(str) {
    if (typeof str !== 'string') {
        throw new TypeError('toCamelCase called on non-string');
    }
    return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) { return (index === 0 ? word.toLowerCase() : word.toUpperCase()); })
        .replace(/\s+/g, '');
}

function useFormData(_a) {
    var id = _a.id, value = _a.value, required = _a.required, validate = _a.validate;
    var _b = useContext(FormContext), data = _b.data, error = _b.error, setValue = _b.setValue, updateValue = _b.updateValue, updateBlur = _b.updateBlur;
    useEffect(function () {
        setValue({ id: id, value: value });
    }, []);
    var handleChange = function (e) {
        e.persist();
        function validation() {
            if (required) {
                return validate ? validate(e) : false;
            }
            return false;
        }
        updateValue({
            id: id,
            value: e.target.type === 'number' ? parseFloat(e.target.value) : e.target.value,
            error: validation(),
        });
    };
    var handleBlur = function (e) {
        e.persist();
        function validation() {
            if (required) {
                return validate ? validate(e) : false;
            }
            return false;
        }
        updateBlur({ id: id, error: validation() });
    };
    var handleFocus = function () {
        updateBlur({ id: id, error: false });
    };
    return {
        value: data[id],
        error: error[id],
        handleChange: handleChange,
        handleBlur: handleBlur,
        handleFocus: handleFocus,
    };
}

function showFormData() {
    var _a = useContext(FormContext), data = _a.data, error = _a.error;
    return {
        data: data,
        error: error,
    };
}

var Error = function (_a) {
    var id = _a.id, className = _a.className, errMsg = _a.errMsg;
    return (createElement("small", { id: id + "-error", className: "flow-form-error " + className + "-error", style: { color: 'red' } }, typeof errMsg === 'string' ? errMsg : "Please provide a valid " + id + " "));
};

var ShowData = function () {
    var _a = showFormData(), data = _a.data, error = _a.error;
    return createElement("pre", null, JSON.stringify({ data: data, error: error }, null, 2));
};

var HelperText = function (_a) {
    var id = _a.id, helperText = _a.helperText, className = _a.className;
    if (typeof helperText === 'string') {
        return (createElement("small", { id: id + "-helper-text", className: className + "-helper-text", style: { color: 'rgb(101, 97, 97)' } }, helperText));
    }
    return null;
};

var Text = function (_a) {
    var id = _a.id, _b = _a.type, type = _b === void 0 ? 'text' : _b, className = _a.className, placeholder = _a.placeholder, _c = _a.required, required = _c === void 0 ? false : _c, validate = _a.validate, errMsg = _a.errMsg, autoComplete = _a.autoComplete, helperText = _a.helperText, style = _a.style;
    var _d = useFormData({
        id: id,
        value: '',
        validate: validate,
        required: required,
    }), value = _d.value, error = _d.error, handleChange = _d.handleChange, handleBlur = _d.handleBlur, handleFocus = _d.handleFocus;
    return (createElement(Fragment, null,
        createElement("input", { id: id, name: id, value: value || '', onChange: handleChange, onBlur: handleBlur, onFocus: handleFocus, type: type, placeholder: placeholder, style: style, className: "flow-form-input " + className + "-input", required: required, autoComplete: autoComplete }),
        !error && createElement(HelperText, { id: id, helperText: helperText, className: className }),
        error && createElement(Error, { id: id, className: className, errMsg: errMsg })));
};

var Number = function (_a) {
    var id = _a.id, _b = _a.type, type = _b === void 0 ? 'number' : _b, className = _a.className, placeholder = _a.placeholder, _c = _a.required, required = _c === void 0 ? false : _c, validate = _a.validate, errMsg = _a.errMsg, autoComplete = _a.autoComplete, helperText = _a.helperText, style = _a.style;
    var _d = useFormData({
        id: id,
        value: 0,
        validate: validate,
        required: required,
    }), value = _d.value, error = _d.error, handleChange = _d.handleChange, handleBlur = _d.handleBlur, handleFocus = _d.handleFocus;
    return (createElement(Fragment, null,
        createElement("input", { id: id, name: id, value: value || '', onChange: handleChange, onBlur: handleBlur, onFocus: handleFocus, type: type, placeholder: placeholder, style: style, className: "flow-form-input " + className + "-input", required: required, autoComplete: autoComplete }),
        !error && createElement(HelperText, { id: id, helperText: helperText, className: className }),
        error && createElement(Error, { id: id, className: className, errMsg: errMsg })));
};

var Email = function (_a) {
    var id = _a.id, _b = _a.type, type = _b === void 0 ? 'email' : _b, className = _a.className, placeholder = _a.placeholder, _c = _a.required, required = _c === void 0 ? false : _c, validate = _a.validate, errMsg = _a.errMsg, autoComplete = _a.autoComplete, helperText = _a.helperText, style = _a.style;
    var _d = useFormData({
        id: id,
        value: '',
        validate: validate,
        required: required,
    }), value = _d.value, error = _d.error, handleChange = _d.handleChange, handleBlur = _d.handleBlur, handleFocus = _d.handleFocus;
    return (createElement(Fragment, null,
        createElement("input", { id: id, name: id, value: value || '', onChange: handleChange, onBlur: handleBlur, onFocus: handleFocus, type: type, placeholder: placeholder, style: style, className: "flow-form-input " + className + "-input", required: required, autoComplete: autoComplete }),
        !error && createElement(HelperText, { id: id, helperText: helperText, className: className }),
        error && createElement(Error, { id: id, className: className, errMsg: errMsg })));
};

var Password = function (_a) {
    var id = _a.id, _b = _a.type, type = _b === void 0 ? 'password' : _b, className = _a.className, placeholder = _a.placeholder, _c = _a.required, required = _c === void 0 ? false : _c, validate = _a.validate, errMsg = _a.errMsg, autoComplete = _a.autoComplete, helperText = _a.helperText, style = _a.style;
    var _d = useFormData({
        id: id,
        value: '',
        validate: validate,
        required: required,
    }), value = _d.value, error = _d.error, handleChange = _d.handleChange, handleBlur = _d.handleBlur, handleFocus = _d.handleFocus;
    return (createElement(Fragment, null,
        createElement("input", { id: id, name: id, value: value || '', onChange: handleChange, onBlur: handleBlur, onFocus: handleFocus, type: type, placeholder: placeholder, style: style, className: "flow-form-input " + className + "-input", required: required, autoComplete: autoComplete }),
        !error && createElement(HelperText, { id: id, helperText: helperText, className: className }),
        error && createElement(Error, { id: id, className: className, errMsg: errMsg })));
};

var Tel = function (_a) {
    var id = _a.id, _b = _a.type, type = _b === void 0 ? 'tel' : _b, className = _a.className, placeholder = _a.placeholder, _c = _a.required, required = _c === void 0 ? false : _c, validate = _a.validate, errMsg = _a.errMsg, autoComplete = _a.autoComplete, _d = _a.pattern, pattern = _d === void 0 ? '[0-9]{3}-[0-9]{2}-[0-9]{3}' : _d, helperText = _a.helperText, style = _a.style;
    var _e = useFormData({
        id: id,
        value: '',
        validate: validate,
        required: required,
    }), value = _e.value, error = _e.error, handleChange = _e.handleChange, handleBlur = _e.handleBlur, handleFocus = _e.handleFocus;
    return (createElement(Fragment, null,
        createElement("input", { id: id, name: id, value: value || '', onChange: handleChange, onBlur: handleBlur, onFocus: handleFocus, type: type, placeholder: placeholder, style: style, className: "flow-form-input " + className + "-input", required: required, autoComplete: autoComplete, pattern: pattern }),
        !error && createElement(HelperText, { id: id, helperText: helperText, className: className }),
        error && createElement(Error, { id: id, className: className, errMsg: errMsg })));
};

var Url = function (_a) {
    var id = _a.id, _b = _a.type, type = _b === void 0 ? 'url' : _b, className = _a.className, placeholder = _a.placeholder, _c = _a.required, required = _c === void 0 ? false : _c, validate = _a.validate, errMsg = _a.errMsg, autoComplete = _a.autoComplete, _d = _a.pattern, pattern = _d === void 0 ? 'https://.*' : _d, helperText = _a.helperText, style = _a.style;
    var _e = useFormData({
        id: id,
        value: '',
        validate: validate,
        required: required,
    }), value = _e.value, error = _e.error, handleChange = _e.handleChange, handleBlur = _e.handleBlur, handleFocus = _e.handleFocus;
    return (createElement(Fragment, null,
        createElement("input", { id: id, name: id, value: value || '', onChange: handleChange, onBlur: handleBlur, onFocus: handleFocus, type: type, placeholder: placeholder, style: style, className: "flow-form-input " + className + "-input", required: required, autoComplete: autoComplete, pattern: pattern }),
        !error && createElement(HelperText, { id: id, helperText: helperText, className: className }),
        error && createElement(Error, { id: id, className: className, errMsg: errMsg })));
};

var TextArea = function (_a) {
    var id = _a.id, className = _a.className, placeholder = _a.placeholder, _b = _a.required, required = _b === void 0 ? false : _b, validate = _a.validate, errMsg = _a.errMsg, autoComplete = _a.autoComplete, _c = _a.rows, rows = _c === void 0 ? 4 : _c, _d = _a.cols, cols = _d === void 0 ? 20 : _d, helperText = _a.helperText, style = _a.style;
    var _e = useFormData({
        id: id,
        value: '',
        validate: validate,
        required: required,
    }), value = _e.value, error = _e.error, handleChange = _e.handleChange, handleBlur = _e.handleBlur, handleFocus = _e.handleFocus;
    return (createElement(Fragment, null,
        createElement("textarea", { id: id, name: id, value: value || '', onChange: handleChange, onBlur: handleBlur, onFocus: handleFocus, placeholder: placeholder, style: style, className: "flow-form-input " + className + "-input", required: required, autoComplete: autoComplete, rows: rows, cols: cols }),
        !error && createElement(HelperText, { id: id, helperText: helperText, className: className }),
        error && createElement(Error, { id: id, className: className, errMsg: errMsg })));
};

var Color = function (_a) {
    var id = _a.id, _b = _a.type, type = _b === void 0 ? 'text' : _b, className = _a.className, placeholder = _a.placeholder, _c = _a.required, required = _c === void 0 ? false : _c, validate = _a.validate, errMsg = _a.errMsg, autoComplete = _a.autoComplete, helperText = _a.helperText, style = _a.style;
    var _d = useFormData({
        id: id,
        value: '',
        validate: validate,
        required: required,
    }), value = _d.value, error = _d.error, handleChange = _d.handleChange, handleBlur = _d.handleBlur, handleFocus = _d.handleFocus;
    return (createElement(Fragment, null,
        createElement("input", { id: id, name: id, value: value || '#519839', onChange: handleChange, onBlur: handleBlur, onFocus: handleFocus, type: type, placeholder: placeholder, style: style, className: "flow-form-input " + className + "-input", required: required, autoComplete: autoComplete }),
        !error && createElement(HelperText, { id: id, helperText: helperText, className: className }),
        error && createElement(Error, { id: id, className: className, errMsg: errMsg })));
};

var Input = function (_a) {
    var children = _a.children, type = _a.type, placeholder = _a.placeholder, required = _a.required, validate = _a.validate, errMsg = _a.errMsg, autoComplete = _a.autoComplete, pattern = _a.pattern, rows = _a.rows, cols = _a.cols, helperText = _a.helperText, style = _a.style;
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
        autoComplete: autoComplete !== null && autoComplete !== void 0 ? autoComplete : 'off',
        pattern: pattern,
        rows: rows,
        cols: cols,
        helperText: helperText,
        style: { margin: '0.5em 0 0 0', display: "block" },
    };
    return (createElement("label", { htmlFor: camelCase, className: "flow-form-label " + kebabCase + "-label", style: __assign({ display: "block", minHeight: '3.5em' }, style) },
        children,
        (function () {
            switch (type) {
                case 'text':
                    return createElement(Text, __assign({}, defaultProps));
                case 'number':
                    return createElement(Number, __assign({}, defaultProps));
                case 'email':
                    return createElement(Email, __assign({}, defaultProps));
                case 'password':
                    return createElement(Password, __assign({}, defaultProps));
                case 'tel':
                    return createElement(Tel, __assign({}, defaultProps));
                case 'url':
                    return createElement(Url, __assign({}, defaultProps));
                case 'textarea':
                    return createElement(TextArea, __assign({}, defaultProps));
                case 'color':
                    return createElement(Color, __assign({}, defaultProps));
                default:
                    return createElement(Text, __assign({}, defaultProps));
            }
        })()));
};

var FormGroup = function (_a) {
    var children = _a.children;
    return createElement("div", null, children);
};

export { FlowForm, FormGroup, Input, ShowData };
//# sourceMappingURL=index.es.js.map
