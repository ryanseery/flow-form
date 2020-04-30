import { createContext, useReducer, useMemo, createElement, useContext, useEffect, Fragment, Children, isValidElement, cloneElement, useRef, memo } from 'react';

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

function handleArr(arr) {
    return arr
        .map(function (a) { return Object.entries(a).every(function (_a) {
        var _ = _a[0], v = _a[1];
        return v === false;
    }); })
        .every(function (b) { return b === false; });
}
function deepCheck(obj) {
    return Object.entries(obj)
        .reduce(function (acc, _a) {
        var _ = _a[0], v = _a[1];
        return (Array.isArray(v) ? __spreadArrays(acc, [handleArr(v)]) : __spreadArrays(acc, [v]));
    }, [])
        .every(function (a) { return a === false; });
}

var theme = {
    colors: {
        blue: '#00A0DF',
        grey: '#E6E6E6',
        white: '#ffffff',
        green: '#4BBF6B',
        red: '#FF0000',
    },
    fonts: {
        small: '1em',
        medium: '1.2em',
        large: '1.5em',
    },
    text: {
        indent: '0.2em',
    },
    border: {
        default: "1px solid #BDBDBD",
        focus: "1px solid #00A0DF",
        error: "1px solid #FF0000",
        radius: '0.2em',
    },
};

function border(focused, showError) {
    if (focused)
        return theme.border.focus;
    if (showError)
        return theme.border.error;
    if (focused && showError)
        return theme.border.error;
    return theme.border.default;
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
    focus: {},
};
var Context = createContext({});
var ACTIONS;
(function (ACTIONS) {
    ACTIONS["SET_FORM"] = "SET_FORM";
    ACTIONS["SET_FIELD"] = "SET_FIELD";
    ACTIONS["SET_FIELD_LIST"] = "SET_FIELD_LIST";
    ACTIONS["UPDATE_FIELD"] = "UPDATE_FIELD";
    ACTIONS["REMOVE_FILE"] = "REMOVE_FILE";
    ACTIONS["UPDATE_FILE_FIELD"] = "UPDATE_FILE_FIELD";
    ACTIONS["SET_BLUR"] = "SET_BLUR";
    ACTIONS["SET_FOCUS"] = "SET_FOCUS";
    ACTIONS["PROGRESS_FORM"] = "PROGRESS_FORM";
    ACTIONS["REVERT_FORM"] = "REVERT_FORM";
    ACTIONS["UPDATE_FIELD_LIST_ITEM"] = "UPDATE_FIELD_LIST_ITEM";
    ACTIONS["ADD_FIELD_LIST"] = "ADD_FIELD_LIST";
    ACTIONS["REMOVE_FIELD_LIST"] = "REMOVE_FIELD_LIST";
    ACTIONS["SET_FIELD_LIST_BLUR"] = "SET_FIELD_LIST_BLUR";
    ACTIONS["SET_FIELD_LIST_FOCUS"] = "SET_FIELD_LIST_FOCUS";
})(ACTIONS || (ACTIONS = {}));
var setForm = function (_a) {
    var isFlowForm = _a.isFlowForm, flow = _a.flow;
    return ({
        type: ACTIONS.SET_FORM,
        isFlowForm: isFlowForm,
        flow: flow,
    });
};
var setField = function (_a) {
    var step = _a.step, id = _a.id, value = _a.value, error = _a.error;
    return ({
        type: ACTIONS.SET_FIELD,
        step: step,
        id: id,
        value: value,
        error: error,
    });
};
var setFieldList = function (_a) {
    var step = _a.step, id = _a.id, value = _a.value, error = _a.error, showError = _a.showError, focus = _a.focus;
    return ({
        type: ACTIONS.SET_FIELD_LIST,
        step: step,
        id: id,
        value: value,
        error: error,
        showError: showError,
        focus: focus,
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
var removeFile = function (_a) {
    var step = _a.step, id = _a.id, index = _a.index;
    return ({
        type: ACTIONS.REMOVE_FILE,
        step: step,
        id: id,
        index: index,
    });
};
var updateFileField = function (_a) {
    var step = _a.step, id = _a.id, value = _a.value, error = _a.error;
    return ({
        type: ACTIONS.UPDATE_FILE_FIELD,
        step: step,
        id: id,
        value: value,
        error: error,
    });
};
var setBlur = function (_a) {
    var step = _a.step, id = _a.id, showError = _a.showError;
    return ({
        type: ACTIONS.SET_BLUR,
        step: step,
        id: id,
        showError: showError,
    });
};
var setFocus = function (_a) {
    var step = _a.step, id = _a.id;
    return ({
        type: ACTIONS.SET_FOCUS,
        step: step,
        id: id,
    });
};
var progressForm = function () { return ({
    type: ACTIONS.PROGRESS_FORM,
}); };
var revertForm = function () { return ({
    type: ACTIONS.REVERT_FORM,
}); };
var updateInputListItem = function (_a) {
    var step = _a.step, id = _a.id, index = _a.index, name = _a.name, value = _a.value, error = _a.error;
    return ({
        type: ACTIONS.UPDATE_FIELD_LIST_ITEM,
        step: step,
        id: id,
        index: index,
        name: name,
        value: value,
        error: error,
    });
};
var addFieldList = function (_a) {
    var step = _a.step, id = _a.id, blankInput = _a.blankInput, blankError = _a.blankError, blankFocus = _a.blankFocus;
    return ({
        type: ACTIONS.ADD_FIELD_LIST,
        step: step,
        id: id,
        blankInput: blankInput,
        blankError: blankError,
        blankFocus: blankFocus,
    });
};
var removeFieldList = function (_a) {
    var step = _a.step, id = _a.id, index = _a.index;
    return ({
        type: ACTIONS.REMOVE_FIELD_LIST,
        step: step,
        id: id,
        index: index,
    });
};
var setFieldListBlur = function (_a) {
    var step = _a.step, id = _a.id, index = _a.index, name = _a.name, error = _a.error;
    return ({
        type: ACTIONS.SET_FIELD_LIST_BLUR,
        step: step,
        id: id,
        index: index,
        name: name,
        error: error,
    });
};
var setFieldListFocus = function (_a) {
    var step = _a.step, id = _a.id, index = _a.index, name = _a.name;
    return ({
        type: ACTIONS.SET_FIELD_LIST_FOCUS,
        step: step,
        id: id,
        index: index,
        name: name,
    });
};
function reducer(state, action) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _60, _61, _62, _63, _64, _65, _66, _67, _68, _69, _70;
    var _71, _72, _73, _74, _75, _76, _77, _78;
    switch (action.type) {
        case ACTIONS.SET_FORM: {
            var isFlowForm = action.isFlowForm, flow = action.flow;
            return __assign(__assign({}, state), { isFlowForm: isFlowForm, flow: flow });
        }
        case ACTIONS.SET_FIELD: {
            var step = action.step, id = action.id, value = action.value, error = action.error;
            if (step == null && !state.formData[id]) {
                return __assign(__assign({}, state), { formData: __assign(__assign({}, state.formData), (_a = {}, _a[id] = value, _a)), error: __assign(__assign({}, state.error), (_b = {}, _b[id] = error, _b)), showError: __assign(__assign({}, state.showError), (_c = {}, _c[id] = false, _c)), focus: __assign(__assign({}, state.focus), (_d = {}, _d[id] = false, _d)) });
            }
            else if (step != null && !((_72 = (_71 = state.formData) === null || _71 === void 0 ? void 0 : _71[step]) === null || _72 === void 0 ? void 0 : _72[id])) {
                return __assign(__assign({}, state), { formData: __assign(__assign({}, state.formData), (_e = {}, _e[step] = __assign(__assign({}, state.formData[step]), (_f = {}, _f[id] = value, _f)), _e)), error: __assign(__assign({}, state.error), (_g = {}, _g[step] = __assign(__assign({}, state.error[step]), (_h = {}, _h[id] = error, _h)), _g)), showError: __assign(__assign({}, state.showError), (_j = {}, _j[step] = __assign(__assign({}, state.showError[step]), (_k = {}, _k[id] = false, _k)), _j)), focus: __assign(__assign({}, state.focus), (_l = {}, _l[step] = __assign(__assign({}, state.focus[step]), (_m = {}, _m[id] = false, _m)), _l)) });
            }
            else {
                return state;
            }
        }
        case ACTIONS.UPDATE_FIELD: {
            var step = action.step, id = action.id, value = action.value, error = action.error;
            if (step == null) {
                return __assign(__assign({}, state), { canProceed: deepCheck(__assign(__assign({}, state.error), (_o = {}, _o[id] = error, _o))), formData: __assign(__assign({}, state.formData), (_p = {}, _p[id] = value, _p)), error: __assign(__assign({}, state.error), (_q = {}, _q[id] = error, _q)), showError: __assign(__assign({}, state.showError), (_r = {}, _r[id] = error, _r)) });
            }
            else if (step != null) {
                return __assign(__assign({}, state), { canProceed: deepCheck(__assign(__assign({}, state.error[step]), (_s = {}, _s[id] = error, _s))), formData: __assign(__assign({}, state.formData), (_t = {}, _t[step] = __assign(__assign({}, state.formData[step]), (_u = {}, _u[id] = value, _u)), _t)), error: __assign(__assign({}, state.error), (_v = {}, _v[step] = __assign(__assign({}, state.error[step]), (_w = {}, _w[id] = error, _w)), _v)), showError: __assign(__assign({}, state.showError), (_x = {}, _x[step] = __assign(__assign({}, state.showError[step]), (_y = {}, _y[id] = error, _y)), _x)) });
            }
            else {
                return state;
            }
        }
        case ACTIONS.REMOVE_FILE: {
            var step = action.step, id = action.id, index_1 = action.index;
            if (step == null) {
                var mutable = __spreadArrays(state.formData[id]);
                var updatedArr = mutable.filter(function (_, i) { return i !== index_1; });
                return __assign(__assign({}, state), { formData: __assign(__assign({}, state.formData), (_z = {}, _z[id] = __spreadArrays(updatedArr), _z)) });
            }
            else if (step != null) {
                var mutable = __spreadArrays(state.formData[step][id]);
                var updatedArr = mutable.filter(function (_, i) { return i !== index_1; });
                return __assign(__assign({}, state), { formData: __assign(__assign({}, state.formData), (_0 = {}, _0[step] = __assign(__assign({}, state.formData[step]), (_1 = {}, _1[id] = __spreadArrays(updatedArr), _1)), _0)) });
            }
            else {
                return state;
            }
        }
        case ACTIONS.UPDATE_FILE_FIELD: {
            var step = action.step, id = action.id, value = action.value, error = action.error;
            if (step == null) {
                return __assign(__assign({}, state), { canProceed: deepCheck(__assign(__assign({}, state.error), (_2 = {}, _2[id] = error, _2))), formData: __assign(__assign({}, state.formData), (_3 = {}, _3[id] = __spreadArrays(state.formData[id], value), _3)), error: __assign(__assign({}, state.error), (_4 = {}, _4[id] = error, _4)), showError: __assign(__assign({}, state.showError), (_5 = {}, _5[id] = error, _5)) });
            }
            else if (step != null) {
                return __assign(__assign({}, state), { canProceed: deepCheck(__assign(__assign({}, state.error[step]), (_6 = {}, _6[id] = error, _6))), formData: __assign(__assign({}, state.formData), (_7 = {}, _7[step] = __assign(__assign({}, state.formData[step]), (_8 = {}, _8[id] = __spreadArrays(state.formData[step][id], value), _8)), _7)), error: __assign(__assign({}, state.error), (_9 = {}, _9[step] = __assign(__assign({}, state.error[step]), (_10 = {}, _10[id] = error, _10)), _9)), showError: __assign(__assign({}, state.showError), (_11 = {}, _11[step] = __assign(__assign({}, state.showError[step]), (_12 = {}, _12[id] = error, _12)), _11)) });
            }
            else {
                return state;
            }
        }
        case ACTIONS.SET_BLUR: {
            var step = action.step, id = action.id, showError = action.showError;
            if (step == null) {
                return __assign(__assign({}, state), { canProceed: deepCheck(__assign(__assign({}, state.error), (_13 = {}, _13[id] = showError, _13))), error: __assign(__assign({}, state.error), (_14 = {}, _14[id] = showError, _14)), showError: __assign(__assign({}, state.showError), (_15 = {}, _15[id] = showError, _15)), focus: __assign(__assign({}, state.focus), (_16 = {}, _16[id] = false, _16)) });
            }
            else if (step != null) {
                return __assign(__assign({}, state), { canProceed: deepCheck(__assign(__assign({}, state.error[step]), (_17 = {}, _17[id] = showError, _17))), error: __assign(__assign({}, state.error), (_18 = {}, _18[step] = __assign(__assign({}, state.error[step]), (_19 = {}, _19[id] = showError, _19)), _18)), showError: __assign(__assign({}, state.showError), (_20 = {}, _20[step] = __assign(__assign({}, state.showError[step]), (_21 = {}, _21[id] = showError, _21)), _20)), focus: __assign(__assign({}, state.focus), (_22 = {}, _22[step] = __assign(__assign({}, state.focus[step]), (_23 = {}, _23[id] = false, _23)), _22)) });
            }
            else {
                return state;
            }
        }
        case ACTIONS.SET_FOCUS: {
            var step = action.step, id = action.id;
            if (step == null) {
                return __assign(__assign({}, state), { focus: __assign(__assign({}, state.focus), (_24 = {}, _24[id] = !state.focus[id], _24)) });
            }
            else if (step != null) {
                return __assign(__assign({}, state), { focus: __assign(__assign({}, state.focus), (_25 = {}, _25[step] = __assign(__assign({}, state.focus[step]), (_26 = {}, _26[id] = !state.focus[step][id], _26)), _25)) });
            }
            else {
                return state;
            }
        }
        case ACTIONS.PROGRESS_FORM: {
            var key = state.flow.key + 1;
            return __assign(__assign({}, state), { flow: __assign(__assign({}, state.flow), { key: key, currentStep: (_74 = (_73 = state === null || state === void 0 ? void 0 : state.flow) === null || _73 === void 0 ? void 0 : _73.steps) === null || _74 === void 0 ? void 0 : _74[key] }) });
        }
        case ACTIONS.REVERT_FORM: {
            var key = state.flow.key - 1;
            return __assign(__assign({}, state), { flow: __assign(__assign({}, state.flow), { key: key, currentStep: (_76 = (_75 = state === null || state === void 0 ? void 0 : state.flow) === null || _75 === void 0 ? void 0 : _75.steps) === null || _76 === void 0 ? void 0 : _76[key] }) });
        }
        case ACTIONS.SET_FIELD_LIST: {
            var step = action.step, id = action.id, value = action.value, error = action.error, showError = action.showError, focus_1 = action.focus;
            if (step == null && !state.formData[id]) {
                return __assign(__assign({}, state), { formData: __assign(__assign({}, state.formData), (_27 = {}, _27[id] = __spreadArrays(value), _27)), error: __assign(__assign({}, state.error), (_28 = {}, _28[id] = __spreadArrays(error), _28)), showError: __assign(__assign({}, state.showError), (_29 = {}, _29[id] = __spreadArrays(showError), _29)), focus: __assign(__assign({}, state.focus), (_30 = {}, _30[id] = __spreadArrays(focus_1), _30)) });
            }
            else if (step != null && !((_78 = (_77 = state.formData) === null || _77 === void 0 ? void 0 : _77[step]) === null || _78 === void 0 ? void 0 : _78[id])) {
                return __assign(__assign({}, state), { formData: __assign(__assign({}, state.formData), (_31 = {}, _31[step] = __assign(__assign({}, state.formData[step]), (_32 = {}, _32[id] = __spreadArrays(value), _32)), _31)), error: __assign(__assign({}, state.error), (_33 = {}, _33[step] = __assign(__assign({}, state.error[step]), (_34 = {}, _34[id] = __spreadArrays(error), _34)), _33)), showError: __assign(__assign({}, state.showError), (_35 = {}, _35[step] = __assign(__assign({}, state.showError[step]), (_36 = {}, _36[id] = __spreadArrays(showError), _36)), _35)), focus: __assign(__assign({}, state.focus), (_37 = {}, _37[step] = __assign(__assign({}, state.focus[step]), (_38 = {}, _38[id] = __spreadArrays(focus_1), _38)), _37)) });
            }
            else {
                return state;
            }
        }
        case ACTIONS.UPDATE_FIELD_LIST_ITEM: {
            var step = action.step, id = action.id, index = action.index, name_1 = action.name, value = action.value, error = action.error;
            if (step == null) {
                var mutableValue = __spreadArrays(state.formData[id]);
                mutableValue[index][name_1] = value;
                var mutateError = __spreadArrays(state.error[id]);
                mutateError[index][name_1] = error;
                return __assign(__assign({}, state), { canProceed: deepCheck(__assign(__assign({}, state.error), (_39 = {}, _39[id] = __spreadArrays(mutateError), _39))), formData: __assign(__assign({}, state.formData), (_40 = {}, _40[id] = __spreadArrays(mutableValue), _40)), error: __assign(__assign({}, state.error), (_41 = {}, _41[id] = __spreadArrays(mutateError), _41)) });
            }
            else if (step != null) {
                var mutableValue = __spreadArrays(state.formData[step][id]);
                mutableValue[index][name_1] = value;
                var mutableError = __spreadArrays(state.error[step][id]);
                mutableError[index][name_1] = error;
                return __assign(__assign({}, state), { canProceed: deepCheck(__assign(__assign({}, state.error[step]), (_42 = {}, _42[id] = __spreadArrays(mutableError), _42))), formData: __assign(__assign({}, state.formData), (_43 = {}, _43[step] = __assign(__assign({}, state.formData[step]), (_44 = {}, _44[id] = __spreadArrays(mutableValue), _44)), _43)), error: __assign(__assign({}, state.error), (_45 = {}, _45[step] = __assign(__assign({}, state.error[step]), (_46 = {}, _46[id] = __spreadArrays(mutableError), _46)), _45)) });
            }
            else {
                return state;
            }
        }
        case ACTIONS.ADD_FIELD_LIST: {
            var step = action.step, id = action.id, blankInput = action.blankInput, blankError = action.blankError, blankFocus = action.blankFocus;
            if (step == null) {
                return __assign(__assign({}, state), { formData: __assign(__assign({}, state.formData), (_47 = {}, _47[id] = __spreadArrays(state.formData[id], [__assign({}, blankInput)]), _47)), error: __assign(__assign({}, state.error), (_48 = {}, _48[id] = __spreadArrays(state.error[id], [__assign({}, blankError)]), _48)), showError: __assign(__assign({}, state.showError), (_49 = {}, _49[id] = __spreadArrays(state.showError[id], [__assign({}, blankFocus)]), _49)), focus: __assign(__assign({}, state.focus), (_50 = {}, _50[id] = __spreadArrays(state.focus[id], [__assign({}, blankFocus)]), _50)) });
            }
            else if (step != null) {
                return __assign(__assign({}, state), { formData: __assign(__assign({}, state.formData), (_51 = {}, _51[step] = __assign(__assign({}, state.formData[step]), (_52 = {}, _52[id] = __spreadArrays(state.formData[step][id], [__assign({}, blankInput)]), _52)), _51)), error: __assign(__assign({}, state.error), (_53 = {}, _53[step] = __assign(__assign({}, state.error[step]), (_54 = {}, _54[id] = __spreadArrays(state.error[step][id], [__assign({}, blankError)]), _54)), _53)), showError: __assign(__assign({}, state.showError), (_55 = {}, _55[step] = __assign(__assign({}, state.showError[step]), (_56 = {}, _56[id] = __spreadArrays(state.showError[step][id], [__assign({}, blankFocus)]), _56)), _55)), focus: __assign(__assign({}, state.focus), (_57 = {}, _57[step] = __assign(__assign({}, state.focus[step]), (_58 = {}, _58[id] = __spreadArrays(state.focus[step][id], [__assign({}, blankFocus)]), _58)), _57)) });
            }
            else {
                return state;
            }
        }
        case ACTIONS.REMOVE_FIELD_LIST: {
            var step = action.step, id = action.id, index_2 = action.index;
            if (step == null) {
                var mutable = __spreadArrays(state.formData[id]);
                var updatedArr = mutable.filter(function (_, i) { return i !== index_2; });
                return __assign(__assign({}, state), { formData: __assign(__assign({}, state.formData), (_59 = {}, _59[id] = __spreadArrays(updatedArr), _59)) });
            }
            else if (step != null) {
                var mutable = __spreadArrays(state.formData[step][id]);
                var updatedArr = mutable.filter(function (_, i) { return i !== index_2; });
                return __assign(__assign({}, state), { formData: __assign(__assign({}, state.formData), (_60 = {}, _60[step] = __assign(__assign({}, state.formData[step]), (_61 = {}, _61[id] = __spreadArrays(updatedArr), _61)), _60)) });
            }
            else {
                return state;
            }
        }
        case ACTIONS.SET_FIELD_LIST_BLUR: {
            var step = action.step, id = action.id, index = action.index, name_2 = action.name, error = action.error;
            if (step == null) {
                var mutableErr = __spreadArrays(state.error[id]);
                mutableErr[index][name_2] = error;
                var mutableShowErr = __spreadArrays(state.showError[id]);
                mutableShowErr[index][name_2] = error;
                return __assign(__assign({}, state), { error: __assign(__assign({}, state.error), (_62 = {}, _62[id] = __spreadArrays(mutableErr), _62)), showError: __assign(__assign({}, state.showError), (_63 = {}, _63[id] = __spreadArrays(mutableShowErr), _63)) });
            }
            else if (step != null) {
                var mutableErr = __spreadArrays(state.error[step][id]);
                mutableErr[index][name_2] = error;
                var mutableShowErr = __spreadArrays(state.showError[step][id]);
                mutableShowErr[index][name_2] = error;
                return __assign(__assign({}, state), { error: __assign(__assign({}, state.error), (_64 = {}, _64[step] = __assign(__assign({}, state.error[step]), (_65 = {}, _65[id] = __spreadArrays(mutableErr), _65)), _64)), showError: __assign(__assign({}, state.showError), (_66 = {}, _66[step] = __assign(__assign({}, state.showError[step]), (_67 = {}, _67[id] = __spreadArrays(mutableShowErr), _67)), _66)) });
            }
            else {
                return state;
            }
        }
        case ACTIONS.SET_FIELD_LIST_FOCUS: {
            var step = action.step, id = action.id, index = action.index, name_3 = action.name;
            if (step == null) {
                var mutableFocus = __spreadArrays(state.focus[id]);
                mutableFocus[index][name_3] = !mutableFocus[index][name_3];
                return __assign(__assign({}, state), { focus: __assign(__assign({}, state.focus), (_68 = {}, _68[id] = __spreadArrays(mutableFocus), _68)) });
            }
            else if (step != null) {
                var mutableFocus = __spreadArrays(state.focus[step][id]);
                mutableFocus[index][name_3] = !mutableFocus[index][name_3];
                return __assign(__assign({}, state), { focus: __assign(__assign({}, state.focus), (_69 = {}, _69[step] = __assign(__assign({}, state.focus[step]), (_70 = {}, _70[id] = __spreadArrays(mutableFocus), _70)), _69)) });
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
                return dispatch(setField({ step: step, id: id, value: value, error: error }));
            },
            setFieldList: function (_a) {
                var step = _a.step, id = _a.id, value = _a.value, error = _a.error, showError = _a.showError, focus = _a.focus;
                return dispatch(setFieldList({ step: step, id: id, value: value, error: error, showError: showError, focus: focus }));
            },
            updateField: function (_a) {
                var step = _a.step, id = _a.id, value = _a.value, error = _a.error;
                return dispatch(updateInput({ step: step, id: id, value: value, error: error }));
            },
            removeFile: function (_a) {
                var step = _a.step, id = _a.id, index = _a.index;
                return dispatch(removeFile({ step: step, id: id, index: index }));
            },
            updateFileField: function (_a) {
                var step = _a.step, id = _a.id, value = _a.value, error = _a.error;
                return dispatch(updateFileField({ step: step, id: id, value: value, error: error }));
            },
            setBlur: function (_a) {
                var step = _a.step, id = _a.id, showError = _a.showError;
                return dispatch(setBlur({ step: step, id: id, showError: showError }));
            },
            setFocus: function (_a) {
                var step = _a.step, id = _a.id;
                return dispatch(setFocus({ step: step, id: id }));
            },
            progressForm: function () { return dispatch(progressForm()); },
            revertForm: function () { return dispatch(revertForm()); },
            updateFieldListItem: function (_a) {
                var step = _a.step, id = _a.id, index = _a.index, name = _a.name, value = _a.value, error = _a.error;
                return dispatch(updateInputListItem({ step: step, id: id, index: index, name: name, value: value, error: error }));
            },
            addFieldList: function (_a) {
                var step = _a.step, id = _a.id, blankInput = _a.blankInput, blankError = _a.blankError, blankFocus = _a.blankFocus;
                return dispatch(addFieldList({ step: step, id: id, blankInput: blankInput, blankError: blankError, blankFocus: blankFocus }));
            },
            removeFieldList: function (_a) {
                var step = _a.step, id = _a.id, index = _a.index;
                return dispatch(removeFieldList({ step: step, id: id, index: index }));
            },
            setFieldListBlur: function (_a) {
                var step = _a.step, id = _a.id, index = _a.index, name = _a.name, error = _a.error;
                return dispatch(setFieldListBlur({ step: step, id: id, index: index, name: name, error: error }));
            },
            setFieldListFocus: function (_a) {
                var step = _a.step, id = _a.id, index = _a.index, name = _a.name;
                return dispatch(setFieldListFocus({ step: step, id: id, index: index, name: name }));
            },
        };
    }, []);
    return createElement(Context.Provider, { value: __assign(__assign({}, state), actions) }, children);
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
    FFComponent["DRAG_AND_DROP"] = "DRAG_AND_DROP";
    FFComponent["FIELD_LIST"] = "FIELD_LIST";
    FFComponent["ITEM"] = "ITEM";
    FFComponent["ROW"] = "ROW";
    FFComponent["ITEM_INPUT"] = "ITEM_INPUT";
    FFComponent["PROGRESS"] = "PROGRESS";
    FFComponent["DOUGHNUT"] = "DOUGHNUT";
    FFComponent["DEFAULT_SUBMIT"] = "DEFAULT_SUBMIT";
    FFComponent["DEFAULT_BTN"] = "DEFAULT_BTN";
    FFComponent["LIST_BUTTON"] = "LIST_BUTTON";
})(FFComponent || (FFComponent = {}));

var DefaultSubmit = function (_a) {
    var disabled = _a.disabled;
    return (createElement("button", { type: "submit", className: "flow-form-submit-btm", disabled: disabled }, "Submit"));
};
DefaultSubmit.defaultProps = {
    ffComp: FFComponent.DEFAULT_SUBMIT,
};

var ListButton = function (_a) {
    var children = _a.children, onClick = _a.onClick, remove = _a.remove;
    return (createElement("button", { type: "button", onClick: onClick, style: {
            backgroundColor: "" + (remove ? theme.colors.red : theme.colors.green),
            color: "" + theme.colors.white,
            border: 'none',
            fontSize: "" + theme.fonts.small,
            cursor: 'pointer',
            width: '1.5em',
            height: '1.5em',
            textAlign: 'center',
            borderRadius: "" + theme.border.radius,
        } }, children));
};
ListButton.defaultProps = {
    ffComp: FFComponent.LIST_BUTTON,
};

var DefaultBtn = function (_a) {
    var className = _a.className, onClick = _a.onClick, disabled = _a.disabled, children = _a.children, style = _a.style;
    return (createElement("button", { type: "button", className: "flow-form-btn " + className, disabled: disabled, onClick: onClick, style: style }, children));
};
DefaultBtn.defaultProps = {
    ffComp: FFComponent.DEFAULT_BTN,
};

var Doughnut = function (_a) {
    var isActive = _a.isActive;
    return (createElement("span", { className: "flow-form-doughnut", style: {
            background: isActive
                ? "radial-gradient(circle, transparent 30%, " + theme.colors.blue + " 40%)"
                : "radial-gradient(circle, transparent 30%, " + theme.colors.grey + " 40%)",
            borderRadius: '80%',
            height: '15px',
            width: '18px',
            marginRight: '1px',
            paddingTop: '3px',
            fontSize: "" + theme.fonts.large,
            textAlign: 'center',
            color: "" + theme.colors.white,
        } }));
};
Doughnut.defaultProps = {
    ffComp: FFComponent.DOUGHNUT,
};
var Progress = function (_a) {
    var steps = _a.steps, currentStep = _a.currentStep, doughNut = _a.doughNut;
    return (createElement("div", { className: "flow-form-progress", style: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: "1px solid " + theme.colors.grey,
            paddingBottom: '5px',
            marginBottom: '5px',
        } }, steps === null || steps === void 0 ? void 0 : steps.map(function (step) { return (createElement("div", { key: step.id, className: "flow-form-label-container", style: { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' } },
        doughNut && createElement(Doughnut, { isActive: step.index === (currentStep === null || currentStep === void 0 ? void 0 : currentStep.index) }),
        createElement("span", { className: "flow-form-label", style: {
                color: step.index === (currentStep === null || currentStep === void 0 ? void 0 : currentStep.index) ? "" + theme.colors.blue : "" + theme.colors.grey,
                fontSize: "" + theme.fonts.large,
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
    var children = _a.children, onSubmit = _a.onSubmit, className = _a.className, style = _a.style, showData = _a.showData, doughNut = _a.doughNut;
    var _b, _c;
    var _d = useContext(Context), isFlowForm = _d.isFlowForm, canProceed = _d.canProceed, flow = _d.flow, formData = _d.formData, setForm = _d.setForm, progressForm = _d.progressForm, revertForm = _d.revertForm, error = _d.error, showError = _d.showError, focus = _d.focus;
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
    showData && console.log({ isFlowForm: isFlowForm, canProceed: canProceed, flow: flow, formData: formData, error: error, showError: showError, focus: focus });
    return (createElement("form", { onSubmit: function (e) {
            e.preventDefault();
            onSubmit(formData);
        }, className: "flow-form " + className, style: style },
        isFlowForm && createElement(Progress, { steps: flow.steps, currentStep: flow.currentStep, doughNut: doughNut }),
        createElement("fieldset", { style: { border: "none" } },
            createElement(Fragment, null, isFlowForm ? children === null || children === void 0 ? void 0 : children[flow.key] : children),
            isFlowForm ? (createElement(Fragment, null,
                flow.currentStep != null && ((_b = flow.currentStep) === null || _b === void 0 ? void 0 : _b.index) > 0 && (createElement(DefaultBtn, { onClick: function () { return revertForm(); } }, "Back")),
                flow.end !== ((_c = flow.currentStep) === null || _c === void 0 ? void 0 : _c.index) ? (createElement(DefaultBtn, { disabled: !canProceed, onClick: function () { return progressForm(); } }, "Next")) : (createElement(DefaultSubmit, { disabled: !canProceed })))) : (createElement(DefaultSubmit, { disabled: !canProceed })))));
};
Form.defaultProps = {
    ffComp: FFComponent.FORM,
};
var FlowForm = function (_a) {
    var children = _a.children, onSubmit = _a.onSubmit, className = _a.className, style = _a.style, showData = _a.showData, doughNut = _a.doughNut;
    return (createElement(Wrapper, null,
        createElement(Form, { onSubmit: onSubmit, className: className, style: style, showData: showData, doughNut: doughNut }, children)));
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
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    var _p = useContext(Context), setField = _p.setField, formData = _p.formData, error = _p.error, updateField = _p.updateField, removeFile = _p.removeFile, updateFileField = _p.updateFileField, setBlur = _p.setBlur, setFocus = _p.setFocus, showError = _p.showError, focus = _p.focus, flow = _p.flow;
    useEffect(function () {
        setField({ step: step, id: id, value: value, error: required || validation ? true : false });
    }, [step, id, flow.currentStep, flow.key]);
    function validate(e) {
        if (required || validation) {
            return validation ? validation(e) : !e.target.value;
        }
        return false;
    }
    function validateFile(e) {
        if (required || validation) {
            return validation ? validation(e) : !e.dataTransfer.files;
        }
        return false;
    }
    var onChange = function (e) {
        e.preventDefault();
        e.persist();
        updateField({
            step: step,
            id: e.target.name,
            value: e.target.type === 'number' ? parseFloat(e.target.value) : e.target.value,
            error: validate(e),
        });
    };
    var onFileChange = function (e) {
        var files = e.target.files;
        var val = files ? Array.from(files) : [];
        updateFileField({
            step: step,
            id: id,
            value: val,
            error: validate(e),
        });
    };
    var onFileDrop = function (e, id) {
        updateFileField({
            step: step,
            id: id,
            value: Array.from(e.dataTransfer.files),
            error: validateFile(e),
        });
    };
    var onFileRemove = function (index) {
        removeFile({
            step: step,
            id: id,
            index: index,
        });
    };
    var onBlur = function (e) {
        e.preventDefault();
        setBlur({ step: step, id: id, showError: validate(e) });
    };
    var onFocus = function (e) {
        e.preventDefault();
        setFocus({ step: step, id: id });
    };
    // TODO clean this mess up
    return {
        value: isObjectEmpty(formData) ? '' : step != null ? (_c = (_b = formData === null || formData === void 0 ? void 0 : formData[step]) === null || _b === void 0 ? void 0 : _b[id]) !== null && _c !== void 0 ? _c : '' : (_d = formData === null || formData === void 0 ? void 0 : formData[id]) !== null && _d !== void 0 ? _d : '',
        error: isObjectEmpty(error) ? false : step != null ? (_f = (_e = error === null || error === void 0 ? void 0 : error[step]) === null || _e === void 0 ? void 0 : _e[id]) !== null && _f !== void 0 ? _f : false : (_g = error === null || error === void 0 ? void 0 : error[id]) !== null && _g !== void 0 ? _g : false,
        showError: isObjectEmpty(showError)
            ? false
            : step != null
                ? (_j = (_h = showError === null || showError === void 0 ? void 0 : showError[step]) === null || _h === void 0 ? void 0 : _h[id]) !== null && _j !== void 0 ? _j : false : (_k = showError === null || showError === void 0 ? void 0 : showError[id]) !== null && _k !== void 0 ? _k : false,
        focused: isObjectEmpty(focus) ? false : step != null ? (_m = (_l = focus === null || focus === void 0 ? void 0 : focus[step]) === null || _l === void 0 ? void 0 : _l[id]) !== null && _m !== void 0 ? _m : false : (_o = focus === null || focus === void 0 ? void 0 : focus[id]) !== null && _o !== void 0 ? _o : false,
        onChange: onChange,
        onFileChange: onFileChange,
        onFileDrop: onFileDrop,
        onFileRemove: onFileRemove,
        onBlur: onBlur,
        onFocus: onFocus,
    };
}

var DisplayError = function (_a) {
    var id = _a.id, className = _a.className, label = _a.label, errMsg = _a.errMsg;
    return (createElement("small", { id: id + "-error", "data-error-id": id + "-error", className: "flow-form-error " + className + "-error", style: { color: "" + theme.colors.red } }, typeof errMsg === 'string' ? errMsg : "Please provide a valid value for " + label));
};

var Text = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.type, type = _b === void 0 ? 'text' : _b, _c = _a.required, required = _c === void 0 ? false : _c, validation = _a.validation, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg;
    var _d = useFormData({
        step: step,
        id: id,
        value: '',
        required: required,
        validation: validation,
    }), value = _d.value, onChange = _d.onChange, onBlur = _d.onBlur, onFocus = _d.onFocus, showError = _d.showError, focused = _d.focused;
    return (createElement(Fragment, null,
        createElement("input", { id: id + "-field-text", "data-input-id": id + "-field-text", name: id, type: type, value: value || '', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-text " + className + "-field", placeholder: placeholder, autoComplete: autoComplete, style: __assign(__assign({}, style), { border: "" + border(focused, showError) }) }),
        showError && createElement(DisplayError, { id: id, className: className, label: label, errMsg: errMsg })));
};
Text.defaultProps = {
    ffComp: FFComponent.TEXT,
};

var Number = function (_a) {
    var step = _a.step, id = _a.id, type = _a.type, _b = _a.required, required = _b === void 0 ? false : _b, validation = _a.validation, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg;
    var _c = useFormData({
        step: step,
        id: id,
        value: '',
        required: required,
        validation: validation,
    }), value = _c.value, onChange = _c.onChange, onBlur = _c.onBlur, onFocus = _c.onFocus, showError = _c.showError, focused = _c.focused;
    return (createElement(Fragment, null,
        createElement("input", { id: id + "-field-number", "data-input-id": id + "-field-number", name: id, type: type, value: value || '', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-number " + className + "-field", placeholder: placeholder, autoComplete: autoComplete, style: __assign(__assign({}, style), { border: "" + border(focused, showError) }) }),
        showError && createElement(DisplayError, { id: id, className: className, label: label, errMsg: errMsg })));
};
Number.defaultProps = {
    ffComp: FFComponent.NUMBER,
};

var Email = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.type, type = _b === void 0 ? 'email' : _b, _c = _a.required, required = _c === void 0 ? false : _c, validation = _a.validation, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg;
    var _d = useFormData({
        step: step,
        id: id,
        value: '',
        required: required,
        validation: validation,
    }), value = _d.value, onChange = _d.onChange, onBlur = _d.onBlur, onFocus = _d.onFocus, showError = _d.showError, focused = _d.focused;
    return (createElement(Fragment, null,
        createElement("input", { id: id + "-field-email", "data-input-id": id + "-field-email", name: id, type: type, value: value || '', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-email " + className + "-field", placeholder: placeholder, autoComplete: autoComplete, style: __assign(__assign({}, style), { border: "" + border(focused, showError) }) }),
        showError && createElement(DisplayError, { id: id, className: className, label: label, errMsg: errMsg })));
};
Email.defaultProps = {
    ffComp: FFComponent.EMAIL,
};

var Password = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.type, type = _b === void 0 ? 'password' : _b, _c = _a.required, required = _c === void 0 ? false : _c, validation = _a.validation, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg;
    var _d = useFormData({
        step: step,
        id: id,
        value: '',
        required: required,
        validation: validation,
    }), value = _d.value, onChange = _d.onChange, onBlur = _d.onBlur, onFocus = _d.onFocus, showError = _d.showError, focused = _d.focused;
    return (createElement(Fragment, null,
        createElement("input", { id: id + "-field-password", "data-input-id": id + "-field-password", name: id, type: type, value: value || '', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-password " + className + "-field", placeholder: placeholder, autoComplete: autoComplete, style: __assign(__assign({}, style), { border: "" + border(focused, showError) }) }),
        showError && createElement(DisplayError, { id: id, className: className, label: label, errMsg: errMsg })));
};
Password.defaultProps = {
    ffComp: FFComponent.PASSWORD,
};

var Tel = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.type, type = _b === void 0 ? 'text' : _b, _c = _a.required, required = _c === void 0 ? false : _c, validation = _a.validation, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg, _d = _a.pattern, pattern = _d === void 0 ? '[0-9]{3}-[0-9]{2}-[0-9]{3}' : _d;
    var _e = useFormData({
        step: step,
        id: id,
        value: '',
        required: required,
        validation: validation,
    }), value = _e.value, onChange = _e.onChange, onBlur = _e.onBlur, onFocus = _e.onFocus, showError = _e.showError, focused = _e.focused;
    return (createElement(Fragment, null,
        createElement("input", { id: id + "-field-tel", "data-input-id": id + "-field-tel", name: id, type: type, value: value || '', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-tel " + className + "-field", placeholder: placeholder, autoComplete: autoComplete, style: __assign(__assign({}, style), { border: "" + border(focused, showError) }), pattern: pattern }),
        showError && createElement(DisplayError, { id: id, className: className, label: label, errMsg: errMsg })));
};
Tel.defaultProps = {
    ffComp: FFComponent.TEL,
};

var Url = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.type, type = _b === void 0 ? 'text' : _b, _c = _a.required, required = _c === void 0 ? false : _c, validation = _a.validation, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg, _d = _a.pattern, pattern = _d === void 0 ? 'https://.*' : _d;
    var _e = useFormData({
        step: step,
        id: id,
        value: '',
        required: required,
        validation: validation,
    }), value = _e.value, onChange = _e.onChange, onBlur = _e.onBlur, onFocus = _e.onFocus, showError = _e.showError, focused = _e.focused;
    return (createElement(Fragment, null,
        createElement("input", { id: id + "-filed-url", "data-input-id": id + "-field-url", name: id, type: type, value: value || '', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-url " + className + "-field", placeholder: placeholder, autoComplete: autoComplete, style: __assign(__assign({}, style), { border: "" + border(focused, showError) }), pattern: pattern }),
        showError && createElement(DisplayError, { id: id, className: className, label: label, errMsg: errMsg })));
};
Url.defaultProps = {
    ffComp: FFComponent.URL,
};

var Color = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.type, type = _b === void 0 ? 'color' : _b, _c = _a.required, required = _c === void 0 ? false : _c, validation = _a.validation, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg;
    var _d = useFormData({
        step: step,
        id: id,
        value: '',
        required: required,
        validation: validation,
    }), value = _d.value, onChange = _d.onChange, onBlur = _d.onBlur, onFocus = _d.onFocus, showError = _d.showError, focused = _d.focused;
    return (createElement(Fragment, null,
        createElement("input", { id: id + "-field-color", "data-input-id": id + "-field-color", name: id, type: type, value: value || '#519839', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-color " + className + "-field", placeholder: placeholder, autoComplete: autoComplete, style: __assign(__assign({}, style), { border: "" + border(focused, showError) }) }),
        showError && createElement(DisplayError, { id: id, className: className, label: label, errMsg: errMsg })));
};
Color.defaultProps = {
    ffComp: FFComponent.COLOR,
};

var TextArea = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.required, required = _b === void 0 ? false : _b, validation = _a.validation, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg, _c = _a.rows, rows = _c === void 0 ? 4 : _c, _d = _a.cols, cols = _d === void 0 ? 20 : _d;
    var _e = useFormData({
        step: step,
        id: id,
        value: '',
        required: required,
        validation: validation,
    }), value = _e.value, onChange = _e.onChange, onBlur = _e.onBlur, onFocus = _e.onFocus, showError = _e.showError, focused = _e.focused;
    return (createElement(Fragment, null,
        createElement("textarea", { id: id + "-field-textarea", "data-input-id": id + "-field-textarea", name: id, value: value || '', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-textarea " + className + "-field", placeholder: placeholder, autoComplete: autoComplete, style: __assign(__assign({}, style), { border: "" + border(focused, showError) }), rows: rows, cols: cols }),
        showError && createElement(DisplayError, { id: id, className: className, label: label, errMsg: errMsg })));
};
TextArea.defaultProps = {
    ffComp: FFComponent.TEXTAREA,
};

var Select = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.required, required = _b === void 0 ? false : _b, validation = _a.validation, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg, options = _a.options;
    var _c = useFormData({
        step: step,
        id: id,
        value: '',
        required: required,
        validation: validation,
    }), value = _c.value, onChange = _c.onChange, onBlur = _c.onBlur, onFocus = _c.onFocus, showError = _c.showError, focused = _c.focused;
    return (createElement(Fragment, null,
        createElement("select", { id: id + "-field-text", "data-input-id": id + "-field-text", name: id, value: value || '', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-text " + className + "-field", placeholder: placeholder, autoComplete: autoComplete, style: __assign(__assign({}, style), { border: "" + border(focused, showError) }) }, options &&
            options.map(function (option) { return (createElement("option", { key: option.name, value: option.value }, option.name)); })),
        showError && createElement(DisplayError, { id: id, className: className, label: label, errMsg: errMsg })));
};
Select.defaultProps = {
    ffComp: FFComponent.SELECT,
};

var handleDefaults = function (e) {
    e.preventDefault();
    e.stopPropagation();
};
var DragAndDrop = function (_a) {
    var step = _a.step, id = _a.id, 
    // type = 'file',
    _b = _a.required, 
    // type = 'file',
    required = _b === void 0 ? false : _b, validation = _a.validation, placeholder = _a.placeholder, autoComplete = _a.autoComplete, 
    // style,
    className = _a.className, label = _a.label, errMsg = _a.errMsg;
    var _c = useFormData({
        step: step,
        id: id,
        value: '',
        required: required,
        validation: validation,
    }), value = _c.value, onFileChange = _c.onFileChange, onFileDrop = _c.onFileDrop, onFileRemove = _c.onFileRemove, onBlur = _c.onBlur, onFocus = _c.onFocus, showError = _c.showError, focused = _c.focused;
    var fileRef = useRef(null);
    var onDragEnter = function (e) {
        handleDefaults(e);
    };
    var onDragLeave = function (e) {
        handleDefaults(e);
    };
    var onDrop = function (e) {
        handleDefaults(e);
        onFileDrop(e, id);
    };
    var handleFileBtn = function () {
        if (fileRef.current == null)
            return;
        fileRef.current.click();
    };
    return (createElement(Fragment, null,
        createElement("div", { className: "flow-form-file-upload", style: {
                border: "" + border(focused, showError),
                borderRadius: "" + theme.border.radius,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '5rem',
                width: '100%',
            }, onDrag: handleDefaults, onDragStart: handleDefaults, onDragEnd: handleDefaults, onDragOver: handleDefaults, onDragEnter: onDragEnter, onDragLeave: onDragLeave, onDrop: onDrop },
            createElement("button", { type: "button", id: id + "-btn", className: id + "-btn", onClick: handleFileBtn }, placeholder ? placeholder : "Drag and Drop or Click to upload"),
            createElement("input", { ref: fileRef, multiple: true, id: id + "-field-file", "data-input-id": id + "-field-file", name: id, type: "file", 
                // value={value || ''}
                required: required, onChange: onFileChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-drag-and-drop " + className + "-field", autoComplete: autoComplete, style: { display: 'none' } })),
        value.length > 0 && (createElement("ul", { style: { listStyle: 'none', padding: 0 } }, value.map(function (file, index) { return (createElement("li", { key: index, style: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: '0.3rem',
            } },
            createElement("span", null, file.name),
            createElement(ListButton, { onClick: function () { return onFileRemove(index); }, remove: true }, "\u00D7"))); }))),
        showError && createElement(DisplayError, { id: id, className: className, label: label, errMsg: errMsg })));
};
DragAndDrop.defaultProps = {
    ffComp: FFComponent.DRAG_AND_DROP,
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
        style: __assign({ display: 'block', width: '100%', fontSize: "" + theme.fonts.medium, textIndent: "" + theme.text.indent, borderRadius: "" + theme.border.radius, backgroundColor: "" + theme.colors.white, outline: 'none' }, style),
        errMsg: errMsg,
        options: options,
        inputs: inputs,
    };
    return (createElement("label", { id: id + "-label", "data-field-id": id + "-label", htmlFor: id, className: "flow-form-label " + className + "-label", style: { display: 'block', minHeight: '4.5rem', textTransform: 'capitalize' } },
        createElement("legend", { style: { fontSize: "" + theme.fonts.medium } }, children ? children : name !== null && name !== void 0 ? name : ''),
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
                case 'dragAndDrop':
                    return createElement(DragAndDrop, __assign({}, defaultProps));
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

var Item = memo(function () { return createElement(Fragment, null); });
Item.defaultProps = {
    ffComp: FFComponent.ITEM,
};

var Row = function (_a) {
    var className = _a.className, children = _a.children;
    return (createElement("div", { className: "flow-form-field-row " + className, style: { display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' } }, children));
};
Row.defaultProps = {
    ffComp: FFComponent.ROW,
};

var ItemInput = memo(function (_a) {
    var objKey = _a.objKey, fieldIndex = _a.fieldIndex, type = _a.type, value = _a.value, required = _a.required, _b = _a.autoComplete, autoComplete = _b === void 0 ? 'off' : _b, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus;
    return (createElement("input", { "data-field-id": objKey + "-field-field-list-item-" + fieldIndex, id: objKey + "-field-list-field-" + type, name: objKey, type: type, value: value, required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-field-list-item " + objKey + "-field-list-item", placeholder: objKey, autoComplete: autoComplete, style: {
            marginRight: '10px',
            textTransform: 'capitalize',
            fontSize: "" + theme.fonts.medium,
            textIndent: "" + theme.text.indent,
            border: "" + theme.border.default,
            borderRadius: "" + theme.border.radius,
            backgroundColor: "" + theme.colors.white,
            outline: 'none',
        } }));
});
ItemInput.defaultProps = {
    ffComp: FFComponent.ITEM_INPUT,
};

function handleBlankArr(children) {
    return Children.toArray(children).reduce(function (acc, child) {
        var _a;
        var _b;
        return isValidElement(child)
            ? __assign(__assign({}, acc), (_a = {}, _a[toCamelCase(child.props.name ? child.props.name : (_b = child.props.children) !== null && _b !== void 0 ? _b : '')] = '', _a)) : acc;
    }, {});
}
function handleBlankObj(children) {
    var _a;
    var _b;
    if (isValidElement(children)) {
        return _a = {}, _a[toCamelCase(children.props.name ? children.props.name : (_b = children.props.children) !== null && _b !== void 0 ? _b : '')] = '', _a;
    }
    else {
        return {};
    }
}
function handleInputPropsArr(children) {
    return Children.toArray(children).reduce(function (acc, child) { return (isValidElement(child) ? __spreadArrays(acc, [__assign({}, child.props)]) : acc); }, []);
}
function handleInputPropsObj(children) {
    if (isValidElement(children)) {
        return [__assign({}, children.props)];
    }
    return [];
}
function handleErrorArr(children) {
    return Children.toArray(children).reduce(function (acc, child) {
        var _a;
        var _b, _c, _d, _e;
        return isValidElement(child)
            ? __assign(__assign({}, acc), (_a = {}, _a[toCamelCase(child.props.name ? child.props.name : (_b = child.props.children) !== null && _b !== void 0 ? _b : '')] = ((_c = child.props) === null || _c === void 0 ? void 0 : _c.required) || ((_d = child.props) === null || _d === void 0 ? void 0 : _d.validation) ? true : (_e = false) !== null && _e !== void 0 ? _e : false, _a)) : acc;
    }, {});
}
function handleErrorObj(children) {
    var _a;
    var _b, _c, _d, _e;
    if (isValidElement(children)) {
        return _a = {},
            _a[toCamelCase(children.props.name ? children.props.name : (_b = children.props.children) !== null && _b !== void 0 ? _b : '')] = ((_c = children.props) === null || _c === void 0 ? void 0 : _c.required) || ((_d = children.props) === null || _d === void 0 ? void 0 : _d.validation) ? true : (_e = false) !== null && _e !== void 0 ? _e : false,
            _a;
    }
    else {
        return {};
    }
}
function handleFocusArr(children) {
    return Children.toArray(children).reduce(function (acc, child) {
        var _a;
        var _b;
        return isValidElement(child)
            ? __assign(__assign({}, acc), (_a = {}, _a[toCamelCase(child.props.name ? child.props.name : (_b = child.props.children) !== null && _b !== void 0 ? _b : '')] = false, _a)) : acc;
    }, {});
}
function handleFocusObj(children) {
    var _a;
    var _b;
    if (isValidElement(children)) {
        return _a = {},
            _a[toCamelCase(children.props.name ? children.props.name : (_b = children.props.children) !== null && _b !== void 0 ? _b : '')] = false,
            _a;
    }
    else {
        return {};
    }
}

// TODO put state function code into own hook?
// TODO investigate when this is rerendering... constFocus was being changed on state reducer end, but never showed
var FieldList = function (_a) {
    var step = _a.step, label = _a.label, name = _a.name, className = _a.className, style = _a.style, children = _a.children, add = _a.add;
    var _b;
    var _c = useContext(Context), flow = _c.flow, setFieldList = _c.setFieldList, formData = _c.formData, updateFieldListItem = _c.updateFieldListItem, addFieldList = _c.addFieldList, removeFieldList = _c.removeFieldList, setFieldListBlur = _c.setFieldListBlur, setFieldListFocus = _c.setFieldListFocus, showError = _c.showError;
    if (!children) {
        throw new Error("<FieldList> expects to have <FieldList.Item> for child components.");
    }
    if (!label) {
        throw new Error("The label prop is mandatory on FieldList Component.");
    }
    var id = useMemo(function () { return toCamelCase(name ? name : label); }, [name, label]);
    var blankInput = useMemo(function () { return (Array.isArray(children) ? handleBlankArr(children) : handleBlankObj(children)); }, [children]);
    var inputProps = useMemo(function () { return (Array.isArray(children) ? handleInputPropsArr(children) : handleInputPropsObj(children)); }, [children]);
    var constructErrors = useMemo(function () { return (Array.isArray(children) ? handleErrorArr(children) : handleErrorObj(children)); }, [children]);
    var constructFocus = useMemo(function () { return (Array.isArray(children) ? handleFocusArr(children) : handleFocusObj(children)); }, [children]);
    useEffect(function () {
        setFieldList({
            step: step,
            id: id,
            value: [__assign({}, blankInput)],
            error: [__assign({}, constructErrors)],
            showError: [__assign({}, constructFocus)],
            focus: [__assign({}, constructFocus)],
        });
    }, [step, label, flow.currentStep, flow.key]);
    function validate(e, index) {
        if (inputProps[index].required || inputProps[index].validation) {
            return inputProps[index].validation ? inputProps[index].validation(e) : !e.target.value;
        }
        return false;
    }
    var handleChange = function (row, input) { return function (e) {
        e.preventDefault();
        var _a = e.target, type = _a.type, name = _a.name, value = _a.value;
        updateFieldListItem({
            step: step,
            id: id,
            index: row,
            name: name,
            value: type === 'number' ? parseFloat(value) : value,
            error: validate(e, input),
        });
    }; };
    var handleBlur = function (row, input) { return function (e) {
        var name = e.target.name;
        setFieldListBlur({
            step: step,
            id: id,
            index: row,
            name: name,
            error: validate(e, input),
        });
    }; };
    var handleFocus = function (index) { return function (e) {
        var name = e.target.name;
        setFieldListFocus({
            step: step,
            id: id,
            index: index,
            name: name,
        });
    }; };
    return (createElement("fieldset", { "data-field-list-id": id, className: "flow-form-field-list " + className, style: __assign({ display: "block", minHeight: '4.5rem', border: 'none', padding: '0', margin: '0' }, style) },
        createElement("legend", { style: { fontSize: "" + theme.fonts.medium } }, label),
        !isObjectEmpty(formData) && step != null ? (createElement(Fragment, null, (_b = formData === null || formData === void 0 ? void 0 : formData[step]) === null || _b === void 0 ? void 0 : _b[id].map(function (field, index) { return (createElement(Row, { key: index, className: className },
            Object.entries(field).map(function (_a, i) {
                var k = _a[0], v = _a[1];
                var _b, _c, _d, _e, _f, _g;
                return (createElement("div", { key: i, style: { display: 'flex', flexDirection: 'column' } },
                    createElement(ItemInput, { key: k, objKey: k, fieldIndex: i, type: (_b = inputProps === null || inputProps === void 0 ? void 0 : inputProps[i].type) !== null && _b !== void 0 ? _b : 'text', value: v || '', required: (_c = inputProps === null || inputProps === void 0 ? void 0 : inputProps[i].required) !== null && _c !== void 0 ? _c : false, onChange: handleChange(index, i), onBlur: handleBlur(index, i), onFocus: handleFocus(index), autoComplete: (_d = inputProps === null || inputProps === void 0 ? void 0 : inputProps[i].autoComplete) !== null && _d !== void 0 ? _d : 'off' }),
                    ((_g = (_f = (_e = showError === null || showError === void 0 ? void 0 : showError[step]) === null || _e === void 0 ? void 0 : _e[id]) === null || _f === void 0 ? void 0 : _f[index]) === null || _g === void 0 ? void 0 : _g[k]) && (createElement(DisplayError, { id: k, className: inputProps[i].className, label: k, errMsg: inputProps[i].errMsg }))));
            }),
            add && (createElement(Fragment, null, index === 0 ? (createElement(ListButton, { onClick: function () {
                    return addFieldList({
                        step: step,
                        id: id,
                        blankInput: blankInput !== null && blankInput !== void 0 ? blankInput : {},
                        blankError: constructErrors !== null && constructErrors !== void 0 ? constructErrors : {},
                        blankFocus: constructFocus !== null && constructFocus !== void 0 ? constructFocus : {},
                    });
                } }, "+")) : (createElement(ListButton, { remove: true, onClick: function () { return removeFieldList({ step: step, id: id, index: index }); } }, "\u2212")))))); }))) : (createElement(Fragment, null, !isObjectEmpty(formData) && (formData === null || formData === void 0 ? void 0 : formData[id].map(function (field, index) { return (createElement(Row, { key: index, className: className },
            Object.entries(field).map(function (_a, i) {
                var k = _a[0], v = _a[1];
                var _b, _c, _d, _e, _f;
                return (createElement("div", { key: i, style: { display: 'flex', flexDirection: 'column' } },
                    createElement(ItemInput, { objKey: k, fieldIndex: i, type: (_b = inputProps === null || inputProps === void 0 ? void 0 : inputProps[i].type) !== null && _b !== void 0 ? _b : 'text', value: v || '', required: (_c = inputProps === null || inputProps === void 0 ? void 0 : inputProps[i].required) !== null && _c !== void 0 ? _c : false, onChange: handleChange(index, i), onBlur: handleBlur(index, i), onFocus: handleFocus(index), autoComplete: (_d = inputProps === null || inputProps === void 0 ? void 0 : inputProps[i].autoComplete) !== null && _d !== void 0 ? _d : 'off' }),
                    ((_f = (_e = showError === null || showError === void 0 ? void 0 : showError[id]) === null || _e === void 0 ? void 0 : _e[index]) === null || _f === void 0 ? void 0 : _f[k]) && (createElement(DisplayError, { id: k, className: inputProps[i].className, label: k, errMsg: inputProps[i].errMsg }))));
            }),
            add && (createElement(Fragment, null, index === 0 ? (createElement(ListButton, { onClick: function () {
                    return addFieldList({
                        step: step,
                        id: id,
                        blankInput: blankInput !== null && blankInput !== void 0 ? blankInput : {},
                        blankError: constructErrors !== null && constructErrors !== void 0 ? constructErrors : {},
                        blankFocus: constructFocus !== null && constructFocus !== void 0 ? constructFocus : {},
                    });
                } }, "+")) : (createElement(ListButton, { remove: true, onClick: function () { return removeFieldList({ step: step, id: id, index: index }); } }, "\u2212")))))); }))))));
};
FieldList.defaultProps = {
    ffComp: FFComponent.FIELD_LIST,
};
FieldList.Item = Item;

export { Field, FieldList, FlowForm, Step };
//# sourceMappingURL=index.es.js.map
