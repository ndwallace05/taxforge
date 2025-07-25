import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
5330;
Interview;
from;
'./Interview';
5330;
Form;
from;
'./Form';
5330;
Reducer;
from;
'../../store/slices/5330Slice';
const store = configureStore({
    reducer: {
        5330: 5330, Reducer
    }
});
const meta;
5330;
Interview > ;
{
    title: 'Forms/5330',
        component;
    5330;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "5330Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "5330Form printMode=", true, " />"] })),
};
