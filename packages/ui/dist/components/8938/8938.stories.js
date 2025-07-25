import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8938;
Interview;
from;
'./Interview';
8938;
Form;
from;
'./Form';
8938;
Reducer;
from;
'../../store/slices/8938Slice';
const store = configureStore({
    reducer: {
        8938: 8938, Reducer
    }
});
const meta;
8938;
Interview > ;
{
    title: 'Forms/8938',
        component;
    8938;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8938Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8938Form printMode=", true, " />"] })),
};
