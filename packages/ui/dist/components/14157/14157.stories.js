import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
14157;
Interview;
from;
'./Interview';
14157;
Form;
from;
'./Form';
14157;
Reducer;
from;
'../../store/slices/14157Slice';
const store = configureStore({
    reducer: {
        14157: 14157, Reducer
    }
});
const meta;
14157;
Interview > ;
{
    title: 'Forms/14157',
        component;
    14157;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "14157Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "14157Form printMode=", true, " />"] })),
};
