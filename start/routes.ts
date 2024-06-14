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

// Route pour créer un événement
router.get('events/create', async ({ view }) => {
  return view.render('events/create')
}).as('create')

// Route pour enregistrer un événement
router.post('/event/store', async ({ request, response, session }) => {
    const data = request.toJSON().body
    console.log(data)
    // Add flash message
    session.flash('notification', {
      type: 'success',
      message: 'Thanks for adding a new event!'
    })
    response.redirect('/events')
}).as('store')

// Route de la page de contact
router.on('/contact').render('pages/contact').as('contact')
