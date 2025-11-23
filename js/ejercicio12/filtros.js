export function filtrarMayores(usuarios) {
  return usuarios.filter(u => u.edad >= 18);
}
