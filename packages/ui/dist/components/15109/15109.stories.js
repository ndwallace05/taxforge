import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
15109;
Interview;
from;
'./Interview';
15109;
Form;
from;
'./Form';
15109;
Reducer;
from;
'../../store/slices/15109Slice';
const store = configureStore({
    reducer: {
        15109: 15109, Reducer
    }
});
const meta;
15109;
Interview > ;
{
    title: 'Forms/15109',
        component;
    15109;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "15109Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "15109Form printMode=", true, " />"] })),
};
