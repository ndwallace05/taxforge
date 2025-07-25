import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1120 - WInterview;
from;
'./Interview';
1120 - WForm;
from;
'./Form';
1120 - wReducer;
from;
'../../store/slices/1120-wSlice';
const store = configureStore({
    reducer: {
        1120: -w, 1120: -wReducer
    }
});
const meta;
1120 - WInterview > ;
{
    title: 'Forms/1120-W',
        component;
    1120 - WInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1120-WForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1120-WForm printMode=", true, " />"] })),
};
