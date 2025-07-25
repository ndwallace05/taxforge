import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8880;
Interview;
from;
'./Interview';
8880;
Form;
from;
'./Form';
8880;
Reducer;
from;
'../../store/slices/8880Slice';
const store = configureStore({
    reducer: {
        8880: 8880, Reducer
    }
});
const meta;
8880;
Interview > ;
{
    title: 'Forms/8880',
        component;
    8880;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8880Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8880Form printMode=", true, " />"] })),
};
