import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
4562;
Interview;
from;
'./Interview';
4562;
Form;
from;
'./Form';
4562;
Reducer;
from;
'../../store/slices/4562Slice';
const store = configureStore({
    reducer: {
        4562: 4562, Reducer
    }
});
const meta;
4562;
Interview > ;
{
    title: 'Forms/4562',
        component;
    4562;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "4562Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "4562Form printMode=", true, " />"] })),
};
