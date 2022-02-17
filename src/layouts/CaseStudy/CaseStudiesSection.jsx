import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "@components/section-title";
import Typed from "react-typed";
import Social, { SocialLink } from "@ui/social";
import SkillShare, { SkillItem } from "@ui/skill-share";
import Image from "@ui/image";
import Icon from "@ui/icon";
import {
    ImageType,
    HeadingType,
    TextType,
    SocialType,
    SkillType,
    SectionTitleType,
} from "@utils/types";

const HeroArea = ({
    id,
    section,
    mainHeading,
    subHeading,
    animatedTexts,
    bodyComponent,
    socials,
    skills,
    images,
}) => {
    return (
        <div id={id} className="rn-slider-area">
            <div className="slide slider-style-1">
                <div className="container">
                    <div className="row row--30 align-items-center">
                        <div className="col-lg-12">
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
                                    {bodyComponent}
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12">
                                        {socials && (
                                            <div className="social-share-inner-left">
                                                <span className="title">
                                                    connect with me
                                                </span>
                                                <Social>
                                                    {socials.map((social) => (
                                                        <SocialLink
                                                            key={social.id}
                                                            path={social.path}
                                                        >
                                                            <Icon
                                                                name={
                                                                    social.icon
                                                                }
                                                            />
                                                        </SocialLink>
                                                    ))}
                                                </Social>
                                            </div>
                                        )}
                                    </div>
                                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12 mt_mobile--30">
                                        {skills && (
                                            <div className="skill-share-inner">
                                                <span className="title">
                                                    top applications
                                                </span>
                                                <SkillShare>
                                                    {skills.map((skill) => (
                                                        <SkillItem
                                                            key={skill.id}
                                                            image={skill.image}
                                                        />
                                                    ))}
                                                </SkillShare>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 order-lg-2 col-lg-5">
                            {images?.src && (
                                <div className="thumbnail gradient-border gradient-animation">
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
    socials: PropTypes.arrayOf(PropTypes.shape(SocialType)),
    skills: PropTypes.arrayOf(PropTypes.shape(SkillType)),
    images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
    section: PropTypes.shape(SectionTitleType),
    bodyComponent: PropTypes.any,
};

HeroArea.defaultProps = {
    id: "home",
};

export default HeroArea;
