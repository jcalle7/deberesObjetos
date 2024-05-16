# Explicaciones 
**TWOFER**
En este ejercicio nos plantea la siguiente problematica que quiere que resolvamos: 

Tu tarea es determinar qué dirás cuando regales la galleta extra.

Si sabes el nombre de la persona (por ejemplo, si se llama Do-yun) dirás: 
*One for Do-yun, one for me.* 
Si no sabes el nombre de la persona, lo dirás tú 
*One for you, one for me.*

Implementa una función llamada twoFer que devuelve una cadena.

Implementa una función llamada twoFer que devuelve una cadena. 

**export function twoFer(name: string = 'you'): string** 
Esto define una función llamada twoFer que toma un parámetro opcional name de tipo string. Si no se proporciona ningún nombre al llamar a la función, se utilizará el valor predeterminado 'you'. La función devuelve una cadena.

**return One for ${name}, one for me.;** 
Esta es la parte principal de la función. Devuelve una cadena interpolada utilizando la sintaxis de plantillas de cadenas de TypeScript. ${name} se reemplazará con el nombre proporcionado cuando se llame a la función.

**console.log(twoFer("Do-yun"));**
Esta línea llama a la función twoFer con el argumento "Do-yun" y luego imprime el resultado en la consola.

**console.log(twoFer());**
Esta línea llama a la función twoFer sin pasar ningún argumento, lo que hará que se utilice el valor predeterminado 'you'. Luego imprime el resultado en la consola.

**RESISTOR COLOR**
El objetivo de este ejercicio es crear una manera, para buscar el valor numérico asociado con una banda de color particular
para enumerar los diferentes colores de banda. 

En este código existen dos funciones de colores para resistencias eléctricas.

**colorCode** 
Esta función toma un color como entrada y devuelve el código numérico correspondiente para ese color, según el estándar de colores de las resistencias. Utiliza un switch para asociar cada color con su respectivo código numérico. Si el color proporcionado no coincide con ninguno de los casos, la función arroja un error con el mensaje "Color no válido".

**COLORS** 
Esta es una matriz que contiene los nombres de los colores reconocidos para resistencias, en el mismo orden que se utiliza en la función colorCode. Por lo tanto, si necesitas mapear un código numérico de resistencia a su color correspondiente, puedes usar esta matriz.

*Si quisiera saber el código numérico para el color "verde", podrías hacerlo llamando a colorCode('verde'), que devolvería 5. Del mismo modo, si necesitas saber qué color corresponde al código numérico 3, podrías obtenerlo accediendo a COLORS[3], lo que daría como resultado "orange" (naranja).* 

## LINK DE YOUTUBE: <https://youtu.be/PQiTY9HeI3w >