import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1099 - OIDInterview;
from;
'./Interview';
1099 - OIDForm;
from;
'./Form';
1099 - oidReducer;
from;
'../../store/slices/1099-oidSlice';
const store = configureStore({
    reducer: {
        1099: -oid, 1099: -oidReducer
    }
});
const meta;
1099 - OIDInterview > ;
{
    title: 'Forms/1099-OID',
        component;
    1099 - OIDInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1099-OIDForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1099-OIDForm printMode=", true, " />"] })),
};
