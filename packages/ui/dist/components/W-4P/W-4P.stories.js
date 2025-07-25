import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
var W = ;
-4;
PInterview;
from;
'./Interview';
-4;
PForm;
from;
'./Form';
var w = ;
-4;
pReducer;
from;
'../../store/slices/w-4pSlice';
const store = configureStore({
    reducer: {
        w
    } - 4, p: w - 4, pReducer
});
;
const meta;
-4;
PInterview > ;
{
    title: 'Forms/W-4P',
        component;
    W - 4;
    PInterview,
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
    render: () => (_jsx(Provider, { store: store, children: _jsx("W-4PForm", {}) })),
};
export const PrintView = {
    render: () => (_jsx(Provider, { store: store, children: _jsx("W-4PForm", { printMode: true }) })),
};
