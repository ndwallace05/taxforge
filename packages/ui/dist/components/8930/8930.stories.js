import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8930;
Interview;
from;
'./Interview';
8930;
Form;
from;
'./Form';
8930;
Reducer;
from;
'../../store/slices/8930Slice';
const store = configureStore({
    reducer: {
        8930: 8930, Reducer
    }
});
const meta;
8930;
Interview > ;
{
    title: 'Forms/8930',
        component;
    8930;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8930Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8930Form printMode=", true, " />"] })),
};
