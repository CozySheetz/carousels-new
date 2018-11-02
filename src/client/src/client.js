import React from 'react';
import $ from 'jquery';
import thunk from 'redux-thunk';
import { hydrate } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/rootReducer';
import RelatedListings from '../src/components/carousel/RelatedListings'
import Gallery from "../src/components/gallery/Gallery";

import { floatButtonWhenEntering, highlightImageOnHover } from "./helpers/initialize";
  
const initialState = window.__initialState__;
delete window.__initialState__;

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

hydrate(
  <Provider store={store}>
    <RelatedListings />
  </Provider>,
  document.getElementById('related-listings-app')
);

hydrate(
  <Provider store={store}>
    <Gallery />
  </Provider>,
  document.getElementById('gallery-app')
);

$(document).ready(function() {
  const $galleryImages = $('.gallery img');
  const $fourthImage = $('.img4');
  const $viewPhoto = $('.button-bottom');

  highlightImageOnHover($galleryImages)
  floatButtonWhenEntering($fourthImage);
  floatButtonWhenEntering($viewPhoto);
})
