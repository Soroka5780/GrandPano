import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'apartment',
  title: 'Apartment',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Apartment ID',
      type: 'string',
      description: 'Jedinečný identifikátor bytu ',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Názov bytu',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'rooms',
      title: 'Number of rooms',
      type: 'number',
      description: 'Počet izieb',
      validation: Rule => Rule.required().min(1).max(10),
    }),
    defineField({
      name: 'area',
      title: 'Area (m²)',
      type: 'number',
      description: 'Výmera v m²',
      validation: Rule => Rule.required().min(10),
    }),
    defineField({
      name: 'price',
      title: 'Price (EUR)',
      type: 'number',
      description: 'Cena v EUR',
      validation: Rule => Rule.required().min(1000),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      description: 'Stav bytu',
      options: {
        list: [
          { title: 'Available', value: 'available' },
          { title: 'Reserved', value: 'reserved' },
          { title: 'Sold', value: 'sold' },
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'floor',
      title: 'Floor',
      type: 'number',
      description: 'Poschodie',
    }),
    defineField({
      name: 'orientation',
      title: 'Orientation',
      type: 'string',
      description: 'Orientácia (napr. JZ, SV)',
      options: {
        list: ['S', 'J', 'V', 'Z', 'JV', 'JZ', 'SV', 'SZ'],
      },
    }),
  defineField({
  name: 'pdfFile',
  title: 'PDF súbor',
  type: 'file',
  description: 'Nahraj PDF dokument bytu',
}),

defineField({
  name: 'planImage',
  title: 'Pôdorys bytu',
  type: 'image',
  description: 'Nahraj obrázok pôdorysu',
}),
  ],
})
