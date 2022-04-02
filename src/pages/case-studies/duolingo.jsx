import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "@layout";
import Header from "../../layouts/header/layout-01";
import Footer from "../../layouts/footer/layout-01";
import ServicesArea from "../../containers/service/layout-cs";
import logoImage from "../../data/images/logo/logo.png";
import data from "../../data/homepages/case-study-duolingo.json";
import CaseStudySection from "../../layouts/CaseStudy/CaseStudiesSection";
import { AlignCenter, ArrowLeft } from "react-feather";
import SubSectionHeading from "../../components/sub-section-heading";
import ServiceCard from "@components/service-card/layout-01";
import kausIntroImage from "../../data/images/portfolio/kaus-mac.png";
import kausFamily from "../../data/images/portfolio/kaus-family.png";

const CaseStudyDuolingo = () => {
    const researchCards = [
        {
            id: "duolingo-rmethod-1",
            title: "Competitor Analysis",
            description: "Comparing popular language learning apps",
            path: "!#",
            icon: "Search",
        },
        {
            id: "duolingo-rmethod-2",
            title: "Survey",
            description:
                "Ask current Duolingo users how they approach learning languages",
            path: "!#",
            icon: "Users",
        },
        {
            id: "duolingo-rmethod-3",
            title: "User Testing",
            description:
                "Give users tasks to complete while observing their behavior",
            path: "!#",
            icon: "Monitor",
        },
    ];
    return (
        <Layout pageTitle="Duolingo Case Study">
            <Header
                data={{
                    ...data.header,
                    ...data.navigation,
                    logo: [{ src: logoImage }],
                }}
            />
            <main className="main-page-wrapper">
                <br />
                <br />
                <CaseStudySection
                    id="home"
                    backComponent={
                        <>
                            <a href="/" className="back-link">
                                <ArrowLeft /> Back to Homepage
                            </a>
                            <br />
                            <br />
                            <br />
                        </>
                    }
                    section={{
                        title: "Duolingo Kanji Feature",
                        subtitle: "The Brief & the Problem",
                    }}
                    bodyComponent={
                        <div className="order-2 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30">
                            <div className="content">
                                <p>
                                    Duolingo is a widely-used language learning
                                    app that has been around since 2012.
                                    Offering 40+ available languages to 500
                                    million members and counting, Duolingo is
                                    among the top applications for teaching new
                                    languages. With a charming aesthetic and
                                    gamified experience, it’s easy to see how it
                                    stands apart from its competitors.
                                </p>
                                <br />
                                <p>
                                    However, even the best products can always
                                    be improved upon, and the application is
                                    always changing to enhance the experience.
                                    In my own experience, I found myself wanting
                                    one more feature to take learning Japanese
                                    to the next level: Kanji writing modules.
                                </p>
                                <p>
                                    The app <i>does</i> already offer a handy
                                    section for learning Hiragana and Katakana
                                    for Japanese. However, users are given
                                    little exposure to Kanji, which are
                                    characters used to represent thousands of
                                    words in the language. This is a major
                                    setback for those wanting to truly learn the
                                    language.
                                </p>
                                <p>
                                    With a Kanji writing section, users could:
                                </p>
                                <ul className="csdescription">
                                    <li>
                                        Learn the stroke direction and order of
                                        characters
                                    </li>
                                    <li>
                                        Freely practice and add writing to their
                                        lesson repertoire
                                    </li>
                                    <li>
                                        Write on the go, increasing the amount
                                        of opportunities to practice
                                    </li>
                                </ul>
                                <br />
                            </div>
                        </div>
                    }
                    images={{
                        src: "https://jrportfoliosite.s3.us-west-1.amazonaws.com/duolingointro.png",
                        alt: "Duolingo feature screens",
                    }}
                />
                <ServicesArea
                    data={{
                        items: [
                            {
                                id: "duolingo-research-roles",
                                title: "Roles",
                                description: "UI/UX Designer",
                                path: "#!",
                                icon: "Briefcase",
                            },
                            {
                                id: "duolingo-research-tools",
                                title: "Tools",
                                description:
                                    "Figma, Adobe XD, Audacity, voicegenerator.io",
                                path: "#!",
                                icon: "Tool",
                            },
                            {
                                id: "duolingo-research-duration",
                                title: "Duration",
                                description: "4 weeks",
                                path: "#!",
                                icon: "Clock",
                            },
                        ],
                    }}
                />
                <div className="section-separator">
                    <CaseStudySection
                        id="branding"
                        section={{
                            title: "Branding",
                            subtitle: "Visual Identity & Aesthetic",
                        }}
                        bodyComponent={
                            <div className="col-lg-cs order-lg-1 order-2 mt_md--50 mt_sm--50 mt_lg--30">
                                <p>
                                    {
                                        "For this feature, I frequently referred to Duolingo's "
                                    }
                                    <a
                                        href="https://design.duolingo.com/"
                                        className="back-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        branding guide
                                    </a>
                                    , which was an invaluable resource for this
                                    project.
                                </p>
                                <p>Duolingo’s brand identity:</p>
                                <ul className="csdescription">
                                    <li>Personalized</li>
                                    <li>Fun</li>
                                    <li>Accessible</li>
                                </ul>
                                <br />
                                <br />
                                <SubSectionHeading>UI Kit</SubSectionHeading>
                                <br />
                                <a
                                    href="https://www.figma.com/file/H7XYbyVd8oV4cBGrLM0caB/Duolingo-UI-Kit?node-id=0%3A1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="https://jrportfoliosite.s3.us-west-1.amazonaws.com/duolingouikit.png"
                                        alt="UI Kit"
                                    />
                                </a>
                                <br />
                                <br />
                            </div>
                        }
                    />
                </div>
                <div className="section-separator">
                    <CaseStudySection
                        id="research"
                        section={{
                            title: "Research",
                            subtitle: "Studying Competition & Potential Users",
                        }}
                        bodyComponent={
                            <div className="order-lg-1 order-2 mt_md--50 mt_sm--50 mt_lg--30">
                                <div
                                    styles={{
                                        marginBottom: "120px !important",
                                    }}
                                >
                                    <SubSectionHeading>
                                        Research Goals
                                    </SubSectionHeading>
                                    <br />
                                    <p>
                                        To learn how users approach studying
                                        with Duolingo, the following goals were
                                        set:
                                    </p>
                                    <ul>
                                        <li>
                                            Determine whether users are strictly
                                            learning in-app
                                        </li>
                                        <li>
                                            Find how other language learning
                                            software approaches teaching written
                                            languages, if at all
                                        </li>
                                        <li>
                                            Understand what kind of learning
                                            experience would be enjoyable to
                                            Duolingo users
                                        </li>
                                    </ul>
                                    <br></br>
                                    <br></br>
                                    <SubSectionHeading className="col-lg-auto">
                                        Methodologies
                                    </SubSectionHeading>
                                </div>
                                <div className="row row--25 mt_md--10 mt_sm--10 cs-card-gap">
                                    {researchCards.map((item) => (
                                        <div
                                            key={item.id}
                                            data-aos="fade-up"
                                            data-aos-duration="500"
                                            data-aos-delay="100"
                                            data-aos-once="true"
                                            className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30"
                                        >
                                            <ServiceCard
                                                title={item.title}
                                                description={item.description}
                                                path={item.path}
                                                icon={item.icon}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="col-lg-cs">
                                    <SubSectionHeading>
                                        Competitor Analysis
                                    </SubSectionHeading>
                                    <br />
                                    <img
                                        src="https://jrportfoliosite.s3.us-west-1.amazonaws.com/duolingocompetitors.png"
                                        alt="Competitor analysis"
                                    />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <p>
                                        Through studying these competitors, I
                                        found the following commonalities
                                        between them:
                                    </p>
                                    <ul>
                                        <li>
                                            Specific learning styles that come
                                            with their own pros and cons
                                        </li>
                                        <li>
                                            Clean interfaces that focus on the
                                            course content and avoid
                                            distractions
                                        </li>
                                        <li>
                                            Little to no support for learning to
                                            write a new language
                                        </li>
                                        <li>
                                            2 of 3 have limited language
                                            libraries
                                        </li>
                                    </ul>
                                    <br />
                                    <br />
                                    <p>
                                        In addition to these observations, I
                                        found that only RocketLanguages featured
                                        writing exercises or additional
                                        resources to help learners write a new
                                        language.
                                    </p>
                                    <br />
                                    <br />
                                    <SubSectionHeading>
                                        Survey
                                    </SubSectionHeading>
                                    <br />
                                    <p>
                                        To better understand the userbase of
                                        Duolingo, 10 participants were surveyed
                                        who:
                                    </p>
                                    <ul>
                                        <li>
                                            Studied languages with Duolingo in
                                            the past or present
                                        </li>
                                        <li>
                                            Were asked for their experiences
                                            learning new written languages
                                        </li>
                                        <li>
                                            Were asked for their thoughts on
                                            learning to write in the Duolingo
                                            app
                                        </li>
                                    </ul>
                                    <br />
                                    <br />
                                    <p>
                                        Once the survey was complete, I made the
                                        following observations:
                                    </p>
                                    <ul>
                                        <li>
                                            Most respondents’ studies consisted
                                            of learning from a teacher and/or
                                            from online resources
                                        </li>
                                        <li>
                                            80% of respondents studied a
                                            language with a new writing system
                                        </li>
                                        <li>
                                            Of those who learned a new writing
                                            system, over half said that stroke
                                            direction or order was important
                                        </li>
                                        <li>
                                            Of those who learned a new writing
                                            system, only 37.5% stated that they
                                            were confident in their ability to
                                            write it
                                        </li>
                                        <li>
                                            Nearly all respondents agreed that a
                                            writing feature would be useful and
                                            consider using it
                                        </li>
                                        <li>
                                            Of the respondents who would
                                            consider using a writing feature,
                                            nearly half and half would prefer
                                            using their finger or a stylus
                                        </li>
                                        <li>
                                            Nearly all respondents enjoyed the
                                            gamified learning experience
                                            Duolingo offers
                                        </li>
                                    </ul>
                                    <br />
                                    <br />
                                    <SubSectionHeading>
                                        User Personas
                                    </SubSectionHeading>
                                    <br />
                                    <img
                                        src="https://jrportfoliosite.s3.us-west-1.amazonaws.com/duolingouser1.png"
                                        alt="Duolingo persona Kenta"
                                    />
                                    <br />
                                    <br />
                                    <img
                                        src="https://jrportfoliosite.s3.us-west-1.amazonaws.com/duolingouser2.png"
                                        alt="Duolingo persona Elly"
                                    />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <SubSectionHeading>
                                        Project Goals
                                    </SubSectionHeading>
                                    <br />
                                    <img
                                        src="https://jrportfoliosite.s3.us-west-1.amazonaws.com/duolingogoals.png"
                                        alt="Duolingo project goals"
                                    />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <SubSectionHeading>
                                        Priority Features
                                    </SubSectionHeading>
                                    <br />
                                    <img
                                        src="https://jrportfoliosite.s3.us-west-1.amazonaws.com/duolingopfeatures.png"
                                        alt="Feature priority list"
                                    />
                                    <br />
                                    <br />
                                </div>
                            </div>
                        }
                    />
                </div>
                <div className="section-separator">
                    <CaseStudySection
                        id="prototyping"
                        section={{
                            title: "Prototyping",
                            subtitle: "Mockups & Interactive Demo",
                        }}
                        bodyComponent={
                            <div className="col-lg-cs order-lg-1 order-2 mt_md--50 mt_sm--50 mt_lg--30">
                                <p>
                                    Before any wireframing, I examined the app
                                    in its current state before planning
                                    architecture and flows that would feel most
                                    familiar to users.
                                </p>
                                <br />
                                <SubSectionHeading>Task Flow</SubSectionHeading>
                                <br />
                                <a
                                    href="https://www.figma.com/file/YwnmlJF3GcNoukKLJjenDX/Duolingo-Feature-Task-Flow?node-id=0%3A1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="https://jrportfoliosite.s3.us-west-1.amazonaws.com/duolingotaskflow.png"
                                        alt="Kanji feature task flow"
                                    />
                                </a>
                                <br />
                                <br />
                                <br />
                                <br />
                                <SubSectionHeading>
                                    User Flow Diagram
                                </SubSectionHeading>
                                <br />
                                <a
                                    href="https://www.figma.com/file/22PVlm28Ccbs6Gotp7sO11/Duolingo-Feature-User-Flow-Diagram?node-id=0%3A1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="https://jrportfoliosite.s3.us-west-1.amazonaws.com/duolingouserflow.png"
                                        alt="User flow diagram"
                                    />
                                </a>
                                <br />
                                <br />
                                <br />
                                <br />
                                <SubSectionHeading>
                                    Low Fidelity Mockups
                                </SubSectionHeading>
                                <br />
                                <a
                                    href="https://www.figma.com/file/UeEReVUAOt8T4fKCyleqbB/Duolingo-Feature-Wireframes?node-id=0%3A1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="https://jrportfoliosite.s3.us-west-1.amazonaws.com/duolingolowfid.png"
                                        alt="Low fidelity screens"
                                    />
                                </a>
                                <br />
                                <br />
                                <br />
                                <br />
                                <SubSectionHeading>
                                    High Fidelity Mockups
                                </SubSectionHeading>
                                <br />
                                <a
                                    href="https://www.figma.com/file/UeEReVUAOt8T4fKCyleqbB/Duolingo-Feature-Wireframes?node-id=10%3A945"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="https://jrportfoliosite.s3.us-west-1.amazonaws.com/duolingohighfid.png"
                                        alt="High fidelity screens"
                                    />
                                </a>
                                <br />
                                <br />
                                <br />
                                <br />
                                <SubSectionHeading>
                                    High Fidelity Prototype
                                </SubSectionHeading>
                                <br />
                                <p>
                                    {
                                        "This is the final prototype including changes made after the user test (click the 'あ' in the bottom nav to begin):"
                                    }
                                </p>
                                <br />
                                <iframe
                                    title="duolingo-prototype"
                                    width="360"
                                    height="640"
                                    src="https://xd.adobe.com/embed/e43cca56-0a3c-4299-b467-0b326ded3d45-b16f/?fullscreen"
                                    frameBorder="0"
                                    allowFullScreen
                                />
                                <br />
                                <br />
                            </div>
                        }
                    />
                </div>
                <div className="section-separator">
                    <CaseStudySection
                        id="user-testing"
                        section={{
                            title: "User Testing",
                            subtitle: "Site Testing & User Feedback",
                        }}
                        bodyComponent={
                            <div className="col-lg-cs order-lg-1 order-2 mt_md--50 mt_sm--50 mt_lg--30">
                                <p>
                                    Everyone out of the three participants
                                    viewed the prototype in their web browser,
                                    completed tasks, and gave their thoughts and
                                    opinions over Discord calls which were
                                    recorded via NVIDIA ShadowPlay for later
                                    review.
                                </p>
                                <p>
                                    {
                                        "Of these participants, Participant 2 wasn't familiar with the mobile UI since they exclusively used Duolingo in-browser. However, it took them only a moment to adjust and didn't pose any issues during the session. Although it wasn't part of the user test, it was interesting to see how quickly users can transition between web and mobile interfaces of a well-designed app."
                                    }
                                </p>
                                <br />
                                <br />
                                <SubSectionHeading>
                                    User Test Goals
                                </SubSectionHeading>
                                <br />
                                <p>The goals of the user test were to:</p>
                                <ul>
                                    <li>
                                        Test that the experience feels like it
                                        belongs in the app
                                    </li>
                                    <li>
                                        Gauge whether the experience feels
                                        useful to learners of all levels
                                    </li>
                                    <li>
                                        Determine that users can easily find and
                                        navigate the new feature.
                                    </li>
                                    <li>
                                        Identify any pain points or confusion
                                        while using the feature
                                    </li>
                                </ul>
                                <br />
                                <br />
                                <SubSectionHeading>
                                    Test Results
                                </SubSectionHeading>
                                <br />
                                <p>
                                    As a whole, users agreed that the feature
                                    felt authentic to the Duolingo experience,
                                    was useful, and easy to navigate. And,{" "}
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    although users appreciated the "Let's Learn"
                                    screen at the start of the module, users did
                                    not feel entirely confident in their ability
                                    to get the answers correct when put to the
                                    test.
                                </p>
                                <br />
                                <br />
                                <SubSectionHeading>
                                    Affinity Map
                                </SubSectionHeading>
                                <br />
                                <a
                                    href="https://www.figma.com/file/rEJvJBLEVOXesGRFa5KFPZ/Duolingo-User-Test-Affinity-Map?node-id=0%3A1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="https://jrportfoliosite.s3.us-west-1.amazonaws.com/duolingoaffinity.png"
                                        alt="Affinity map"
                                    />
                                </a>
                                <br />
                                <br />
                                <br />
                                <br />
                                <SubSectionHeading>
                                    Priority Matrix
                                </SubSectionHeading>
                                <br />
                                <a
                                    href="https://www.figma.com/file/6Dk0d7lg26kZmFF6bFzklj/Duolingo-Priority-Matrix?node-id=0%3A1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="https://jrportfoliosite.s3.us-west-1.amazonaws.com/duolingopmatrix.png"
                                        alt="Priority matrix"
                                    />
                                </a>
                                <br />
                                <br />
                                <br />
                                <br />
                                <SubSectionHeading>Iteration</SubSectionHeading>
                                <br />
                                <p>
                                    This consistent bit of feedback from{" "}
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    participants regarding the "Let's Learn"
                                    screen was valuable, giving clear direction
                                    for the next iteration of the prototype.
                                    Because the the screen itself was useful to
                                    the curriculum, it needed more fleshing out
                                    and to be treated as a more important part
                                    of the feature.
                                </p>
                                <br />
                                <br />
                            </div>
                        }
                    />
                </div>
                <div className="section-separator">
                    <CaseStudySection
                        id="conclusion"
                        section={{
                            title: "Conclusion",
                            subtitle: "My Takeaway",
                        }}
                        bodyComponent={
                            <div className="order-2 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30">
                                <div className="content">
                                    <p>
                                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                                        Overall, I'm pleased with how the
                                        implementation of this feature went, and{" "}
                                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                                        I'd love to see something like this
                                        added to the app in the future. In
                                        addition, this experience further
                                        solidified my belief in the importance
                                        of Subject Matter Experts. Because
                                        interviewing a teacher or native speaker
                                        could have had a significant impact on
                                        the sorting and lesson module, this
                                        feature could have been made even
                                        better.
                                    </p>
                                </div>
                            </div>
                        }
                        images={{
                            src: "https://jrportfoliosite.s3.us-west-1.amazonaws.com/duolingocolorfulmexico.png",
                            alt: "Duolingo branding",
                        }}
                    />
                </div>
            </main>
            <Footer
                data={{ ...data.footer, logo: [{ src: logoImage }] }}
                className="section-separator"
            />
        </Layout>
    );
};

export const query = graphql`
    query duolingoPageQuery {
        site {
            ...Site
        }
        header: general(section: { eq: "header-1" }) {
            ...Header01
        }
        navigation: general(section: { eq: "menu-1" }) {
            menu {
                ...Menu01
            }
        }
        footer: general(section: { eq: "footer-1" }) {
            ...Footer01
        }
        homePage(title: { eq: "default-home" }) {
            content {
                ...Content01
            }
        }
        allArticle(limit: 3) {
            nodes {
                ...Article
            }
        }
    }
`;

CaseStudyDuolingo.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                socials: PropTypes.arrayOf(PropTypes.shape({})),
                contact: PropTypes.shape({
                    phone: PropTypes.string,
                    email: PropTypes.string,
                }),
                getform_url: PropTypes.string,
            }),
        }),
        homePage: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allArticle: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        navigation: PropTypes.shape({}),
        header: PropTypes.shape({}),
        footer: PropTypes.shape({}),
    }),
};

export default CaseStudyDuolingo;
