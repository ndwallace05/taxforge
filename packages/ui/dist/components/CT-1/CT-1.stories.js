import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
var CT = ;
-1;
Interview;
from;
'./Interview';
-1;
Form;
from;
'./Form';
var ct = ;
-1;
Reducer;
from;
'../../store/slices/ct-1Slice';
const store = configureStore({
    reducer: {
        ct
    } - 1, ct
} - 1, Reducer);
;
const meta;
-1;
Interview > ;
{
    title: 'Forms/CT-1',
        component;
    CT - 1;
    Interview,
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
    render: () => (_jsx(Provider, { store: store, children: _jsx("CT-1Form", {}) })),
};
export const PrintView = {
    render: () => (_jsx(Provider, { store: store, children: _jsx("CT-1Form", { printMode: true }) })),
};
