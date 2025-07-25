import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8027;
Interview;
from;
'./Interview';
8027;
Form;
from;
'./Form';
8027;
Reducer;
from;
'../../store/slices/8027Slice';
const store = configureStore({
    reducer: {
        8027: 8027, Reducer
    }
});
const meta;
8027;
Interview > ;
{
    title: 'Forms/8027',
        component;
    8027;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8027Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8027Form printMode=", true, " />"] })),
};
