import { createContentTemplate } from './components/content.js';
import {createProfileTemplate} from './components/profile.js';
import {createTopRatedListTemplate} from './components/top-rated-list.js';
import {createMostCommentedTemplate} from './components/most-commented-list.js';
import {createFilmListTemplate} from './components/all-film-list.js';
import {createFilmCardTemplate} from './components/film-card.js';
import {createMainNavTemplate} from './components/main-navigation.js';
import {createFilmSortingTemplate} from './components/film-sorting.js';
import {createPopupTemplate} from './components/popup.js';
import {createMovieStatisticTemplate} from './components/statistic.js';
import {createFilmInfoTemplate} from './components/film-info.js';
import {createFilmCommentsTemplate} from './components/comment.js';
import {createFilmControlsTemplate} from './components/film-control.js';
import {createShowMoreButton} from './components/show-more-button.js';

const FILMS_CARD_COUNT = 5;
const EXTRA_FILMS_CARD_COUNT = 2;

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');
const siteFooterElement = document.querySelector('.footer');

const render = (container, template, position = 'beforeend') => {
  container.insertAdjacentHTML(position, template);
};

// Header
render(siteHeaderElement, createProfileTemplate());

//                            <---------Main--------->

render(siteMainElement, createMainNavTemplate());
render(siteMainElement, createFilmSortingTemplate());

render(siteMainElement, createContentTemplate());

const siteContent = siteMainElement.querySelector('.films');
render(siteContent, createFilmListTemplate());
render(siteContent, createTopRatedListTemplate());
render(siteContent, createMostCommentedTemplate());


const filmsBoard = document.querySelector('.films-list .films-list__container');
for (let i = 0; i < FILMS_CARD_COUNT; i++) {
  render(filmsBoard, createFilmCardTemplate());
}
render(filmsBoard, createShowMoreButton());


const extraFilmsList = document.querySelectorAll('.films-list--extra .films-list__container');
extraFilmsList.forEach((extraFilm) => {
  for (let i = 0; i < EXTRA_FILMS_CARD_COUNT; i++) {
    render(extraFilm, createFilmCardTemplate());
  }
});

// Footer
render(siteFooterElement, createMovieStatisticTemplate());

//  <------------popup----------->
render(siteFooterElement, createPopupTemplate(), 'afterend');
const filmInfo = document.querySelector('.form-details__top-container');
render(filmInfo, createFilmInfoTemplate());
render(filmInfo, createFilmControlsTemplate());

const filmComments = document.querySelector('.form-details__bottom-container');
render(filmComments, createFilmCommentsTemplate());
