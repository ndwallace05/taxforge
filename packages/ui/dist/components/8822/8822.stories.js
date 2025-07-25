import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8822;
Interview;
from;
'./Interview';
8822;
Form;
from;
'./Form';
8822;
Reducer;
from;
'../../store/slices/8822Slice';
const store = configureStore({
    reducer: {
        8822: 8822, Reducer
    }
});
const meta;
8822;
Interview > ;
{
    title: 'Forms/8822',
        component;
    8822;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8822Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8822Form printMode=", true, " />"] })),
};
