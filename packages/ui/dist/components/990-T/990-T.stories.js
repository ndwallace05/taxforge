import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
990 - TInterview;
from;
'./Interview';
990 - TForm;
from;
'./Form';
990 - tReducer;
from;
'../../store/slices/990-tSlice';
const store = configureStore({
    reducer: {
        990: -t, 990: -tReducer
    }
});
const meta;
990 - TInterview > ;
{
    title: 'Forms/990-T',
        component;
    990 - TInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "990-TForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "990-TForm printMode=", true, " />"] })),
};
