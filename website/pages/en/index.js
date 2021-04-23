/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = (props) => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = (props) => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = (props) => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
        <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href={`${baseUrl}docs/rucio_client_api`}>Client API documentation</Button>
            <Button href={`${baseUrl}docs/rucio_rest_api`}>REST API documentation</Button>
            <Button href="https://hub.docker.com/u/rucio">Dockerhub documentation</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = (props) => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Features = () => (
      <Block id="features">
        {[
          {
            content: 'Learn more about Rucio & the motivations behind developing a new-age scalable data management system.',
            image: `${baseUrl}img/getting-started.svg`,
            imageAlign: 'top',
            imageLink: siteConfig.baseUrl + 'docs/index.html',
            title: 'Getting Started',
          },
          {
            content: 'Get your hands dirty by setting up your very own Rucio environment on a local laptop/desktop.',
            image: `${baseUrl}img/try-rucio.svg`,
            imageAlign: 'top',
            imageLink: siteConfig.baseUrl + 'docs/Try-rucio.html',
            title: 'Try Rucio',
          },
          {
            content: 'Install the Rucio client & try out some common CLI commands while learning a bit more about the user interface.',
            image: `${baseUrl}img/user-playground.svg`,
            imageAlign: 'top',
            imageLink: siteConfig.baseUrl + 'docs/setting-up-rucio-client',
            title: 'Rucio User Playground',
          },
          {
            content: 'Dive deep by setting up a Rucio server & working with the administrative CLI, tasks that will be helping you gain operator/administrator-level proficiency.',
            image: `${baseUrl}img/operator.svg`,
            imageAlign: 'top',
            imageLink: siteConfig.baseUrl + 'docs/installing-rucio-server.html',
            title: 'Rucio Operator Documentation',
          },
          {
            content: 'Along with the API references - both Client & REST, peruse the list of some development tips & tricks that are sure to come in handy!',
            image: `${baseUrl}img/developer.svg`,
            imageAlign: 'top',
            imageLink: `${baseUrl}docs/developing-with-rucio`,
            title: 'Developer Documentation',
          },
          {
            content: 'If you are installing Rucio or upgrading to the newest version, refer to the current release notes.',
            image: `${baseUrl}img/notes.svg`,
            imageAlign: 'top',
            imageLink: siteConfig.baseUrl + 'docs/release-notes.html',
            title: 'Release Notes',
          },
          {
            content: 'As a community-driven Open Source project, everybody is welcome to contribute. Do read the contribution guide before you start, though!',
            image: `${baseUrl}img/community.svg`,
            imageAlign: 'top',
            imageLink: siteConfig.baseUrl + 'docs/Contributing.html',
            title: 'Contribute to the docs!',
          },
          {
            content: 'Rucio is a community-driven project. Learn more about the bright minds powering Rucio & their contributions to the source code in this section.',
            image: `${baseUrl}img/about.svg`,
            imageAlign: 'top',
            imageLink: siteConfig.baseUrl + 'docs/about-our-contributors.html',
            title: 'About Us',
          },
        ]}
      </Block>
    );
    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter((user) => user.pinned)
        .map((user) => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = (page) =>
        baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
        <Features />
        </div>
      </div>
    );
  }
}

module.exports = Index;
