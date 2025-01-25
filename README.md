#  👤 Amigo Secreto 

Este juego es una aplicación sencilla para gestionar un sorteo de amigo secreto. Está diseñado para fortalecer habilidades en lógica de programación utilizando JavaScript y se ejecuta en un entorno de desarrollo como Visual Studio Code

## 📖 Instrucciones de uso

### 1. Instalación
1. Clona este repositorio o descarga los archivos directamente.
2. Abre el proyecto en Visual Studio Code u otro editor de texto.

### 2. Ejecución
1. Abre el archivo `index.html` en tu navegador preferido 
2. Escribe los nombres de los amigos en el campo de entrada y haz clic en "Añadir".
3. Una vez agregados los amigos, haz clic en "Sortear amigo" para seleccionar un nombre aleatorio.

### 3. Dependencias
No se necesitan dependencias adicionales, todo está implementado con JavaScript puro.

## 🛑 Posibles problemas y soluciones

1. **El botón de agregar no funciona:**
   - Asegúrate de que el archivo `app.js` esté correctamente enlazado en el archivo `index.html`.

2. **No se actualiza la lista o el resultado:**
   - Verifica que los elementos con los IDs `listaAmigos` y `resultado` estén presentes en el HTML.

3. **El sorteo no realiza ninguna acción:**
   - Comprueba que el arreglo `amigos` no esté vacío antes de sortear.
