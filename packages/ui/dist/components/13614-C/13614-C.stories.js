import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
13614 - CInterview;
from;
'./Interview';
13614 - CForm;
from;
'./Form';
13614 - cReducer;
from;
'../../store/slices/13614-cSlice';
const store = configureStore({
    reducer: {
        13614: -c, 13614: -cReducer
    }
});
const meta;
13614 - CInterview > ;
{
    title: 'Forms/13614-C',
        component;
    13614 - CInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "13614-CForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "13614-CForm printMode=", true, " />"] })),
};
