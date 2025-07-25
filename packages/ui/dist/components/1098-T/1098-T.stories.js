import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1098 - TInterview;
from;
'./Interview';
1098 - TForm;
from;
'./Form';
1098 - tReducer;
from;
'../../store/slices/1098-tSlice';
const store = configureStore({
    reducer: {
        1098: -t, 1098: -tReducer
    }
});
const meta;
1098 - TInterview > ;
{
    title: 'Forms/1098-T',
        component;
    1098 - TInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1098-TForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1098-TForm printMode=", true, " />"] })),
};
