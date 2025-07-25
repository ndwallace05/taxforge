import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
2553;
Interview;
from;
'./Interview';
2553;
Form;
from;
'./Form';
2553;
Reducer;
from;
'../../store/slices/2553Slice';
const store = configureStore({
    reducer: {
        2553: 2553, Reducer
    }
});
const meta;
2553;
Interview > ;
{
    title: 'Forms/2553',
        component;
    2553;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "2553Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "2553Form printMode=", true, " />"] })),
};
