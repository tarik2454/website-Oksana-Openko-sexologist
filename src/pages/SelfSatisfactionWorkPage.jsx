import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';
import { confirmNamePage } from 'helpers/confirmNamePage';

import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs';
import Container from 'components/Container/Container';
import MainWrapperContent from 'components/ContentPageWrappers/MainWrapperContent';
import LeftWrapperContent from 'components/ContentPageWrappers/LeftWrapperContent';
import MediaThumb from 'components/MediaThumb/MediaThumb';
import TitlePages from 'components/TitlePages/TitlePages';
import RigthWrapperContent from 'components/ContentPageWrappers/RigthWrapperContent';
import ListField from 'components/contentPagesComponents/ListField';
import TextField from 'components/contentPagesComponents/TextField';

import { practiceSlider } from 'data/dataSelfSatisfactioFeedback';
import Slider from 'components/Slider/Slider';

import ButtonApplication from 'components/ButtonApplication/ButtonApplication';
import PriceField from 'components/PriceField/PriceField';

export default function SelfSatisfactionWorkPage() {
  const location = useLocation();
  const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  const namePage = confirmNamePage(location.pathname);
  const titlePage = 'Практикум по самозадоволенню';
  return (
    <section>
      <Container>
        <MainWrapperContent name={namePage}>
          {isMobile && (
            <>
              <BreadCrumbs titlePage={titlePage} name={namePage} />
              <TitlePages titlePage={titlePage} name={namePage} />
              <MediaThumb name={namePage} />
              <TextField name={namePage} />
              <ListField name={namePage} />
              <PriceField name={namePage} />
            </>
          )}

          {isTablet && (
            <>
              <LeftWrapperContent name={namePage}>
                <BreadCrumbs titlePage={titlePage} name={namePage} />
                <TitlePages titlePage={titlePage} name={namePage} />
                <TextField name={namePage} />
                <ListField name={namePage} />
              </LeftWrapperContent>
              <RigthWrapperContent name={namePage}>
                <MediaThumb name={namePage} />
                <PriceField name={namePage} />
              </RigthWrapperContent>
            </>
          )}
          <ButtonApplication />
        </MainWrapperContent>
        <Slider title="Відгуки" data={practiceSlider} name={namePage} />
      </Container>
    </section>
  );
}
