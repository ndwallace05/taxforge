import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1098 - CInterview;
from;
'./Interview';
1098 - CForm;
from;
'./Form';
1098 - cReducer;
from;
'../../store/slices/1098-cSlice';
const store = configureStore({
    reducer: {
        1098: -c, 1098: -cReducer
    }
});
const meta;
1098 - CInterview > ;
{
    title: 'Forms/1098-C',
        component;
    1098 - CInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1098-CForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1098-CForm printMode=", true, " />"] })),
};
