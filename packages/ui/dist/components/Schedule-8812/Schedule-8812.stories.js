import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
var Schedule = ;
-8812;
Interview;
from;
'./Interview';
-8812;
Form;
from;
'./Form';
var schedule = ;
-8812;
Reducer;
from;
'../../store/slices/schedule-8812Slice';
const store = configureStore({
    reducer: {
        schedule
    } - 8812, schedule
} - 8812, Reducer);
;
const meta;
-8812;
Interview > ;
{
    title: 'Forms/Schedule-8812',
        component;
    Schedule - 8812;
    Interview,
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
    render: () => (_jsx(Provider, { store: store, children: _jsx("Schedule-8812Form", {}) })),
};
export const PrintView = {
    render: () => (_jsx(Provider, { store: store, children: _jsx("Schedule-8812Form", { printMode: true }) })),
};
