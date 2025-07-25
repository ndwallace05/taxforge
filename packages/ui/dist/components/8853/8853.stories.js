import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8853;
Interview;
from;
'./Interview';
8853;
Form;
from;
'./Form';
8853;
Reducer;
from;
'../../store/slices/8853Slice';
const store = configureStore({
    reducer: {
        8853: 8853, Reducer
    }
});
const meta;
8853;
Interview > ;
{
    title: 'Forms/8853',
        component;
    8853;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8853Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8853Form printMode=", true, " />"] })),
};
