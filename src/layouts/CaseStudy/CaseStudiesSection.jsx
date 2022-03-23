import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "@components/section-title";
import Typed from "react-typed";
import Image from "@ui/image";
import {
    ImageType,
    HeadingType,
    TextType,
    SectionTitleType,
} from "@utils/types";

const HeroArea = ({
    id,
    section,
    mainHeading,
    subHeading,
    animatedTexts,
    backComponent,
    bodyComponent,
    images,
}) => {
    return (
        <div id={id} className="rn-slider-area">
            <div className="slide slider-style-1">
                <div className="container">
                    <div className="row row--30 align-items-center">
                        <div className="col-lg-12">
                            {backComponent}
                            {section && (
                                <SectionTitle
                                    data-aos="fade-up"
                                    data-aos-duration="500"
                                    data-aos-delay="100"
                                    data-aos-once="true"
                                    {...section}
                                />
                            )}
                        </div>
                        <div className="order-2 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30">
                            <div className="content">
                                <div className="csinner">
                                    {mainHeading && (
                                        <span>{mainHeading.content}</span>
                                    )}

                                    {subHeading && (
                                        <h1 className="title">
                                            <span
                                                className="title-main"
                                                dangerouslySetInnerHTML={{
                                                    __html: subHeading.content,
                                                }}
                                            />
                                            <br />
                                            {animatedTexts && (
                                                <span
                                                    className="header-caption"
                                                    id="page-top"
                                                >
                                                    <span className="cd-headline clip is-full-width">
                                                        <span>a </span>{" "}
                                                        <Typed
                                                            className="animated-texts"
                                                            strings={
                                                                animatedTexts
                                                            }
                                                            typeSpeed={50}
                                                            backSpeed={50}
                                                            backDelay={1}
                                                            loop
                                                            smartBackspace
                                                        />
                                                    </span>
                                                </span>
                                            )}
                                        </h1>
                                    )}
                                </div>
                            </div>
                        </div>
                        {bodyComponent}
                        <div className="order-1 order-lg-2 col-lg-5">
                            {images?.src && (
                                <div>
                                    <Image
                                        src={images.src}
                                        alt={images.alt || "Hero"}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

HeroArea.propTypes = {
    id: PropTypes.string,
    mainHeading: PropTypes.shape(HeadingType),
    subHeading: PropTypes.shape(HeadingType),
    texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
    animatedTexts: PropTypes.arrayOf(PropTypes.string),
    images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
    section: PropTypes.shape(SectionTitleType),
    backComponent: PropTypes.any,
    bodyComponent: PropTypes.any,
};

HeroArea.defaultProps = {
    id: "home",
};

export default HeroArea;
