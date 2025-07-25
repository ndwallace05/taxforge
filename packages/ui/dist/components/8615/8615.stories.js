import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8615;
Interview;
from;
'./Interview';
8615;
Form;
from;
'./Form';
8615;
Reducer;
from;
'../../store/slices/8615Slice';
const store = configureStore({
    reducer: {
        8615: 8615, Reducer
    }
});
const meta;
8615;
Interview > ;
{
    title: 'Forms/8615',
        component;
    8615;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8615Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8615Form printMode=", true, " />"] })),
};
