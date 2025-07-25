import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8941;
Interview;
from;
'./Interview';
8941;
Form;
from;
'./Form';
8941;
Reducer;
from;
'../../store/slices/8941Slice';
const store = configureStore({
    reducer: {
        8941: 8941, Reducer
    }
});
const meta;
8941;
Interview > ;
{
    title: 'Forms/8941',
        component;
    8941;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8941Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8941Form printMode=", true, " />"] })),
};
