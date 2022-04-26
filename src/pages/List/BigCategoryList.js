import MultipleSlider from '../../components/Slide/MultipleSlider';
import React from 'react';
import { H2, Wrap, Line, P } from './BigCategoryListStyled';

const BigCategoryList = React.memo(function BigCategoryList({ data }) {
  let _data = { 서울시: [], 부산시: [] };
  for (let i = 0; i < data.length; i++) {
    if (data[i].city === '서울시') _data['서울시'].push(data[i]);
    else if (data[i].city === '부산시') _data['부산시'].push(data[i]);
  }
  return (
    <Wrap>
      <Line>
        <H2>서울시</H2>
        <P>보기&nbsp;({_data['서울시'].length}+개)</P>
      </Line>
      <MultipleSlider data={_data['서울시']} />
      <Line marginTop="100px">
        <H2>부산시</H2>
        <P>보기({_data['부산시'].length}+개)</P>
      </Line>
      <MultipleSlider data={_data['부산시']} />
    </Wrap>
  );
});

export default BigCategoryList;
