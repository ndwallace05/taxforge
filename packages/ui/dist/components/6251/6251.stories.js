import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
6251;
Interview;
from;
'./Interview';
6251;
Form;
from;
'./Form';
6251;
Reducer;
from;
'../../store/slices/6251Slice';
const store = configureStore({
    reducer: {
        6251: 6251, Reducer
    }
});
const meta;
6251;
Interview > ;
{
    title: 'Forms/6251',
        component;
    6251;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "6251Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "6251Form printMode=", true, " />"] })),
};
