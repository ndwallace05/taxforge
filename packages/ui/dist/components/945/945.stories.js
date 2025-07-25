import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
945;
Interview;
from;
'./Interview';
945;
Form;
from;
'./Form';
945;
Reducer;
from;
'../../store/slices/945Slice';
const store = configureStore({
    reducer: {
        945: 945, Reducer
    }
});
const meta;
945;
Interview > ;
{
    title: 'Forms/945',
        component;
    945;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "945Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "945Form printMode=", true, " />"] })),
};
