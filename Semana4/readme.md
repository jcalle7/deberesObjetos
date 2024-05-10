# Explicación
---
**Space Age**
---

*Firma de la función:*
## *export function age(planet: string, seconds: number):* number: define la función *age()* que toma dos argumentos: planet de tipo cadena (string) y seconds de tipo número (number). La función devuelve un número (number) que representa la edad calculada en el planeta especificado.

*Constante EARTH_YEAR_SECONDS:*
## Define la duración de un año terrestre en segundos, que es de 31,557,600 segundos.

*Objeto orbitalPeriods:*
## Define los períodos orbitales de cada planeta en años terrestres. El objeto utiliza nombres de planetas en mayúscula como claves y sus períodos orbitales como valores.

*Formateo del nombre del planeta:*
## Convierte el nombre del planeta (planet) a una cadena que tiene la primera letra en mayúscula y el resto en minúscula. Esto se hace para que el nombre del planeta coincida con las claves en orbitalPeriods.

*Verificación del planeta:*
## Verifica si formattedPlanet (el nombre del planeta formateado) está presente en orbitalPeriods.
## Si el planeta es válido (está en orbitalPeriods), realiza el cálculo de la edad.

*Cálculo de la edad:*
## Calcula la edad en años planetarios dividiendo seconds por EARTH_YEAR_SECONDS (para obtener la edad en años terrestres) y luego dividiendo por el período orbital del planeta especificado (orbitalPeriods[formattedPlanet]).
## Redondea el resultado a dos decimales utilizando Math.round().

*Retorno de la edad:*
## Devuelve la edad calculada en años planetarios, redondeada a dos decimales.

*Lanzamiento de error:*
## Si el planeta no es válido (no está en orbitalPeriods), lanza un error con el mensaje 'Planeta no válido.'.
---

**D&D Character**
---

*Propiedades:*
## strength, dexterity, constitution, intelligence, wisdom, charisma: Son las seis habilidades del personaje. Estas son propiedades numéricas.
## hitpoints: Los puntos de vida iniciales del personaje.

*Constructor:*
## En el constructor, se generan habilidades aleatorias (strength, dexterity, constitution, intelligence, wisdom, charisma) utilizando el método generateAbilityScore().
## Después de calcular constitution, el constructor utiliza getModifierFor() para calcular el modificador de constitución (constitutionModifier).
## Los puntos de vida (hitpoints) se calculan como 10 más el modificador de constitución (10 + constitutionModifier).

*Método generateAbilityScore():*
## Simula la tirada de cuatro dados de 6 caras y descarta el valor más bajo.
## Ordena los resultados de los dados en orden ascendente y elimina el más bajo (shift()).
## Suma los tres valores restantes y devuelve la suma como puntuación de habilidad.

*Método getModifierFor(abilityValue: number): number:*
## Calcula el modificador de habilidad para un valor dado de habilidad (abilityValue).
## El modificador se calcula restando 10 al valor de habilidad, dividiendo por 2 y redondeando hacia abajo con Math.floor().
## Devuelve el modificador de habilidad.
---

*Link de YouTube:* https://youtu.be/15eGqUvyEoQ

