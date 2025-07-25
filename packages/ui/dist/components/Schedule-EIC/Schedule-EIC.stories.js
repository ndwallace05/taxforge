import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
var Schedule = ;
-EICInterview;
from;
'./Interview';
-EICForm;
from;
'./Form';
var schedule = ;
-eicReducer;
from;
'../../store/slices/schedule-eicSlice';
const store = configureStore({
    reducer: {
        schedule
    } - eic, schedule
} - eicReducer);
;
const meta;
-EICInterview > ;
{
    title: 'Forms/Schedule-EIC',
        component;
    Schedule - EICInterview,
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
    render: () => (_jsx(Provider, { store: store, children: _jsx("Schedule-EICForm", {}) })),
};
export const PrintView = {
    render: () => (_jsx(Provider, { store: store, children: _jsx("Schedule-EICForm", { printMode: true }) })),
};
