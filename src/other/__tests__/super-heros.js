import getFlyingSuperHeros from '../super-heros'

test('returns returns super heros that can fly', () => {
  const flyingHeros = getFlyingSuperHeros()
  //   console.log(flyingHeros) // instead of doing this arduously...
  //   expect(flyingHeros).toEqual([
  //     {name: 'Dynaguy', powers: ['disintegration ray', 'fly']},
  //     {name: 'Apogee', powers: ['gravity control', 'fly']},
  //     {name: 'Jack-Jack', powers: ['shapeshifting', 'fly']},
  //   ])

  // instead of doing the above arduously...
  //   npm tests -- -u // command to update all of our snapshots
  //   expect(flyingHeros).toMatchSnapshot() // serializes  result to string

  // inline snapshot is sooo much better!!
  expect(flyingHeros).toMatchInlineSnapshot(`
    Array [
      Object {
        "name": "Dynaguy",
        "powers": Array [
          "disintegration ray",
          "fly",
        ],
      },
      Object {
        "name": "Apogee",
        "powers": Array [
          "gravity control",
          "fly",
        ],
      },
      Object {
        "name": "Jack-Jack",
        "powers": Array [
          "shapeshifting",
          "fly",
        ],
      },
    ]
  `)
})
