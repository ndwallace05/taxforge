import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
var Schedule = ;
-FInterview;
from;
'./Interview';
-FForm;
from;
'./Form';
var schedule = ;
-fReducer;
from;
'../../store/slices/schedule-fSlice';
const store = configureStore({
    reducer: {
        schedule
    } - f, schedule
} - fReducer);
;
const meta;
-FInterview > ;
{
    title: 'Forms/Schedule-F',
        component;
    Schedule - FInterview,
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
    render: () => (_jsx(Provider, { store: store, children: _jsx("Schedule-FForm", {}) })),
};
export const PrintView = {
    render: () => (_jsx(Provider, { store: store, children: _jsx("Schedule-FForm", { printMode: true }) })),
};
