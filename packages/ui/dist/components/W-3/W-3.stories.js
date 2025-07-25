import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
var W = ;
-3;
Interview;
from;
'./Interview';
-3;
Form;
from;
'./Form';
var w = ;
-3;
Reducer;
from;
'../../store/slices/w-3Slice';
const store = configureStore({
    reducer: {
        w
    } - 3, w
} - 3, Reducer);
;
const meta;
-3;
Interview > ;
{
    title: 'Forms/W-3',
        component;
    W - 3;
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
    render: () => (_jsx(Provider, { store: store, children: _jsx("W-3Form", {}) })),
};
export const PrintView = {
    render: () => (_jsx(Provider, { store: store, children: _jsx("W-3Form", { printMode: true }) })),
};
