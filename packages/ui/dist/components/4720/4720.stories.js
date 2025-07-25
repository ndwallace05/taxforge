import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
4720;
Interview;
from;
'./Interview';
4720;
Form;
from;
'./Form';
4720;
Reducer;
from;
'../../store/slices/4720Slice';
const store = configureStore({
    reducer: {
        4720: 4720, Reducer
    }
});
const meta;
4720;
Interview > ;
{
    title: 'Forms/4720',
        component;
    4720;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "4720Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "4720Form printMode=", true, " />"] })),
};
