import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8865;
Interview;
from;
'./Interview';
8865;
Form;
from;
'./Form';
8865;
Reducer;
from;
'../../store/slices/8865Slice';
const store = configureStore({
    reducer: {
        8865: 8865, Reducer
    }
});
const meta;
8865;
Interview > ;
{
    title: 'Forms/8865',
        component;
    8865;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8865Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8865Form printMode=", true, " />"] })),
};
