import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
990 - BLInterview;
from;
'./Interview';
990 - BLForm;
from;
'./Form';
990 - blReducer;
from;
'../../store/slices/990-blSlice';
const store = configureStore({
    reducer: {
        990: -bl, 990: -blReducer
    }
});
const meta;
990 - BLInterview > ;
{
    title: 'Forms/990-BL',
        component;
    990 - BLInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "990-BLForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "990-BLForm printMode=", true, " />"] })),
};
