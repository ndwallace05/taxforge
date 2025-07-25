import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8854;
Interview;
from;
'./Interview';
8854;
Form;
from;
'./Form';
8854;
Reducer;
from;
'../../store/slices/8854Slice';
const store = configureStore({
    reducer: {
        8854: 8854, Reducer
    }
});
const meta;
8854;
Interview > ;
{
    title: 'Forms/8854',
        component;
    8854;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8854Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8854Form printMode=", true, " />"] })),
};
