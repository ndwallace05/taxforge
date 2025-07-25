import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
var Schedule = ;
-JInterview;
from;
'./Interview';
-JForm;
from;
'./Form';
var schedule = ;
-jReducer;
from;
'../../store/slices/schedule-jSlice';
const store = configureStore({
    reducer: {
        schedule
    } - j, schedule
} - jReducer);
;
const meta;
-JInterview > ;
{
    title: 'Forms/Schedule-J',
        component;
    Schedule - JInterview,
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
    render: () => (_jsx(Provider, { store: store, children: _jsx("Schedule-JForm", {}) })),
};
export const PrintView = {
    render: () => (_jsx(Provider, { store: store, children: _jsx("Schedule-JForm", { printMode: true }) })),
};
