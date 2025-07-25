import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
4868;
Interview;
from;
'./Interview';
4868;
Form;
from;
'./Form';
4868;
Reducer;
from;
'../../store/slices/4868Slice';
const store = configureStore({
    reducer: {
        4868: 4868, Reducer
    }
});
const meta;
4868;
Interview > ;
{
    title: 'Forms/4868',
        component;
    4868;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "4868Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "4868Form printMode=", true, " />"] })),
};
