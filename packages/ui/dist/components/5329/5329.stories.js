import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
5329;
Interview;
from;
'./Interview';
5329;
Form;
from;
'./Form';
5329;
Reducer;
from;
'../../store/slices/5329Slice';
const store = configureStore({
    reducer: {
        5329: 5329, Reducer
    }
});
const meta;
5329;
Interview > ;
{
    title: 'Forms/5329',
        component;
    5329;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "5329Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "5329Form printMode=", true, " />"] })),
};
