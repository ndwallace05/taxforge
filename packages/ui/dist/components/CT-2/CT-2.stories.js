import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
var CT = ;
-2;
Interview;
from;
'./Interview';
-2;
Form;
from;
'./Form';
var ct = ;
-2;
Reducer;
from;
'../../store/slices/ct-2Slice';
const store = configureStore({
    reducer: {
        ct
    } - 2, ct
} - 2, Reducer);
;
const meta;
-2;
Interview > ;
{
    title: 'Forms/CT-2',
        component;
    CT - 2;
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
    render: () => (_jsx(Provider, { store: store, children: _jsx("CT-2Form", {}) })),
};
export const PrintView = {
    render: () => (_jsx(Provider, { store: store, children: _jsx("CT-2Form", { printMode: true }) })),
};
