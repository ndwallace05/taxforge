import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
2106;
Interview;
from;
'./Interview';
2106;
Form;
from;
'./Form';
2106;
Reducer;
from;
'../../store/slices/2106Slice';
const store = configureStore({
    reducer: {
        2106: 2106, Reducer
    }
});
const meta;
2106;
Interview > ;
{
    title: 'Forms/2106',
        component;
    2106;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "2106Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "2106Form printMode=", true, " />"] })),
};
