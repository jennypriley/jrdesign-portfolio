import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import Logo from "@components/logo";
import MainMenu from "@components/main-menu";
import PopupMenu from "@components/popup-menu";
import BurgerButton from "@ui/burger-button";
import Button from "@ui/button";
import { useSticky, useOffcanvas } from "@hooks";
import { ImageType, ButtonType, MenuType, SocialType } from "@utils/types";
import jrResume from "../../../data/downloads/JR_Resume_2022.pdf";

const Header = ({ className, data }) => {
    const sticky = useSticky();
    const { offcanvas, offcanvasHandler } = useOffcanvas();

    return (
        <>
            <header
                className={cn(
                    "rn-header header-default black-logo-version header--fixed header--sticky",
                    sticky && "sticky",
                    className
                )}
            >
                <div className="header-wrapper rn-popup-mobile-menu m--0 row align-items-center">
                    <div className="col-lg-2 col-6">
                        {data?.logo?.[0]?.src && (
                            <div className="header-left">
                                <Logo image={data.logo[0]} />
                            </div>
                        )}
                    </div>

                    <div className="col-lg-10 col-6">
                        <div className="header-center">
                            {data?.menu && (
                                <MainMenu
                                    className="d-none d-xl-block"
                                    menus={data.menu}
                                />
                            )}
                            <div className="header-right">
                                <a
                                    download={"JR_Resume_2022.pdf"}
                                    href={jrResume}
                                >
                                    {data?.button && (
                                        <Button>
                                            <span>{data.button?.content}</span>
                                        </Button>
                                    )}
                                </a>

                                <BurgerButton
                                    className="d-block d-xl-none"
                                    onClick={offcanvasHandler}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <PopupMenu
                isOpen={offcanvas}
                onClick={offcanvasHandler}
                menus={data?.menu}
                socials={data?.socials}
                slogan={data?.slogan}
                logo={data?.logo?.[1]}
            />
        </>
    );
};

Header.propTypes = {
    className: PropTypes.string,
    data: PropTypes.shape({
        logo: PropTypes.arrayOf(PropTypes.shape(ImageType)),
        button: PropTypes.shape(ButtonType),
        menu: PropTypes.arrayOf(PropTypes.shape(MenuType)),
        socials: PropTypes.arrayOf(PropTypes.shape(SocialType)),
        slogan: PropTypes.string,
    }),
};

export default Header;
