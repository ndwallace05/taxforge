import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
926;
Interview;
from;
'./Interview';
926;
Form;
from;
'./Form';
926;
Reducer;
from;
'../../store/slices/926Slice';
const store = configureStore({
    reducer: {
        926: 926, Reducer
    }
});
const meta;
926;
Interview > ;
{
    title: 'Forms/926',
        component;
    926;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "926Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "926Form printMode=", true, " />"] })),
};
