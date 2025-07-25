import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
943;
Interview;
from;
'./Interview';
943;
Form;
from;
'./Form';
943;
Reducer;
from;
'../../store/slices/943Slice';
const store = configureStore({
    reducer: {
        943: 943, Reducer
    }
});
const meta;
943;
Interview > ;
{
    title: 'Forms/943',
        component;
    943;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "943Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "943Form printMode=", true, " />"] })),
};
