import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
var Schedule = ;
-2;
Interview;
from;
'./Interview';
-2;
Form;
from;
'./Form';
var schedule = ;
-2;
Reducer;
from;
'../../store/slices/schedule-2Slice';
const store = configureStore({
    reducer: {
        schedule
    } - 2, schedule
} - 2, Reducer);
;
const meta;
-2;
Interview > ;
{
    title: 'Forms/Schedule-2',
        component;
    Schedule - 2;
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
    render: () => (_jsx(Provider, { store: store, children: _jsx("Schedule-2Form", {}) })),
};
export const PrintView = {
    render: () => (_jsx(Provider, { store: store, children: _jsx("Schedule-2Form", { printMode: true }) })),
};
