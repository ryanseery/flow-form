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

var initialState = {
    flow: {
        key: 0,
        end: 0,
    },
    currentStep: {
        id: null,
        title: null,
    },
    canStepProceed: false,
    data: {},
    error: {},
};
var FlowFormContext = React.createContext({});
var ACTIONS;
(function (ACTIONS) {
    ACTIONS["SET_INITIAL_FLOW"] = "SET_INITIAL_FLOW";
    ACTIONS["SET_VALUE"] = "SET_VALUE";
    ACTIONS["UPDATE_VALUE"] = "UPDATE_VALUE";
    ACTIONS["UPDATE_BLUR"] = "UPDATE_BLUR";
    ACTIONS["UPDATE_FLOW"] = "UPDATE_FLOW";
    ACTIONS["CLEAR_FORM"] = "CLEAR_FORM";
})(ACTIONS || (ACTIONS = {}));
function reducer(state, action) {
    var type = action.type, flow = action.flow, currentStep = action.currentStep, step = action.step, id = action.id, value = action.value, error = action.error;
    console.log({ type: type, step: step, id: id, value: value, error: error });
    switch (type) {
        case ACTIONS.SET_INITIAL_FLOW: {
            if (typeof flow !== 'undefined' && typeof currentStep !== 'undefined') {
                return __assign(__assign({}, state), { flow: flow,
                    currentStep: currentStep });
            }
        }
        case ACTIONS.SET_VALUE: {
            var stateCopy = __assign({}, state);
            if (typeof id === 'string' && !stateCopy.data[id]) {
                stateCopy.data[id] = '';
                stateCopy.error[id] = false;
            }
            return stateCopy;
        }
        case ACTIONS.UPDATE_VALUE: {
            return state;
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
    var _b = React.useReducer(reducer, initialState), state = _b[0], dispatch = _b[1];
    var actions = React.useMemo(function () {
        return {
            setFlow: function (_a) {
                var flow = _a.flow, currentStep = _a.currentStep;
                return dispatch({ type: ACTIONS.SET_INITIAL_FLOW, flow: flow, currentStep: currentStep });
            },
            setValue: function (_a) {
                var step = _a.step, id = _a.id, value = _a.value, error = _a.error;
                return dispatch({ type: ACTIONS.SET_VALUE, step: step, id: id, value: value, error: error });
            },
            updateValue: function (_a) {
                var step = _a.step, id = _a.id, value = _a.value, error = _a.error;
                return dispatch({ type: ACTIONS.UPDATE_VALUE, step: step, id: id, value: value, error: error });
            },
            updateBlur: function (_a) {
                var step = _a.step, id = _a.id, error = _a.error;
                return dispatch({ type: ACTIONS.UPDATE_BLUR, step: step, id: id, error: error });
            },
            updateFlow: function (_a) {
                var step = _a.step, id = _a.id, value = _a.value, error = _a.error;
                return dispatch({ type: ACTIONS.SET_INITIAL_FLOW, step: step, id: id, value: value, error: error });
            },
            clearForm: function () { return dispatch({ type: ACTIONS.CLEAR_FORM }); },
        };
    }, []);
    return (React.createElement(FlowFormContext.Provider, { value: __assign(__assign({}, state), actions) }, children));
};

var FFComponent;
(function (FFComponent) {
    FFComponent["STEP"] = "STEP";
    FFComponent["SHOW_DATA"] = "SHOW_DATA";
})(FFComponent || (FFComponent = {}));

var FormComponent = function (_a) {
    var children = _a.children, onSubmit = _a.onSubmit, className = _a.className, style = _a.style, reset = _a.reset;
    var _b = React.useContext(FlowFormContext), setFlow = _b.setFlow, flow = _b.flow, currentStep = _b.currentStep, data = _b.data, clearForm = _b.clearForm;
    // TODO why  undefined?
    function mapHeaders(children) {
        return React.Children.map(children, function (child, index) {
            var _a;
            if (!React.isValidElement(child)) {
                return null;
            }
            if ((child === null || child === void 0 ? void 0 : child.props.flowComp) === FFComponent.STEP) {
                return (_a = child.props.title) !== null && _a !== void 0 ? _a : index;
            }
            return null;
        });
    }
    function isSingleChildAStep(children) {
        var _a;
        if (React.isValidElement(children)) {
            return (_a = [children.props.title]) !== null && _a !== void 0 ? _a : [0];
        }
        return [0];
    }
    var flowHeaders = Array.isArray(children) ? mapHeaders(children) : isSingleChildAStep(children);
    var isThereShowData = Array.isArray(children) &&
        children.filter(function (child) {
            return React.isValidElement(child) && child.props.flowComp === FFComponent.SHOW_DATA ? child : null;
        });
    React.useEffect(function () {
        var initialFlow = { key: 0, end: Array.isArray(children) ? children.length - 1 : 0 };
        var initialStep = { id: 0, title: Array.isArray(children) && Array.isArray(flowHeaders) && flowHeaders[0] };
        setFlow({ flow: initialFlow, currentStep: initialStep });
    }, []);
    return (React.createElement("form", { className: "flow-form " + className, style: style, onSubmit: function (e) {
            e.preventDefault();
            onSubmit(data);
        } },
        Array.isArray(flowHeaders) && React.createElement("div", null, flowHeaders[flow.key]),
        React.createElement("fieldset", { disabled: false, "aria-busy": false, style: { border: "none" } },
            React.createElement(React.Fragment, null, Array.isArray(children) ? children[flow.key] : children),
            flow.key !== currentStep.id && (React.createElement("button", { type: "button", className: "flow-form-back-button" }, "Back")),
            flow.end !== currentStep.id ? (React.createElement("button", { type: "button", className: "flow-form-next-button" }, "Next")) : (React.createElement("button", { type: "submit", className: "flow-form-submit-button" }, "Submit")),
            reset && (React.createElement("button", { type: "button", className: "flow-form-reset", onClick: clearForm }, "Clear")),
            isThereShowData)));
};
var FlowForm = function (_a) {
    var children = _a.children, onSubmit = _a.onSubmit, className = _a.className, style = _a.style, reset = _a.reset, _b = _a.initialValues, initialValues = _b === void 0 ? {} : _b;
    return (React.createElement(FlowFormWrapper, { initialValues: initialValues },
        React.createElement(FormComponent, { onSubmit: onSubmit, className: className, style: style, reset: reset }, children)));
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

// TODO only insert index/step if child is Input
var Step = function (_a) {
    var children = _a.children, title = _a.title;
    return (React.createElement("div", { "data-step": true, className: "flow-from-step " + (title && toKebabCase(title)) }, React.Children.map(children, function (child, index) {
        return React.cloneElement(child, {
            index: index,
            step: title ? toCamelCase(title) : null,
        });
    })));
};
Step.defaultProps = {
    flowComp: FFComponent.STEP,
};

function useFormData(_a) {
    var id = _a.id, value = _a.value, required = _a.required, validate = _a.validate;
    var _b = React.useContext(FlowFormContext), data = _b.data, error = _b.error, setValue = _b.setValue, updateValue = _b.updateValue, updateBlur = _b.updateBlur;
    React.useEffect(function () {
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
    var _a = React.useContext(FlowFormContext), flow = _a.flow, currentStep = _a.currentStep, canStepProceed = _a.canStepProceed, data = _a.data, error = _a.error;
    return {
        flow: flow,
        currentStep: currentStep,
        canStepProceed: canStepProceed,
        data: data,
        error: error,
    };
}

var Error$1 = function (_a) {
    var id = _a.id, className = _a.className, errMsg = _a.errMsg;
    return (React.createElement("small", { id: id + "-error", className: "flow-form-error " + className + "-error", style: { color: 'red' } }, typeof errMsg === 'string' ? errMsg : "Please provide a valid " + id + " "));
};

var HelperText = function (_a) {
    var id = _a.id, helperText = _a.helperText, className = _a.className;
    if (typeof helperText === 'string') {
        return (React.createElement("small", { id: id + "-helper-text", className: className + "-helper-text", style: { color: 'rgb(101, 97, 97)' } }, helperText));
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
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { id: id, name: id, value: value || '', onChange: handleChange, onBlur: handleBlur, onFocus: handleFocus, type: type, placeholder: placeholder, style: style, className: "flow-form-input " + className + "-input", required: required, autoComplete: autoComplete }),
        !error && React.createElement(HelperText, { id: id, helperText: helperText, className: className }),
        error && React.createElement(Error$1, { id: id, className: className, errMsg: errMsg })));
};

var Number = function (_a) {
    var id = _a.id, _b = _a.type, type = _b === void 0 ? 'number' : _b, className = _a.className, placeholder = _a.placeholder, _c = _a.required, required = _c === void 0 ? false : _c, validate = _a.validate, errMsg = _a.errMsg, autoComplete = _a.autoComplete, helperText = _a.helperText, style = _a.style;
    var _d = useFormData({
        id: id,
        value: 0,
        validate: validate,
        required: required,
    }), value = _d.value, error = _d.error, handleChange = _d.handleChange, handleBlur = _d.handleBlur, handleFocus = _d.handleFocus;
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { id: id, name: id, value: value || '', onChange: handleChange, onBlur: handleBlur, onFocus: handleFocus, type: type, placeholder: placeholder, style: style, className: "flow-form-input " + className + "-input", required: required, autoComplete: autoComplete }),
        !error && React.createElement(HelperText, { id: id, helperText: helperText, className: className }),
        error && React.createElement(Error$1, { id: id, className: className, errMsg: errMsg })));
};

var Email = function (_a) {
    var id = _a.id, _b = _a.type, type = _b === void 0 ? 'email' : _b, className = _a.className, placeholder = _a.placeholder, _c = _a.required, required = _c === void 0 ? false : _c, validate = _a.validate, errMsg = _a.errMsg, autoComplete = _a.autoComplete, helperText = _a.helperText, style = _a.style;
    var _d = useFormData({
        id: id,
        value: '',
        validate: validate,
        required: required,
    }), value = _d.value, error = _d.error, handleChange = _d.handleChange, handleBlur = _d.handleBlur, handleFocus = _d.handleFocus;
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { id: id, name: id, value: value || '', onChange: handleChange, onBlur: handleBlur, onFocus: handleFocus, type: type, placeholder: placeholder, style: style, className: "flow-form-input " + className + "-input", required: required, autoComplete: autoComplete }),
        !error && React.createElement(HelperText, { id: id, helperText: helperText, className: className }),
        error && React.createElement(Error$1, { id: id, className: className, errMsg: errMsg })));
};

var Password = function (_a) {
    var id = _a.id, _b = _a.type, type = _b === void 0 ? 'password' : _b, className = _a.className, placeholder = _a.placeholder, _c = _a.required, required = _c === void 0 ? false : _c, validate = _a.validate, errMsg = _a.errMsg, autoComplete = _a.autoComplete, helperText = _a.helperText, style = _a.style;
    var _d = useFormData({
        id: id,
        value: '',
        validate: validate,
        required: required,
    }), value = _d.value, error = _d.error, handleChange = _d.handleChange, handleBlur = _d.handleBlur, handleFocus = _d.handleFocus;
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { id: id, name: id, value: value || '', onChange: handleChange, onBlur: handleBlur, onFocus: handleFocus, type: type, placeholder: placeholder, style: style, className: "flow-form-input " + className + "-input", required: required, autoComplete: autoComplete }),
        !error && React.createElement(HelperText, { id: id, helperText: helperText, className: className }),
        error && React.createElement(Error$1, { id: id, className: className, errMsg: errMsg })));
};

var Tel = function (_a) {
    var id = _a.id, _b = _a.type, type = _b === void 0 ? 'tel' : _b, className = _a.className, placeholder = _a.placeholder, _c = _a.required, required = _c === void 0 ? false : _c, validate = _a.validate, errMsg = _a.errMsg, autoComplete = _a.autoComplete, _d = _a.pattern, pattern = _d === void 0 ? '[0-9]{3}-[0-9]{2}-[0-9]{3}' : _d, helperText = _a.helperText, style = _a.style;
    var _e = useFormData({
        id: id,
        value: '',
        validate: validate,
        required: required,
    }), value = _e.value, error = _e.error, handleChange = _e.handleChange, handleBlur = _e.handleBlur, handleFocus = _e.handleFocus;
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { id: id, name: id, value: value || '', onChange: handleChange, onBlur: handleBlur, onFocus: handleFocus, type: type, placeholder: placeholder, style: style, className: "flow-form-input " + className + "-input", required: required, autoComplete: autoComplete, pattern: pattern }),
        !error && React.createElement(HelperText, { id: id, helperText: helperText, className: className }),
        error && React.createElement(Error$1, { id: id, className: className, errMsg: errMsg })));
};

var Url = function (_a) {
    var id = _a.id, _b = _a.type, type = _b === void 0 ? 'url' : _b, className = _a.className, placeholder = _a.placeholder, _c = _a.required, required = _c === void 0 ? false : _c, validate = _a.validate, errMsg = _a.errMsg, autoComplete = _a.autoComplete, _d = _a.pattern, pattern = _d === void 0 ? 'https://.*' : _d, helperText = _a.helperText, style = _a.style;
    var _e = useFormData({
        id: id,
        value: '',
        validate: validate,
        required: required,
    }), value = _e.value, error = _e.error, handleChange = _e.handleChange, handleBlur = _e.handleBlur, handleFocus = _e.handleFocus;
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { id: id, name: id, value: value || '', onChange: handleChange, onBlur: handleBlur, onFocus: handleFocus, type: type, placeholder: placeholder, style: style, className: "flow-form-input " + className + "-input", required: required, autoComplete: autoComplete, pattern: pattern }),
        !error && React.createElement(HelperText, { id: id, helperText: helperText, className: className }),
        error && React.createElement(Error$1, { id: id, className: className, errMsg: errMsg })));
};

var TextArea = function (_a) {
    var id = _a.id, className = _a.className, placeholder = _a.placeholder, _b = _a.required, required = _b === void 0 ? false : _b, validate = _a.validate, errMsg = _a.errMsg, autoComplete = _a.autoComplete, _c = _a.rows, rows = _c === void 0 ? 4 : _c, _d = _a.cols, cols = _d === void 0 ? 20 : _d, helperText = _a.helperText, style = _a.style;
    var _e = useFormData({
        id: id,
        value: '',
        validate: validate,
        required: required,
    }), value = _e.value, error = _e.error, handleChange = _e.handleChange, handleBlur = _e.handleBlur, handleFocus = _e.handleFocus;
    return (React.createElement(React.Fragment, null,
        React.createElement("textarea", { id: id, name: id, value: value || '', onChange: handleChange, onBlur: handleBlur, onFocus: handleFocus, placeholder: placeholder, style: style, className: "flow-form-input " + className + "-input", required: required, autoComplete: autoComplete, rows: rows, cols: cols }),
        !error && React.createElement(HelperText, { id: id, helperText: helperText, className: className }),
        error && React.createElement(Error$1, { id: id, className: className, errMsg: errMsg })));
};

var Color = function (_a) {
    var id = _a.id, _b = _a.type, type = _b === void 0 ? 'text' : _b, className = _a.className, placeholder = _a.placeholder, _c = _a.required, required = _c === void 0 ? false : _c, validate = _a.validate, errMsg = _a.errMsg, autoComplete = _a.autoComplete, helperText = _a.helperText, style = _a.style;
    var _d = useFormData({
        id: id,
        value: '',
        validate: validate,
        required: required,
    }), value = _d.value, error = _d.error, handleChange = _d.handleChange, handleBlur = _d.handleBlur, handleFocus = _d.handleFocus;
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { id: id, name: id, value: value || '#519839', onChange: handleChange, onBlur: handleBlur, onFocus: handleFocus, type: type, placeholder: placeholder, style: style, className: "flow-form-input " + className + "-input", required: required, autoComplete: autoComplete }),
        !error && React.createElement(HelperText, { id: id, helperText: helperText, className: className }),
        error && React.createElement(Error$1, { id: id, className: className, errMsg: errMsg })));
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
    return (React.createElement("label", { htmlFor: camelCase, className: "flow-form-label " + kebabCase + "-label", style: __assign({ display: "block", minHeight: '3.5em' }, style) },
        children,
        (function () {
            switch (type) {
                case 'text':
                    return React.createElement(Text, __assign({}, defaultProps));
                case 'number':
                    return React.createElement(Number, __assign({}, defaultProps));
                case 'email':
                    return React.createElement(Email, __assign({}, defaultProps));
                case 'password':
                    return React.createElement(Password, __assign({}, defaultProps));
                case 'tel':
                    return React.createElement(Tel, __assign({}, defaultProps));
                case 'url':
                    return React.createElement(Url, __assign({}, defaultProps));
                case 'textarea':
                    return React.createElement(TextArea, __assign({}, defaultProps));
                case 'color':
                    return React.createElement(Color, __assign({}, defaultProps));
                default:
                    return React.createElement(Text, __assign({}, defaultProps));
            }
        })()));
};

var Submit = function (_a) {
    var className = _a.className, title = _a.title;
    return (React.createElement("button", { type: "submit", className: "flow-form-submit " + className }, title ? title : "Submit"));
};

var ShowData = function (_a) {
    var style = _a.style;
    var _b = showFormData(), flow = _b.flow, currentStep = _b.currentStep, canStepProceed = _b.canStepProceed, data = _b.data, error = _b.error;
    return (React.createElement("pre", { className: "flow-form-show-data", style: style }, JSON.stringify({ flow: flow, currentStep: currentStep, canStepProceed: canStepProceed, data: data, error: error }, null, 2)));
};
ShowData.defaultProps = {
    flowComp: FFComponent.SHOW_DATA,
};

var FormContext = React.createContext({});
var ACTIONS$1;
(function (ACTIONS) {
    ACTIONS["SET_DEFAULT_VALUE"] = "SET_DEFAULT_VALUE";
    ACTIONS["UPDATE_VALUE"] = "UPDATE_VALUE";
    ACTIONS["UPDATE_BLUR"] = "UPDATE_BLUR";
    ACTIONS["CLEAR_FORM"] = "CLEAR_FORM";
})(ACTIONS$1 || (ACTIONS$1 = {}));

var Reset = function (_a) {
    var className = _a.className, title = _a.title;
    var clearForm = React.useContext(FormContext).clearForm;
    return (React.createElement("button", { type: "submit", className: "flow-form-reset " + className, onClick: clearForm }, title ? title : "Reset"));
};

exports.FlowForm = FlowForm;
exports.Input = Input;
exports.Reset = Reset;
exports.ShowData = ShowData;
exports.Step = Step;
exports.Submit = Submit;
//# sourceMappingURL=index.js.map
