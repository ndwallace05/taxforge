import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
5472;
Interview;
from;
'./Interview';
5472;
Form;
from;
'./Form';
5472;
Reducer;
from;
'../../store/slices/5472Slice';
const store = configureStore({
    reducer: {
        5472: 5472, Reducer
    }
});
const meta;
5472;
Interview > ;
{
    title: 'Forms/5472',
        component;
    5472;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "5472Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "5472Form printMode=", true, " />"] })),
};
