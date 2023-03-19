import { Types } from 'mongoose'
import { Team } from '../models/teamModel'
import { initWeek1 } from './games/week1'
import { initWeek2 } from './games/week2'
import { initWeek3 } from './games/week3'
import { initWeek4 } from './games/week4'
import { initWeek5 } from './games/week5'
import { initWeek6 } from './games/week6'
import { initWeek7 } from './games/week7'
import { initWeek8 } from './games/week8'
import { initWeek9 } from './games/week9'
import { initWeek10 } from './games/week10'
import { initWeek11 } from './games/week11'
import { initWeek12 } from './games/week12'
import { initWeek13 } from './games/week13'
import { initWeek14 } from './games/week14'
import { initWeek15 } from './games/week15'
import { initWeek16 } from './games/week16'
import { initWeek17 } from './games/week17'
import { initWeek18 } from './games/week18'
import { initWeek19 } from './games/week19'
import { initWeek20 } from './games/week20'
import { initWeek21 } from './games/week21'
import { initWeek22 } from './games/week22'
import { initWeek23 } from './games/week23'
import { initWeek24 } from './games/week24'
import { initWeek25 } from './games/week25'
import { initWeek26 } from './games/week26'
import { initWeek27 } from './games/week27'
import { initWeek28 } from './games/week28'
import { initWeek29 } from './games/week29'
import { initWeek30 } from './games/week30'

export const initGames = async () => {
  const teamIds: Record<string, Types.ObjectId> = {}

  Team.find({}).then((data) => {
    data.forEach((team) => {
      teamIds[team.shortname] = team._id
    })

    initWeek1(teamIds)
    initWeek2(teamIds)
    initWeek3(teamIds)
    initWeek4(teamIds)
    initWeek5(teamIds)
    initWeek6(teamIds)
    initWeek7(teamIds)
    initWeek8(teamIds)
    initWeek9(teamIds)
    initWeek10(teamIds)
    initWeek11(teamIds)
    initWeek12(teamIds)
    initWeek13(teamIds)
    initWeek14(teamIds)
    initWeek15(teamIds)
    initWeek16(teamIds)
    initWeek17(teamIds)
    initWeek18(teamIds)
    initWeek19(teamIds)
    initWeek20(teamIds)
    initWeek21(teamIds)
    initWeek22(teamIds)
    initWeek23(teamIds)
    initWeek24(teamIds)
    initWeek25(teamIds)
    initWeek26(teamIds)
    initWeek27(teamIds)
    initWeek28(teamIds)
    initWeek29(teamIds)
    initWeek30(teamIds)
  })
}
