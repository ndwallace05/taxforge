import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8965;
Interview;
from;
'./Interview';
8965;
Form;
from;
'./Form';
8965;
Reducer;
from;
'../../store/slices/8965Slice';
const store = configureStore({
    reducer: {
        8965: 8965, Reducer
    }
});
const meta;
8965;
Interview > ;
{
    title: 'Forms/8965',
        component;
    8965;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8965Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8965Form printMode=", true, " />"] })),
};
