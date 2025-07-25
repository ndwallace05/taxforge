import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8885;
Interview;
from;
'./Interview';
8885;
Form;
from;
'./Form';
8885;
Reducer;
from;
'../../store/slices/8885Slice';
const store = configureStore({
    reducer: {
        8885: 8885, Reducer
    }
});
const meta;
8885;
Interview > ;
{
    title: 'Forms/8885',
        component;
    8885;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8885Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8885Form printMode=", true, " />"] })),
};
