import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
var Schedule = ;
-SEInterview;
from;
'./Interview';
-SEForm;
from;
'./Form';
var schedule = ;
-seReducer;
from;
'../../store/slices/schedule-seSlice';
const store = configureStore({
    reducer: {
        schedule
    } - se, schedule
} - seReducer);
;
const meta;
-SEInterview > ;
{
    title: 'Forms/Schedule-SE',
        component;
    Schedule - SEInterview,
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
    render: () => (_jsx(Provider, { store: store, children: _jsx("Schedule-SEForm", {}) })),
};
export const PrintView = {
    render: () => (_jsx(Provider, { store: store, children: _jsx("Schedule-SEForm", { printMode: true }) })),
};
