import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8606;
Interview;
from;
'./Interview';
8606;
Form;
from;
'./Form';
8606;
Reducer;
from;
'../../store/slices/8606Slice';
const store = configureStore({
    reducer: {
        8606: 8606, Reducer
    }
});
const meta;
8606;
Interview > ;
{
    title: 'Forms/8606',
        component;
    8606;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8606Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8606Form printMode=", true, " />"] })),
};
