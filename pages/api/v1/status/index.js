function status(request, response) {
  response.status(200).json({chave:"Os alunos do curso .dev são bons"})
}
 
export default status