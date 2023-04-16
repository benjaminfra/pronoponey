import { MultipartFile } from '@fastify/multipart'
import fs from 'fs'
import pump from 'pump'

export const uploadFileToPublic = async (
  data: MultipartFile
): Promise<void> => {
  try {
    await pump(data.file, fs.createWriteStream(`./assets/${data.filename}`))
  } catch (error) {
    console.error(error)
    throw new Error('Une erreur est survenue lors du téléchargement du fichier')
  }
}
