# Ejercicios de React

## Ejercicios de introducción

Crear un proyecto **React** con **Vite** que contenga las siguientes funcionalidades:

### Ejercicio 1 :heavy_check_mark:
<details>
<summary>Crear dos componentes</summary>

- `ProductosList.jsx` (componente padre)
- `ProductoItem.jsx` (componente hijo)

El primero deberá incluirse dentro de `main.jsx` o de `App.jsx`. Esta estructura deberá realizar
como prefiera el alumno
</details>


### Ejercicio 2: :heavy_check_mark:
<details>
<summary>ProductItem</summary>

El componente ProductoItem.jsx deberá recibir como props, el ID, nombre y precio del
producto.
</details>

### Ejercicio 3 :heavy_check_mark:

<details>
<summary>ProductList</summary>

El componente `ProductosList.jsx` deberá recorrer una lista de productos con un formato similar:

``` 
const productos = [
    { ID: 1, nombre: "Lápiz", precio: 500 },
    { ID: 2, nombre: "Cuaderno", precio: 1200 },
    { ID: 3, nombre: "Borrador", precio: 300 },
    { ID: 4, nombre: "Tijeras", precio: 2000 },
    { ID: 5, nombre: "Pegamento", precio: 1500 }
];
```

Cada elemento deberá pasarse como props al componente ProductoItem y mostrarse con
algún elemento de HTML.
</details>

### Ejercicio 4 :heavy_check_mark:

<details>
<summary>Estado ProductItem</summary>

Dentro del componente `ProductItem.jsx` crear:

- Un estado para gestionar la cantidad de cada unidad mediante un campo de entrada
  (type number)
- Un estado que calcule el resultado del precio del producto multiplicado por la cantidad
  (el estado anterior)
</details>

### Ejercicio 5 :heavy_check_mark:

<details>
<summary>Estado ProductList</summary>

Crear un estado en el componente `ProductList.jsx` que muestre el precio final, es decir la
sumatoria de los totales de cada ítem.
</details>
