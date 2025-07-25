import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8936;
Interview;
from;
'./Interview';
8936;
Form;
from;
'./Form';
8936;
Reducer;
from;
'../../store/slices/8936Slice';
const store = configureStore({
    reducer: {
        8936: 8936, Reducer
    }
});
const meta;
8936;
Interview > ;
{
    title: 'Forms/8936',
        component;
    8936;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8936Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8936Form printMode=", true, " />"] })),
};
