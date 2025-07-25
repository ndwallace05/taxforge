import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8955 - SSAInterview;
from;
'./Interview';
8955 - SSAForm;
from;
'./Form';
8955 - ssaReducer;
from;
'../../store/slices/8955-ssaSlice';
const store = configureStore({
    reducer: {
        8955: -ssa, 8955: -ssaReducer
    }
});
const meta;
8955 - SSAInterview > ;
{
    title: 'Forms/8955-SSA',
        component;
    8955 - SSAInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8955-SSAForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8955-SSAForm printMode=", true, " />"] })),
};
