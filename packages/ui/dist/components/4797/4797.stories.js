import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
4797;
Interview;
from;
'./Interview';
4797;
Form;
from;
'./Form';
4797;
Reducer;
from;
'../../store/slices/4797Slice';
const store = configureStore({
    reducer: {
        4797: 4797, Reducer
    }
});
const meta;
4797;
Interview > ;
{
    title: 'Forms/4797',
        component;
    4797;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "4797Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "4797Form printMode=", true, " />"] })),
};
