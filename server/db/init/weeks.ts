import { Week } from '../models/weekModel'

const J1 = new Week({
  weekNumber: 1,
  date: '2022-08-05',
})

const J2 = new Week({
  weekNumber: 2,
  date: '2022-08-12',
})

const J3 = new Week({
  weekNumber: 3,
  date: '2022-08-19',
})

const J4 = new Week({
  weekNumber: 4,
  date: '2022-08-26',
})

const J5 = new Week({
  weekNumber: 5,
  date: '2022-08-31',
})

const J6 = new Week({
  weekNumber: 6,
  date: '2022-09-03',
})

const J7 = new Week({
  weekNumber: 7,
  date: '2022-09-09',
})

const J8 = new Week({
  weekNumber: 8,
  date: '2022-09-16',
})

const J9 = new Week({
  weekNumber: 9,
  date: '2022-09-30',
})

const J10 = new Week({
  weekNumber: 10,
  date: '2022-10-07',
})

const J11 = new Week({
  weekNumber: 11,
  date: '2022-10-14',
})

const J12 = new Week({
  weekNumber: 12,
  date: '2022-10-21',
})

const J13 = new Week({
  weekNumber: 13,
  date: '2022-10-28',
})

const J14 = new Week({
  weekNumber: 14,
  date: '2022-11-04',
})

const J15 = new Week({
  weekNumber: 15,
  date: '2022-11-11',
})

const J16 = new Week({
  weekNumber: 16,
  date: '2022-12-28',
})

const J17 = new Week({
  weekNumber: 17,
  date: '2023-01-01',
})

const J18 = new Week({
  weekNumber: 18,
  date: '2023-01-11',
})

const J19 = new Week({
  weekNumber: 19,
  date: '2023-01-14',
})

const J20 = new Week({
  weekNumber: 20,
  date: '2023-01-27',
})

const J21 = new Week({
  weekNumber: 21,
  date: '2023-02-01',
})

const J22 = new Week({
  weekNumber: 22,
  date: '2023-02-04',
})

const J23 = new Week({
  weekNumber: 23,
  date: '2023-02-10',
})

const J24 = new Week({
  weekNumber: 24,
  date: '2023-02-17',
})

const J25 = new Week({
  weekNumber: 25,
  date: '2023-02-24',
})

const J26 = new Week({
  weekNumber: 26,
  date: '2023-03-03',
})

const J27 = new Week({
  weekNumber: 27,
  date: '2023-03-10',
})

const J28 = new Week({
  weekNumber: 28,
  date: '2023-03-17',
})

const J29 = new Week({
  weekNumber: 29,
  date: '2023-03-31',
})

const J30 = new Week({
  weekNumber: 30,
  date: '2023-04-07',
})

const J31 = new Week({
  weekNumber: 31,
  date: '2023-04-16',
})

const J32 = new Week({
  weekNumber: 32,
  date: '2023-04-23',
})

const J33 = new Week({
  weekNumber: 33,
  date: '2023-04-30',
})

const J34 = new Week({
  weekNumber: 34,
  date: '2023-05-07',
})

const J35 = new Week({
  weekNumber: 35,
  date: '2023-05-14',
})

const J36 = new Week({
  weekNumber: 36,
  date: '2023-05-21',
})

const J37 = new Week({
  weekNumber: 37,
  date: '2023-05-27',
})

const J38 = new Week({
  weekNumber: 38,
  date: '2023-06-03',
})

export const weeks = [
  J1,
  J2,
  J3,
  J4,
  J5,
  J6,
  J7,
  J8,
  J9,
  J10,
  J11,
  J12,
  J13,
  J14,
  J15,
  J16,
  J17,
  J18,
  J19,
  J20,
  J21,
  J22,
  J23,
  J24,
  J25,
  J26,
  J27,
  J28,
  J29,
  J30,
  J31,
  J32,
  J33,
  J34,
  J35,
  J36,
  J37,
  J38,
]

export const initWeeks = async () => {
  for (const week of weeks) {
    week
      .save()
      .then(() => {
        console.log(`Journée ${week.weekNumber} enregistrée en BDD`)
      })
      .catch((error) => {
        if (error.code === 11000) {
          console.log(`Journée ${week.weekNumber} déjà existante en BDD`)
        } else {
          console.log(
            `Erreur lors de la sauvegarde de la journée ${week.weekNumber} : ${error} `
          )
        }
      })
  }
}
