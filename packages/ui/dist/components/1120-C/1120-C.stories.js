import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1120 - CInterview;
from;
'./Interview';
1120 - CForm;
from;
'./Form';
1120 - cReducer;
from;
'../../store/slices/1120-cSlice';
const store = configureStore({
    reducer: {
        1120: -c, 1120: -cReducer
    }
});
const meta;
1120 - CInterview > ;
{
    title: 'Forms/1120-C',
        component;
    1120 - CInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1120-CForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1120-CForm printMode=", true, " />"] })),
};
