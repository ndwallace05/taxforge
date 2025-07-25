import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8864;
Interview;
from;
'./Interview';
8864;
Form;
from;
'./Form';
8864;
Reducer;
from;
'../../store/slices/8864Slice';
const store = configureStore({
    reducer: {
        8864: 8864, Reducer
    }
});
const meta;
8864;
Interview > ;
{
    title: 'Forms/8864',
        component;
    8864;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8864Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8864Form printMode=", true, " />"] })),
};
