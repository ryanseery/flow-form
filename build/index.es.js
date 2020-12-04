import { createContext, useReducer, useMemo, createElement, useContext, useCallback, forwardRef, useRef, useEffect } from 'react';

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
    meta: {
        touched: {},
        focus: {},
        error: {},
        isFlowForm: false,
        flow: {
            key: 0,
            end: 0,
            currentStep: null,
            steps: null,
            canProceed: false,
            completedSteps: null,
        },
    },
    data: {},
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
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    switch (action.type) {
        case ACTION.REGISTER_FORM: {
            return state;
        }
        case ACTION.REGISTER_FIELD: {
            var _k = action.payload, id = _k.id, error = _k.error;
            if (!state.data[id]) {
                return __assign(__assign({}, state), { meta: __assign(__assign({}, state.meta), { touched: __assign(__assign({}, state.meta.touched), (_a = {}, _a[id] = false, _a)), focus: __assign(__assign({}, state.meta.focus), (_b = {}, _b[id] = false, _b)), error: __assign(__assign({}, state.meta.error), (_c = {}, _c[id] = error, _c)) }), data: __assign(__assign({}, state.data), (_d = {}, _d[id] = '', _d)) });
            }
            return state;
        }
        case ACTION.UPDATE_FIELD: {
            var _l = action.payload, id = _l.id, value = _l.value, error = _l.error;
            return __assign(__assign({}, state), { meta: __assign(__assign({}, state.meta), { error: __assign(__assign({}, state.meta.error), (_e = {}, _e[id] = error, _e)) }), data: __assign(__assign({}, state.data), (_f = {}, _f[id] = value, _f)) });
        }
        case ACTION.HANDLE_FOCUS: {
            var id = action.payload.id;
            return __assign(__assign({}, state), { meta: __assign(__assign({}, state.meta), { touched: __assign(__assign({}, state.meta.touched), (_g = {}, _g[id] = true, _g)), focus: __assign(__assign({}, state.meta.focus), (_h = {}, _h[id] = true, _h)) }) });
        }
        case ACTION.HANDLE_BLUR: {
            var id = action.payload.id;
            return __assign(__assign({}, state), { meta: __assign(__assign({}, state.meta), { focus: __assign(__assign({}, state.meta.focus), (_j = {}, _j[id] = false, _j)) }) });
        }
        default: {
            throw new Error("Context Reducer Received Unrecognized Action!");
        }
    }
}
var Wrapper = function (_a) {
    var children = _a.children, _b = _a.initialValues, initialValues = _b === void 0 ? {} : _b;
    var _c = useReducer(reducer, __assign(__assign({}, initialState), { data: __assign(__assign({}, initialState.data), initialValues) })), state = _c[0], dispatch = _c[1];
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
//# sourceMappingURL=Context.js.map

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

var css_248z = "input[type='text'],\ninput[type='number'],\ninput[type='file'] {\n  display: block;\n}\n\nlabel[for='checkbox'],\nlabel[for='radio'] {\n  display: block;\n}\n\nselect {\n  display: block;\n}\n\ntextarea {\n  display: block;\n}\n\nfieldset {\n  border: none;\n  padding: 0;\n  margin: 0 0 1rem 0;\n}\n";
styleInject(css_248z);

// TODO finish drag and drop
// TODO showError
// TODO steps
var Form = function (_a) {
    var children = _a.children, onSubmit = _a.onSubmit, showData = _a.showData, rest = __rest(_a, ["children", "onSubmit", "showData"]);
    var _b = useContext(Context), meta = _b.meta, data = _b.data;
    showData && console.log({ meta: meta, data: data });
    return (createElement("form", __assign({ onSubmit: function (e) {
            e.preventDefault();
            onSubmit(data);
        } }, rest),
        children,
        createElement("button", { type: "submit" }, "Submit")));
};
var FlowForm = function (_a) {
    var initialValues = _a.initialValues, rest = __rest(_a, ["initialValues"]);
    return (createElement(Wrapper, { initialValues: initialValues },
        createElement(Form, __assign({}, rest))));
};
//# sourceMappingURL=FlowForm.js.map

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
    var _b = useContext(Context), data = _b.data, meta = _b.meta, registerField = _b.registerField, updateField = _b.updateField, handleFocus = _b.handleFocus, handleBlur = _b.handleBlur;
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
        meta: meta,
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
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
        .replace(/\s+/g, '');
}
//# sourceMappingURL=toCamelCase.js.map

var Input = forwardRef(function (props, ref) { return createElement("input", __assign({ ref: ref }, props)); });
//# sourceMappingURL=Input.js.map

// TODO optgroup functionality
var Select = forwardRef(function (props, ref) { return (createElement("select", __assign({}, props, { ref: ref }), props.children)); });
//# sourceMappingURL=Select.js.map

var TextArea = forwardRef(function (props, ref) { return (createElement("textarea", __assign({}, props, { ref: ref }))); });
//# sourceMappingURL=TextArea.js.map

//TODO not working
var CheckboxRadio = forwardRef(function (props, ref) { return (createElement("input", __assign({ ref: ref }, props, { value: props.name, checked: props.value === props.name }))); });
//# sourceMappingURL=CheckboxRadio.js.map

function handleDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}
// TODO to figure out file click!
var DragDrop = forwardRef(function (props, ref) {
    var fileRef = useRef(null);
    useEffect(function () {
        window.addEventListener('dragover', function (e) {
            handleDefaults(e);
        });
        window.addEventListener('drop', function (e) {
            handleDefaults(e);
        });
        return function () {
            window.removeEventListener('dragover', handleDefaults);
            window.removeEventListener('drop', handleDefaults);
        };
    }, []);
    var onDrop = function (e) {
        handleDefaults(e);
        // props.onChange(e);
    };
    var handleFileBtn = function () {
        if (fileRef.current == null)
            return;
        fileRef.current.click();
    };
    return (createElement("div", { onDrag: handleDefaults, onDragStart: handleDefaults, onDragEnd: handleDefaults, onDragOver: handleDefaults, onDragEnter: handleDefaults, onDragLeave: handleDefaults, onDrop: onDrop, onClick: handleFileBtn },
        createElement("input", __assign({}, props, { ref: ref, type: "file" }))));
});
//# sourceMappingURL=DragDrop.js.map

var Field = function (_a) {
    var _b;
    var _c = _a.type, type = _c === void 0 ? 'text' : _c, name = _a.name, children = _a.children, validation = _a.validation, rest = __rest(_a, ["type", "name", "children", "validation"]);
    var _d = useFormData({
        validation: validation,
    }), data = _d.data, onRegister = _d.onRegister, onChange = _d.onChange, onFocus = _d.onFocus, onBlur = _d.onBlur;
    // TODO clean this up
    var _e = useMemo(function () {
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
        else {
            return {
                id: isString ? toCamelCase(children) : toCamelCase(name),
                inputLabel: !isOptions && !children ? name : children !== null && children !== void 0 ? children : '',
            };
        }
    }, []), id = _e.id, inputLabel = _e.inputLabel;
    var defaultProps = __assign(__assign({}, rest), { type: type,
        id: id,
        onChange: onChange,
        onFocus: onFocus,
        onBlur: onBlur, ref: onRegister, name: id, value: (_b = data[id]) !== null && _b !== void 0 ? _b : '' });
    return (createElement("label", { htmlFor: id, className: "flow-form-label" },
        inputLabel,
        (function () {
            switch (type) {
                case 'select': {
                    return createElement(Select, __assign({ children: children }, defaultProps));
                }
                case 'textarea': {
                    return createElement(TextArea, __assign({}, defaultProps));
                }
                case 'radio': {
                    return createElement(CheckboxRadio, __assign({}, defaultProps));
                }
                case 'checkbox': {
                    return createElement(CheckboxRadio, __assign({}, defaultProps));
                }
                case 'drag-drop': {
                    return createElement(DragDrop, __assign({}, defaultProps));
                }
                default: {
                    return createElement(Input, __assign({}, defaultProps));
                }
            }
        })()));
};

// TODO ref on field to go through children and see what are inputs?
var Step = function (_a) {
    var children = _a.children;
    return createElement("fieldset", null, children);
};
//# sourceMappingURL=Step.js.map

export { Field, FlowForm, Step };
//# sourceMappingURL=index.es.js.map
