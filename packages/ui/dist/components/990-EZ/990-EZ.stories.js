import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
990 - EZInterview;
from;
'./Interview';
990 - EZForm;
from;
'./Form';
990 - ezReducer;
from;
'../../store/slices/990-ezSlice';
const store = configureStore({
    reducer: {
        990: -ez, 990: -ezReducer
    }
});
const meta;
990 - EZInterview > ;
{
    title: 'Forms/990-EZ',
        component;
    990 - EZInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "990-EZForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "990-EZForm printMode=", true, " />"] })),
};
