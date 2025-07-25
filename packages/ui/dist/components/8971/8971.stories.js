import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8971;
Interview;
from;
'./Interview';
8971;
Form;
from;
'./Form';
8971;
Reducer;
from;
'../../store/slices/8971Slice';
const store = configureStore({
    reducer: {
        8971: 8971, Reducer
    }
});
const meta;
8971;
Interview > ;
{
    title: 'Forms/8971',
        component;
    8971;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8971Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8971Form printMode=", true, " />"] })),
};
