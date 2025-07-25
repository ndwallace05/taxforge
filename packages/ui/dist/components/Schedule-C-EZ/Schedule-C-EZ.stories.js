import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
var Schedule = ;
-C - EZInterview;
from;
'./Interview';
-C - EZForm;
from;
'./Form';
var schedule = ;
-c - ezReducer;
from;
'../../store/slices/schedule-c-ezSlice';
const store = configureStore({
    reducer: {
        schedule
    } - c - ez, schedule
} - c - ezReducer);
;
const meta;
-C - EZInterview > ;
{
    title: 'Forms/Schedule-C-EZ',
        component;
    Schedule - C - EZInterview,
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
    render: () => (_jsx(Provider, { store: store, children: _jsx("Schedule-C-EZForm", {}) })),
};
export const PrintView = {
    render: () => (_jsx(Provider, { store: store, children: _jsx("Schedule-C-EZForm", { printMode: true }) })),
};
