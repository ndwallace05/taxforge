import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8879 - EOInterview;
from;
'./Interview';
8879 - EOForm;
from;
'./Form';
8879 - eoReducer;
from;
'../../store/slices/8879-eoSlice';
const store = configureStore({
    reducer: {
        8879: -eo, 8879: -eoReducer
    }
});
const meta;
8879 - EOInterview > ;
{
    title: 'Forms/8879-EO',
        component;
    8879 - EOInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8879-EOForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8879-EOForm printMode=", true, " />"] })),
};
