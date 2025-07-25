import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
6069;
Interview;
from;
'./Interview';
6069;
Form;
from;
'./Form';
6069;
Reducer;
from;
'../../store/slices/6069Slice';
const store = configureStore({
    reducer: {
        6069: 6069, Reducer
    }
});
const meta;
6069;
Interview > ;
{
    title: 'Forms/6069',
        component;
    6069;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "6069Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "6069Form printMode=", true, " />"] })),
};
