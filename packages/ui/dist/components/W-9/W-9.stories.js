import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
var W = ;
-9;
Interview;
from;
'./Interview';
-9;
Form;
from;
'./Form';
var w = ;
-9;
Reducer;
from;
'../../store/slices/w-9Slice';
const store = configureStore({
    reducer: {
        w
    } - 9, w
} - 9, Reducer);
;
const meta;
-9;
Interview > ;
{
    title: 'Forms/W-9',
        component;
    W - 9;
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
    render: () => (_jsx(Provider, { store: store, children: _jsx("W-9Form", {}) })),
};
export const PrintView = {
    render: () => (_jsx(Provider, { store: store, children: _jsx("W-9Form", { printMode: true }) })),
};
