import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1040 - VInterview;
from;
'./Interview';
1040 - VForm;
from;
'./Form';
1040 - vReducer;
from;
'../../store/slices/1040-vSlice';
const store = configureStore({
    reducer: {
        1040: -v, 1040: -vReducer
    }
});
const meta;
1040 - VInterview > ;
{
    title: 'Forms/1040-V',
        component;
    1040 - VInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1040-VForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1040-VForm printMode=", true, " />"] })),
};
