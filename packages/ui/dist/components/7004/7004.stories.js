import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
7004;
Interview;
from;
'./Interview';
7004;
Form;
from;
'./Form';
7004;
Reducer;
from;
'../../store/slices/7004Slice';
const store = configureStore({
    reducer: {
        7004: 7004, Reducer
    }
});
const meta;
7004;
Interview > ;
{
    title: 'Forms/7004',
        component;
    7004;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "7004Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "7004Form printMode=", true, " />"] })),
};
