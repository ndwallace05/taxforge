import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
var W = ;
-4;
SInterview;
from;
'./Interview';
-4;
SForm;
from;
'./Form';
var w = ;
-4;
sReducer;
from;
'../../store/slices/w-4sSlice';
const store = configureStore({
    reducer: {
        w
    } - 4, s: w - 4, sReducer
});
;
const meta;
-4;
SInterview > ;
{
    title: 'Forms/W-4S',
        component;
    W - 4;
    SInterview,
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
    render: () => (_jsx(Provider, { store: store, children: _jsx("W-4SForm", {}) })),
};
export const PrintView = {
    render: () => (_jsx(Provider, { store: store, children: _jsx("W-4SForm", { printMode: true }) })),
};
