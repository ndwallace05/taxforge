import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
706 - DInterview;
from;
'./Interview';
706 - DForm;
from;
'./Form';
706 - dReducer;
from;
'../../store/slices/706-dSlice';
const store = configureStore({
    reducer: {
        706: -d, 706: -dReducer
    }
});
const meta;
706 - DInterview > ;
{
    title: 'Forms/706-D',
        component;
    706 - DInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "706-DForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "706-DForm printMode=", true, " />"] })),
};
