import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1098 - QInterview;
from;
'./Interview';
1098 - QForm;
from;
'./Form';
1098 - qReducer;
from;
'../../store/slices/1098-qSlice';
const store = configureStore({
    reducer: {
        1098: -q, 1098: -qReducer
    }
});
const meta;
1098 - QInterview > ;
{
    title: 'Forms/1098-Q',
        component;
    1098 - QInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1098-QForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1098-QForm printMode=", true, " />"] })),
};
