import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
944 - XInterview;
from;
'./Interview';
944 - XForm;
from;
'./Form';
944 - xReducer;
from;
'../../store/slices/944-xSlice';
const store = configureStore({
    reducer: {
        944: -x, 944: -xReducer
    }
});
const meta;
944 - XInterview > ;
{
    title: 'Forms/944-X',
        component;
    944 - XInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "944-XForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "944-XForm printMode=", true, " />"] })),
};
