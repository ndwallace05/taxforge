import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
6252;
Interview;
from;
'./Interview';
6252;
Form;
from;
'./Form';
6252;
Reducer;
from;
'../../store/slices/6252Slice';
const store = configureStore({
    reducer: {
        6252: 6252, Reducer
    }
});
const meta;
6252;
Interview > ;
{
    title: 'Forms/6252',
        component;
    6252;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "6252Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "6252Form printMode=", true, " />"] })),
};
