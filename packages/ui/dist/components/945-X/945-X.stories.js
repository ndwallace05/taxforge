import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
945 - XInterview;
from;
'./Interview';
945 - XForm;
from;
'./Form';
945 - xReducer;
from;
'../../store/slices/945-xSlice';
const store = configureStore({
    reducer: {
        945: -x, 945: -xReducer
    }
});
const meta;
945 - XInterview > ;
{
    title: 'Forms/945-X',
        component;
    945 - XInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "945-XForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "945-XForm printMode=", true, " />"] })),
};
