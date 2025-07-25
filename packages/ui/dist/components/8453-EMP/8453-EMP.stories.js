import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8453 - EMPInterview;
from;
'./Interview';
8453 - EMPForm;
from;
'./Form';
8453 - empReducer;
from;
'../../store/slices/8453-empSlice';
const store = configureStore({
    reducer: {
        8453: -emp, 8453: -empReducer
    }
});
const meta;
8453 - EMPInterview > ;
{
    title: 'Forms/8453-EMP',
        component;
    8453 - EMPInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8453-EMPForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8453-EMPForm printMode=", true, " />"] })),
};
