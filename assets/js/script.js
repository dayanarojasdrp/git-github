export function saludar(nombre) {
  console.log(`Hola, ${nombre}!`);
}
export function obtenerFecha() {
  return new Date().toLocaleString();
}
export function numeroAleatorio() {
  return Math.floor(Math.random() * 101);
}
