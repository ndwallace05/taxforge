import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8959;
Interview;
from;
'./Interview';
8959;
Form;
from;
'./Form';
8959;
Reducer;
from;
'../../store/slices/8959Slice';
const store = configureStore({
    reducer: {
        8959: 8959, Reducer
    }
});
const meta;
8959;
Interview > ;
{
    title: 'Forms/8959',
        component;
    8959;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8959Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8959Form printMode=", true, " />"] })),
};
