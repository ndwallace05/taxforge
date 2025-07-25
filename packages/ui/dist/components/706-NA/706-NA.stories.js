import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
706 - NAInterview;
from;
'./Interview';
706 - NAForm;
from;
'./Form';
706 - naReducer;
from;
'../../store/slices/706-naSlice';
const store = configureStore({
    reducer: {
        706: -na, 706: -naReducer
    }
});
const meta;
706 - NAInterview > ;
{
    title: 'Forms/706-NA',
        component;
    706 - NAInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "706-NAForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "706-NAForm printMode=", true, " />"] })),
};
