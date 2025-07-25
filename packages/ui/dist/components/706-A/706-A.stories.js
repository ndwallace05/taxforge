import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
706 - AInterview;
from;
'./Interview';
706 - AForm;
from;
'./Form';
706 - aReducer;
from;
'../../store/slices/706-aSlice';
const store = configureStore({
    reducer: {
        706: -a, 706: -aReducer
    }
});
const meta;
706 - AInterview > ;
{
    title: 'Forms/706-A',
        component;
    706 - AInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "706-AForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "706-AForm printMode=", true, " />"] })),
};
