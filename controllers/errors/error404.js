exports.errors404 = (req, res, nex) => {
  res.status(404).render('errors/error404');
}