import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8903;
Interview;
from;
'./Interview';
8903;
Form;
from;
'./Form';
8903;
Reducer;
from;
'../../store/slices/8903Slice';
const store = configureStore({
    reducer: {
        8903: 8903, Reducer
    }
});
const meta;
8903;
Interview > ;
{
    title: 'Forms/8903',
        component;
    8903;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8903Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8903Form printMode=", true, " />"] })),
};
