import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
6765;
Interview;
from;
'./Interview';
6765;
Form;
from;
'./Form';
6765;
Reducer;
from;
'../../store/slices/6765Slice';
const store = configureStore({
    reducer: {
        6765: 6765, Reducer
    }
});
const meta;
6765;
Interview > ;
{
    title: 'Forms/6765',
        component;
    6765;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "6765Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "6765Form printMode=", true, " />"] })),
};
