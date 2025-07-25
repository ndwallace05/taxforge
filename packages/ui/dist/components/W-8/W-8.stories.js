import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
var W = ;
-8;
Interview;
from;
'./Interview';
-8;
Form;
from;
'./Form';
var w = ;
-8;
Reducer;
from;
'../../store/slices/w-8Slice';
const store = configureStore({
    reducer: {
        w
    } - 8, w
} - 8, Reducer);
;
const meta;
-8;
Interview > ;
{
    title: 'Forms/W-8',
        component;
    W - 8;
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
    render: () => (_jsx(Provider, { store: store, children: _jsx("W-8Form", {}) })),
};
export const PrintView = {
    render: () => (_jsx(Provider, { store: store, children: _jsx("W-8Form", { printMode: true }) })),
};
