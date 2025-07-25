import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1120 - LInterview;
from;
'./Interview';
1120 - LForm;
from;
'./Form';
1120 - lReducer;
from;
'../../store/slices/1120-lSlice';
const store = configureStore({
    reducer: {
        1120: -l, 1120: -lReducer
    }
});
const meta;
1120 - LInterview > ;
{
    title: 'Forms/1120-L',
        component;
    1120 - LInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1120-LForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1120-LForm printMode=", true, " />"] })),
};
