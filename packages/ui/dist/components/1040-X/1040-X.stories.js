import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1040 - XInterview;
from;
'./Interview';
1040 - XForm;
from;
'./Form';
1040 - xReducer;
from;
'../../store/slices/1040-xSlice';
const store = configureStore({
    reducer: {
        1040: -x, 1040: -xReducer
    }
});
const meta;
1040 - XInterview > ;
{
    title: 'Forms/1040-X',
        component;
    1040 - XInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1040-XForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1040-XForm printMode=", true, " />"] })),
};
