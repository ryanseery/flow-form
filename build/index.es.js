import { createElement, createContext, useReducer, useMemo, useContext, useEffect, Children, isValidElement, Fragment, cloneElement } from 'react';

var FFComponent;
(function (FFComponent) {
    FFComponent["FORM"] = "FORM";
    FFComponent["FIELD"] = "FIELD";
    FFComponent["STEP"] = "STEP";
    FFComponent["SHOW_DATA"] = "SHOW_DATA";
    FFComponent["TEXT"] = "TEXT";
    FFComponent["SUBMIT"] = "SUBMIT";
})(FFComponent || (FFComponent = {}));

var Submit = function (_a) {
    var className = _a.className, title = _a.title;
    return (createElement("button", { type: "submit", className: "flow-form-submit-btn " + (className !== null && className !== void 0 ? className : '') }, title !== null && title !== void 0 ? title : "Submit"));
};
Submit.defaultProps = {
    ffComp: FFComponent.SUBMIT,
};

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
    isFlowForm: false,
    canProceed: false,
    flow: {
        key: 0,
        end: 0,
        currentStep: null,
        steps: [],
    },
    data: {},
    error: {},
    showError: {},
    touched: {},
};
var Context = createContext({});
var ACTIONS;
(function (ACTIONS) {
    ACTIONS["SET_FORM"] = "SET_FORM";
    ACTIONS["SET_FIELD"] = "SET_FIELD";
    ACTIONS["UPDATE_FIELD"] = "UPDATE_FIELD";
    ACTIONS["UPDATE_BLUR"] = "UPDATE_BLUR";
    ACTIONS["UPDATE_FOCUS"] = "UPDATE_FOCUS";
    ACTIONS["UPDATE_FORM"] = "UPDATE_FORM";
})(ACTIONS || (ACTIONS = {}));
var setForm = function (_a) {
    var isFlowForm = _a.isFlowForm, flow = _a.flow;
    return ({
        type: ACTIONS.SET_FORM,
        isFlowForm: isFlowForm,
        flow: flow,
    });
};
var setInput = function (_a) {
    var step = _a.step, id = _a.id, value = _a.value, error = _a.error;
    return ({
        type: ACTIONS.SET_FIELD,
        step: step,
        id: id,
        value: value,
        error: error,
    });
};
var updateInput = function (_a) {
    var step = _a.step, id = _a.id, value = _a.value, error = _a.error;
    return ({
        type: ACTIONS.UPDATE_FIELD,
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
var updateFocus = function (_a) {
    var step = _a.step, id = _a.id;
    return ({
        type: ACTIONS.UPDATE_FOCUS,
        step: step,
        id: id,
    });
};
var updateForm = function () { return ({
    type: ACTIONS.UPDATE_FORM,
}); };
function reducer(state, action) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10;
    var _11, _12;
    switch (action.type) {
        case ACTIONS.SET_FORM: {
            var isFlowForm = action.isFlowForm, flow = action.flow;
            return __assign(__assign({}, state), { isFlowForm: isFlowForm, flow: flow });
        }
        case ACTIONS.SET_FIELD: {
            var step = action.step, id = action.id, value = action.value, error = action.error;
            if (step == null) {
                return __assign(__assign({}, state), { data: __assign(__assign({}, state.data), (_a = {}, _a[id] = value, _a)), error: __assign(__assign({}, state.error), (_b = {}, _b[id] = error, _b)), showError: __assign(__assign({}, state.showError), (_c = {}, _c[id] = false, _c)), touched: __assign(__assign({}, state.touched), (_d = {}, _d[id] = false, _d)) });
            }
            else if (step != null) {
                return __assign(__assign({}, state), { data: __assign(__assign({}, state.data), (_e = {}, _e[step] = __assign(__assign({}, state.data[step]), (_f = {}, _f[id] = value, _f)), _e)), error: __assign(__assign({}, state.error), (_g = {}, _g[step] = __assign(__assign({}, state.error[step]), (_h = {}, _h[id] = error, _h)), _g)), showError: __assign(__assign({}, state.showError), (_j = {}, _j[step] = __assign(__assign({}, state.showError[step]), (_k = {}, _k[id] = false, _k)), _j)), touched: __assign(__assign({}, state.touched), (_l = {}, _l[step] = __assign(__assign({}, state.touched[step]), (_m = {}, _m[id] = false, _m)), _l)) });
            }
            else {
                return state;
            }
        }
        case ACTIONS.UPDATE_FIELD: {
            var step = action.step, id = action.id, value = action.value, error = action.error;
            if (step == null) {
                return __assign(__assign({}, state), { data: __assign(__assign({}, state.data), (_o = {}, _o[id] = value, _o)), error: __assign(__assign({}, state.error), (_p = {}, _p[id] = error, _p)), showError: __assign(__assign({}, state.showError), (_q = {}, _q[id] = error, _q)) });
            }
            else if (step != null) {
                return __assign(__assign({}, state), { canProceed: Object.entries(__assign(__assign({}, state.error[step]), (_r = {}, _r[id] = error, _r))).every(function (_a) {
                        var _ = _a[0], v = _a[1];
                        return v === false;
                    }), data: __assign(__assign({}, state.data), (_s = {}, _s[step] = __assign(__assign({}, state.data[step]), (_t = {}, _t[id] = value, _t)), _s)), error: __assign(__assign({}, state.error), (_u = {}, _u[step] = __assign(__assign({}, state.error[step]), (_v = {}, _v[id] = error, _v)), _u)), showError: __assign(__assign({}, state.showError), (_w = {}, _w[step] = __assign(__assign({}, state.showError[step]), (_x = {}, _x[id] = error, _x)), _w)) });
            }
            else {
                return state;
            }
        }
        case ACTIONS.UPDATE_BLUR: {
            var step = action.step, id = action.id, showError = action.showError;
            if (step == null) {
                return __assign(__assign({}, state), { error: __assign(__assign({}, state.error), (_y = {}, _y[id] = showError, _y)), showError: __assign(__assign({}, state.showError), (_z = {}, _z[id] = showError, _z)), touched: __assign(__assign({}, state.touched), (_0 = {}, _0[id] = false, _0)) });
            }
            else if (step != null) {
                return __assign(__assign({}, state), { canProceed: Object.entries(__assign(__assign({}, state.error[step]), (_1 = {}, _1[id] = showError, _1))).every(function (_a) {
                        var _ = _a[0], v = _a[1];
                        return v === false;
                    }), error: __assign(__assign({}, state.error), (_2 = {}, _2[step] = __assign(__assign({}, state.error[step]), (_3 = {}, _3[id] = showError, _3)), _2)), showError: __assign(__assign({}, state.showError), (_4 = {}, _4[step] = __assign(__assign({}, state.showError[step]), (_5 = {}, _5[id] = showError, _5)), _4)), touched: __assign(__assign({}, state.touched), (_6 = {}, _6[step] = __assign(__assign({}, state.touched[step]), (_7 = {}, _7[id] = false, _7)), _6)) });
            }
            else {
                return state;
            }
        }
        case ACTIONS.UPDATE_FOCUS: {
            var step = action.step, id = action.id;
            if (step == null) {
                return __assign(__assign({}, state), { touched: __assign(__assign({}, state.touched), (_8 = {}, _8[id] = true, _8)) });
            }
            else if (step != null) {
                return __assign(__assign({}, state), { touched: __assign(__assign({}, state.touched), (_9 = {}, _9[step] = __assign(__assign({}, state.touched[step]), (_10 = {}, _10[id] = true, _10)), _9)) });
            }
            else {
                return state;
            }
        }
        case ACTIONS.UPDATE_FORM: {
            var key = state.flow.key + 1;
            return __assign(__assign({}, state), { flow: __assign(__assign({}, state.flow), { key: key, currentStep: (_12 = (_11 = state === null || state === void 0 ? void 0 : state.flow) === null || _11 === void 0 ? void 0 : _11.steps) === null || _12 === void 0 ? void 0 : _12[key] }) });
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
            setForm: function (_a) {
                var isFlowForm = _a.isFlowForm, flow = _a.flow;
                return dispatch(setForm({ isFlowForm: isFlowForm, flow: flow }));
            },
            setField: function (_a) {
                var step = _a.step, id = _a.id, value = _a.value, error = _a.error;
                return dispatch(setInput({ step: step, id: id, value: value, error: error }));
            },
            updateField: function (_a) {
                var step = _a.step, id = _a.id, value = _a.value, error = _a.error;
                return dispatch(updateInput({ step: step, id: id, value: value, error: error }));
            },
            updateBlur: function (_a) {
                var step = _a.step, id = _a.id, showError = _a.showError;
                return dispatch(updateBlur({ step: step, id: id, showError: showError }));
            },
            updateFocus: function (_a) {
                var step = _a.step, id = _a.id;
                return dispatch(updateFocus({ step: step, id: id }));
            },
            updateForm: function () { return dispatch(updateForm()); },
        };
    }, []);
    return createElement(Context.Provider, { value: __assign(__assign({}, state), actions) }, children);
};

var ShowData = function (_a) {
    var style = _a.style;
    var _b = useContext(Context), isFlowForm = _b.isFlowForm, canProceed = _b.canProceed, flow = _b.flow, data = _b.data, error = _b.error, touched = _b.touched, showError = _b.showError;
    return (createElement("pre", { className: "flow-form-show-data", style: style }, JSON.stringify({ isFlowForm: isFlowForm, canProceed: canProceed, flow: flow, data: data, error: error, showError: showError, touched: touched }, null, 2)));
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

// TODO find out why undefined an null are an expected return type
function handleChildArr(children) {
    return Children.map(children, function (child, index) {
        if (!isValidElement(child)) {
            return null;
        }
        if (child.props.ffComp === FFComponent.STEP) {
            return { id: toCamelCase(child.props.title), title: child.props.title, index: index };
        }
        return null;
    });
}
// TODO find out why undefined an null are an expected return type
function handleChildObj(children) {
    if (!isValidElement(children)) {
        return [];
    }
    if (children.props.ffComp === FFComponent.STEP) {
        return [{ id: toCamelCase(children.props.title), title: children.props.title, index: 0 }];
    }
    return [];
}
var Form = function (_a) {
    var children = _a.children, onSubmit = _a.onSubmit, className = _a.className, style = _a.style;
    var _b, _c;
    var _d = useContext(Context), isFlowForm = _d.isFlowForm, canProceed = _d.canProceed, flow = _d.flow, data = _d.data, error = _d.error, setForm = _d.setForm, updateForm = _d.updateForm;
    console.log('FLOW: ', { isFlowForm: isFlowForm, flow: flow, data: data, error: error });
    // *** IF CURRENT STEP CHANGES? DEPENDENCY? ***
    useEffect(function () {
        var steps = Array.isArray(children) ? handleChildArr(children) : handleChildObj(children);
        setForm({
            isFlowForm: (steps === null || steps === void 0 ? void 0 : steps.length) !== 0,
            flow: {
                key: 0,
                end: Array.isArray(steps) ? steps.length - 1 : 0,
                steps: steps,
                currentStep: Array.isArray(steps) && steps.length !== 0 ? steps[0] : null,
            },
        });
    }, []);
    var isThereShowData = useMemo(function () {
        return Array.isArray(children) &&
            children.filter(function (child) {
                return isValidElement(child) && child.props.flowComp === FFComponent.SHOW_DATA ? child : null;
            });
    }, []);
    return (createElement("form", { onSubmit: function (e) {
            e.preventDefault();
            onSubmit(data);
        }, className: "flow-form " + className, style: style },
        createElement("fieldset", { style: { border: "none" } },
            createElement(Fragment, null, Array.isArray(children) ? children[flow.key] : children),
            !isFlowForm && (createElement("button", { type: "submit", className: "flow-form-submit-btn" }, "Submit")),
            isFlowForm && (createElement(Fragment, null,
                flow.currentStep != null && ((_b = flow.currentStep) === null || _b === void 0 ? void 0 : _b.index) > 0 && (createElement("button", { type: "button", className: "flow-form-back-btn" }, "Back")),
                flow.end !== ((_c = flow.currentStep) === null || _c === void 0 ? void 0 : _c.index) ? (createElement("button", { type: "button", className: "flow-form-next-btn", disabled: !canProceed, onClick: function () { return updateForm(); } }, canProceed ? "Next" : "Can't Proceed")) : (createElement("button", { type: "submit", className: "flow-form-submit-btm" }, "Submit")))),
            isThereShowData)));
};
Form.defaultProps = {
    ffComp: FFComponent.FORM,
};
var FlowForm = function (_a) {
    var children = _a.children, onSubmit = _a.onSubmit, className = _a.className, style = _a.style;
    return (createElement(Wrapper, null,
        createElement(Form, { onSubmit: onSubmit, className: className, style: style }, children)));
};

var Step = function (_a) {
    var children = _a.children, title = _a.title;
    if (!title) {
        throw new Error("The title prop is mandatory on Step Component");
    }
    return (createElement("div", { "data-step-id": toCamelCase(title), className: "flow-from-step " + (title && toKebabCase(title)) }, Children.map(children, function (child, index) {
        // if child is Field component we clone props into it
        if (isValidElement(child)) {
            return cloneElement(child, {
                index: index,
                step: toCamelCase(title),
            });
        }
        // else we return child naturally
        else {
            return child;
        }
    })));
};
Step.defaultProps = {
    ffComp: FFComponent.STEP,
};

function useFormData(_a) {
    var step = _a.step, id = _a.id, value = _a.value, required = _a.required, validate = _a.validate;
    var _b = useContext(Context), setField = _b.setField, data = _b.data, error = _b.error, updateField = _b.updateField, updateBlur = _b.updateBlur, updateFocus = _b.updateFocus, showError = _b.showError, flow = _b.flow;
    useEffect(function () {
        console.log('SET FIELD');
        setField({ step: step, id: id, value: value, error: required || validate ? true : false });
    }, [flow.key]);
    function validation(e) {
        if (required || validate) {
            return validate ? validate(e) : !e.target.value;
        }
        return false;
    }
    var onChange = function (e) {
        e.persist();
        updateField({
            step: step,
            id: e.target.name,
            value: e.target.type === 'number' ? parseFloat(e.target.value) : e.target.value,
            error: validation(e),
        });
    };
    var onBlur = function (e) {
        e.preventDefault();
        updateBlur({ step: step, id: id, showError: validation(e) });
    };
    var onFocus = function (e) {
        e.preventDefault();
        updateFocus({ step: step, id: id });
    };
    return {
        value: isObjectEmpty(data) ? '' : step != null ? data[step][id] : data[id],
        error: isObjectEmpty(error) ? '' : step != null ? error[step][id] : error[id],
        showError: isObjectEmpty(showError) ? false : step != null ? showError[step][id] : showError[id],
        onChange: onChange,
        onBlur: onBlur,
        onFocus: onFocus,
    };
}

var Error$1 = function (_a) {
    var id = _a.id, className = _a.className, label = _a.label, errMsg = _a.errMsg;
    return (createElement("small", { id: id + "-error", "data-error-id": id + "-error", className: "flow-form-error " + className + "-error", style: { color: "red" } }, typeof errMsg === 'string' ? errMsg : "Please provide a valid value for " + label));
};

var Text = function (_a) {
    var step = _a.step, id = _a.id, type = _a.type, _b = _a.required, required = _b === void 0 ? false : _b, validate = _a.validate, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg;
    var _c = useFormData({ step: step, id: id, value: '', required: required, validate: validate }), value = _c.value, onChange = _c.onChange, onBlur = _c.onBlur, onFocus = _c.onFocus, showError = _c.showError;
    return (createElement(Fragment, null,
        createElement("input", { id: id + "-input-text", "data-input-id": id + "-input-text", name: id, type: type, value: value || '', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-input flow-form-text " + className + "-input", placeholder: placeholder, autoComplete: autoComplete, style: style }),
        showError && createElement(Error$1, { id: id, className: className, label: label, errMsg: errMsg })));
};

var Number = function (_a) {
    var step = _a.step, id = _a.id, type = _a.type, _b = _a.required, required = _b === void 0 ? false : _b, validate = _a.validate, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg;
    var _c = useFormData({ step: step, id: id, value: '', required: required, validate: validate }), value = _c.value, onChange = _c.onChange, onBlur = _c.onBlur, onFocus = _c.onFocus, showError = _c.showError;
    return (createElement(Fragment, null,
        createElement("input", { id: id + "-input-number", "data-input-id": id + "-input-number", name: id, type: type, value: value || '', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-input flow-form-number " + className + "-input", placeholder: placeholder, autoComplete: autoComplete, style: style }),
        showError && createElement(Error$1, { id: id, className: className, label: label, errMsg: errMsg })));
};

var Field = function (_a) {
    var step = _a.step, index = _a.index, name = _a.name, type = _a.type, children = _a.children, style = _a.style, _b = _a.required, required = _b === void 0 ? false : _b, validate = _a.validate, autoComplete = _a.autoComplete, placeholder = _a.placeholder, errMsg = _a.errMsg;
    if (!name && !children) {
        throw new Error("Please provide a label(<Field>Label</Field>) or name prop(<Field name=\"label\" />).");
    }
    var id = children ? toCamelCase(children) : toCamelCase(name !== null && name !== void 0 ? name : '');
    var className = children ? toKebabCase(children) : toKebabCase(name !== null && name !== void 0 ? name : '');
    var defaultProps = {
        id: id,
        step: step,
        index: index,
        type: type,
        required: required,
        validate: validate,
        autoComplete: autoComplete,
        placeholder: placeholder,
        className: className,
        label: children !== null && children !== void 0 ? children : name,
        style: { display: "block" },
        errMsg: errMsg,
    };
    return (createElement("label", { id: id + "-label", "data-label-id": id + "-label", htmlFor: id, className: "flow-form-label " + className + "-label", style: __assign({ display: "block", minHeight: '4rem' }, style) }, children !== null && children !== void 0 ? children : name,
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
Field.defaultProps = {
    ffComp: FFComponent.FIELD,
    step: null,
    index: 0,
};

export { Field, FlowForm, Reset, ShowData, Step, Submit };
//# sourceMappingURL=index.es.js.map
