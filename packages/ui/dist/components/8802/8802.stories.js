import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8802;
Interview;
from;
'./Interview';
8802;
Form;
from;
'./Form';
8802;
Reducer;
from;
'../../store/slices/8802Slice';
const store = configureStore({
    reducer: {
        8802: 8802, Reducer
    }
});
const meta;
8802;
Interview > ;
{
    title: 'Forms/8802',
        component;
    8802;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8802Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8802Form printMode=", true, " />"] })),
};
