import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
990 - PFInterview;
from;
'./Interview';
990 - PFForm;
from;
'./Form';
990 - pfReducer;
from;
'../../store/slices/990-pfSlice';
const store = configureStore({
    reducer: {
        990: -pf, 990: -pfReducer
    }
});
const meta;
990 - PFInterview > ;
{
    title: 'Forms/990-PF',
        component;
    990 - PFInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "990-PFForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "990-PFForm printMode=", true, " />"] })),
};
