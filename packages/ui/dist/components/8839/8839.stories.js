import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8839;
Interview;
from;
'./Interview';
8839;
Form;
from;
'./Form';
8839;
Reducer;
from;
'../../store/slices/8839Slice';
const store = configureStore({
    reducer: {
        8839: 8839, Reducer
    }
});
const meta;
8839;
Interview > ;
{
    title: 'Forms/8839',
        component;
    8839;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8839Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8839Form printMode=", true, " />"] })),
};
