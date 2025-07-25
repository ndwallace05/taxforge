import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8873;
Interview;
from;
'./Interview';
8873;
Form;
from;
'./Form';
8873;
Reducer;
from;
'../../store/slices/8873Slice';
const store = configureStore({
    reducer: {
        8873: 8873, Reducer
    }
});
const meta;
8873;
Interview > ;
{
    title: 'Forms/8873',
        component;
    8873;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8873Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8873Form printMode=", true, " />"] })),
};
