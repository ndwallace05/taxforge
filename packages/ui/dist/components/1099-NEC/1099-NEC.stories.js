import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1099 - NECInterview;
from;
'./Interview';
1099 - NECForm;
from;
'./Form';
1099 - necReducer;
from;
'../../store/slices/1099-necSlice';
const store = configureStore({
    reducer: {
        1099: -nec, 1099: -necReducer
    }
});
const meta;
1099 - NECInterview > ;
{
    title: 'Forms/1099-NEC',
        component;
    1099 - NECInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1099-NECForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1099-NECForm printMode=", true, " />"] })),
};
