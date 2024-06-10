import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Event extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare title: string

  @column()
  declare description: string | null

  @column()
  declare startAt: DateTime

  @column()
  declare endAt: DateTime

  @column()
  declare address: string | null

  @column()
  declare city: string | null

  @column()
  declare country: string | null

  @column()
  declare online: boolean
}
