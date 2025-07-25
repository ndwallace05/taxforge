import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1120 - RICInterview;
from;
'./Interview';
1120 - RICForm;
from;
'./Form';
1120 - ricReducer;
from;
'../../store/slices/1120-ricSlice';
const store = configureStore({
    reducer: {
        1120: -ric, 1120: -ricReducer
    }
});
const meta;
1120 - RICInterview > ;
{
    title: 'Forms/1120-RIC',
        component;
    1120 - RICInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1120-RICForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1120-RICForm printMode=", true, " />"] })),
};
