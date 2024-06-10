import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class UserSeeder extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    // Création de 10 utilisateurs
    await User.createMany([
      { fullName: 'John Doe', email: 'john.doe@example.com', password: 'password123' },
      {
        fullName: 'Jane Smith',
        email: 'jane.smith@example.com',
        password: 'qwertyui',
      },
      {
        fullName: 'Bob Johnson',
        email: 'bob.johnson@example.com',
        password: 'secret456',
      },
    ])
  }
}
