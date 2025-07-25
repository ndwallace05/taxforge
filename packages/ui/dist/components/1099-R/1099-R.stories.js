import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1099 - RInterview;
from;
'./Interview';
1099 - RForm;
from;
'./Form';
1099 - rReducer;
from;
'../../store/slices/1099-rSlice';
const store = configureStore({
    reducer: {
        1099: -r, 1099: -rReducer
    }
});
const meta;
1099 - RInterview > ;
{
    title: 'Forms/1099-R',
        component;
    1099 - RInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1099-RForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1099-RForm printMode=", true, " />"] })),
};
