# Expliaciones 

**Resistor Color Duo**
---

## La función decodedValue calcula un valor numérico basado en los códigos de colores de las bandas de un resistor. A continuación se explica cómo funciona el código:

**Diccionario de colores: Inicializa un diccionario (colorMap) que asocia los nombres de los colores con sus valores numéricos correspondientes. Por ejemplo, "black" (negro) está asociado con 0, "brown" (marrón) con 1, y así sucesivamente hasta "white" (blanco) con 9.** 

**Argumento: La función toma una lista de cadenas de colores (colors) como su argumento.**
**Obtener los valores numéricos: La función usa los dos primeros colores de la lista para encontrar los valores numéricos correspondientes usando el diccionario colorMap.**
**Calcular el valor combinado: Calcula el valor combinado multiplicando el valor numérico del primer color por 10 y luego sumando el valor numérico del segundo color. Esto refleja el valor en base 10 de los colores del resistor.**
*Devolver el resultado: Finalmente, la función devuelve el valor combinado calculado.*
---

**Resistor Color Trío** 
---
## Este código es una función llamada decodedResistorValue que toma un arreglo col de tres elementos, los cuales representan los colores de las bandas de un resistor. Cada color se asocia a un valor numérico según la lista COLORS, que tiene los colores de los resistores y su correspondiente valor: ["black","brown","red","orange","yellow","green","blue","violet","grey","white"].

*La función realiza los siguientes pasos:*

**Descompone el arreglo de colores col en tres variables col1, col2 y col3.**
**Calcula el índice de col3 en COLORS y lo asigna a la variable num3.**
**Calcula el valor de los colores col1 y col2 concatenando sus índices en COLORS y multiplicándolo por 10 elevado a num3. Esto se asigna a la variable num4.**
**Asigna num4 a num5 y luego cuenta cuántos ceros hay en num5. Si hay menos de tres ceros, devuelve el valor de num5 en ohmios; si hay entre tres y cinco ceros, devuelve el valor en kiloohmios; si hay entre seis y ocho ceros, devuelve el valor en megaohmios; si hay nueve ceros, devuelve el valor en gigaohmios.**
*Finalmente, si el número de ceros no coincide con ninguna de las opciones anteriores, devuelve undefined.*

# LINK DE YOUTUBE: https://youtu.be/OTheBEtwkVI 