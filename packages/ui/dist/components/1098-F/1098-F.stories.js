import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1098 - FInterview;
from;
'./Interview';
1098 - FForm;
from;
'./Form';
1098 - fReducer;
from;
'../../store/slices/1098-fSlice';
const store = configureStore({
    reducer: {
        1098: -f, 1098: -fReducer
    }
});
const meta;
1098 - FInterview > ;
{
    title: 'Forms/1098-F',
        component;
    1098 - FInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1098-FForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1098-FForm printMode=", true, " />"] })),
};
