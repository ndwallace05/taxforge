import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1120 - SInterview;
from;
'./Interview';
1120 - SForm;
from;
'./Form';
1120 - sReducer;
from;
'../../store/slices/1120-sSlice';
const store = configureStore({
    reducer: {
        1120: -s, 1120: -sReducer
    }
});
const meta;
1120 - SInterview > ;
{
    title: 'Forms/1120-S',
        component;
    1120 - SInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1120-SForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1120-SForm printMode=", true, " />"] })),
};
