import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8917;
Interview;
from;
'./Interview';
8917;
Form;
from;
'./Form';
8917;
Reducer;
from;
'../../store/slices/8917Slice';
const store = configureStore({
    reducer: {
        8917: 8917, Reducer
    }
});
const meta;
8917;
Interview > ;
{
    title: 'Forms/8917',
        component;
    8917;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8917Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8917Form printMode=", true, " />"] })),
};
