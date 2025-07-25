import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
var Schedule = ;
-DInterview;
from;
'./Interview';
-DForm;
from;
'./Form';
var schedule = ;
-dReducer;
from;
'../../store/slices/schedule-dSlice';
const store = configureStore({
    reducer: {
        schedule
    } - d, schedule
} - dReducer);
;
const meta;
-DInterview > ;
{
    title: 'Forms/Schedule-D',
        component;
    Schedule - DInterview,
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
    render: () => (_jsx(Provider, { store: store, children: _jsx("Schedule-DForm", {}) })),
};
export const PrintView = {
    render: () => (_jsx(Provider, { store: store, children: _jsx("Schedule-DForm", { printMode: true }) })),
};
