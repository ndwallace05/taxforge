import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1099 - CInterview;
from;
'./Interview';
1099 - CForm;
from;
'./Form';
1099 - cReducer;
from;
'../../store/slices/1099-cSlice';
const store = configureStore({
    reducer: {
        1099: -c, 1099: -cReducer
    }
});
const meta;
1099 - CInterview > ;
{
    title: 'Forms/1099-C',
        component;
    1099 - CInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1099-CForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1099-CForm printMode=", true, " />"] })),
};
