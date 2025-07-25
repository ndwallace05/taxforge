import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
var W = ;
-4;
VInterview;
from;
'./Interview';
-4;
VForm;
from;
'./Form';
var w = ;
-4;
vReducer;
from;
'../../store/slices/w-4vSlice';
const store = configureStore({
    reducer: {
        w
    } - 4, v: w - 4, vReducer
});
;
const meta;
-4;
VInterview > ;
{
    title: 'Forms/W-4V',
        component;
    W - 4;
    VInterview,
        decorators;
    [
        (Story) => (_jsx(Provider, { store: store, children: _jsx(Story, {}) })),
    ],
    ;
}
;
export default meta;
export const Interview = {
    args: {},
};
export const FormView = {
    render: () => (_jsx(Provider, { store: store, children: _jsx("W-4VForm", {}) })),
};
export const PrintView = {
    render: () => (_jsx(Provider, { store: store, children: _jsx("W-4VForm", { printMode: true }) })),
};
