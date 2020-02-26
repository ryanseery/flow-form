import { createContext, useReducer, useMemo, createElement, useContext, Fragment, useEffect } from 'react';

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

var formData = {
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
            // make state copy
            var stateCopy = __assign({}, state);
            // update state copy
            // don't mutate state yet
            if (typeof id === 'string' && !stateCopy.data[id]) {
                stateCopy.data[id] = '';
                stateCopy.error[id] = false;
            }
            // return copy
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
            return __assign({}, formData);
        default:
            console.error('State Reducer Error');
            return state;
    }
}
var FormWrapper = function (_a) {
    var children = _a.children;
    var _b = useReducer(reducer, formData), state = _b[0], dispatch = _b[1];
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

var FormComponent = function (_a) {
    var children = _a.children, onSubmit = _a.onSubmit, className = _a.className, style = _a.style, customSubmit = _a.customSubmit, reset = _a.reset;
    var _b = useContext(FormContext), data = _b.data, error = _b.error, clearForm = _b.clearForm;
    return (createElement(Fragment, null,
        createElement("form", { className: "flow-form " + className, style: style, onSubmit: function (e) {
                e.preventDefault();
                onSubmit(data);
            } },
            createElement("fieldset", { disabled: false, "aria-busy": false, style: { border: "none" } },
                children,
                !customSubmit && (createElement("button", { type: "submit", className: "flow-form-submit" }, "Submit")),
                reset && (createElement("button", { type: "button", className: "flow-form-reset", onClick: clearForm }, "Clear")))),
        createElement("pre", null, JSON.stringify({ data: data, error: error }, null, 2))));
};
var FlowForm = function (_a) {
    var children = _a.children, onSubmit = _a.onSubmit, className = _a.className, style = _a.style, customSubmit = _a.customSubmit, reset = _a.reset;
    return (createElement(FormWrapper, null,
        createElement(FormComponent, { onSubmit: onSubmit, className: className, style: style, customSubmit: customSubmit, reset: reset }, children)));
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
    var id = _a.id, value = _a.value, validate = _a.validate;
    var _b = useContext(FormContext), data = _b.data, error = _b.error, setValue = _b.setValue, updateValue = _b.updateValue, updateBlur = _b.updateBlur;
    useEffect(function () {
        setValue({ id: id, value: value });
    }, []);
    var handleChange = function (e) {
        e.persist();
        updateValue({
            id: id,
            value: e.target.value,
            error: validate ? validate(e) : false,
        });
    };
    var handleBlur = function (e) {
        e.persist();
        updateBlur({ id: id, error: validate ? validate(e) : false });
    };
    return {
        value: data[id],
        error: error[id],
        handleChange: handleChange,
        handleBlur: handleBlur,
    };
}

var Error = function (_a) {
    var id = _a.id, errMsg = _a.errMsg;
    return createElement("span", { className: id + "-error" }, errMsg);
};

var Text = function (_a) {
    var id = _a.id, type = _a.type, className = _a.className, placeholder = _a.placeholder, required = _a.required, validate = _a.validate, errMsg = _a.errMsg;
    var _b = useFormData({
        id: id,
        value: '',
        validate: validate,
    }), value = _b.value, error = _b.error, handleChange = _b.handleChange, handleBlur = _b.handleBlur;
    return (createElement(Fragment, null,
        createElement("input", { id: id, name: id, value: value || '', onChange: handleChange, onBlur: handleBlur, type: type, placeholder: placeholder, style: { display: "block" }, className: "flow-form-input " + className + "-input", required: required }),
        error && createElement(Error, { id: id, errMsg: errMsg !== null && errMsg !== void 0 ? errMsg : id + " error." })));
};

var Number = function (_a) {
    var id = _a.id, type = _a.type, className = _a.className, placeholder = _a.placeholder, required = _a.required, validate = _a.validate, errMsg = _a.errMsg;
    var _b = useFormData({
        id: id,
        value: 0,
        validate: validate,
    }), value = _b.value, error = _b.error, handleChange = _b.handleChange, handleBlur = _b.handleBlur;
    return (createElement(Fragment, null,
        createElement("input", { id: id, name: id, value: value || '', onChange: handleChange, onBlur: handleBlur, type: type, placeholder: placeholder, style: { display: "block" }, className: "flow-form-input " + className + "-input", required: required }),
        error && createElement(Error, { id: id, errMsg: errMsg !== null && errMsg !== void 0 ? errMsg : id + " error." })));
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
    return (createElement("label", { htmlFor: camelCase, className: "flow-form-label " + kebabCase + "-label", style: { display: "block" } },
        children,
        (function () {
            switch (type) {
                case 'text':
                    return createElement(Text, __assign({}, defaultProps));
                case 'number':
                    return createElement(Number, __assign({}, defaultProps));
                default:
                    return createElement(Text, __assign({}, defaultProps));
            }
        })()));
};

export { FlowForm, Input };
//# sourceMappingURL=index.es.js.map
