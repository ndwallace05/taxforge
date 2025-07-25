import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8882;
Interview;
from;
'./Interview';
8882;
Form;
from;
'./Form';
8882;
Reducer;
from;
'../../store/slices/8882Slice';
const store = configureStore({
    reducer: {
        8882: 8882, Reducer
    }
});
const meta;
8882;
Interview > ;
{
    title: 'Forms/8882',
        component;
    8882;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8882Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8882Form printMode=", true, " />"] })),
};
