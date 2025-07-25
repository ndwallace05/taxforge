import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1099 - LTCInterview;
from;
'./Interview';
1099 - LTCForm;
from;
'./Form';
1099 - ltcReducer;
from;
'../../store/slices/1099-ltcSlice';
const store = configureStore({
    reducer: {
        1099: -ltc, 1099: -ltcReducer
    }
});
const meta;
1099 - LTCInterview > ;
{
    title: 'Forms/1099-LTC',
        component;
    1099 - LTCInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1099-LTCForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1099-LTCForm printMode=", true, " />"] })),
};
