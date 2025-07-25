import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
5884;
Interview;
from;
'./Interview';
5884;
Form;
from;
'./Form';
5884;
Reducer;
from;
'../../store/slices/5884Slice';
const store = configureStore({
    reducer: {
        5884: 5884, Reducer
    }
});
const meta;
5884;
Interview > ;
{
    title: 'Forms/5884',
        component;
    5884;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "5884Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "5884Form printMode=", true, " />"] })),
};
