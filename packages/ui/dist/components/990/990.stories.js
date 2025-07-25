import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
990;
Interview;
from;
'./Interview';
990;
Form;
from;
'./Form';
990;
Reducer;
from;
'../../store/slices/990Slice';
const store = configureStore({
    reducer: {
        990: 990, Reducer
    }
});
const meta;
990;
Interview > ;
{
    title: 'Forms/990',
        component;
    990;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "990Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "990Form printMode=", true, " />"] })),
};
