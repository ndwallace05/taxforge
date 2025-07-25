import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1099 - DIVInterview;
from;
'./Interview';
1099 - DIVForm;
from;
'./Form';
1099 - divReducer;
from;
'../../store/slices/1099-divSlice';
const store = configureStore({
    reducer: {
        1099: -div, 1099: -divReducer
    }
});
const meta;
1099 - DIVInterview > ;
{
    title: 'Forms/1099-DIV',
        component;
    1099 - DIVInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1099-DIVForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1099-DIVForm printMode=", true, " />"] })),
};
