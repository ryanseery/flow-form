import { createContext, useReducer, useMemo, createElement, useContext, useEffect, isValidElement, Fragment, Children, cloneElement } from 'react';

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
    isFlowForm: false,
    canProceed: false,
    flow: {
        key: 0,
        end: 0,
        currentStep: null,
        steps: [],
    },
    formData: {},
    error: {},
    showError: {},
    touched: {},
};
var Context = createContext({});
// TODO update Actions i.e. SET_BLUR, SET_FOCUS, PROGRESS_FORM, REVERT_FORM
// TODO redo input list for <FieldList />
var ACTIONS;
(function (ACTIONS) {
    ACTIONS["SET_FORM"] = "SET_FORM";
    ACTIONS["SET_FIELD"] = "SET_FIELD";
    ACTIONS["UPDATE_FIELD"] = "UPDATE_FIELD";
    ACTIONS["UPDATE_BLUR"] = "UPDATE_BLUR";
    ACTIONS["UPDATE_FOCUS"] = "UPDATE_FOCUS";
    ACTIONS["UPDATE_FORM"] = "UPDATE_FORM";
    ACTIONS["GO_BACK"] = "GO_BACK";
    ACTIONS["UPDATE_INPUT_LIST_ITEM"] = "UPDATE_INPUT_LIST_ITEM";
    ACTIONS["ADD_INPUT_LIST"] = "ADD_INPUT_LIST";
    ACTIONS["REMOVE_INPUT_LIST"] = "REMOVE_INPUT_LIST";
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
var goBack = function () { return ({
    type: ACTIONS.GO_BACK,
}); };
var updateInputListItem = function (_a) {
    var step = _a.step, id = _a.id, index = _a.index, name = _a.name, value = _a.value;
    return ({
        type: ACTIONS.UPDATE_INPUT_LIST_ITEM,
        step: step,
        id: id,
        index: index,
        name: name,
        value: value,
    });
};
var addInputList = function (_a) {
    var step = _a.step, id = _a.id, blankInput = _a.blankInput;
    return ({
        type: ACTIONS.ADD_INPUT_LIST,
        step: step,
        id: id,
        blankInput: blankInput,
    });
};
var removeInputList = function (_a) {
    var step = _a.step, id = _a.id, index = _a.index;
    return ({
        type: ACTIONS.REMOVE_INPUT_LIST,
        step: step,
        id: id,
        index: index,
    });
};
function reducer(state, action) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21;
    var _22, _23, _24, _25, _26, _27;
    switch (action.type) {
        case ACTIONS.SET_FORM: {
            var isFlowForm = action.isFlowForm, flow = action.flow;
            return __assign(__assign({}, state), { isFlowForm: isFlowForm, flow: flow });
        }
        case ACTIONS.SET_FIELD: {
            var step = action.step, id = action.id, value = action.value, error = action.error;
            if (step == null && !state.formData[id]) {
                return __assign(__assign({}, state), { formData: __assign(__assign({}, state.formData), (_a = {}, _a[id] = value, _a)), error: __assign(__assign({}, state.error), (_b = {}, _b[id] = error, _b)), showError: __assign(__assign({}, state.showError), (_c = {}, _c[id] = false, _c)), touched: __assign(__assign({}, state.touched), (_d = {}, _d[id] = false, _d)) });
            }
            else if (step != null && !((_23 = (_22 = state.formData) === null || _22 === void 0 ? void 0 : _22[step]) === null || _23 === void 0 ? void 0 : _23[id])) {
                return __assign(__assign({}, state), { formData: __assign(__assign({}, state.formData), (_e = {}, _e[step] = __assign(__assign({}, state.formData[step]), (_f = {}, _f[id] = value, _f)), _e)), error: __assign(__assign({}, state.error), (_g = {}, _g[step] = __assign(__assign({}, state.error[step]), (_h = {}, _h[id] = error, _h)), _g)), showError: __assign(__assign({}, state.showError), (_j = {}, _j[step] = __assign(__assign({}, state.showError[step]), (_k = {}, _k[id] = false, _k)), _j)), touched: __assign(__assign({}, state.touched), (_l = {}, _l[step] = __assign(__assign({}, state.touched[step]), (_m = {}, _m[id] = false, _m)), _l)) });
            }
            else {
                return state;
            }
        }
        case ACTIONS.UPDATE_FIELD: {
            var step = action.step, id = action.id, value = action.value, error = action.error;
            if (step == null) {
                return __assign(__assign({}, state), { canProceed: Object.entries(__assign(__assign({}, state.error), (_o = {}, _o[id] = error, _o))).every(function (_a) {
                        var _ = _a[0], v = _a[1];
                        return v === false;
                    }), formData: __assign(__assign({}, state.formData), (_p = {}, _p[id] = value, _p)), error: __assign(__assign({}, state.error), (_q = {}, _q[id] = error, _q)), showError: __assign(__assign({}, state.showError), (_r = {}, _r[id] = error, _r)) });
            }
            else if (step != null) {
                return __assign(__assign({}, state), { canProceed: Object.entries(__assign(__assign({}, state.error[step]), (_s = {}, _s[id] = error, _s))).every(function (_a) {
                        var _ = _a[0], v = _a[1];
                        return v === false;
                    }), formData: __assign(__assign({}, state.formData), (_t = {}, _t[step] = __assign(__assign({}, state.formData[step]), (_u = {}, _u[id] = value, _u)), _t)), error: __assign(__assign({}, state.error), (_v = {}, _v[step] = __assign(__assign({}, state.error[step]), (_w = {}, _w[id] = error, _w)), _v)), showError: __assign(__assign({}, state.showError), (_x = {}, _x[step] = __assign(__assign({}, state.showError[step]), (_y = {}, _y[id] = error, _y)), _x)) });
            }
            else {
                return state;
            }
        }
        case ACTIONS.UPDATE_BLUR: {
            var step = action.step, id = action.id, showError = action.showError;
            if (step == null) {
                return __assign(__assign({}, state), { canProceed: Object.entries(__assign(__assign({}, state.error), (_z = {}, _z[id] = showError, _z))).every(function (_a) {
                        var _ = _a[0], v = _a[1];
                        return v === false;
                    }), error: __assign(__assign({}, state.error), (_0 = {}, _0[id] = showError, _0)), showError: __assign(__assign({}, state.showError), (_1 = {}, _1[id] = showError, _1)), touched: __assign(__assign({}, state.touched), (_2 = {}, _2[id] = false, _2)) });
            }
            else if (step != null) {
                return __assign(__assign({}, state), { canProceed: Object.entries(__assign(__assign({}, state.error[step]), (_3 = {}, _3[id] = showError, _3))).every(function (_a) {
                        var _ = _a[0], v = _a[1];
                        return v === false;
                    }), error: __assign(__assign({}, state.error), (_4 = {}, _4[step] = __assign(__assign({}, state.error[step]), (_5 = {}, _5[id] = showError, _5)), _4)), showError: __assign(__assign({}, state.showError), (_6 = {}, _6[step] = __assign(__assign({}, state.showError[step]), (_7 = {}, _7[id] = showError, _7)), _6)), touched: __assign(__assign({}, state.touched), (_8 = {}, _8[step] = __assign(__assign({}, state.touched[step]), (_9 = {}, _9[id] = false, _9)), _8)) });
            }
            else {
                return state;
            }
        }
        case ACTIONS.UPDATE_FOCUS: {
            var step = action.step, id = action.id;
            if (step == null) {
                return __assign(__assign({}, state), { touched: __assign(__assign({}, state.touched), (_10 = {}, _10[id] = true, _10)) });
            }
            else if (step != null) {
                return __assign(__assign({}, state), { touched: __assign(__assign({}, state.touched), (_11 = {}, _11[step] = __assign(__assign({}, state.touched[step]), (_12 = {}, _12[id] = true, _12)), _11)) });
            }
            else {
                return state;
            }
        }
        case ACTIONS.UPDATE_FORM: {
            var key = state.flow.key + 1;
            return __assign(__assign({}, state), { flow: __assign(__assign({}, state.flow), { key: key, currentStep: (_25 = (_24 = state === null || state === void 0 ? void 0 : state.flow) === null || _24 === void 0 ? void 0 : _24.steps) === null || _25 === void 0 ? void 0 : _25[key] }) });
        }
        case ACTIONS.GO_BACK: {
            var key = state.flow.key - 1;
            return __assign(__assign({}, state), { flow: __assign(__assign({}, state.flow), { key: key, currentStep: (_27 = (_26 = state === null || state === void 0 ? void 0 : state.flow) === null || _26 === void 0 ? void 0 : _26.steps) === null || _27 === void 0 ? void 0 : _27[key] }) });
        }
        case ACTIONS.UPDATE_INPUT_LIST_ITEM: {
            var step = action.step, id = action.id, index = action.index, name_1 = action.name, value = action.value;
            if (step == null) {
                var mutable = __spreadArrays(state.formData[id]);
                mutable[index][name_1] = value;
                return __assign(__assign({}, state), { formData: __assign(__assign({}, state.formData), (_13 = {}, _13[id] = __spreadArrays(mutable), _13)) });
            }
            else if (step != null) {
                var mutable = __spreadArrays(state.formData[step][id]);
                mutable[index][name_1] = value;
                return __assign(__assign({}, state), { formData: __assign(__assign({}, state.formData), (_14 = {}, _14[step] = __assign(__assign({}, state.formData[step]), (_15 = {}, _15[id] = __spreadArrays(mutable), _15)), _14)) });
            }
            else {
                return state;
            }
        }
        case ACTIONS.ADD_INPUT_LIST: {
            var step = action.step, id = action.id, blankInput = action.blankInput;
            if (step == null) {
                return __assign(__assign({}, state), { formData: __assign(__assign({}, state.formData), (_16 = {}, _16[id] = __spreadArrays(state.formData[id], [__assign({}, blankInput)]), _16)) });
            }
            else if (step != null) {
                return __assign(__assign({}, state), { formData: __assign(__assign({}, state.formData), (_17 = {}, _17[step] = __assign(__assign({}, state.formData[step]), (_18 = {}, _18[id] = __spreadArrays(state.formData[step][id], [__assign({}, blankInput)]), _18)), _17)) });
            }
            else {
                return state;
            }
        }
        case ACTIONS.REMOVE_INPUT_LIST: {
            var step = action.step, id = action.id, index_1 = action.index;
            if (step == null) {
                var updatedArr = state.formData[id].filter(function (_, i) { return i !== index_1; });
                return __assign(__assign({}, state), { formData: __assign(__assign({}, state.formData), (_19 = {}, _19[id] = __spreadArrays(updatedArr), _19)) });
            }
            else if (step != null) {
                var updatedArr = state.formData[step][id].filter(function (_, i) { return i !== index_1; });
                return __assign(__assign({}, state), { formData: __assign(__assign({}, state.formData), (_20 = {}, _20[step] = __assign(__assign({}, state.formData[step]), (_21 = {}, _21[id] = __spreadArrays(updatedArr), _21)), _20)) });
            }
            else {
                return state;
            }
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
            goBack: function () { return dispatch(goBack()); },
            updateInputListItem: function (_a) {
                var step = _a.step, id = _a.id, index = _a.index, name = _a.name, value = _a.value;
                return dispatch(updateInputListItem({ step: step, id: id, index: index, name: name, value: value }));
            },
            addInputList: function (_a) {
                var step = _a.step, id = _a.id, blankInput = _a.blankInput;
                return dispatch(addInputList({ step: step, id: id, blankInput: blankInput }));
            },
            removeInputList: function (_a) {
                var step = _a.step, id = _a.id, index = _a.index;
                return dispatch(removeInputList({ step: step, id: id, index: index }));
            },
        };
    }, []);
    return createElement(Context.Provider, { value: __assign(__assign({}, state), actions) }, children);
};

var FFComponent;
(function (FFComponent) {
    FFComponent["FORM"] = "FORM";
    FFComponent["FIELD"] = "FIELD";
    FFComponent["FIELD_LIST"] = "FIELD_LIST";
    FFComponent["ITEM"] = "ITEM";
    FFComponent["STEP"] = "STEP";
    FFComponent["SHOW_DATA"] = "SHOW_DATA";
    FFComponent["SUBMIT"] = "SUBMIT";
    FFComponent["TEXT"] = "TEXT";
    FFComponent["NUMBER"] = "NUMBER";
    FFComponent["COLOR"] = "COLOR";
    FFComponent["EMAIL"] = "EMAIL";
    FFComponent["PASSWORD"] = "PASSWORD";
    FFComponent["TEL"] = "TEL";
    FFComponent["TEXTAREA"] = "TEXTAREA";
    FFComponent["URL"] = "URL";
    FFComponent["SELECT"] = "SELECT";
    FFComponent["LIST_BUTTON"] = "LIST_BUTTON";
    FFComponent["ROW"] = "ROW";
    FFComponent["ITEM_INPUT"] = "ITEM_INPUT";
    FFComponent["PROGRESS"] = "PROGRESS";
    FFComponent["DOUGHNUT"] = "DOUGHNUT";
    FFComponent["DEFAULT_SUBMIT"] = "DEFAULT_SUBMIT";
    FFComponent["DEFAULT_NEXT"] = "DEFAULT_NEXT";
    FFComponent["DEFAULT_BACK"] = "DEFAULT_BACK";
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

var DefaultSubmit = function (_a) {
    var disabled = _a.disabled;
    return (createElement("button", { type: "submit", className: "flow-form-submit-btm", disabled: disabled }, "Submit"));
};
DefaultSubmit.defaultProps = {
    ffComp: FFComponent.DEFAULT_SUBMIT,
};

var DefaultNext = function (_a) {
    var disabled = _a.disabled, onClick = _a.onClick;
    return (createElement("button", { type: "button", className: "flow-form-next-btn", disabled: disabled, onClick: onClick }, "Next"));
};
DefaultNext.defaultProps = {
    ffComp: FFComponent.DEFAULT_NEXT,
};

var DefaultBack = function (_a) {
    var onClick = _a.onClick;
    return (createElement("button", { type: "button", className: "flow-form-back-btn", onClick: onClick }, "Back"));
};
DefaultBack.defaultProps = {
    ffComp: FFComponent.DEFAULT_BACK,
};

var Submit = function (_a) {
    var className = _a.className, label = _a.label;
    return (createElement("button", { type: "submit", className: "flow-form-submit-btn " + (className !== null && className !== void 0 ? className : '') }, label !== null && label !== void 0 ? label : "Submit"));
};
Submit.defaultProps = {
    ffComp: FFComponent.SUBMIT,
};

var colors = {
    blue: '#00A0DF',
    grey: '#E6E6E6',
    white: '#ffffff',
    green: '#4BBF6B',
    red: '#FF0000',
};

var Doughnut = function (_a) {
    var isActive = _a.isActive;
    return (createElement("span", { className: "flow-form-doughnut", style: {
            background: isActive
                ? "radial-gradient(circle, transparent 30%, " + colors.blue + " 40%)"
                : "radial-gradient(circle, transparent 30%, " + colors.grey + " 40%)",
            borderRadius: '80%',
            height: '15px',
            width: '18px',
            marginRight: '1px',
            paddingTop: '3px',
            fontSize: '1em',
            textAlign: 'center',
            color: "" + colors.white,
        } }));
};
Doughnut.defaultProps = {
    ffComp: FFComponent.DOUGHNUT,
};
var Progress = function (_a) {
    var steps = _a.steps, currentStep = _a.currentStep;
    return (createElement("div", { className: "flow-form-progress", style: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: "1px solid " + colors.grey,
            paddingBottom: '5px',
            marginBottom: '5px',
        } }, steps === null || steps === void 0 ? void 0 : steps.map(function (step) { return (createElement("div", { key: step.id, className: "flow-form-label-container", style: { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' } },
        createElement(Doughnut, { isActive: step.index === (currentStep === null || currentStep === void 0 ? void 0 : currentStep.index) }),
        createElement("span", { className: "flow-form-label", style: {
                color: step.index === (currentStep === null || currentStep === void 0 ? void 0 : currentStep.index) ? "" + colors.blue : "" + colors.grey,
                fontSize: '1em',
            } }, step.label))); })));
};
Progress.defaultProps = {
    ffComp: FFComponent.PROGRESS,
};

// TODO clean up with toArray(children).reduce
function handleChildArr(children) {
    var arr = [];
    Children.map(children, function (child, index) {
        if (isValidElement(child)) {
            if (child.props.ffComp === FFComponent.STEP) {
                arr.push({ id: toCamelCase(child.props.label), label: child.props.label, index: index });
            }
        }
    });
    return arr;
}
function handleChildObj(children) {
    if (isValidElement(children)) {
        return [{ id: toCamelCase(children.props.label), label: children.props.label, index: 0 }];
    }
    else {
        return [];
    }
}
var Form = function (_a) {
    var children = _a.children, onSubmit = _a.onSubmit, className = _a.className, style = _a.style;
    var _b, _c;
    var _d = useContext(Context), isFlowForm = _d.isFlowForm, canProceed = _d.canProceed, flow = _d.flow, formData = _d.formData, setForm = _d.setForm, updateForm = _d.updateForm, goBack = _d.goBack;
    useEffect(function () {
        var steps = Array.isArray(children) ? handleChildArr(children) : handleChildObj(children);
        setForm({
            isFlowForm: (steps === null || steps === void 0 ? void 0 : steps.length) !== 0,
            flow: {
                key: 0,
                end: steps.length > 0 ? steps.length - 1 : 0,
                steps: steps,
                currentStep: steps.length !== 0 ? steps[0] : null,
            },
        });
    }, []);
    var isThereShowData = useMemo(function () {
        return Array.isArray(children) &&
            children.filter(function (child) {
                return isValidElement(child) && child.props.ffComp === FFComponent.SHOW_DATA ? child : null;
            });
    }, []);
    return (createElement("form", { onSubmit: function (e) {
            e.preventDefault();
            onSubmit(formData);
        }, className: "flow-form " + className, style: style },
        createElement("fieldset", { style: { border: "none" } },
            isFlowForm && createElement(Progress, { steps: flow.steps, currentStep: flow.currentStep }),
            createElement(Fragment, null, Array.isArray(children) ? children[flow.key] : children),
            isFlowForm ? (createElement(Fragment, null,
                flow.currentStep != null && ((_b = flow.currentStep) === null || _b === void 0 ? void 0 : _b.index) > 0 && createElement(DefaultBack, { onClick: function () { return goBack(); } }),
                flow.end !== ((_c = flow.currentStep) === null || _c === void 0 ? void 0 : _c.index) ? (createElement(DefaultNext, { disabled: !canProceed, onClick: function () { return updateForm(); } })) : (createElement(DefaultSubmit, { disabled: !canProceed })))) : (createElement(DefaultSubmit, { disabled: !canProceed })),
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
    var children = _a.children, name = _a.name, label = _a.label, className = _a.className, style = _a.style;
    if (!label) {
        throw new Error("The label prop is mandatory on Step Component.");
    }
    return (createElement("div", { "data-step-id": toCamelCase(name ? name : label), className: "flow-form-step " + className, style: style }, Children.map(children, function (child, index) {
        if (isValidElement(child)) {
            return cloneElement(child, {
                index: index,
                step: toCamelCase(name ? name : label),
            });
        }
        else {
            return child;
        }
    })));
};
Step.defaultProps = {
    ffComp: FFComponent.STEP,
};

function useFormData(_a) {
    var step = _a.step, id = _a.id, value = _a.value, required = _a.required, validation = _a.validation;
    var _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var _l = useContext(Context), setField = _l.setField, formData = _l.formData, error = _l.error, updateField = _l.updateField, updateBlur = _l.updateBlur, updateFocus = _l.updateFocus, showError = _l.showError, flow = _l.flow;
    useEffect(function () {
        setField({ step: step, id: id, value: value, error: required || validation ? true : false });
    }, [step, id, flow.currentStep, flow.key]);
    function validate(e) {
        if (required || validation) {
            return validation ? validation(e) : !e.target.value;
        }
        return false;
    }
    var onChange = function (e) {
        e.persist();
        updateField({
            step: step,
            id: e.target.name,
            value: e.target.type === 'number' ? parseFloat(e.target.value) : e.target.value,
            error: validate(e),
        });
    };
    var onBlur = function (e) {
        e.preventDefault();
        updateBlur({ step: step, id: id, showError: validate(e) });
    };
    var onFocus = function (e) {
        e.preventDefault();
        updateFocus({ step: step, id: id });
    };
    // TODO clean this mess up
    return {
        value: isObjectEmpty(formData) ? '' : step != null ? (_c = (_b = formData === null || formData === void 0 ? void 0 : formData[step]) === null || _b === void 0 ? void 0 : _b[id]) !== null && _c !== void 0 ? _c : '' : (_d = formData === null || formData === void 0 ? void 0 : formData[id]) !== null && _d !== void 0 ? _d : '',
        error: isObjectEmpty(error) ? false : step != null ? (_f = (_e = error === null || error === void 0 ? void 0 : error[step]) === null || _e === void 0 ? void 0 : _e[id]) !== null && _f !== void 0 ? _f : false : (_g = error === null || error === void 0 ? void 0 : error[id]) !== null && _g !== void 0 ? _g : false,
        showError: isObjectEmpty(showError)
            ? false
            : step != null
                ? (_j = (_h = showError === null || showError === void 0 ? void 0 : showError[step]) === null || _h === void 0 ? void 0 : _h[id]) !== null && _j !== void 0 ? _j : false : (_k = showError === null || showError === void 0 ? void 0 : showError[id]) !== null && _k !== void 0 ? _k : false,
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
    var step = _a.step, id = _a.id, _b = _a.type, type = _b === void 0 ? 'text' : _b, _c = _a.required, required = _c === void 0 ? false : _c, validation = _a.validation, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg;
    var _d = useFormData({ step: step, id: id, value: '', required: required, validation: validation }), value = _d.value, onChange = _d.onChange, onBlur = _d.onBlur, onFocus = _d.onFocus, showError = _d.showError;
    return (createElement(Fragment, null,
        createElement("input", { id: id + "-field-text", "data-input-id": id + "-field-text", name: id, type: type, value: value || '', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-text " + className + "-field", placeholder: placeholder, autoComplete: autoComplete, style: style }),
        showError && createElement(Error$1, { id: id, className: className, label: label, errMsg: errMsg })));
};
Text.defaultProps = {
    ffComp: FFComponent.TEXT,
};

var Number = function (_a) {
    var step = _a.step, id = _a.id, type = _a.type, _b = _a.required, required = _b === void 0 ? false : _b, validation = _a.validation, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg;
    var _c = useFormData({ step: step, id: id, value: '', required: required, validation: validation }), value = _c.value, onChange = _c.onChange, onBlur = _c.onBlur, onFocus = _c.onFocus, showError = _c.showError;
    return (createElement(Fragment, null,
        createElement("input", { id: id + "-field-number", "data-input-id": id + "-field-number", name: id, type: type, value: value || '', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-number " + className + "-field", placeholder: placeholder, autoComplete: autoComplete, style: style }),
        showError && createElement(Error$1, { id: id, className: className, label: label, errMsg: errMsg })));
};
Number.defaultProps = {
    ffComp: FFComponent.NUMBER,
};

var Email = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.type, type = _b === void 0 ? 'email' : _b, _c = _a.required, required = _c === void 0 ? false : _c, validation = _a.validation, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg;
    var _d = useFormData({ step: step, id: id, value: '', required: required, validation: validation }), value = _d.value, onChange = _d.onChange, onBlur = _d.onBlur, onFocus = _d.onFocus, showError = _d.showError;
    return (createElement(Fragment, null,
        createElement("input", { id: id + "-field-email", "data-input-id": id + "-field-email", name: id, type: type, value: value || '', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-email " + className + "-field", placeholder: placeholder, autoComplete: autoComplete, style: style }),
        showError && createElement(Error$1, { id: id, className: className, label: label, errMsg: errMsg })));
};
Email.defaultProps = {
    ffComp: FFComponent.EMAIL,
};

var Password = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.type, type = _b === void 0 ? 'password' : _b, _c = _a.required, required = _c === void 0 ? false : _c, validation = _a.validation, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg;
    var _d = useFormData({ step: step, id: id, value: '', required: required, validation: validation }), value = _d.value, onChange = _d.onChange, onBlur = _d.onBlur, onFocus = _d.onFocus, showError = _d.showError;
    return (createElement(Fragment, null,
        createElement("input", { id: id + "-field-password", "data-input-id": id + "-field-password", name: id, type: type, value: value || '', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-password " + className + "-field", placeholder: placeholder, autoComplete: autoComplete, style: style }),
        showError && createElement(Error$1, { id: id, className: className, label: label, errMsg: errMsg })));
};
Password.defaultProps = {
    ffComp: FFComponent.PASSWORD,
};

var Tel = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.type, type = _b === void 0 ? 'text' : _b, _c = _a.required, required = _c === void 0 ? false : _c, validation = _a.validation, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg, _d = _a.pattern, pattern = _d === void 0 ? '[0-9]{3}-[0-9]{2}-[0-9]{3}' : _d;
    var _e = useFormData({ step: step, id: id, value: '', required: required, validation: validation }), value = _e.value, onChange = _e.onChange, onBlur = _e.onBlur, onFocus = _e.onFocus, showError = _e.showError;
    return (createElement(Fragment, null,
        createElement("input", { id: id + "-field-tel", "data-input-id": id + "-field-tel", name: id, type: type, value: value || '', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-tel " + className + "-field", placeholder: placeholder, autoComplete: autoComplete, style: style, pattern: pattern }),
        showError && createElement(Error$1, { id: id, className: className, label: label, errMsg: errMsg })));
};
Tel.defaultProps = {
    ffComp: FFComponent.TEL,
};

var Url = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.type, type = _b === void 0 ? 'text' : _b, _c = _a.required, required = _c === void 0 ? false : _c, validation = _a.validation, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg, _d = _a.pattern, pattern = _d === void 0 ? 'https://.*' : _d;
    var _e = useFormData({ step: step, id: id, value: '', required: required, validation: validation }), value = _e.value, onChange = _e.onChange, onBlur = _e.onBlur, onFocus = _e.onFocus, showError = _e.showError;
    return (createElement(Fragment, null,
        createElement("input", { id: id + "-filed-url", "data-input-id": id + "-field-url", name: id, type: type, value: value || '', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-url " + className + "-field", placeholder: placeholder, autoComplete: autoComplete, style: style, pattern: pattern }),
        showError && createElement(Error$1, { id: id, className: className, label: label, errMsg: errMsg })));
};
Url.defaultProps = {
    ffComp: FFComponent.URL,
};

var Color = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.type, type = _b === void 0 ? 'color' : _b, _c = _a.required, required = _c === void 0 ? false : _c, validation = _a.validation, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg;
    var _d = useFormData({ step: step, id: id, value: '', required: required, validation: validation }), value = _d.value, onChange = _d.onChange, onBlur = _d.onBlur, onFocus = _d.onFocus, showError = _d.showError;
    return (createElement(Fragment, null,
        createElement("input", { id: id + "-field-color", "data-input-id": id + "-field-color", name: id, type: type, value: value || '#519839', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-color " + className + "-field", placeholder: placeholder, autoComplete: autoComplete, style: style }),
        showError && createElement(Error$1, { id: id, className: className, label: label, errMsg: errMsg })));
};
Color.defaultProps = {
    ffComp: FFComponent.COLOR,
};

var TextArea = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.required, required = _b === void 0 ? false : _b, validation = _a.validation, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg, _c = _a.rows, rows = _c === void 0 ? 4 : _c, _d = _a.cols, cols = _d === void 0 ? 20 : _d;
    var _e = useFormData({ step: step, id: id, value: '', required: required, validation: validation }), value = _e.value, onChange = _e.onChange, onBlur = _e.onBlur, onFocus = _e.onFocus, showError = _e.showError;
    return (createElement(Fragment, null,
        createElement("textarea", { id: id + "-field-textarea", "data-input-id": id + "-field-textarea", name: id, value: value || '', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-textarea " + className + "-field", placeholder: placeholder, autoComplete: autoComplete, style: style, rows: rows, cols: cols }),
        showError && createElement(Error$1, { id: id, className: className, label: label, errMsg: errMsg })));
};
TextArea.defaultProps = {
    ffComp: FFComponent.TEXTAREA,
};

var Select = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.required, required = _b === void 0 ? false : _b, validation = _a.validation, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg, options = _a.options;
    var _c = useFormData({ step: step, id: id, value: '', required: required, validation: validation }), value = _c.value, onChange = _c.onChange, onBlur = _c.onBlur, onFocus = _c.onFocus, showError = _c.showError;
    return (createElement(Fragment, null,
        createElement("select", { id: id + "-field-text", "data-input-id": id + "-field-text", name: id, value: value || '', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-text " + className + "-field", placeholder: placeholder, autoComplete: autoComplete, style: style }, options &&
            options.map(function (option) { return (createElement("option", { key: option.name, value: option.value }, option.name)); })),
        showError && createElement(Error$1, { id: id, className: className, label: label, errMsg: errMsg })));
};
Select.defaultProps = {
    ffComp: FFComponent.SELECT,
};

var Field = function (_a) {
    var step = _a.step, index = _a.index, name = _a.name, type = _a.type, children = _a.children, style = _a.style, _b = _a.required, required = _b === void 0 ? false : _b, validation = _a.validation, _c = _a.autoComplete, autoComplete = _c === void 0 ? 'off' : _c, placeholder = _a.placeholder, errMsg = _a.errMsg, options = _a.options, inputs = _a.inputs;
    if (!name && !children) {
        throw new Error("Please provide a label(<Field>Label</Field>) or name prop(<Field name=\"label\" />).");
    }
    var id = name ? toCamelCase(name) : toCamelCase(children !== null && children !== void 0 ? children : '');
    var className = name ? toKebabCase(name) : toKebabCase(children !== null && children !== void 0 ? children : '');
    var defaultProps = {
        id: id,
        step: step,
        index: index,
        type: type,
        required: required,
        validation: validation,
        autoComplete: autoComplete,
        placeholder: placeholder,
        className: className,
        label: children !== null && children !== void 0 ? children : name,
        style: { display: "block" },
        errMsg: errMsg,
        options: options,
        inputs: inputs,
    };
    return (createElement("label", { id: id + "-label", "data-field-id": id + "-label", htmlFor: id, className: "flow-form-field " + className + "-label", style: __assign({ display: "block", minHeight: '4rem', textTransform: 'capitalize' }, style) },
        children ? children : name !== null && name !== void 0 ? name : '',
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
                case 'color':
                    return createElement(Color, __assign({}, defaultProps));
                case 'textarea':
                    return createElement(TextArea, __assign({}, defaultProps));
                case 'select':
                    return createElement(Select, __assign({}, defaultProps));
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

var ShowData = function (_a) {
    var style = _a.style, className = _a.className;
    var _b = useContext(Context), isFlowForm = _b.isFlowForm, canProceed = _b.canProceed, flow = _b.flow, formData = _b.formData, error = _b.error, touched = _b.touched, showError = _b.showError;
    return (createElement("pre", { className: "flow-form-show-data " + className, style: style }, JSON.stringify({ isFlowForm: isFlowForm, canProceed: canProceed, flow: flow, formData: formData, error: error, showError: showError, touched: touched }, null, 2)));
};
ShowData.defaultProps = {
    ffComp: FFComponent.SHOW_DATA,
};

var Item = function () { return createElement(Fragment, null); };
Item.defaultProps = {
    ffComp: FFComponent.ITEM,
};

var Row = function (_a) {
    var className = _a.className, children = _a.children;
    return (createElement("div", { className: "flow-form-field-row " + className, style: { display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: "10px" } }, children));
};
Row.defaultProps = {
    ffComp: FFComponent.ROW,
};

var ItemInput = function (_a) {
    var objKey = _a.objKey, fieldIndex = _a.fieldIndex, type = _a.type, value = _a.value, required = _a.required, autoComplete = _a.autoComplete, onChange = _a.onChange;
    return (createElement("input", { id: objKey + "-field-field-list-item-" + fieldIndex, "data-input-id": objKey + "-field-field-list-item-" + fieldIndex, name: objKey, type: type, value: value, required: required, onChange: onChange, 
        // onBlur={onBlur}
        // onFocus={onFocus}
        className: "flow-form-field flow-form-field-list-item " + objKey + "-field-list-item", placeholder: objKey, autoComplete: autoComplete, style: { marginRight: '5px' } }));
};
ItemInput.defaultProps = {
    ffComp: FFComponent.ITEM_INPUT,
};

var ListButton = function (_a) {
    var children = _a.children, onClick = _a.onClick, color = _a.color;
    return (createElement("button", { style: { backgroundColor: "" + color, color: "" + colors.white, border: 'none', fontSize: '1em', width: '1.5em' }, type: "button", onClick: onClick }, children));
};
ListButton.defaultProps = {
    ffComp: FFComponent.LIST_BUTTON,
};

function handleBlankArr(children) {
    return Children.toArray(children).reduce(function (acc, child) {
        var _a;
        var _b;
        return isValidElement(child)
            ? __assign(__assign({}, acc), (_a = {}, _a[toCamelCase(child.props.name ? child.props.name : (_b = child.props.children) !== null && _b !== void 0 ? _b : '')] = '', _a)) : acc;
    }, {});
}
function handleChildObj$1(children) {
    var _a;
    if (isValidElement(children)) {
        return [toCamelCase(children.props.name ? children.props.name : (_a = children.props.children) !== null && _a !== void 0 ? _a : '')];
    }
    else {
        return [];
    }
}
// TODO fix return type issues. should be IItem
function handleInputPropsArr(children) {
    return Children.toArray(children).reduce(function (acc, child) { return (isValidElement(child) ? __spreadArrays(acc, [__assign({}, child.props)]) : acc); }, []);
}
function handleInputPropsObj(children) {
    if (isValidElement(children)) {
        return [__assign({}, children.props)];
    }
    return [];
}
// TODO put state function code into own hook?
var FieldList = function (_a) {
    var step = _a.step, label = _a.label, name = _a.name, className = _a.className, style = _a.style, children = _a.children, add = _a.add;
    var _b;
    var _c = useContext(Context), flow = _c.flow, setField = _c.setField, formData = _c.formData, updateInputListItem = _c.updateInputListItem, addInputList = _c.addInputList, removeInputList = _c.removeInputList;
    if (!children) {
        throw new Error("<FieldList> expects to have <FieldList.Item> for child components.");
    }
    if (!label) {
        throw new Error("The label prop is mandatory on FieldList Component.");
    }
    var id = useMemo(function () { return toCamelCase(name ? name : label); }, [name, label]);
    var blankInput = useMemo(function () { return (Array.isArray(children) ? handleBlankArr(children) : handleChildObj$1(children)); }, []);
    var inputProps = useMemo(function () { return (Array.isArray(children) ? handleInputPropsArr(children) : handleInputPropsObj(children)); }, []);
    useEffect(function () {
        setField({
            step: step,
            id: id,
            value: [__assign({}, blankInput)],
            error: false,
        });
    }, [step, label, flow.currentStep, flow.key]);
    var handleChange = function (index) { return function (e) {
        var _a = e.target, type = _a.type, name = _a.name, value = _a.value;
        updateInputListItem({ step: step, id: id, index: index, name: name, value: type === 'number' ? parseFloat(value) : value });
    }; };
    return (createElement("label", { "data-field-list-id": id, className: "flow-form-field-list " + className, style: __assign(__assign({}, style), { textTransform: 'capitalize' }) },
        label,
        !isObjectEmpty(formData) && step != null ? (createElement(Fragment, null, (_b = formData === null || formData === void 0 ? void 0 : formData[step]) === null || _b === void 0 ? void 0 : _b[id].map(function (field, index) { return (createElement(Row, { key: index, className: className },
            Object.entries(field).map(function (_a, i) {
                var k = _a[0], v = _a[1];
                var _b, _c, _d;
                return (createElement(Fragment, { key: i },
                    createElement(ItemInput, { objKey: k, fieldIndex: i, type: (_b = inputProps === null || inputProps === void 0 ? void 0 : inputProps[i].type) !== null && _b !== void 0 ? _b : 'text', value: v || '', required: (_c = inputProps === null || inputProps === void 0 ? void 0 : inputProps[i].required) !== null && _c !== void 0 ? _c : false, onChange: handleChange(index), 
                        // onBlur={onBlur}
                        // onFocus={onFocus}
                        autoComplete: (_d = inputProps === null || inputProps === void 0 ? void 0 : inputProps[i].autoComplete) !== null && _d !== void 0 ? _d : 'off' })));
            }),
            add && (createElement(Fragment, null, index === 0 ? (createElement(ListButton, { color: colors.green, onClick: function () { return addInputList({ step: step, id: id, blankInput: blankInput !== null && blankInput !== void 0 ? blankInput : {} }); } }, "+")) : (createElement(ListButton, { color: colors.red, onClick: function () { return removeInputList({ step: step, id: id, index: index }); } }, "-")))))); }))) : (createElement(Fragment, null, !isObjectEmpty(formData) && (formData === null || formData === void 0 ? void 0 : formData[id].map(function (field, index) { return (createElement(Row, { key: index, className: className },
            Object.entries(field).map(function (_a, i) {
                var k = _a[0], v = _a[1];
                var _b, _c, _d;
                return (createElement(Fragment, { key: i },
                    createElement(ItemInput, { objKey: k, fieldIndex: i, type: (_b = inputProps === null || inputProps === void 0 ? void 0 : inputProps[i].type) !== null && _b !== void 0 ? _b : 'text', value: v || '', required: (_c = inputProps === null || inputProps === void 0 ? void 0 : inputProps[i].required) !== null && _c !== void 0 ? _c : false, onChange: handleChange(index), 
                        // onBlur={onBlur}
                        // onFocus={onFocus}
                        autoComplete: (_d = inputProps === null || inputProps === void 0 ? void 0 : inputProps[i].autoComplete) !== null && _d !== void 0 ? _d : 'off' })));
            }),
            add && (createElement(Fragment, null, index === 0 ? (createElement(ListButton, { color: colors.green, onClick: function () { return addInputList({ step: step, id: id, blankInput: blankInput !== null && blankInput !== void 0 ? blankInput : {} }); } }, "+")) : (createElement(ListButton, { color: colors.red, onClick: function () { return removeInputList({ step: step, id: id, index: index }); } }, "-")))))); }))))));
};
FieldList.defaultProps = {
    ffComp: FFComponent.FIELD_LIST,
};
FieldList.Item = Item;

export { Field, FieldList, FlowForm, ShowData, Step };
//# sourceMappingURL=index.es.js.map
