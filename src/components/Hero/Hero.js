import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, ProfileContainer } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>Hi, nice to meet you!</SectionTitle>
      <ProfileContainer src="/images/profilepict.jfif" />
      <SectionText>
        I'm Wildan, a Software Engineer passionate in building apps with clean
        and maintanable code.
      </SectionText>
      <Button
        onClick={() =>
          window.open('https://www.linkedin.com/in/wildan-adli-8436b412b/')
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
