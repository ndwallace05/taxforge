import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1120 - REITInterview;
from;
'./Interview';
1120 - REITForm;
from;
'./Form';
1120 - reitReducer;
from;
'../../store/slices/1120-reitSlice';
const store = configureStore({
    reducer: {
        1120: -reit, 1120: -reitReducer
    }
});
const meta;
1120 - REITInterview > ;
{
    title: 'Forms/1120-REIT',
        component;
    1120 - REITInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1120-REITForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1120-REITForm printMode=", true, " />"] })),
};
