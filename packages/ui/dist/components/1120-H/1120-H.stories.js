import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1120 - HInterview;
from;
'./Interview';
1120 - HForm;
from;
'./Form';
1120 - hReducer;
from;
'../../store/slices/1120-hSlice';
const store = configureStore({
    reducer: {
        1120: -h, 1120: -hReducer
    }
});
const meta;
1120 - HInterview > ;
{
    title: 'Forms/1120-H',
        component;
    1120 - HInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1120-HForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1120-HForm printMode=", true, " />"] })),
};
