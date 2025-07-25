import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
5498;
Interview;
from;
'./Interview';
5498;
Form;
from;
'./Form';
5498;
Reducer;
from;
'../../store/slices/5498Slice';
const store = configureStore({
    reducer: {
        5498: 5498, Reducer
    }
});
const meta;
5498;
Interview > ;
{
    title: 'Forms/5498',
        component;
    5498;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "5498Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "5498Form printMode=", true, " />"] })),
};
