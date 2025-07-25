import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
var Schedule = ;
-CInterview;
from;
'./Interview';
-CForm;
from;
'./Form';
var schedule = ;
-cReducer;
from;
'../../store/slices/schedule-cSlice';
const store = configureStore({
    reducer: {
        schedule
    } - c, schedule
} - cReducer);
;
const meta;
-CInterview > ;
{
    title: 'Forms/Schedule-C',
        component;
    Schedule - CInterview,
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
    render: () => (_jsx(Provider, { store: store, children: _jsx("Schedule-CForm", {}) })),
};
export const PrintView = {
    render: () => (_jsx(Provider, { store: store, children: _jsx("Schedule-CForm", { printMode: true }) })),
};
