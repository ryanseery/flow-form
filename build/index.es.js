import { createContext, useReducer, useMemo, createElement, useContext, Children, isValidElement, useEffect, Fragment, cloneElement } from 'react';

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

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var initialState = {
    flow: {
        key: 0,
        end: 0,
    },
    currentStep: {
        index: null,
        id: null,
        title: null,
    },
    canStepProceed: false,
    data: {},
    error: {},
    showError: {},
};
var FlowFormContext = createContext({});
var ACTIONS;
(function (ACTIONS) {
    ACTIONS["SET_INITIAL_FLOW"] = "SET_INITIAL_FLOW";
    ACTIONS["SET_VALUE"] = "SET_VALUE";
    ACTIONS["UPDATE_VALUE"] = "UPDATE_VALUE";
    ACTIONS["UPDATE_BLUR"] = "UPDATE_BLUR";
    ACTIONS["UPDATE_FLOW"] = "UPDATE_FLOW";
    ACTIONS["CLEAR_FORM"] = "CLEAR_FORM";
})(ACTIONS || (ACTIONS = {}));
var setFlow = function (_a) {
    var flow = _a.flow, currentStep = _a.currentStep;
    return ({
        type: ACTIONS.SET_INITIAL_FLOW,
        flow: flow,
        currentStep: currentStep,
    });
};
var updateFlow = function () { return ({
    type: ACTIONS.UPDATE_FLOW,
}); };
var setValue = function (_a) {
    var step = _a.step, id = _a.id, value = _a.value, error = _a.error;
    return ({
        type: ACTIONS.SET_VALUE,
        step: step,
        id: id,
        value: value,
        error: error,
    });
};
var updateValue = function (_a) {
    var step = _a.step, id = _a.id, value = _a.value, error = _a.error;
    return ({
        type: ACTIONS.UPDATE_VALUE,
        step: step,
        id: id,
        value: value,
        error: error,
    });
};
var updateBlur = function (_a) {
    var step = _a.step, id = _a.id, showError = _a.showError;
    return ({
        type: ACTIONS.UPDATE_BLUR,
        step: step,
        id: id,
        showError: showError,
    });
};
var clearForm = function () { return ({
    type: ACTIONS.CLEAR_FORM,
}); };
function checkIfStepProceed(obj) {
    return Object.keys(obj)
        .reduce(function (acc, a) { return __spreadArrays(acc, Object.keys(obj[a]).map(function (b) { return obj[a][b]; })); }, [])
        .every(function (c) { return c === false; });
}
function reducer(state, action) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    console.log(action);
    switch (action.type) {
        case ACTIONS.SET_INITIAL_FLOW: {
            var flow = action.flow, currentStep = action.currentStep;
            return __assign(__assign({}, state), { flow: flow,
                currentStep: currentStep, canStepProceed: checkIfStepProceed(state.error) });
        }
        case ACTIONS.SET_VALUE: {
            var step = action.step, id = action.id, value = action.value, error = action.error;
            if (!state.data[id] || !state[step].data[id]) {
                return __assign(__assign({}, state), { canStepProceed: checkIfStepProceed(state.error), data: __assign(__assign({}, state.data), (_a = {}, _a[step] = __assign(__assign({}, state.data[step]), (_b = {}, _b[id] = value !== null && value !== void 0 ? value : '', _b)), _a)), error: __assign(__assign({}, state.error), (_c = {}, _c[step] = __assign(__assign({}, state.error[step]), (_d = {}, _d[id] = error, _d)), _c)), showError: __assign(__assign({}, state.showError), (_e = {}, _e[step] = __assign(__assign({}, state.showError[step]), (_f = {}, _f[id] = false, _f)), _e)) });
            }
            return state;
        }
        case ACTIONS.UPDATE_VALUE: {
            var step = action.step, id = action.id, value = action.value, error = action.error;
            return __assign(__assign({}, state), { canStepProceed: checkIfStepProceed(state.error), data: __assign(__assign({}, state.data), (_g = {}, _g[step] = __assign(__assign({}, state.data[step]), (_h = {}, _h[id] = value, _h)), _g)), error: __assign(__assign({}, state.error), (_j = {}, _j[step] = __assign(__assign({}, state.error[step]), (_k = {}, _k[id] = error, _k)), _j)) });
        }
        case ACTIONS.UPDATE_BLUR: {
            return state;
        }
        case ACTIONS.UPDATE_FLOW: {
            return state;
        }
        case ACTIONS.CLEAR_FORM:
            return __assign({}, initialState);
        default:
            throw new Error("Unexpected Action received");
    }
}
var FlowFormWrapper = function (_a) {
    var children = _a.children;
    var _b = useReducer(reducer, initialState), state = _b[0], dispatch = _b[1];
    var actions = useMemo(function () {
        return {
            setFlow: function (_a) {
                var flow = _a.flow, currentStep = _a.currentStep;
                return dispatch(setFlow({ flow: flow, currentStep: currentStep }));
            },
            setValue: function (_a) {
                var step = _a.step, id = _a.id, value = _a.value, error = _a.error;
                return dispatch(setValue({ step: step, id: id, value: value, error: error }));
            },
            updateValue: function (_a) {
                var step = _a.step, id = _a.id, value = _a.value, error = _a.error;
                return dispatch(updateValue({ step: step, id: id, value: value, error: error }));
            },
            updateBlur: function (_a) {
                var step = _a.step, id = _a.id, showError = _a.showError;
                return dispatch(updateBlur({ step: step, id: id, showError: showError }));
            },
            updateFlow: function () { return dispatch(updateFlow()); },
            clearForm: function () { return dispatch(clearForm()); },
        };
    }, []);
    return (createElement(FlowFormContext.Provider, { value: __assign(__assign({}, state), actions) }, children));
};

var FFComponent;
(function (FFComponent) {
    FFComponent["STEP"] = "STEP";
    FFComponent["SHOW_DATA"] = "SHOW_DATA";
})(FFComponent || (FFComponent = {}));

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

function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}

// TODO why undefined?
function mapHeaders(children) {
    return Children.map(children, function (child, index) {
        var _a;
        if (!isValidElement(child)) {
            return null;
        }
        if (child.props.flowComp === FFComponent.STEP) {
            return (_a = child.props.title) !== null && _a !== void 0 ? _a : index;
        }
        return null;
    });
}
function isSingleChildAStep(children) {
    var _a;
    if (isValidElement(children)) {
        return (_a = [children.props.title]) !== null && _a !== void 0 ? _a : [0];
    }
    return [0];
}
var FlowFormComponent = function (_a) {
    var children = _a.children, onSubmit = _a.onSubmit, className = _a.className, style = _a.style, reset = _a.reset;
    var _b = useContext(FlowFormContext), setFlow = _b.setFlow, flow = _b.flow, currentStep = _b.currentStep, canStepProceed = _b.canStepProceed, data = _b.data, clearForm = _b.clearForm;
    var flowHeaders = useMemo(function () { return (Array.isArray(children) ? mapHeaders(children) : isSingleChildAStep(children)); }, []);
    useEffect(function () {
        var initialFlow = { key: 0, end: Array.isArray(children) ? children.length - 1 : 0 };
        var initialStep = {
            index: 0,
            id: Array.isArray(children) &&
                Array.isArray(flowHeaders) &&
                typeof flowHeaders[0] === 'string' &&
                toCamelCase(flowHeaders[0]),
            title: Array.isArray(children) && Array.isArray(flowHeaders) && flowHeaders[0],
        };
        setFlow({ flow: initialFlow, currentStep: initialStep });
    }, []);
    var isThereShowData = useMemo(function () {
        return Array.isArray(children) &&
            children.filter(function (child) {
                return isValidElement(child) && child.props.flowComp === FFComponent.SHOW_DATA ? child : null;
            });
    }, []);
    return (createElement("form", { className: "flow-form " + className, style: style, onSubmit: function (e) {
            e.preventDefault();
            onSubmit(data);
        } },
        Array.isArray(flowHeaders) && createElement("div", null, flowHeaders[flow.key]),
        createElement("fieldset", { disabled: false, "aria-busy": false, style: { border: "none" } },
            createElement(Fragment, null, Array.isArray(children) ? children[flow.key] : children),
            flow.key !== currentStep.id && (createElement("button", { type: "button", className: "flow-form-back-button" }, "Back")),
            flow.end !== currentStep.id ? (createElement("button", { type: "button", className: "flow-form-next-button" }, canStepProceed ? "Next" : "Can't Proceed")) : (createElement("button", { type: "submit", className: "flow-form-submit-button" }, "Submit")),
            reset && (createElement("button", { type: "button", className: "flow-form-reset", onClick: clearForm }, "Clear")),
            isThereShowData)));
};
var FlowForm = function (_a) {
    var children = _a.children, onSubmit = _a.onSubmit, className = _a.className, style = _a.style, reset = _a.reset, initialValues = _a.initialValues;
    return (createElement(FlowFormWrapper, { initialValues: initialValues },
        createElement(FlowFormComponent, { className: className, style: style, onSubmit: onSubmit, reset: reset }, children)));
};

// TODO only insert index/step if child is Input
var Step = function (_a) {
    var children = _a.children, title = _a.title;
    return (createElement("div", { "data-step": true, className: "flow-from-step " + (title && toKebabCase(title)) }, Children.map(children, function (child, index) {
        return cloneElement(child, {
            index: index,
            step: title ? toCamelCase(title) : null,
        });
    })));
};
Step.defaultProps = {
    flowComp: FFComponent.STEP,
};

function useFormData(_a) {
    var step = _a.step, id = _a.id, value = _a.value, required = _a.required, validate = _a.validate;
    var _b = useContext(FlowFormContext), data = _b.data, error = _b.error, showError = _b.showError, setValue = _b.setValue, updateValue = _b.updateValue, updateBlur = _b.updateBlur;
    useEffect(function () {
        setValue({ step: step, id: id, value: value, error: required !== null && required !== void 0 ? required : false });
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
            step: step,
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
        updateBlur({ step: step, id: id, showError: validation() });
    };
    var handleFocus = function () {
        updateBlur({ step: step, id: id, showError: false });
    };
    return {
        value: isObjectEmpty(data) ? data[id] : data[step][id],
        error: isObjectEmpty(error) ? error[id] : error[step][id],
        showError: isObjectEmpty(showError) ? showError[id] : showError[step][id],
        handleChange: handleChange,
        handleBlur: handleBlur,
        handleFocus: handleFocus,
    };
}

var Error$1 = function (_a) {
    var id = _a.id, className = _a.className, errMsg = _a.errMsg;
    return (createElement("small", { id: id + "-error", className: "flow-form-error " + className + "-error", style: { color: 'red' } }, typeof errMsg === 'string' ? errMsg : "Please provide a valid " + id + " "));
};

var HelperText = function (_a) {
    var id = _a.id, helperText = _a.helperText, className = _a.className;
    if (typeof helperText === 'string') {
        return (createElement("small", { id: id !== null && id !== void 0 ? id : id + "-helper-text", className: "helper-text " + className + "-helper-text", style: { color: 'rgb(101, 97, 97)' } }, helperText));
    }
    return null;
};

var Text = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.type, type = _b === void 0 ? 'text' : _b, className = _a.className, placeholder = _a.placeholder, _c = _a.required, required = _c === void 0 ? false : _c, validate = _a.validate, errMsg = _a.errMsg, autoComplete = _a.autoComplete, helperText = _a.helperText, style = _a.style;
    var _d = useFormData({
        step: step,
        id: id,
        value: '',
        validate: validate,
        required: required,
    }), value = _d.value, showError = _d.showError, handleChange = _d.handleChange, handleBlur = _d.handleBlur, handleFocus = _d.handleFocus;
    return (createElement(Fragment, null,
        createElement("input", { id: id, name: id, value: value || '', onChange: handleChange, onBlur: handleBlur, onFocus: handleFocus, type: type, placeholder: placeholder, style: style, className: "flow-form-input " + className + "-input", required: required, autoComplete: autoComplete }),
        !showError && createElement(HelperText, { id: id, helperText: helperText, className: className }),
        showError && createElement(Error$1, { id: id, className: className, errMsg: errMsg })));
};

var Number = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.type, type = _b === void 0 ? 'number' : _b, className = _a.className, placeholder = _a.placeholder, _c = _a.required, required = _c === void 0 ? false : _c, validate = _a.validate, errMsg = _a.errMsg, autoComplete = _a.autoComplete, helperText = _a.helperText, style = _a.style;
    var _d = useFormData({
        step: step,
        id: id,
        value: 0,
        validate: validate,
        required: required,
    }), value = _d.value, showError = _d.showError, handleChange = _d.handleChange, handleBlur = _d.handleBlur, handleFocus = _d.handleFocus;
    return (createElement(Fragment, null,
        createElement("input", { id: id, name: id, value: value || '', onChange: handleChange, onBlur: handleBlur, onFocus: handleFocus, type: type, placeholder: placeholder, style: style, className: "flow-form-input " + className + "-input", required: required, autoComplete: autoComplete }),
        !showError && createElement(HelperText, { id: id, helperText: helperText, className: className }),
        showError && createElement(Error$1, { id: id, className: className, errMsg: errMsg })));
};

var Email = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.type, type = _b === void 0 ? 'email' : _b, className = _a.className, placeholder = _a.placeholder, _c = _a.required, required = _c === void 0 ? false : _c, validate = _a.validate, errMsg = _a.errMsg, autoComplete = _a.autoComplete, helperText = _a.helperText, style = _a.style;
    var _d = useFormData({
        step: step,
        id: id,
        value: '',
        validate: validate,
        required: required,
    }), value = _d.value, showError = _d.showError, handleChange = _d.handleChange, handleBlur = _d.handleBlur, handleFocus = _d.handleFocus;
    return (createElement(Fragment, null,
        createElement("input", { id: id, name: id, value: value || '', onChange: handleChange, onBlur: handleBlur, onFocus: handleFocus, type: type, placeholder: placeholder, style: style, className: "flow-form-input " + className + "-input", required: required, autoComplete: autoComplete }),
        !showError && createElement(HelperText, { id: id, helperText: helperText, className: className }),
        showError && createElement(Error$1, { id: id, className: className, errMsg: errMsg })));
};

var Password = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.type, type = _b === void 0 ? 'password' : _b, className = _a.className, placeholder = _a.placeholder, _c = _a.required, required = _c === void 0 ? false : _c, validate = _a.validate, errMsg = _a.errMsg, autoComplete = _a.autoComplete, helperText = _a.helperText, style = _a.style;
    var _d = useFormData({
        step: step,
        id: id,
        value: '',
        validate: validate,
        required: required,
    }), value = _d.value, showError = _d.showError, handleChange = _d.handleChange, handleBlur = _d.handleBlur, handleFocus = _d.handleFocus;
    return (createElement(Fragment, null,
        createElement("input", { id: id, name: id, value: value || '', onChange: handleChange, onBlur: handleBlur, onFocus: handleFocus, type: type, placeholder: placeholder, style: style, className: "flow-form-input " + className + "-input", required: required, autoComplete: autoComplete }),
        !showError && createElement(HelperText, { id: id, helperText: helperText, className: className }),
        showError && createElement(Error$1, { id: id, className: className, errMsg: errMsg })));
};

var Tel = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.type, type = _b === void 0 ? 'tel' : _b, className = _a.className, placeholder = _a.placeholder, _c = _a.required, required = _c === void 0 ? false : _c, validate = _a.validate, errMsg = _a.errMsg, autoComplete = _a.autoComplete, _d = _a.pattern, pattern = _d === void 0 ? '[0-9]{3}-[0-9]{2}-[0-9]{3}' : _d, helperText = _a.helperText, style = _a.style;
    var _e = useFormData({
        step: step,
        id: id,
        value: '',
        validate: validate,
        required: required,
    }), value = _e.value, showError = _e.showError, handleChange = _e.handleChange, handleBlur = _e.handleBlur, handleFocus = _e.handleFocus;
    return (createElement(Fragment, null,
        createElement("input", { id: id, name: id, value: value || '', onChange: handleChange, onBlur: handleBlur, onFocus: handleFocus, type: type, placeholder: placeholder, style: style, className: "flow-form-input " + className + "-input", required: required, autoComplete: autoComplete, pattern: pattern }),
        !showError && createElement(HelperText, { id: id, helperText: helperText, className: className }),
        showError && createElement(Error$1, { id: id, className: className, errMsg: errMsg })));
};

var Url = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.type, type = _b === void 0 ? 'url' : _b, className = _a.className, placeholder = _a.placeholder, _c = _a.required, required = _c === void 0 ? false : _c, validate = _a.validate, errMsg = _a.errMsg, autoComplete = _a.autoComplete, _d = _a.pattern, pattern = _d === void 0 ? 'https://.*' : _d, helperText = _a.helperText, style = _a.style;
    var _e = useFormData({
        step: step,
        id: id,
        value: '',
        validate: validate,
        required: required,
    }), value = _e.value, showError = _e.showError, handleChange = _e.handleChange, handleBlur = _e.handleBlur, handleFocus = _e.handleFocus;
    return (createElement(Fragment, null,
        createElement("input", { id: id, name: id, value: value || '', onChange: handleChange, onBlur: handleBlur, onFocus: handleFocus, type: type, placeholder: placeholder, style: style, className: "flow-form-input " + className + "-input", required: required, autoComplete: autoComplete, pattern: pattern }),
        !showError && createElement(HelperText, { id: id, helperText: helperText, className: className }),
        showError && createElement(Error$1, { id: id, className: className, errMsg: errMsg })));
};

var TextArea = function (_a) {
    var step = _a.step, id = _a.id, className = _a.className, placeholder = _a.placeholder, _b = _a.required, required = _b === void 0 ? false : _b, validate = _a.validate, errMsg = _a.errMsg, autoComplete = _a.autoComplete, _c = _a.rows, rows = _c === void 0 ? 4 : _c, _d = _a.cols, cols = _d === void 0 ? 20 : _d, helperText = _a.helperText, style = _a.style;
    var _e = useFormData({
        step: step,
        id: id,
        value: '',
        validate: validate,
        required: required,
    }), value = _e.value, showError = _e.showError, handleChange = _e.handleChange, handleBlur = _e.handleBlur, handleFocus = _e.handleFocus;
    return (createElement(Fragment, null,
        createElement("textarea", { id: id, name: id, value: value || '', onChange: handleChange, onBlur: handleBlur, onFocus: handleFocus, placeholder: placeholder, style: style, className: "flow-form-input " + className + "-input", required: required, autoComplete: autoComplete, rows: rows, cols: cols }),
        !showError && createElement(HelperText, { id: id, helperText: helperText, className: className }),
        showError && createElement(Error$1, { id: id, className: className, errMsg: errMsg })));
};

var Color = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.type, type = _b === void 0 ? 'text' : _b, className = _a.className, placeholder = _a.placeholder, _c = _a.required, required = _c === void 0 ? false : _c, validate = _a.validate, errMsg = _a.errMsg, autoComplete = _a.autoComplete, helperText = _a.helperText, style = _a.style;
    var _d = useFormData({
        step: step,
        id: id,
        value: '',
        validate: validate,
        required: required,
    }), value = _d.value, showError = _d.showError, handleChange = _d.handleChange, handleBlur = _d.handleBlur, handleFocus = _d.handleFocus;
    return (createElement(Fragment, null,
        createElement("input", { id: id, name: id, value: value || '#519839', onChange: handleChange, onBlur: handleBlur, onFocus: handleFocus, type: type, placeholder: placeholder, style: style, className: "flow-form-input " + className + "-input", required: required, autoComplete: autoComplete }),
        !showError && createElement(HelperText, { id: id, helperText: helperText, className: className }),
        showError && createElement(Error$1, { id: id, className: className, errMsg: errMsg })));
};

var Input = function (_a) {
    var index = _a.index, step = _a.step, children = _a.children, type = _a.type, placeholder = _a.placeholder, required = _a.required, validate = _a.validate, errMsg = _a.errMsg, autoComplete = _a.autoComplete, pattern = _a.pattern, rows = _a.rows, cols = _a.cols, helperText = _a.helperText, style = _a.style;
    var kebabCase = toKebabCase(children !== null && children !== void 0 ? children : '');
    var camelCase = toCamelCase(children !== null && children !== void 0 ? children : '');
    var defaultProps = {
        index: index,
        step: step,
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

var Submit = function (_a) {
    var className = _a.className, title = _a.title;
    return (createElement("button", { type: "submit", className: "flow-form-submit " + (className !== null && className !== void 0 ? className : '') }, title !== null && title !== void 0 ? title : "Submit"));
};
Submit.defaultProps = {
    flowComp: FFComponent.STEP,
};

var ShowData = function (_a) {
    var style = _a.style;
    var _b = useContext(FlowFormContext), flow = _b.flow, currentStep = _b.currentStep, canStepProceed = _b.canStepProceed, data = _b.data, error = _b.error, showError = _b.showError;
    return (createElement("pre", { className: "flow-form-show-data", style: style }, JSON.stringify({ flow: flow, currentStep: currentStep, canStepProceed: canStepProceed, data: data, error: error, showError: showError }, null, 2)));
};
ShowData.defaultProps = {
    flowComp: FFComponent.SHOW_DATA,
};

var FormContext = createContext({});
var ACTIONS$1;
(function (ACTIONS) {
    ACTIONS["SET_DEFAULT_VALUE"] = "SET_DEFAULT_VALUE";
    ACTIONS["UPDATE_VALUE"] = "UPDATE_VALUE";
    ACTIONS["UPDATE_BLUR"] = "UPDATE_BLUR";
    ACTIONS["CLEAR_FORM"] = "CLEAR_FORM";
})(ACTIONS$1 || (ACTIONS$1 = {}));

var Reset = function (_a) {
    var className = _a.className, title = _a.title;
    var clearForm = useContext(FormContext).clearForm;
    return (createElement("button", { type: "submit", className: "flow-form-reset " + (className !== null && className !== void 0 ? className : ''), onClick: clearForm }, title !== null && title !== void 0 ? title : "Reset"));
};

export { FlowForm, Input, Reset, ShowData, Step, Submit };
//# sourceMappingURL=index.es.js.map
