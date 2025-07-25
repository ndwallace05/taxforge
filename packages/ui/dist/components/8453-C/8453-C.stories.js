import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8453 - CInterview;
from;
'./Interview';
8453 - CForm;
from;
'./Form';
8453 - cReducer;
from;
'../../store/slices/8453-cSlice';
const store = configureStore({
    reducer: {
        8453: -c, 8453: -cReducer
    }
});
const meta;
8453 - CInterview > ;
{
    title: 'Forms/8453-C',
        component;
    8453 - CInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8453-CForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8453-CForm printMode=", true, " />"] })),
};
