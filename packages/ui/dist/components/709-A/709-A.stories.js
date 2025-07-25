import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
709 - AInterview;
from;
'./Interview';
709 - AForm;
from;
'./Form';
709 - aReducer;
from;
'../../store/slices/709-aSlice';
const store = configureStore({
    reducer: {
        709: -a, 709: -aReducer
    }
});
const meta;
709 - AInterview > ;
{
    title: 'Forms/709-A',
        component;
    709 - AInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "709-AForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "709-AForm printMode=", true, " />"] })),
};
