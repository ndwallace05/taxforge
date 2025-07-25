import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
941 - XInterview;
from;
'./Interview';
941 - XForm;
from;
'./Form';
941 - xReducer;
from;
'../../store/slices/941-xSlice';
const store = configureStore({
    reducer: {
        941: -x, 941: -xReducer
    }
});
const meta;
941 - XInterview > ;
{
    title: 'Forms/941-X',
        component;
    941 - XInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "941-XForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "941-XForm printMode=", true, " />"] })),
};
