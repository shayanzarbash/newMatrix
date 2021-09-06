import React, { useState } from 'react';
import './App.css';
import Matrix from './matrix/index';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import HorizontalLinearStepper from './matrix/step';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../src/store/reducer/reducer'

const App = () => {

  const store = createStore(reducer);

  return (
    <div >
      <Container maxWidth="md">
        <main>
          <Box>
            <Typography variant="h4" gutterBottom className="welcomeMatrix">
              Welcome to My Matrix Project
            </Typography>
            <Provider store={store}>
              <HorizontalLinearStepper />
            </Provider>
          </Box>
        </main>
      </Container>
    </div>
  )
}

export default App;
