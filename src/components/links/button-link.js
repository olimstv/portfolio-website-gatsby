import styled from '@emotion/styled';
import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Icon from '../icon';
import { flexCenter } from './../_shared/styled-mixins';

export const StyledButtonLink = styled.a`
  ${flexCenter};
  text-decoration: none;
  color: var(--primary-color) !important;
  // background-color: var(--bg-color);
  background-color: #2c2f43;
  // background-color: #fff;
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  position: relative;
  border: none;
  padding: 0.4rem 0.8rem;

  &:hover {
    // color: var(--title-color) !important;
    color: #fbe9c0 !important;
    transition: all ease var(--transition-fast);
  }

  &:after {
    content: '';
    z-index: -1;
    border: 1px solid var(--primary-color);
    position: absolute;
    bottom: -3px;
    right: -3px;
    width: 100%;
    height: 100%;
    transition: all ease var(--transition-fast);
  }

  &:hover:after {
    border: 1px solid #fbe9c0;
    bottom: -5px;
    right: -5px;
  }

  & > svg {
    fill: var(--bg-content-color);
    height: 0.8rem;
    margin-left: 0.25rem;
  }

  &:hover > svg {
    fill: var(--primary-color);
  }
`;

const ButtonLink = () => {
  const data = useStaticQuery(graphql`
  {
    allFile(filter: { extension: { eq: "pdf" } }) {
      edges {
        node {
          publicURL
          name
        }
      }
    }
  }
`)
const resume = data.allFile.edges[0].node.publicURL
return (
  <React.Fragment>
      
      <StyledButtonLink
        href={ resume}
        target='_blank'
        // download
        >
          My Resume
          <Icon icon="file-alt" />
        </StyledButtonLink>
      
    </React.Fragment>
  );

};



export default ButtonLink;
