import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
var W = ;
-3;
SSInterview;
from;
'./Interview';
-3;
SSForm;
from;
'./Form';
var w = ;
-3;
ssReducer;
from;
'../../store/slices/w-3ssSlice';
const store = configureStore({
    reducer: {
        w
    } - 3, ss: w - 3, ssReducer
});
;
const meta;
-3;
SSInterview > ;
{
    title: 'Forms/W-3SS',
        component;
    W - 3;
    SSInterview,
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
    render: () => (_jsx(Provider, { store: store, children: _jsx("W-3SSForm", {}) })),
};
export const PrintView = {
    render: () => (_jsx(Provider, { store: store, children: _jsx("W-3SSForm", { printMode: true }) })),
};
