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
var Context = React.createContext({});
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
function reducer(state, action) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15;
    var _16, _17, _18, _19, _20, _21;
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
            else if (step != null && !((_17 = (_16 = state.formData) === null || _16 === void 0 ? void 0 : _16[step]) === null || _17 === void 0 ? void 0 : _17[id])) {
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
            return __assign(__assign({}, state), { flow: __assign(__assign({}, state.flow), { key: key, currentStep: (_19 = (_18 = state === null || state === void 0 ? void 0 : state.flow) === null || _18 === void 0 ? void 0 : _18.steps) === null || _19 === void 0 ? void 0 : _19[key] }) });
        }
        case ACTIONS.GO_BACK: {
            var key = state.flow.key - 1;
            return __assign(__assign({}, state), { flow: __assign(__assign({}, state.flow), { key: key, currentStep: (_21 = (_20 = state === null || state === void 0 ? void 0 : state.flow) === null || _20 === void 0 ? void 0 : _20.steps) === null || _21 === void 0 ? void 0 : _21[key] }) });
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
        default:
            throw new Error("Context Reducer Received Unrecognized Action!");
    }
}
var Wrapper = function (_a) {
    var children = _a.children;
    var _b = React.useReducer(reducer, initialState), state = _b[0], dispatch = _b[1];
    var actions = React.useMemo(function () {
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
        };
    }, []);
    return React.createElement(Context.Provider, { value: __assign(__assign({}, state), actions) }, children);
};

var FFComponent;
(function (FFComponent) {
    FFComponent["FORM"] = "FORM";
    FFComponent["FIELD"] = "FIELD";
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
    FFComponent["INPUT_LIST"] = "INPUT_LIST";
    FFComponent["ROW"] = "ROW";
    FFComponent["ITEM"] = "ITEM";
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

function generateId(str) {
    return Math.random()
        .toString(36)
        .replace('0.', str || '');
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

var DefaultSubmit = function (_a) {
    var disabled = _a.disabled;
    return (React.createElement("button", { type: "submit", className: "flow-form-submit-btm", disabled: disabled }, "Submit"));
};
DefaultSubmit.defaultProps = {
    ffComp: FFComponent.DEFAULT_SUBMIT,
};

var DefaultNext = function (_a) {
    var disabled = _a.disabled, onClick = _a.onClick;
    return (React.createElement("button", { type: "button", className: "flow-form-next-btn", disabled: disabled, onClick: onClick }, "Next"));
};
DefaultNext.defaultProps = {
    ffComp: FFComponent.DEFAULT_NEXT,
};

var DefaultBack = function (_a) {
    var onClick = _a.onClick;
    return (React.createElement("button", { type: "button", className: "flow-form-back-btn", onClick: onClick }, "Back"));
};
DefaultBack.defaultProps = {
    ffComp: FFComponent.DEFAULT_BACK,
};

var colors = {
    blue: '#00A0DF',
    grey: '#E6E6E6',
    white: '#ffffff',
};

var Doughnut = function (_a) {
    var isActive = _a.isActive;
    return (React.createElement("span", { className: "flow-form-doughnut", style: {
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
    return (React.createElement("div", { className: "flow-form-progress", style: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: "1px solid " + colors.grey,
            paddingBottom: '5px',
            marginBottom: '5px',
        } }, steps === null || steps === void 0 ? void 0 : steps.map(function (step) { return (React.createElement("div", { key: step.id, className: "flow-form-title-container", style: { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' } },
        React.createElement(Doughnut, { isActive: step.index === (currentStep === null || currentStep === void 0 ? void 0 : currentStep.index) }),
        React.createElement("span", { className: "flow-form-title", style: {
                color: step.index === (currentStep === null || currentStep === void 0 ? void 0 : currentStep.index) ? "" + colors.blue : "" + colors.grey,
                fontSize: '1em',
            } }, step.title))); })));
};
Progress.defaultProps = {
    ffComp: FFComponent.PROGRESS,
};

function handleChildArr(children) {
    var arr = [];
    React.Children.map(children, function (child, index) {
        if (React.isValidElement(child)) {
            if (child.props.ffComp === FFComponent.STEP) {
                arr.push({ id: toCamelCase(child.props.title), title: child.props.title, index: index });
            }
        }
    });
    return arr;
}
function handleChildObj(children) {
    if (React.isValidElement(children)) {
        return [{ id: toCamelCase(children.props.title), title: children.props.title, index: 0 }];
    }
    else {
        return [];
    }
}
var Form = function (_a) {
    var children = _a.children, onSubmit = _a.onSubmit, className = _a.className, style = _a.style;
    var _b, _c;
    var _d = React.useContext(Context), isFlowForm = _d.isFlowForm, canProceed = _d.canProceed, flow = _d.flow, formData = _d.formData, setForm = _d.setForm, updateForm = _d.updateForm, goBack = _d.goBack;
    React.useEffect(function () {
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
    var isThereShowData = React.useMemo(function () {
        return Array.isArray(children) &&
            children.filter(function (child) {
                return React.isValidElement(child) && child.props.ffComp === FFComponent.SHOW_DATA ? child : null;
            });
    }, []);
    return (React.createElement("form", { onSubmit: function (e) {
            e.preventDefault();
            onSubmit(formData);
        }, className: "flow-form " + className, style: style },
        React.createElement("fieldset", { style: { border: "none" } },
            isFlowForm && React.createElement(Progress, { steps: flow.steps, currentStep: flow.currentStep }),
            React.createElement(React.Fragment, null, Array.isArray(children) ? children[flow.key] : children),
            isFlowForm ? (React.createElement(React.Fragment, null,
                flow.currentStep != null && ((_b = flow.currentStep) === null || _b === void 0 ? void 0 : _b.index) > 0 && React.createElement(DefaultBack, { onClick: function () { return goBack(); } }),
                flow.end !== ((_c = flow.currentStep) === null || _c === void 0 ? void 0 : _c.index) ? (React.createElement(DefaultNext, { disabled: !canProceed, onClick: function () { return updateForm(); } })) : (React.createElement(DefaultSubmit, { disabled: !canProceed })))) : (React.createElement(DefaultSubmit, { disabled: !canProceed })),
            isThereShowData)));
};
Form.defaultProps = {
    ffComp: FFComponent.FORM,
};
var FlowForm = function (_a) {
    var children = _a.children, onSubmit = _a.onSubmit, className = _a.className, style = _a.style;
    return (React.createElement(Wrapper, null,
        React.createElement(Form, { onSubmit: onSubmit, className: className, style: style }, children)));
};

var Step = function (_a) {
    var children = _a.children, title = _a.title, style = _a.style;
    if (!title) {
        throw new Error("The title prop is mandatory on Step Component");
    }
    return (React.createElement("div", { "data-step-id": toCamelCase(title), className: "flow-from-step " + (title && toKebabCase(title)), style: style }, React.Children.map(children, function (child, index) {
        // if child is Field component we clone props into it
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
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
    var _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var _l = React.useContext(Context), setField = _l.setField, formData = _l.formData, error = _l.error, updateField = _l.updateField, updateBlur = _l.updateBlur, updateFocus = _l.updateFocus, showError = _l.showError, flow = _l.flow;
    React.useEffect(function () {
        setField({ step: step, id: id, value: value, error: required || validate ? true : false });
    }, [step, id, flow.currentStep, flow.key]);
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
    return (React.createElement("small", { id: id + "-error", "data-error-id": id + "-error", className: "flow-form-error " + className + "-error", style: { color: "red" } }, typeof errMsg === 'string' ? errMsg : "Please provide a valid value for " + label));
};

var Text = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.type, type = _b === void 0 ? 'text' : _b, _c = _a.required, required = _c === void 0 ? false : _c, validate = _a.validate, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg;
    var _d = useFormData({ step: step, id: id, value: '', required: required, validate: validate }), value = _d.value, onChange = _d.onChange, onBlur = _d.onBlur, onFocus = _d.onFocus, showError = _d.showError;
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { id: id + "-field-text", "data-input-id": id + "-field-text", name: id, type: type, value: value || '', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-text " + className + "-field", placeholder: placeholder, autoComplete: autoComplete, style: style }),
        showError && React.createElement(Error$1, { id: id, className: className, label: label, errMsg: errMsg })));
};
Text.defaultProps = {
    ffComp: FFComponent.TEXT,
};

var Number = function (_a) {
    var step = _a.step, id = _a.id, type = _a.type, _b = _a.required, required = _b === void 0 ? false : _b, validate = _a.validate, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg;
    var _c = useFormData({ step: step, id: id, value: '', required: required, validate: validate }), value = _c.value, onChange = _c.onChange, onBlur = _c.onBlur, onFocus = _c.onFocus, showError = _c.showError;
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { id: id + "-field-number", "data-input-id": id + "-field-number", name: id, type: type, value: value || '', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-number " + className + "-field", placeholder: placeholder, autoComplete: autoComplete, style: style }),
        showError && React.createElement(Error$1, { id: id, className: className, label: label, errMsg: errMsg })));
};
Number.defaultProps = {
    ffComp: FFComponent.NUMBER,
};

var Email = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.type, type = _b === void 0 ? 'email' : _b, _c = _a.required, required = _c === void 0 ? false : _c, validate = _a.validate, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg;
    var _d = useFormData({ step: step, id: id, value: '', required: required, validate: validate }), value = _d.value, onChange = _d.onChange, onBlur = _d.onBlur, onFocus = _d.onFocus, showError = _d.showError;
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { id: id + "-field-email", "data-input-id": id + "-field-email", name: id, type: type, value: value || '', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-email " + className + "-field", placeholder: placeholder, autoComplete: autoComplete, style: style }),
        showError && React.createElement(Error$1, { id: id, className: className, label: label, errMsg: errMsg })));
};
Email.defaultProps = {
    ffComp: FFComponent.EMAIL,
};

var Password = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.type, type = _b === void 0 ? 'password' : _b, _c = _a.required, required = _c === void 0 ? false : _c, validate = _a.validate, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg;
    var _d = useFormData({ step: step, id: id, value: '', required: required, validate: validate }), value = _d.value, onChange = _d.onChange, onBlur = _d.onBlur, onFocus = _d.onFocus, showError = _d.showError;
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { id: id + "-field-password", "data-input-id": id + "-field-password", name: id, type: type, value: value || '', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-password " + className + "-field", placeholder: placeholder, autoComplete: autoComplete, style: style }),
        showError && React.createElement(Error$1, { id: id, className: className, label: label, errMsg: errMsg })));
};
Password.defaultProps = {
    ffComp: FFComponent.PASSWORD,
};

var Tel = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.type, type = _b === void 0 ? 'text' : _b, _c = _a.required, required = _c === void 0 ? false : _c, validate = _a.validate, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg, _d = _a.pattern, pattern = _d === void 0 ? '[0-9]{3}-[0-9]{2}-[0-9]{3}' : _d;
    var _e = useFormData({ step: step, id: id, value: '', required: required, validate: validate }), value = _e.value, onChange = _e.onChange, onBlur = _e.onBlur, onFocus = _e.onFocus, showError = _e.showError;
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { id: id + "-field-tel", "data-input-id": id + "-field-tel", name: id, type: type, value: value || '', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-tel " + className + "-field", placeholder: placeholder, autoComplete: autoComplete, style: style, pattern: pattern }),
        showError && React.createElement(Error$1, { id: id, className: className, label: label, errMsg: errMsg })));
};
Tel.defaultProps = {
    ffComp: FFComponent.TEL,
};

var Url = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.type, type = _b === void 0 ? 'text' : _b, _c = _a.required, required = _c === void 0 ? false : _c, validate = _a.validate, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg, _d = _a.pattern, pattern = _d === void 0 ? 'https://.*' : _d;
    var _e = useFormData({ step: step, id: id, value: '', required: required, validate: validate }), value = _e.value, onChange = _e.onChange, onBlur = _e.onBlur, onFocus = _e.onFocus, showError = _e.showError;
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { id: id + "-filed-url", "data-input-id": id + "-field-url", name: id, type: type, value: value || '', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-url " + className + "-field", placeholder: placeholder, autoComplete: autoComplete, style: style, pattern: pattern }),
        showError && React.createElement(Error$1, { id: id, className: className, label: label, errMsg: errMsg })));
};
Url.defaultProps = {
    ffComp: FFComponent.URL,
};

var Color = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.type, type = _b === void 0 ? 'color' : _b, _c = _a.required, required = _c === void 0 ? false : _c, validate = _a.validate, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg;
    var _d = useFormData({ step: step, id: id, value: '', required: required, validate: validate }), value = _d.value, onChange = _d.onChange, onBlur = _d.onBlur, onFocus = _d.onFocus, showError = _d.showError;
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { id: id + "-field-color", "data-input-id": id + "-field-color", name: id, type: type, value: value || '#519839', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-color " + className + "-field", placeholder: placeholder, autoComplete: autoComplete, style: style }),
        showError && React.createElement(Error$1, { id: id, className: className, label: label, errMsg: errMsg })));
};
Color.defaultProps = {
    ffComp: FFComponent.COLOR,
};

var TextArea = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.required, required = _b === void 0 ? false : _b, validate = _a.validate, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg, _c = _a.rows, rows = _c === void 0 ? 4 : _c, _d = _a.cols, cols = _d === void 0 ? 20 : _d;
    var _e = useFormData({ step: step, id: id, value: '', required: required, validate: validate }), value = _e.value, onChange = _e.onChange, onBlur = _e.onBlur, onFocus = _e.onFocus, showError = _e.showError;
    return (React.createElement(React.Fragment, null,
        React.createElement("textarea", { id: id + "-field-textarea", "data-input-id": id + "-field-textarea", name: id, value: value || '', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-textarea " + className + "-field", placeholder: placeholder, autoComplete: autoComplete, style: style, rows: rows, cols: cols }),
        showError && React.createElement(Error$1, { id: id, className: className, label: label, errMsg: errMsg })));
};
TextArea.defaultProps = {
    ffComp: FFComponent.TEXTAREA,
};

var Select = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.required, required = _b === void 0 ? false : _b, validate = _a.validate, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg, options = _a.options;
    var _c = useFormData({ step: step, id: id, value: '', required: required, validate: validate }), value = _c.value, onChange = _c.onChange, onBlur = _c.onBlur, onFocus = _c.onFocus, showError = _c.showError;
    return (React.createElement(React.Fragment, null,
        React.createElement("select", { id: id + "-field-text", "data-input-id": id + "-field-text", name: id, value: value || '', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-text " + className + "-field", placeholder: placeholder, autoComplete: autoComplete, style: style }, options &&
            options.map(function (option) { return (React.createElement("option", { key: option.name, value: option.value }, option.name)); })),
        showError && React.createElement(Error$1, { id: id, className: className, label: label, errMsg: errMsg })));
};
Select.defaultProps = {
    ffComp: FFComponent.SELECT,
};

var Row = function (_a) {
    var className = _a.className, children = _a.children;
    return (React.createElement("div", { className: "flow-form-inputList-row " + className + "-inputList-row", style: { display: 'flex', flexDirection: 'row', alignItems: 'center' } }, children));
};
Row.defaultProps = {
    ffComp: FFComponent.ROW,
};

var Item = function (_a) {
    var objKey = _a.objKey, fieldIndex = _a.fieldIndex, type = _a.type, value = _a.value, required = _a.required, autoComplete = _a.autoComplete, style = _a.style, onChange = _a.onChange;
    return (React.createElement("input", { id: objKey + "-field-inputList-item-" + fieldIndex, "data-input-id": objKey + "-field-inputList-item-" + fieldIndex, name: objKey, type: type, value: value, required: required, onChange: onChange, 
        // onBlur={onBlur}
        // onFocus={onFocus}
        className: "flow-form-field flow-form-inputList-item " + objKey + "-inputList-item", placeholder: capitalize(objKey), autoComplete: autoComplete, style: __assign(__assign({}, style), { marginRight: '5px' }) }));
};
Item.defaultProps = {
    ffComp: FFComponent.ITEM,
};

var InputList = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.required, required = _b === void 0 ? false : _b, validate = _a.validate, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, 
    // label,
    // errMsg,
    // listName,
    inputs = _a.inputs;
    var _c;
    var _d = React.useContext(Context), setField = _d.setField, flow = _d.flow, formData = _d.formData, updateInputListItem = _d.updateInputListItem;
    var blankInput = React.useMemo(function () { return inputs && inputs.reduce(function (acc, input) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[toCamelCase(input.name)] = '', _a)));
    }, {}); }, []);
    var inputTypes = React.useMemo(function () { return inputs && inputs.reduce(function (acc, input) { return __spreadArrays(acc, [input.type.toLowerCase()]); }, []); }, []);
    React.useEffect(function () {
        setField({
            step: step,
            id: id,
            value: [__assign({}, blankInput)],
            error: required || validate ? true : false,
        });
    }, [step, id, flow.currentStep, flow.key]);
    var handleChange = function (index) { return function (e) {
        var _a = e.target, type = _a.type, name = _a.name, value = _a.value;
        updateInputListItem({ step: step, id: id, index: index, name: name, value: type === 'number' ? parseFloat(value) : value });
    }; };
    console.log('RENDER: ', formData);
    return (React.createElement("div", { className: "flow-form-inputList-container " + className + "-inputList-container" }, !isObjectEmpty(formData) && step != null ? (React.createElement(React.Fragment, null, (_c = formData === null || formData === void 0 ? void 0 : formData[step]) === null || _c === void 0 ? void 0 : _c[id].map(function (field, index) { return (React.createElement(Row, { key: generateId(id), className: className }, Object.entries(field).map(function (_a, i) {
        var k = _a[0], v = _a[1];
        var _b;
        return (React.createElement("div", { key: generateId(k) },
            React.createElement(Item, { objKey: k, fieldIndex: i, type: (_b = inputTypes === null || inputTypes === void 0 ? void 0 : inputTypes[i]) !== null && _b !== void 0 ? _b : 'text', value: v || '', required: required, onChange: handleChange(index), 
                // onBlur={onBlur}
                // onFocus={onFocus}
                autoComplete: autoComplete, style: style })));
    }))); }))) : (React.createElement(React.Fragment, null, !isObjectEmpty(formData) && (formData === null || formData === void 0 ? void 0 : formData[id].map(function (field, index) { return (React.createElement(Row, { key: generateId(id), className: className }, Object.entries(field).map(function (_a, i) {
        var k = _a[0], v = _a[1];
        var _b;
        return (React.createElement("div", { key: generateId(k) },
            React.createElement(Item, { objKey: k, fieldIndex: i, type: (_b = inputTypes === null || inputTypes === void 0 ? void 0 : inputTypes[i]) !== null && _b !== void 0 ? _b : 'text', value: v || '', required: required, onChange: handleChange(index), 
                // onBlur={onBlur}
                // onFocus={onFocus}
                autoComplete: autoComplete, style: style })));
    }))); }))))));
};
InputList.defaultProps = {
    ffComp: FFComponent.INPUT_LIST,
};

var Field = function (_a) {
    var step = _a.step, index = _a.index, name = _a.name, type = _a.type, children = _a.children, style = _a.style, _b = _a.required, required = _b === void 0 ? false : _b, validate = _a.validate, _c = _a.autoComplete, autoComplete = _c === void 0 ? 'off' : _c, placeholder = _a.placeholder, errMsg = _a.errMsg, options = _a.options, listName = _a.listName, inputs = _a.inputs;
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
        options: options,
        listName: listName,
        inputs: inputs,
    };
    return (React.createElement("label", { id: id + "-label", "data-label-id": id + "-label", htmlFor: id, className: "flow-form-label " + className + "-label", style: __assign({ display: "block", minHeight: '4rem' }, style) }, children !== null && children !== void 0 ? children : name,
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
                case 'color':
                    return React.createElement(Color, __assign({}, defaultProps));
                case 'textarea':
                    return React.createElement(TextArea, __assign({}, defaultProps));
                case 'select':
                    return React.createElement(Select, __assign({}, defaultProps));
                case 'inputList':
                    return React.createElement(InputList, __assign({}, defaultProps));
                default:
                    return React.createElement(Text, __assign({}, defaultProps));
            }
        })()));
};
Field.defaultProps = {
    ffComp: FFComponent.FIELD,
    step: null,
    index: 0,
};

var ShowData = function (_a) {
    var style = _a.style;
    var _b = React.useContext(Context), isFlowForm = _b.isFlowForm, canProceed = _b.canProceed, flow = _b.flow, formData = _b.formData, error = _b.error, touched = _b.touched, showError = _b.showError;
    return (React.createElement("pre", { className: "flow-form-show-data", style: style }, JSON.stringify({ isFlowForm: isFlowForm, canProceed: canProceed, flow: flow, formData: formData, error: error, showError: showError, touched: touched }, null, 2)));
};
ShowData.defaultProps = {
    ffComp: FFComponent.SHOW_DATA,
};

var Submit = function (_a) {
    var className = _a.className, title = _a.title;
    return (React.createElement("button", { type: "submit", className: "flow-form-submit-btn " + (className !== null && className !== void 0 ? className : '') }, title !== null && title !== void 0 ? title : "Submit"));
};
Submit.defaultProps = {
    ffComp: FFComponent.SUBMIT,
};

exports.Field = Field;
exports.FlowForm = FlowForm;
exports.ShowData = ShowData;
exports.Step = Step;
exports.Submit = Submit;
//# sourceMappingURL=index.js.map
