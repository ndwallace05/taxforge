import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
var Schedule = ;
-3;
Interview;
from;
'./Interview';
-3;
Form;
from;
'./Form';
var schedule = ;
-3;
Reducer;
from;
'../../store/slices/schedule-3Slice';
const store = configureStore({
    reducer: {
        schedule
    } - 3, schedule
} - 3, Reducer);
;
const meta;
-3;
Interview > ;
{
    title: 'Forms/Schedule-3',
        component;
    Schedule - 3;
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
    render: () => (_jsx(Provider, { store: store, children: _jsx("Schedule-3Form", {}) })),
};
export const PrintView = {
    render: () => (_jsx(Provider, { store: store, children: _jsx("Schedule-3Form", { printMode: true }) })),
};
