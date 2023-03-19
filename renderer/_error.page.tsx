import React from 'react'

// Définir des constantes pour les messages d'erreur et les codes de statut HTTP
const NOT_FOUND_MESSAGE = 'This page could not be found.'
const SERVER_ERROR_MESSAGE = 'Something went wrong.'
const NOT_FOUND_STATUS_CODE = 404
const SERVER_ERROR_STATUS_CODE = 500

export const Page = ({ statusCode }: { statusCode: number }) => {
  // Vérifier le code de statut pour afficher le bon message d'erreur
  const errorMessage =
    statusCode === NOT_FOUND_STATUS_CODE
      ? NOT_FOUND_MESSAGE
      : SERVER_ERROR_MESSAGE

  return (
    <>
      <h1>{statusCode} Error</h1>
      <p>{errorMessage}</p>
    </>
  )
}
