import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
var Schedule = ;
-AInterview;
from;
'./Interview';
-AForm;
from;
'./Form';
var schedule = ;
-aReducer;
from;
'../../store/slices/schedule-aSlice';
const store = configureStore({
    reducer: {
        schedule
    } - a, schedule
} - aReducer);
;
const meta;
-AInterview > ;
{
    title: 'Forms/Schedule-A',
        component;
    Schedule - AInterview,
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
    render: () => (_jsx(Provider, { store: store, children: _jsx("Schedule-AForm", {}) })),
};
export const PrintView = {
    render: () => (_jsx(Provider, { store: store, children: _jsx("Schedule-AForm", { printMode: true }) })),
};
