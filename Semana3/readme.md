# Explicación

**Leap**
---
## Firma de la función:
*export function isLeap(year: number):* 
# boolean es la definición de la función isLeap que exporta una función desde el módulo para que pueda ser utilizada en otros archivos.
# year es el parámetro que se pasa a la función. Es un número (number) que representa el año que quieres verificar.
# La función devuelve un valor de tipo boolean (boolean), que será true si el año es bisiesto, y false si no lo es.

*Primera verificación (year % 4 === 0):*
# El código verifica si el año es divisible por 4 usando el operador de módulo (%), que devuelve el resto de una división. Si year % 4 es igual a 0, significa que el año es divisible por 4.
# Si el año no es divisible por 4, la función devuelve false de inmediato, ya que el año no es bisiesto.

*Segunda verificación (year % 100 === 0):*
# Si el año es divisible por 4, el código verifica si el año también es divisible por 100 usando year % 100.
# Si el año no es divisible por 100, el código concluye que es un año bisiesto (true), ya que es divisible por 4 pero no por 100.

*Tercera verificación (year % 400 === 0):*
# Si el año es divisible por 100, entonces el código verifica si es divisible por 400 (year % 400).
# Si year % 400 es igual a 0, significa que el año es divisible por 400 y, por lo tanto, es un año bisiesto (true).
# Si el año no es divisible por 400, entonces no es un año bisiesto (false).
---

**RNA Transcriptions**
---
# El objetivo de la función toRna() es tomar una secuencia de ADN (una cadena de texto que contiene los nucleótidos A, C, G y T) y convertirla en una secuencia de ARN (una cadena de texto que contiene los nucleótidos A, C, G y U). Esto significa que la función debe reemplazar cada nucleótido de la secuencia de ADN por su complemento en ARN de acuerdo con las siguientes reglas:

*G en ADN se reemplaza por C en ARN.*
*C en ADN se reemplaza por G en ARN.*
*T en ADN se reemplaza por A en ARN.*
*A en ADN se reemplaza por U en ARN.*

*Parámetro de entrada:*
## dna es una cadena de texto (string) que representa la secuencia de ADN que deseas transcribir.

*Objeto de mapeo:*
## mapping es un objeto que contiene las sustituciones de nucleótidos de ADN a ARN.

*Bucle for:*
## Recorre cada carácter (nucleotide) de la secuencia de ADN (dna).

*Sustitución de nucleótidos:*
## Para cada nucleótido, busca su complemento en ARN usando el objeto de mapeo y lo agrega a la cadena de ARN resultante (rna).

*Error en caso de nucleótido no válido:*
## Si la función encuentra un nucleótido que no está en el objeto de mapeo, lanza un error con un mensaje que indica que el nucleótido es no válido.
*Retorno:*
## Al final de la función, se retorna la cadena de ARN resultante (rna).
---

**Link de YouTube:** https://youtu.be/4d4rerjtX4k 