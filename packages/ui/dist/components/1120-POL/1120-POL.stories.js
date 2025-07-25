import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1120 - POLInterview;
from;
'./Interview';
1120 - POLForm;
from;
'./Form';
1120 - polReducer;
from;
'../../store/slices/1120-polSlice';
const store = configureStore({
    reducer: {
        1120: -pol, 1120: -polReducer
    }
});
const meta;
1120 - POLInterview > ;
{
    title: 'Forms/1120-POL',
        component;
    1120 - POLInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1120-POLForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1120-POLForm printMode=", true, " />"] })),
};
