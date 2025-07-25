import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
6478;
Interview;
from;
'./Interview';
6478;
Form;
from;
'./Form';
6478;
Reducer;
from;
'../../store/slices/6478Slice';
const store = configureStore({
    reducer: {
        6478: 6478, Reducer
    }
});
const meta;
6478;
Interview > ;
{
    title: 'Forms/6478',
        component;
    6478;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "6478Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "6478Form printMode=", true, " />"] })),
};
