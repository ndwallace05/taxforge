import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1040 - NRInterview;
from;
'./Interview';
1040 - NRForm;
from;
'./Form';
1040 - nrReducer;
from;
'../../store/slices/1040-nrSlice';
const store = configureStore({
    reducer: {
        1040: -nr, 1040: -nrReducer
    }
});
const meta;
1040 - NRInterview > ;
{
    title: 'Forms/1040-NR',
        component;
    1040 - NRInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1040-NRForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1040-NRForm printMode=", true, " />"] })),
};
