/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import FormList from 'containers/FormList/Loadable';
import CreateForm from 'containers/CreateForm/Loadable';
import ValidateForm from 'containers/ValidateForm/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import { useInjectSaga } from 'utils/injectSaga';
import saga from './saga';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  useInjectSaga({ key: 'currentForm', saga });
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Sample Form Builder"
        defaultTitle="Sample Form Builder"
      >
        <meta name="description" content="Sample Form Builder" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={FormList} />
        <Route path="/create" component={CreateForm} />
        <Route path="/validate" component={ValidateForm} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
