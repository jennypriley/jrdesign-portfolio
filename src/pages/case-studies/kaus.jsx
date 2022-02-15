import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Layout from "@layout";
import Header from "../../layouts/header/layout-01";
import Footer from "../../layouts/footer/layout-01";
import HeroArea from "../../containers/hero/layout-cs";
import ServicesArea from "../../containers/service/layout-cs";
import logoImage from "../../data/images/logo/logo.png";
import data from "../../data/homepages/case-study-kaus.json";

const CaseStudyKaus = () => {
    const content = normalizedData(data?.content || []);

    return (
        <Layout pageTitle="Kaus Case Study">
            <Header
                data={{
                    ...data.header,
                    ...data.navigation,
                    logo: [{ src: logoImage }],
                }}
            />
            <main className="main-page-wrapper">
                <HeroArea
                    data={{
                        ...content["hero-section"],
                    }}
                />
                <ServicesArea data={content["service-section"]} />
            </main>
            <Footer
                data={{ ...data.footer, logo: [{ src: logoImage }] }}
                className="section-separator"
            />
        </Layout>
    );
};

export const query = graphql`
    query KausPageQuery {
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

CaseStudyKaus.propTypes = {
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

export default CaseStudyKaus;
