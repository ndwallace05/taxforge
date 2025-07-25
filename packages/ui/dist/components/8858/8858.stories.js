import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8858;
Interview;
from;
'./Interview';
8858;
Form;
from;
'./Form';
8858;
Reducer;
from;
'../../store/slices/8858Slice';
const store = configureStore({
    reducer: {
        8858: 8858, Reducer
    }
});
const meta;
8858;
Interview > ;
{
    title: 'Forms/8858',
        component;
    8858;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8858Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8858Form printMode=", true, " />"] })),
};
