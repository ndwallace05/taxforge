import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8818;
Interview;
from;
'./Interview';
8818;
Form;
from;
'./Form';
8818;
Reducer;
from;
'../../store/slices/8818Slice';
const store = configureStore({
    reducer: {
        8818: 8818, Reducer
    }
});
const meta;
8818;
Interview > ;
{
    title: 'Forms/8818',
        component;
    8818;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8818Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8818Form printMode=", true, " />"] })),
};
