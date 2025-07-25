import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
3520;
Interview;
from;
'./Interview';
3520;
Form;
from;
'./Form';
3520;
Reducer;
from;
'../../store/slices/3520Slice';
const store = configureStore({
    reducer: {
        3520: 3520, Reducer
    }
});
const meta;
3520;
Interview > ;
{
    title: 'Forms/3520',
        component;
    3520;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "3520Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "3520Form printMode=", true, " />"] })),
};
