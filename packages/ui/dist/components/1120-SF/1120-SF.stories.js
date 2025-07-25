import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1120 - SFInterview;
from;
'./Interview';
1120 - SFForm;
from;
'./Form';
1120 - sfReducer;
from;
'../../store/slices/1120-sfSlice';
const store = configureStore({
    reducer: {
        1120: -sf, 1120: -sfReducer
    }
});
const meta;
1120 - SFInterview > ;
{
    title: 'Forms/1120-SF',
        component;
    1120 - SFInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1120-SFForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1120-SFForm printMode=", true, " />"] })),
};
