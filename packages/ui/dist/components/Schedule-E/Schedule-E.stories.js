import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
var Schedule = ;
-EInterview;
from;
'./Interview';
-EForm;
from;
'./Form';
var schedule = ;
-eReducer;
from;
'../../store/slices/schedule-eSlice';
const store = configureStore({
    reducer: {
        schedule
    } - e, schedule
} - eReducer);
;
const meta;
-EInterview > ;
{
    title: 'Forms/Schedule-E',
        component;
    Schedule - EInterview,
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
    render: () => (_jsx(Provider, { store: store, children: _jsx("Schedule-EForm", {}) })),
};
export const PrintView = {
    render: () => (_jsx(Provider, { store: store, children: _jsx("Schedule-EForm", { printMode: true }) })),
};
