import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1099 - INTInterview;
from;
'./Interview';
1099 - INTForm;
from;
'./Form';
1099 - intReducer;
from;
'../../store/slices/1099-intSlice';
const store = configureStore({
    reducer: {
        1099: -int, 1099: -intReducer
    }
});
const meta;
1099 - INTInterview > ;
{
    title: 'Forms/1099-INT',
        component;
    1099 - INTInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1099-INTForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1099-INTForm printMode=", true, " />"] })),
};
