import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
943 - XInterview;
from;
'./Interview';
943 - XForm;
from;
'./Form';
943 - xReducer;
from;
'../../store/slices/943-xSlice';
const store = configureStore({
    reducer: {
        943: -x, 943: -xReducer
    }
});
const meta;
943 - XInterview > ;
{
    title: 'Forms/943-X',
        component;
    943 - XInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "943-XForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "943-XForm printMode=", true, " />"] })),
};
