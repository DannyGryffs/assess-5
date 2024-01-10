import { Op } from 'sequelize';
import { Animal, Human } from './model.js';
// const {Animal, Human} = await import('./src/model.js') -- for node repl

// SELECT humanId, fname, lname, email FROM humans WHERE humanId = 2
// Get the human with the primary key 2
// export const query1 = await Human.findOne({
//     attributes: ['humanId', 'fname', 'lname', 'email'],
//     where: { humanId: 2 }
// })
export const query1 = await Human.findOne({
    attributes: ['humanId', 'fname', 'lname', 'email'],
    where: { humanId: 2 }
})

// SELECT animalId, name, species, birthYear, humanId FROM animal WHERE species = "fish"
// Get the first animal whose species is "fish"
export const query2 = await Animal.findOne({
    // attributes: ['animalId', 'name', 'species', 'birthYear', 'humanId'],
    where: { species: 'fish' } 
})

// Get all animals belonging to the human with primary key 5
// SELECT * animals
export const query3 = await Animal.findAll({
    where: { humanId: 5 }
}) 

// Get all animals born in a year greater than (but not equal to) 2015.
export const query4 = await Animal.findAll({
    where: { birthYear: {[Op.gt]: 2015} }
})

// Get all the humans with first names that start with "J"
export const query5 = await Human.findAll({
    where: { fname: {[Op.like]: 'J%'}}
})

// Get all the animals who don't have a birth year
export const query6 = await Animal.findAll({
    where: { birthYear: {[Op.is]: null} }
})

// Get all the animals with species "fish" OR "rabbit"
export const query7 = await Animal.findAll({
    where: { species: {[Op.or]: ['fish', 'rabbit']} }
})

// Get all the humans who DON'T have an email address that contains "gmail"
export const query8 = await Human.findAll({
    where: {email: {[Op.notLike]: '%gmail%'}}
})
;

// Continue reading the instructions before you move on!

// Print a directory of humans and their animals
export async function printHumansAndAnimals() {
    const hums = await Human.findAll({ include: Animal });
    for (let i = 0; i < hums.length; i++) {
        console.log(hums[i].fname + ' ' + hums[i].lname)
        for (let h = 0; h < hums[i].animals.length; h++) {
            console.log('- ' + hums[i].animals[h].name + ', ' + hums[i].animals[h].species)
        
        }
    }
}
 await printHumansAndAnimals()
// Return a Set containing the full names of all humans
// with animals of the given species.
export async function getHumansByAnimalSpecies(species) {}
