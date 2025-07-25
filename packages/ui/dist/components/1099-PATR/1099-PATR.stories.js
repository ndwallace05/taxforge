import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1099 - PATRInterview;
from;
'./Interview';
1099 - PATRForm;
from;
'./Form';
1099 - patrReducer;
from;
'../../store/slices/1099-patrSlice';
const store = configureStore({
    reducer: {
        1099: -patr, 1099: -patrReducer
    }
});
const meta;
1099 - PATRInterview > ;
{
    title: 'Forms/1099-PATR',
        component;
    1099 - PATRInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1099-PATRForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1099-PATRForm printMode=", true, " />"] })),
};
