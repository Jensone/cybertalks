/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')
router.on('/posts').render('pages/posts')
router.on('/contact').render('pages/contact')
router.on('/support').render('pages/support')

router.post('/posts/:id', ({ params }) => {
  return `This is post with id ${params.id}`
})
