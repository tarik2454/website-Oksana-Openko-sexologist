import styled from 'styled-components';
import 'video-react/dist/video-react.css';

export const StyledAboutMeSection = styled.section`
  padding-top: 112px;
  padding-bottom: 112px;
  background-color: var(--bg-main);

  h2 {
    margin-bottom: 32px;
    grid-area: title;
    font-family: 'IBMPlexSans-200';
    font-weight: 200;
    font-size: 32px;
    line-height: 1.25;
    color: var(--primery-text);
  }

  //Tablet
  @media screen and (min-width: 768px) {
    padding-bottom: 80px;

    section {
      display: grid;
      justify-content: space-between;
      column-gap: 38px;
      align-items: center;
      grid-template-areas:
        'images video'
        'images video'
        'title video'
        'text text'
        'accent accent';
    }

    h2 {
      margin-top: 36px;
    }
  }

  //Desctop
  @media screen and (min-width: 1440px) {
    padding-top: 136px;
    padding-bottom: 142px;

    section {
      grid-template-areas:
        'images video'
        'images video'
        'title video'
        'text video'
        'accent video';
      align-items: start;
      justify-content: normal;
      column-gap: 96px;
    }

    h2 {
      margin-top: 40px;
      margin-bottom: 56px;
    }
  }
`;

//Video

export const StyledWrapperVideo = styled.div`
  position: relative;
  grid-area: video;
  margin: 0 auto;
  width: 324px;
  height: 494px;
  margin-right: 0;
  z-index: 10;
  margin-bottom: 40px;

  &::after {
    content: ' ';
    display: block;
    position: absolute;
    bottom: 76px;
    right: 13px;
    width: 329px;
    height: 470px;
    border: 1px solid var(--bg-primery);
    z-index: -1;
  }

  //Tablet
  @media screen and (min-width: 768px) {
    margin-top: 58px;
    margin-bottom: 56px;
  }

  //Desctop
  @media screen and (min-width: 1440px) {
    width: 448px;
    height: 905px;

    &::after {
      top: -61px;
      left: -32px;
      width: 378px;
      height: 549px;
    }
  }
`;

//Image
export const StyledAboutImgList = styled.ul`
  display: grid;
  grid-area: images;
  grid-template-areas: 'second first';
  margin-bottom: 84px;

  li:nth-child(1) {
    order: 2;
    grid-area: first;
  }

  li:nth-child(2) {
    display: flex;
    order: 1;
    transform: translateY(28px);
    align-items: end;
    grid-area: second;
    z-index: 10;
  }

  //Tablet
  @media screen and (min-width: 768px) {
    row-gap: 42px;
    grid-template-areas:
      'first '
      'second ';
    margin-bottom: 0;

    li:nth-child(1) {
      padding-left: 10px;
    }
    li:nth-child(2) {
      grid-column-start: 2;
      align-items: start;
      transform: translate(-20px, 32px);
    }
  }

  //Desctop
  @media screen and (min-width: 1440px) {
    grid-template-areas: 'first second';
    justify-content: start;
    margin-bottom: 40px;
    column-gap: 172px;
    margin-bottom: 0;

    li:nth-child(1) {
      padding-top: 11px;
    }
    li:nth-child(2) {
      transform: translate(0, 105px);
    }
  }
`;

export const StyledWrapperImg = styled.div`
  position: relative;
  z-index: 1;
  width: 186px;
  height: 233px;

  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
  &::after {
    content: ' ';
    display: block;
    position: absolute;
    top: -10px;
    left: -10px;
    right: 12px;
    width: 210px;
    height: 209px;
    background-color: var(--bg-brown);
    z-index: -1;
    @media screen and (min-width: 1440px) {
      width: 192px;
      height: 191px;
    }
  }
  @media screen and (min-width: 1440px) {
    width: 170px;
    height: 213px;
  }
`;

export const StyledWrapperImgBottom = styled(StyledWrapperImg)`
  width: 142px;
  height: 152px;
  @media screen and (min-width: 1440px) {
    width: 178px;
    height: 190px;
  }

  &::after {
    top: -32px;
    left: 13px;
    width: 153px;
    height: 157px;
    @media screen and (min-width: 1440px) {
      width: 192px;
      height: 196px;
      top: -40px;
      left: 24px;
    }
  }
`;

//Text
export const StyledAboutList = styled.ul`
  display: grid;
  grid-gap: 24px;
  grid-area: text;

  div {
    display: grid;
    grid-gap: 12px;
  }
  h3 {
    margin-bottom: 12px;
    font-family: 'ProximaNova-600';
    font-weight: 600;
    font-size: 18px;
    line-height: 1.11;
    color: var(--main-text);
  }

  span {
    font-family: 'ProximaNova-700';
    font-weight: 700;
    font-size: 18px;
    line-height: 1.11;
    color: var(--main-text);
  }
`;

export const StyledAboutAccentText = styled.p`
  grid-area: accent;
  margin-top: 40px;
  margin-bottom: 56px;
  font-family: 'ProximaNova-500';
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  color: var(--primery-text);
  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 16px;
    margin-bottom: 83px;
  }
`;
export const StyledWrapperGames = styled.ul`
  display: grid;
  grid-gap: 8px;
`;
