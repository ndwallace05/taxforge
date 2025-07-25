import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1099 - KInterview;
from;
'./Interview';
1099 - KForm;
from;
'./Form';
1099 - kReducer;
from;
'../../store/slices/1099-kSlice';
const store = configureStore({
    reducer: {
        1099: -k, 1099: -kReducer
    }
});
const meta;
1099 - KInterview > ;
{
    title: 'Forms/1099-K',
        component;
    1099 - KInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1099-KForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1099-KForm printMode=", true, " />"] })),
};
