import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
2350;
Interview;
from;
'./Interview';
2350;
Form;
from;
'./Form';
2350;
Reducer;
from;
'../../store/slices/2350Slice';
const store = configureStore({
    reducer: {
        2350: 2350, Reducer
    }
});
const meta;
2350;
Interview > ;
{
    title: 'Forms/2350',
        component;
    2350;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "2350Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "2350Form printMode=", true, " />"] })),
};
