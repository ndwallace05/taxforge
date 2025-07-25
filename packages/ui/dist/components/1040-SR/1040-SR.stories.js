import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1040 - SRInterview;
from;
'./Interview';
1040 - SRForm;
from;
'./Form';
1040 - srReducer;
from;
'../../store/slices/1040-srSlice';
const store = configureStore({
    reducer: {
        1040: -sr, 1040: -srReducer
    }
});
const meta;
1040 - SRInterview > ;
{
    title: 'Forms/1040-SR',
        component;
    1040 - SRInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1040-SRForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1040-SRForm printMode=", true, " />"] })),
};
