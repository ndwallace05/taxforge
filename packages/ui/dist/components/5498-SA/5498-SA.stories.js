import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
5498 - SAInterview;
from;
'./Interview';
5498 - SAForm;
from;
'./Form';
5498 - saReducer;
from;
'../../store/slices/5498-saSlice';
const store = configureStore({
    reducer: {
        5498: -sa, 5498: -saReducer
    }
});
const meta;
5498 - SAInterview > ;
{
    title: 'Forms/5498-SA',
        component;
    5498 - SAInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "5498-SAForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "5498-SAForm printMode=", true, " />"] })),
};
