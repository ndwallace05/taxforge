import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
5713;
Interview;
from;
'./Interview';
5713;
Form;
from;
'./Form';
5713;
Reducer;
from;
'../../store/slices/5713Slice';
const store = configureStore({
    reducer: {
        5713: 5713, Reducer
    }
});
const meta;
5713;
Interview > ;
{
    title: 'Forms/5713',
        component;
    5713;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "5713Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "5713Form printMode=", true, " />"] })),
};
