import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
9465;
Interview;
from;
'./Interview';
9465;
Form;
from;
'./Form';
9465;
Reducer;
from;
'../../store/slices/9465Slice';
const store = configureStore({
    reducer: {
        9465: 9465, Reducer
    }
});
const meta;
9465;
Interview > ;
{
    title: 'Forms/9465',
        component;
    9465;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "9465Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "9465Form printMode=", true, " />"] })),
};
