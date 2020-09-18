import { createContext, useReducer, useMemo, createElement, useContext, useCallback, forwardRef } from 'react';

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

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var initialState = {
    isFlowForm: false,
    canProceed: false,
    meta: {
        touched: {},
        completedSteps: null,
    },
    flow: {
        key: 0,
        end: 0,
        currentStep: null,
        steps: null,
    },
    data: {},
    error: {},
    showError: {},
    focus: {},
};
var Context = createContext({});
var ACTION;
(function (ACTION) {
    ACTION["REGISTER_FORM"] = "REGISTER_FORM";
    ACTION["REGISTER_FIELD"] = "REGISTER_FIELD";
    ACTION["UPDATE_FIELD"] = "UPDATE_FIELD";
    ACTION["HANDLE_FOCUS"] = "HANDLE_FOCUS";
    ACTION["HANDLE_BLUR"] = "HANDLE_BLUR";
})(ACTION || (ACTION = {}));
var registerForm = function (payload) { return ({
    type: ACTION.REGISTER_FORM,
    payload: payload,
}); };
var registerField = function (payload) { return ({
    type: ACTION.REGISTER_FIELD,
    payload: payload,
}); };
var updateField = function (payload) { return ({
    type: ACTION.UPDATE_FIELD,
    payload: payload,
}); };
var handleFocus = function (payload) { return ({
    type: ACTION.HANDLE_FOCUS,
    payload: payload,
}); };
var handleBlur = function (payload) { return ({
    type: ACTION.HANDLE_BLUR,
    payload: payload,
}); };
function reducer(state, action) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    console.log('REDUCER: ', action);
    switch (action.type) {
        case ACTION.REGISTER_FORM: {
            return state;
        }
        case ACTION.REGISTER_FIELD: {
            var _m = action.payload, id = _m.id, error = _m.error;
            if (!state.data[id]) {
                return __assign(__assign({}, state), { meta: __assign(__assign({}, state.meta), { touched: __assign(__assign({}, state.meta.touched), (_a = {}, _a[id] = false, _a)) }), data: __assign(__assign({}, state.data), (_b = {}, _b[id] = '', _b)), error: __assign(__assign({}, state.error), (_c = {}, _c[id] = error, _c)), showError: __assign(__assign({}, state.showError), (_d = {}, _d[id] = false, _d)), focus: __assign(__assign({}, state.focus), (_e = {}, _e[id] = false, _e)) });
            }
            return state;
        }
        case ACTION.UPDATE_FIELD: {
            var _o = action.payload, id = _o.id, value = _o.value, error = _o.error;
            return __assign(__assign({}, state), { data: __assign(__assign({}, state.data), (_f = {}, _f[id] = value, _f)), error: __assign(__assign({}, state.error), (_g = {}, _g[id] = error, _g)), showError: __assign(__assign({}, state.showError), (_h = {}, _h[id] = error, _h)) });
        }
        case ACTION.HANDLE_FOCUS: {
            var id = action.payload.id;
            return __assign(__assign({}, state), { meta: __assign(__assign({}, state.meta), { touched: __assign(__assign({}, state.meta.touched), (_j = {}, _j[id] = true, _j)) }), focus: __assign(__assign({}, state.focus), (_k = {}, _k[id] = true, _k)) });
        }
        case ACTION.HANDLE_BLUR: {
            var id = action.payload.id;
            return __assign(__assign({}, state), { focus: __assign(__assign({}, state.focus), (_l = {}, _l[id] = false, _l)) });
        }
        default:
            throw new Error("Context Reducer Received Unrecognized Action!");
    }
}
var Wrapper = function (_a) {
    var children = _a.children;
    var _b = useReducer(reducer, initialState), state = _b[0], dispatch = _b[1];
    var actions = useMemo(function () {
        return {
            registerForm: function (payload) { return dispatch(registerForm(payload)); },
            registerField: function (payload) { return dispatch(registerField(payload)); },
            updateField: function (payload) { return dispatch(updateField(payload)); },
            handleFocus: function (payload) { return dispatch(handleFocus(payload)); },
            handleBlur: function (payload) { return dispatch(handleBlur(payload)); },
        };
    }, []);
    return createElement(Context.Provider, { value: __assign(__assign({}, state), actions) }, children);
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".flow-form-fieldset {\n  border: none;\n  padding: 0;\n  margin: 0 0 1rem 0;\n}\n\n.flow-form-radio-group {\n  display: flex;\n  flex-direction: row;\n}\n\n.flow-form-radio {\n  display: flex;\n}\n\n.flow-form-input {\n  display: block;\n}\n\n.flow-form-select {\n  display: block;\n}\n\n.flow-form-textarea {\n  display: block;\n}\n";
styleInject(css_248z);

var Form = function (_a) {
    var children = _a.children, showData = _a.showData, rest = __rest(_a, ["children", "showData"]);
    var _b = useContext(Context), meta = _b.meta, data = _b.data, error = _b.error, showError = _b.showError, focus = _b.focus;
    showData && console.log({ meta: meta, data: data, error: error, showError: showError, focus: focus });
    return (createElement("form", __assign({ onSubmit: function (e) {
            e.preventDefault();
        }, className: "flow-form" }, rest, { ref: console.log }),
        createElement("fieldset", { className: "flow-form-fieldset" }, children),
        createElement("button", { type: "submit" }, "Submit")));
};
var FlowForm = function (props) {
    return (createElement(Wrapper, null,
        createElement(Form, __assign({}, props))));
};

function validate(e, validation, required) {
    if (required) {
        return !e.target.value;
    }
    if (typeof validation === 'function') {
        return validation(e);
    }
    return false;
}
function useFormData(_a) {
    var validation = _a.validation;
    var _b = useContext(Context), data = _b.data, showError = _b.showError, registerField = _b.registerField, updateField = _b.updateField, handleFocus = _b.handleFocus, handleBlur = _b.handleBlur;
    var onRegister = function (ref) {
        var id = ref.id, value = ref.value, required = ref.required;
        registerField({ id: id, value: value, error: required });
    };
    var onChange = function (e) {
        e.persist();
        var _a = e.target, id = _a.id, value = _a.value, type = _a.type, required = _a.required;
        updateField({
            id: id,
            value: type === 'number' ? parseFloat(value) : value,
            error: validate(e, validation, required),
        });
    };
    var onFocus = function (e) {
        e.persist();
        var _a = e.target, id = _a.id, value = _a.value, required = _a.required;
        handleFocus({
            id: id,
            value: value,
            error: validate(e, validation, required),
        });
    };
    var onBlur = function (e) {
        e.persist();
        var _a = e.target, id = _a.id, value = _a.value, required = _a.required;
        handleBlur({
            id: id,
            value: value,
            error: validate(e, validation, required),
        });
    };
    return {
        data: data,
        showError: showError,
        onRegister: useCallback(onRegister, []),
        onChange: useCallback(onChange, []),
        onFocus: useCallback(onFocus, []),
        onBlur: useCallback(onBlur, []),
    };
}

function toCamelCase(str) {
    if (typeof str !== 'string') {
        throw new TypeError('toCamelCase called on non-string');
    }
    return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) { return (index === 0 ? word.toLowerCase() : word.toUpperCase()); })
        .replace(/\s+/g, '');
}

var Input = forwardRef(function (props, ref) { return (createElement("input", __assign({}, props, { ref: ref }))); });

// TODO optgroup functionality
var Select = forwardRef(function (props, ref) { return (createElement("select", __assign({}, props, { ref: ref }), props.children)); });

var TextArea = forwardRef(function (props, ref) { return (createElement("textarea", __assign({}, props, { ref: ref }))); });

var CheckboxRadio = forwardRef(function (props, ref) {
    return (createElement("div", { className: "flow-form-radio-group" }, (props === null || props === void 0 ? void 0 : props.children).map(function (child) { return (createElement("label", { htmlFor: child.props.id, key: child.props.name, className: props.className },
        createElement("input", { id: props.id, type: props.type, ref: ref, value: child.props.name, checked: props.value === child.props.name, onChange: props.onChange }),
        child.props.name)); })));
});

var Field = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'text' : _b, name = _a.name, children = _a.children, validation = _a.validation, rest = __rest(_a, ["type", "name", "children", "validation"]);
    var _c = useFormData({
        validation: validation,
    }), data = _c.data, onRegister = _c.onRegister, onChange = _c.onChange, onFocus = _c.onFocus, onBlur = _c.onBlur;
    // TODO clean this up!
    var _d = useMemo(function () {
        var isString = typeof children === 'string';
        var isOptions = Array.isArray(children);
        if (isString) {
            return {
                id: toCamelCase(children),
                inputLabel: children,
            };
        }
        else if (isOptions) {
            return {
                id: toCamelCase(name !== null && name !== void 0 ? name : ''),
                inputLabel: name,
            };
        }
        return {
            id: isString ? toCamelCase(children) : toCamelCase(name),
            inputLabel: !isOptions && !children ? name : children !== null && children !== void 0 ? children : '',
        };
    }, []), id = _d.id, inputLabel = _d.inputLabel;
    return (createElement("label", { htmlFor: id, className: "flow-form-label" },
        inputLabel,
        (function () {
            var _a, _b, _c, _d, _e;
            switch (type) {
                case 'select': {
                    return (createElement(Select, __assign({}, rest, { className: "flow-form-select", ref: onRegister, id: id, "data-input-id": id, name: id, value: (_a = data[id]) !== null && _a !== void 0 ? _a : '', onChange: onChange, onFocus: onFocus, onBlur: onBlur, children: children })));
                }
                case 'textarea': {
                    return (createElement(TextArea, __assign({}, rest, { className: "flow-form-textarea", ref: onRegister, id: id, "data-input-id": id, name: id, type: type, value: (_b = data[id]) !== null && _b !== void 0 ? _b : '', onChange: onChange, onFocus: onFocus, onBlur: onBlur })));
                }
                case 'radio': {
                    return (createElement(CheckboxRadio, __assign({}, rest, { className: "flow-form-radio", ref: onRegister, id: id, "data-input-id": id, name: id, type: type, value: (_c = data[id]) !== null && _c !== void 0 ? _c : '', onChange: onChange, onFocus: onFocus, onBlur: onBlur, children: children })));
                }
                case 'checkbox': {
                    return (createElement(CheckboxRadio, __assign({}, rest, { className: "flow-form-" + type, ref: onRegister, id: id, "data-input-id": id, name: id, type: type, value: (_d = data[id]) !== null && _d !== void 0 ? _d : '', onChange: onChange, onFocus: onFocus, onBlur: onBlur, children: children })));
                }
                default: {
                    return (createElement(Input, __assign({}, rest, { className: "flow-form-input", ref: onRegister, id: id, "data-input-id": id, name: id, type: type, value: (_e = data[id]) !== null && _e !== void 0 ? _e : '', onChange: onChange, onFocus: onFocus, onBlur: onBlur })));
                }
            }
        })()));
};

export { Field, FlowForm };
//# sourceMappingURL=index.es.js.map
