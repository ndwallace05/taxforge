import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
5500;
Interview;
from;
'./Interview';
5500;
Form;
from;
'./Form';
5500;
Reducer;
from;
'../../store/slices/5500Slice';
const store = configureStore({
    reducer: {
        5500: 5500, Reducer
    }
});
const meta;
5500;
Interview > ;
{
    title: 'Forms/5500',
        component;
    5500;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "5500Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "5500Form printMode=", true, " />"] })),
};
