/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router' // Routeur de Adonis

// Importation des controllers
const EventsController = () => import('#controllers/events_controller')

// Route de la page d'accueil
router.on('/').render('pages/index').as('homepage')

// Routes des événements
router.get('/events', [EventsController, 'all']).as('events')

// Routes pour afficher un événement
router.get('/event/:id', [EventsController, 'show']).as('event')

// Route de la page de contact
router.on('/contact').render('pages/contact').as('contact')
