import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
5498 - ESAInterview;
from;
'./Interview';
5498 - ESAForm;
from;
'./Form';
5498 - esaReducer;
from;
'../../store/slices/5498-esaSlice';
const store = configureStore({
    reducer: {
        5498: -esa, 5498: -esaReducer
    }
});
const meta;
5498 - ESAInterview > ;
{
    title: 'Forms/5498-ESA',
        component;
    5498 - ESAInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "5498-ESAForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "5498-ESAForm printMode=", true, " />"] })),
};
