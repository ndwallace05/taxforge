import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
var Schedule = ;
-BInterview;
from;
'./Interview';
-BForm;
from;
'./Form';
var schedule = ;
-bReducer;
from;
'../../store/slices/schedule-bSlice';
const store = configureStore({
    reducer: {
        schedule
    } - b, schedule
} - bReducer);
;
const meta;
-BInterview > ;
{
    title: 'Forms/Schedule-B',
        component;
    Schedule - BInterview,
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
    render: () => (_jsx(Provider, { store: store, children: _jsx("Schedule-BForm", {}) })),
};
export const PrintView = {
    render: () => (_jsx(Provider, { store: store, children: _jsx("Schedule-BForm", { printMode: true }) })),
};
