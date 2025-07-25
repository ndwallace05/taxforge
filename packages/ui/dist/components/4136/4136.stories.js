import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
4136;
Interview;
from;
'./Interview';
4136;
Form;
from;
'./Form';
4136;
Reducer;
from;
'../../store/slices/4136Slice';
const store = configureStore({
    reducer: {
        4136: 4136, Reducer
    }
});
const meta;
4136;
Interview > ;
{
    title: 'Forms/4136',
        component;
    4136;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "4136Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "4136Form printMode=", true, " />"] })),
};
