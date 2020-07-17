// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

export const AboutActions = {
    Map: (payload: any) => ({
            payload,
            type: ActionConsts.About.SetReducer
    }),

    Reset: () => ({
        type: ActionConsts.About.ResetReducer
    })
};
