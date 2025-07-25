import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8888;
Interview;
from;
'./Interview';
8888;
Form;
from;
'./Form';
8888;
Reducer;
from;
'../../store/slices/8888Slice';
const store = configureStore({
    reducer: {
        8888: 8888, Reducer
    }
});
const meta;
8888;
Interview > ;
{
    title: 'Forms/8888',
        component;
    8888;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8888Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8888Form printMode=", true, " />"] })),
};
