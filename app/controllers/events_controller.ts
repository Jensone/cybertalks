import type { HttpContext } from '@adonisjs/core/http'
import Event from '#models/event'

export default class EventsController {
  // Méthode pour afficher tous les événements
  async all({view}: HttpContext) {
    // Récupération de tous les événements
    const events = await Event.all()
    /**
     * Rendu de la vue avec `view.render`
     * et passage de la liste des événements
     * à la vue `events/all.edge`
     */
    return view.render('events/all', {
      "events": events
    })
  }

  // Méthode pour afficher un seul événement
  async show({ request, view }: HttpContext) {
    // Récupération de l'événement par son ID passé en paramètre
    const event = await Event.find(request.param('id'))

    return view.render('events/show', {
      "event": event
    })
  }
}
