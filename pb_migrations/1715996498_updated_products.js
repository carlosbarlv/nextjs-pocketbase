/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pgucnd95oeusfb6")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t4ous2xh",
    "name": "isActive",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pgucnd95oeusfb6")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t4ous2xh",
    "name": "state",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
