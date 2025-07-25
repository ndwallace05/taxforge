import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1098 - EInterview;
from;
'./Interview';
1098 - EForm;
from;
'./Form';
1098 - eReducer;
from;
'../../store/slices/1098-eSlice';
const store = configureStore({
    reducer: {
        1098: -e, 1098: -eReducer
    }
});
const meta;
1098 - EInterview > ;
{
    title: 'Forms/1098-E',
        component;
    1098 - EInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1098-EForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1098-EForm printMode=", true, " />"] })),
};
