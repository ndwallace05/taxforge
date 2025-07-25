import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8879 - CInterview;
from;
'./Interview';
8879 - CForm;
from;
'./Form';
8879 - cReducer;
from;
'../../store/slices/8879-cSlice';
const store = configureStore({
    reducer: {
        8879: -c, 8879: -cReducer
    }
});
const meta;
8879 - CInterview > ;
{
    title: 'Forms/8879-C',
        component;
    8879 - CInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8879-CForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8879-CForm printMode=", true, " />"] })),
};
