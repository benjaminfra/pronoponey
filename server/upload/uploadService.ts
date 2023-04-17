import { MultipartFile } from '@fastify/multipart'
import fs from 'fs'
import pump from 'pump'

export const uploadFile = async (data: MultipartFile): Promise<void> => {
  try {
    await pump(data.file, fs.createWriteStream(`./assets/${data.filename}`))
  } catch (error) {
    console.error(error)
    throw new Error('Une erreur est survenue lors du téléchargement du fichier')
  }
}

export const deleteFile = async (path: string): Promise<void> => {
  try {
    await fs.promises.unlink(`/assets/${path}`)
  } catch (error) {
    console.error(
      `Une erreur est survenue lors de la suppression du fichier ${path} : ${error}`
    )
    throw new Error('Une erreur est survenue lors de la suppression du fichier')
  }
}
