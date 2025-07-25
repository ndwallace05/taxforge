import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
var SS = ;
-4;
Interview;
from;
'./Interview';
-4;
Form;
from;
'./Form';
var ss = ;
-4;
Reducer;
from;
'../../store/slices/ss-4Slice';
const store = configureStore({
    reducer: {
        ss
    } - 4, ss
} - 4, Reducer);
;
const meta;
-4;
Interview > ;
{
    title: 'Forms/SS-4',
        component;
    SS - 4;
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
    render: () => (_jsx(Provider, { store: store, children: _jsx("SS-4Form", {}) })),
};
export const PrintView = {
    render: () => (_jsx(Provider, { store: store, children: _jsx("SS-4Form", { printMode: true }) })),
};
