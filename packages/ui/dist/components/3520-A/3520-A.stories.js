import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
3520 - AInterview;
from;
'./Interview';
3520 - AForm;
from;
'./Form';
3520 - aReducer;
from;
'../../store/slices/3520-aSlice';
const store = configureStore({
    reducer: {
        3520: -a, 3520: -aReducer
    }
});
const meta;
3520 - AInterview > ;
{
    title: 'Forms/3520-A',
        component;
    3520 - AInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "3520-AForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "3520-AForm printMode=", true, " />"] })),
};
