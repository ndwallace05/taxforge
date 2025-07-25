import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8919;
Interview;
from;
'./Interview';
8919;
Form;
from;
'./Form';
8919;
Reducer;
from;
'../../store/slices/8919Slice';
const store = configureStore({
    reducer: {
        8919: 8919, Reducer
    }
});
const meta;
8919;
Interview > ;
{
    title: 'Forms/8919',
        component;
    8919;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8919Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8919Form printMode=", true, " />"] })),
};
