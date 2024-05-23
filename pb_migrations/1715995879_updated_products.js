/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pgucnd95oeusfb6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "soraugyq",
    "name": "image",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pgucnd95oeusfb6")

  // remove
  collection.schema.removeField("soraugyq")

  return dao.saveCollection(collection)
})
