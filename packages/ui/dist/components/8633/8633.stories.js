import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8633;
Interview;
from;
'./Interview';
8633;
Form;
from;
'./Form';
8633;
Reducer;
from;
'../../store/slices/8633Slice';
const store = configureStore({
    reducer: {
        8633: 8633, Reducer
    }
});
const meta;
8633;
Interview > ;
{
    title: 'Forms/8633',
        component;
    8633;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8633Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8633Form printMode=", true, " />"] })),
};
