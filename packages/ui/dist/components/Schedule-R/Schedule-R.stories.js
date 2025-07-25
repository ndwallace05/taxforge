import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
var Schedule = ;
-RInterview;
from;
'./Interview';
-RForm;
from;
'./Form';
var schedule = ;
-rReducer;
from;
'../../store/slices/schedule-rSlice';
const store = configureStore({
    reducer: {
        schedule
    } - r, schedule
} - rReducer);
;
const meta;
-RInterview > ;
{
    title: 'Forms/Schedule-R',
        component;
    Schedule - RInterview,
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
    render: () => (_jsx(Provider, { store: store, children: _jsx("Schedule-RForm", {}) })),
};
export const PrintView = {
    render: () => (_jsx(Provider, { store: store, children: _jsx("Schedule-RForm", { printMode: true }) })),
};
