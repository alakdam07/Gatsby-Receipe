import GatsbyImage from 'gatsby-image';
import React, { ReactElement } from 'react';
import { Link } from 'gatsby';
import { NavStyles } from '../styles/Nav';
import Logo from '../styles/Logo';

interface Props {

}

export default function Home({ }: Props): ReactElement {
  return (
    <NavStyles>
      <ul>
        <li className="logo-item">
          <Link to="/">
            <Logo />
          </Link>
        </li>
      </ul>
    </NavStyles>
  )
}
