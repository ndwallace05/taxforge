import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8911;
Interview;
from;
'./Interview';
8911;
Form;
from;
'./Form';
8911;
Reducer;
from;
'../../store/slices/8911Slice';
const store = configureStore({
    reducer: {
        8911: 8911, Reducer
    }
});
const meta;
8911;
Interview > ;
{
    title: 'Forms/8911',
        component;
    8911;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8911Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8911Form printMode=", true, " />"] })),
};
