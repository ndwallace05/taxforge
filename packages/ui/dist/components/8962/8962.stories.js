import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8962;
Interview;
from;
'./Interview';
8962;
Form;
from;
'./Form';
8962;
Reducer;
from;
'../../store/slices/8962Slice';
const store = configureStore({
    reducer: {
        8962: 8962, Reducer
    }
});
const meta;
8962;
Interview > ;
{
    title: 'Forms/8962',
        component;
    8962;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8962Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8962Form printMode=", true, " />"] })),
};
