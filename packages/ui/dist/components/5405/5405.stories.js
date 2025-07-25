import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
5405;
Interview;
from;
'./Interview';
5405;
Form;
from;
'./Form';
5405;
Reducer;
from;
'../../store/slices/5405Slice';
const store = configureStore({
    reducer: {
        5405: 5405, Reducer
    }
});
const meta;
5405;
Interview > ;
{
    title: 'Forms/5405',
        component;
    5405;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "5405Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "5405Form printMode=", true, " />"] })),
};
