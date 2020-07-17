// #region Global Imports
import React from "react";
import { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import { IStore } from "@Redux/IStore";
import { AboutActions } from "@Actions";
// #endregion Local Imports

// #region Interface Imports
import { ReduxNextPageContext, IAbout } from "@Interfaces";
// #endregion Interface Imports

export const About: NextPage<
    IAbout.IProps,
    IAbout.InitialProps
> = ({ t, i18n }) => {
    const about = useSelector((state: IStore) => state.about);
    const dispatch = useDispatch();

    return (
        <section id="about">
            About Page
        </section>
    );
};

About.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<IAbout.InitialProps> => {

    return { namespacesRequired: ["common"] };
};

export default withTranslation("common")(About);
