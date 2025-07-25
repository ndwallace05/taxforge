import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1099 - QInterview;
from;
'./Interview';
1099 - QForm;
from;
'./Form';
1099 - qReducer;
from;
'../../store/slices/1099-qSlice';
const store = configureStore({
    reducer: {
        1099: -q, 1099: -qReducer
    }
});
const meta;
1099 - QInterview > ;
{
    title: 'Forms/1099-Q',
        component;
    1099 - QInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1099-QForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1099-QForm printMode=", true, " />"] })),
};
