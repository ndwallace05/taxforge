import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8948;
Interview;
from;
'./Interview';
8948;
Form;
from;
'./Form';
8948;
Reducer;
from;
'../../store/slices/8948Slice';
const store = configureStore({
    reducer: {
        8948: 8948, Reducer
    }
});
const meta;
8948;
Interview > ;
{
    title: 'Forms/8948',
        component;
    8948;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8948Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8948Form printMode=", true, " />"] })),
};
