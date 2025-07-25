import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
5471;
Interview;
from;
'./Interview';
5471;
Form;
from;
'./Form';
5471;
Reducer;
from;
'../../store/slices/5471Slice';
const store = configureStore({
    reducer: {
        5471: 5471, Reducer
    }
});
const meta;
5471;
Interview > ;
{
    title: 'Forms/5471',
        component;
    5471;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "5471Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "5471Form printMode=", true, " />"] })),
};
