import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8868;
Interview;
from;
'./Interview';
8868;
Form;
from;
'./Form';
8868;
Reducer;
from;
'../../store/slices/8868Slice';
const store = configureStore({
    reducer: {
        8868: 8868, Reducer
    }
});
const meta;
8868;
Interview > ;
{
    title: 'Forms/8868',
        component;
    8868;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8868Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8868Form printMode=", true, " />"] })),
};
