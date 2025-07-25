import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8912;
Interview;
from;
'./Interview';
8912;
Form;
from;
'./Form';
8912;
Reducer;
from;
'../../store/slices/8912Slice';
const store = configureStore({
    reducer: {
        8912: 8912, Reducer
    }
});
const meta;
8912;
Interview > ;
{
    title: 'Forms/8912',
        component;
    8912;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8912Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8912Form printMode=", true, " />"] })),
};
