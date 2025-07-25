import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
var Schedule = ;
-HInterview;
from;
'./Interview';
-HForm;
from;
'./Form';
var schedule = ;
-hReducer;
from;
'../../store/slices/schedule-hSlice';
const store = configureStore({
    reducer: {
        schedule
    } - h, schedule
} - hReducer);
;
const meta;
-HInterview > ;
{
    title: 'Forms/Schedule-H',
        component;
    Schedule - HInterview,
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
    render: () => (_jsx(Provider, { store: store, children: _jsx("Schedule-HForm", {}) })),
};
export const PrintView = {
    render: () => (_jsx(Provider, { store: store, children: _jsx("Schedule-HForm", { printMode: true }) })),
};
