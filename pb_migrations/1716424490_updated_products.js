/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pgucnd95oeusfb6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4mnvgfiu",
    "name": "stars",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 5,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pgucnd95oeusfb6")

  // remove
  collection.schema.removeField("4mnvgfiu")

  return dao.saveCollection(collection)
})
