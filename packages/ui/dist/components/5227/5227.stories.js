import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
5227;
Interview;
from;
'./Interview';
5227;
Form;
from;
'./Form';
5227;
Reducer;
from;
'../../store/slices/5227Slice';
const store = configureStore({
    reducer: {
        5227: 5227, Reducer
    }
});
const meta;
5227;
Interview > ;
{
    title: 'Forms/5227',
        component;
    5227;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "5227Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "5227Form printMode=", true, " />"] })),
};
