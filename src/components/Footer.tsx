
import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface Props {

}

export default function Footer({ }: Props): ReactElement {
  return (
    <FooterBody >
      <p>&copy; yammy Food</p>
    </FooterBody>
  )
};

const FooterBody = styled.footer`
  text-align: center;
`
