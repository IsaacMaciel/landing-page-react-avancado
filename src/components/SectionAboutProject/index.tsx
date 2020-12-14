import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { SectionAboutProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

type Props = {
  sectionAboutProject: SectionAboutProps
}

const SectionAboutProject = ({ sectionAboutProject }: Props) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image
          src={getImageUrl(sectionAboutProject.image.url)}
          alt={sectionAboutProject.image.alternativeText}
          loading="lazy"
        ></S.Image>
        <div>
          <Heading>{sectionAboutProject.title}</Heading>
          <S.Text
            dangerouslySetInnerHTML={{
              __html: sectionAboutProject.description
            }}
          ></S.Text>
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
