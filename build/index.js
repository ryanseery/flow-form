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

var FormContext = React.createContext({});
var ACTIONS;
(function (ACTIONS) {
    ACTIONS["SET_DEFAULT_VALUE"] = "SET_DEFAULT_VALUE";
    ACTIONS["UPDATE_VALUE"] = "UPDATE_VALUE";
    ACTIONS["UPDATE_BLUR"] = "UPDATE_BLUR";
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
            }
            // return copy
            return stateCopy;
        }
        case ACTIONS.UPDATE_VALUE: {
            if (typeof id === 'string') {
                return __assign(__assign({}, state), { data: __assign(__assign({}, state.data), (_a = {}, _a[id] = value, _a)), error: __assign(__assign({}, state.error), (_b = {}, _b[id] = error, _b)) });
            }
        }
        case ACTIONS.UPDATE_BLUR: {
            if (typeof id === 'string') {
                return __assign(__assign({}, state), { blur: __assign(__assign({}, state.blur), (_c = {}, _c[id] = !state.blur[id], _c)) });
            }
        }
        default:
            console.error('State Reducer Error');
            return state;
    }
}
var formData = {
    data: {},
    error: {},
    blur: {},
    touched: {},
};
var FormWrapper = function (_a) {
    var children = _a.children;
    var _b = React.useReducer(reducer, formData), state = _b[0], dispatch = _b[1];
    return (React.createElement(FormContext.Provider, { value: __assign(__assign({}, state), { setValue: function (_a) {
                var id = _a.id, value = _a.value, error = _a.error;
                return dispatch({ type: ACTIONS.SET_DEFAULT_VALUE, id: id, value: value, error: error });
            }, updateValue: function (_a) {
                var id = _a.id, value = _a.value, error = _a.error;
                return dispatch({ type: ACTIONS.UPDATE_VALUE, id: id, value: value, error: error });
            }, updateBlur: function (_a) {
                var id = _a.id;
                return dispatch({ type: ACTIONS.UPDATE_BLUR, id: id });
            } }) }, children));
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
    var id = _a.id, value = _a.value, error = _a.error;
    var _b = React.useContext(FormContext), data = _b.data, setValue = _b.setValue, updateValue = _b.updateValue, updateBlur = _b.updateBlur;
    React.useEffect(function () {
        setValue({ id: id, value: value, error: error });
    }, []);
    var handleChange = function (e) {
        e.persist();
        updateValue({ id: e.target.name, value: e.target.value.toLowerCase() });
    };
    var handleBlur = function (e) {
        e.persist();
        updateBlur({ id: e.target.name });
    };
    return {
        value: data[id],
        error: error[id],
        handleChange: handleChange,
        handleBlur: handleBlur,
    };
}

var Input = function (_a) {
    var children = _a.children, _b = _a.type, type = _b === void 0 ? 'text' : _b, placeholder = _a.placeholder;
    var _c;
    var _d = useFormData({
        id: (_c = children === null || children === void 0 ? void 0 : children.toLowerCase()) !== null && _c !== void 0 ? _c : '',
        value: '',
        error: false,
    }), value = _d.value, handleChange = _d.handleChange;
    var kebabCase = toKebabCase(children !== null && children !== void 0 ? children : '');
    var camelCase = toCamelCase(children !== null && children !== void 0 ? children : '');
    // const defaultProps = {
    //   key: camelCase,
    //   name: camelCase,
    //   className: kebabCase,
    //   id: camelCase,
    //   type,
    //   required,
    //   placeholder,
    // };
    return (React.createElement("label", { htmlFor: camelCase, className: "flow-form-label " + kebabCase + "-label", style: { display: "block" } },
        children,
        React.createElement("input", { id: camelCase, name: camelCase, value: value || '', onChange: handleChange, type: type, placeholder: placeholder, style: { display: "block" }, className: "flow-form-input " + kebabCase + "-input" })));
};

var FormComponent = function (_a) {
    var children = _a.children, onSubmit = _a.onSubmit, className = _a.className;
    var _b = React.useContext(FormContext), data = _b.data, error = _b.error, blur = _b.blur, touched = _b.touched;
    return (React.createElement(React.Fragment, null,
        React.createElement("form", { className: "flow-form " + (className || ''), style: { marginRight: '10em' }, onSubmit: function (e) {
                e.preventDefault();
                onSubmit(data);
            } },
            React.createElement("fieldset", { disabled: false, "aria-busy": false, style: { border: "none" } },
                children,
                React.createElement("button", { type: "submit" }, "Submit"))),
        React.createElement("pre", null, JSON.stringify({ data: data, error: error, blur: blur, touched: touched }, null, 2))));
};
var Form = function (_a) {
    var children = _a.children, onSubmit = _a.onSubmit, className = _a.className;
    return (React.createElement(FormWrapper, null,
        React.createElement(FormComponent, { onSubmit: onSubmit, className: className }, children)));
};

exports.Form = Form;
exports.Input = Input;
//# sourceMappingURL=index.js.map
