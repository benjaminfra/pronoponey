import { Team } from '../models/teamModel'

const parisSaintGermainTeam = new Team({
  name: 'Paris Saint-Germain',
  shortname: 'PSG',
  logoURI: 'logo_psg.png',
})

const lilleOSCTeam = new Team({
  name: 'Lille OSC',
  shortname: 'LOSC',
  logoURI: 'logo_lille.png',
})

const olympiqueLyonnaisTeam = new Team({
  name: 'Olympique Lyonnais',
  shortname: 'OL',
  logoURI: 'logo_lyon.png',
})

const asMonacoTeam = new Team({
  name: 'AS Monaco',
  shortname: 'ASM',
  logoURI: 'logo_monaco.png',
})

const olympiqueMarseillesTeam = new Team({
  name: 'Olympique de Marseille',
  shortname: 'OM',
  logoURI: 'logo_marseille.png',
})

const ogcNiceTeam = new Team({
  name: 'OGC Nice',
  shortname: 'OGCN',
  logoURI: 'logo_nice.png',
})

const rcLensTeam = new Team({
  name: 'RC Lens',
  shortname: 'RCL',
  logoURI: 'logo_lens.png',
})

const montpellierHscTeam = new Team({
  name: 'Montpellier HSC',
  shortname: 'MHSC',
  logoURI: 'logo_montpellier.png',
})

const angersScoTeam = new Team({
  name: 'Angers SCO',
  shortname: 'SCO',
  logoURI: 'logo_angers.png',
})

const stadeBrestoisTeam = new Team({
  name: 'Stade Brestois',
  shortname: 'SB29',
  logoURI: 'logo_brest.png',
})

const lorientTeam = new Team({
  name: 'FC Lorient',
  shortname: 'FCL',
  logoURI: 'logo_lorient.png',
})

const troyesTeam = new Team({
  name: 'Espérance Sportive Troyes Aube Champagne',
  shortname: 'ESTAC',
  logoURI: 'logo_troyes.png',
})

const acAjaccioTeam = new Team({
  name: 'Athletic Club Ajaccien',
  shortname: 'ACA',
  logoURI: 'logo_ajaccio.png',
})

const clermontFootTeam = new Team({
  name: 'Clermont Foot Auvergne 63',
  shortname: 'CFA',
  logoURI: 'logo_clermont.png',
})

const racingStrasbourgTeam = new Team({
  name: 'Racing Club de Strasbourg Alsace',
  shortname: 'RCSA',
  logoURI: 'logo_strasbourg.png',
})

const reimsTeam = new Team({
  name: 'Stade de Reims',
  shortname: 'SDR',
  logoURI: 'logo_reims.png',
})

const toulouseFCteam = new Team({
  name: 'Toulouse Football Club',
  shortname: 'TFC',
  logoURI: 'logo_toulouse.png',
})

const ajAuxerreTeam = new Team({
  name: 'Association de la Jeunesse Auxerroise',
  shortname: 'AJA',
  logoURI: 'logo_auxerre.png',
})

const stadeRennaisTeam = new Team({
  name: 'Stade Rennais',
  shortname: 'SRFC',
  logoURI: 'logo_staderennais.png',
})

const fcNantesTeam = new Team({
  name: 'FC Nantes',
  shortname: 'FCN',
  logoURI: 'logo_fcnantes.png',
})

export const teams = [
  parisSaintGermainTeam,
  lilleOSCTeam,
  olympiqueLyonnaisTeam,
  stadeRennaisTeam,
  fcNantesTeam,
  asMonacoTeam,
  olympiqueMarseillesTeam,
  ogcNiceTeam,
  rcLensTeam,
  montpellierHscTeam,
  angersScoTeam,
  stadeBrestoisTeam,
  lorientTeam,
  troyesTeam,
  acAjaccioTeam,
  clermontFootTeam,
  racingStrasbourgTeam,
  reimsTeam,
  toulouseFCteam,
  ajAuxerreTeam,
]

export const initTeam = async () => {
  for (const team of teams) {
    team.save().catch((error) => {
      if (error.code === 11000) {
        console.log(`Equipe ${team.name} déjà existante en BDD`)
      } else {
        console.log(`Erreur lors de la sauvegarde de ${team.name} : ${error} `)
      }
    })
  }
}
