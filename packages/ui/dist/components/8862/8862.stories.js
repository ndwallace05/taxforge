import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8862;
Interview;
from;
'./Interview';
8862;
Form;
from;
'./Form';
8862;
Reducer;
from;
'../../store/slices/8862Slice';
const store = configureStore({
    reducer: {
        8862: 8862, Reducer
    }
});
const meta;
8862;
Interview > ;
{
    title: 'Forms/8862',
        component;
    8862;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8862Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8862Form printMode=", true, " />"] })),
};
