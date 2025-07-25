import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8453 - SInterview;
from;
'./Interview';
8453 - SForm;
from;
'./Form';
8453 - sReducer;
from;
'../../store/slices/8453-sSlice';
const store = configureStore({
    reducer: {
        8453: -s, 8453: -sReducer
    }
});
const meta;
8453 - SInterview > ;
{
    title: 'Forms/8453-S',
        component;
    8453 - SInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8453-SForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8453-SForm printMode=", true, " />"] })),
};
