import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8870;
Interview;
from;
'./Interview';
8870;
Form;
from;
'./Form';
8870;
Reducer;
from;
'../../store/slices/8870Slice';
const store = configureStore({
    reducer: {
        8870: 8870, Reducer
    }
});
const meta;
8870;
Interview > ;
{
    title: 'Forms/8870',
        component;
    8870;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8870Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8870Form printMode=", true, " />"] })),
};
