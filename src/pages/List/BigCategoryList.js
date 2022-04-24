import MultipleSlider from '../../components/Slide/MultipleSlider';
import React from 'react';
import { H2, Wrap, Line, P } from './BigCategoryListStyled';
const BigCategoryList = React.memo(function BigCategoryList({ data }) {
  let _data = { 서울: [], 부산: [] };
  for (let i = 0; i < data.length; i++) {
    if (data[i].local === '서울') _data['서울'].push(data[i]);
    else if (data[i].local === '부산') _data['부산'].push(data[i]);
  }
  return (
    <Wrap>
      <Line>
        <H2>서울시</H2>
        <P>보기({_data['서울'].length}+개)</P>
      </Line>
      <MultipleSlider data={_data['서울']} />
      <Line marginTop="100px">
        <H2>부산시</H2>
        <P>보기({_data['부산'].length}+개)</P>
      </Line>
      <MultipleSlider data={_data['부산']} />
    </Wrap>
  );
});

export default BigCategoryList;
