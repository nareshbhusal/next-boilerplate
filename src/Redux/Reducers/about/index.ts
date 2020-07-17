// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

// #region Interface Imports
import { IAction, IAbout } from "@Interfaces";
// #endregion Interface Imports

const INITIAL_STATE: IAbout.IStateProps = { };

type IMapPayload = IAbout.Actions.IMapPayload;

export const AboutReducer = (state = INITIAL_STATE, action: IAction<IMapPayload>) => {
    switch (action.type) {
        case ActionConsts.About.SetReducer:
            return {
                ...state,
                ...action.payload
            };

        case ActionConsts.About.ResetReducer:
            return INITIAL_STATE;

        default:
            return state;
    }
};
