import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1099 - SInterview;
from;
'./Interview';
1099 - SForm;
from;
'./Form';
1099 - sReducer;
from;
'../../store/slices/1099-sSlice';
const store = configureStore({
    reducer: {
        1099: -s, 1099: -sReducer
    }
});
const meta;
1099 - SInterview > ;
{
    title: 'Forms/1099-S',
        component;
    1099 - SInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1099-SForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1099-SForm printMode=", true, " />"] })),
};
