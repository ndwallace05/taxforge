import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1120 - FInterview;
from;
'./Interview';
1120 - FForm;
from;
'./Form';
1120 - fReducer;
from;
'../../store/slices/1120-fSlice';
const store = configureStore({
    reducer: {
        1120: -f, 1120: -fReducer
    }
});
const meta;
1120 - FInterview > ;
{
    title: 'Forms/1120-F',
        component;
    1120 - FInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1120-FForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1120-FForm printMode=", true, " />"] })),
};
