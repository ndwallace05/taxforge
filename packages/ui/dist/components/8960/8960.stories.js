import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8960;
Interview;
from;
'./Interview';
8960;
Form;
from;
'./Form';
8960;
Reducer;
from;
'../../store/slices/8960Slice';
const store = configureStore({
    reducer: {
        8960: 8960, Reducer
    }
});
const meta;
8960;
Interview > ;
{
    title: 'Forms/8960',
        component;
    8960;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8960Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8960Form printMode=", true, " />"] })),
};
