const { green, red } = require('chalk')
const { db, Bread } = require('./server/db')

const seed = async () => {
  try {
    await db.sync({ force: true })

    const [bagel, croissant, sourdough, rye, pumpernickel, challah, naan, ciabatta, focaccia, brioche, multigrain, banana] = await Promise.all([
      Bread.create({
        name: 'Bagel',
        description: 'Perfect for breakfast on the go',
        price: 2.00,
        imageUrl: 'https://bakingamoment.com/wp-content/uploads/2020/06/IMG_8813-bagel-recipe.jpg',
      }),
      Bread.create({
        name: 'Croissant',
        description: 'A delicious, buttery French pastry',
        price: 3.00,
        imageUrl: 'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2013/01/Croissant.jpg',
      }),
      Bread.create({
        name: 'Sourdough',
        description: 'The perfect bread for your next grilled cheese',
        price: 9.00,
        imageUrl: 'https://www.kenwoodworld.com/Global/recipes/Recipe%20Images/basic/besttools_sourdough-100_retouched_hero.jpg',
      }),
      Bread.create({
        name: 'Rye',
        description: 'The best bread for a Rueben sandwich',
        price: 6.00,
        imageUrl: 'https://www.jocooks.com/wp-content/uploads/2020/04/rye-bread-1-18.jpg',
      }),
      Bread.create({
        name: 'Pumpernickel',
        description: 'A delightful bread for dinner',
        price: 7.00,
        imageUrl: 'https://www.thespruceeats.com/thmb/hUFB8HL1JBI0g4qCGgkDZx0Vf0s=/1500x1000/filters:fill(auto,1)/easy-pumpernickel-bread-recipe-428175.Hero-5b59ed4cc9e77c0097581007.jpg',
      }),
      Bread.create({
        name: 'Challah',
        description: 'A beautifully plaited loaf',
        price: 12.00,
        imageUrl: 'https://cravingsjournal.com/wp-content/uploads/2019/06/challah-3.jpg',
      }),
      Bread.create({
        name: 'Naan',
        description: 'Perfect with curry or dal',
        price: 4.00,
        imageUrl: 'https://www.cookingclassy.com/wp-content/uploads/2021/01/naan-30.jpg',
      }),
      Bread.create({
        name: 'Ciabatta',
        description: 'Lovely with good olive oil',
        price: 8.00,
        imageUrl: 'https://www.aheadofthyme.com/wp-content/uploads/2020/10/small-batch-sourdough-ciabatta-bread.jpg',
      }),
      Bread.create({
        name: 'Focaccia',
        description: 'A flavorful snack',
        price: 10.00,
        imageUrl: 'https://www.browneyedbaker.com/wp-content/uploads/2021/02/focaccia-24-1200.jpg',
      }),
      Bread.create({
        name: 'Brioche',
        description: 'An excellent choice for french toast',
        price: 9.00,
        imageUrl: 'https://bakingamoment.com/wp-content/uploads/2020/10/IMG_9285-brioche.jpg',
      }),
      Bread.create({
        name: 'Multigrain',
        description: 'A great loaf for sandwiches',
        price: 11.00,
        imageUrl: 'https://static.toiimg.com/thumb/76626392.cms?width=1200&height=900',
      }),
      Bread.create({
        name: 'Banana',
        description: 'A delicious quick bread perfect with coffee',
        price: 7.00,
        imageUrl: 'https://www.simplyrecipes.com/thmb/n0haOVlgXcM8Sr53p3C-U53YP2U=/4399x3299/smart/filters:no_upscale()/Simply-Recipes-Easy-Banana-Bread-LEAD-2-2-63dd39af009945d58f5bf4c2ae8d6070.jpg',
      }),
    ])

    return [bagel, croissant, sourdough, rye, pumpernickel, challah, naan, ciabatta, focaccia, brioche, multigrain, banana]
  } catch (err) {
    console.log(red(err))
  }
}

module.exports = seed

if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'))
      db.close()
    })
    .catch((err) => {
      console.error(red('Oh no! Something went wrong!'))
      console.error(err)
      db.close()
    })
}
