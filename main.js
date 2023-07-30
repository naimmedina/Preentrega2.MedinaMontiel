const Auto = function (marca, modelo, puertas, precio, stock) {
    this.marca = marca
    this.modelo = modelo
    this.puertas = puertas
    this.precio = precio
    this.stock = stock
  }
  
  let producto1 = new Auto("Volkswagen", "Vento", 4, 26500, 5)
  let producto2 = new Auto("Nissan", "Versa", 4, 13500, 9)
  let producto3 = new Auto("Citroen", "Elysee", 4, 16000, 7)
  let producto4 = new Auto("Mercedes-benz", "A45", 4, 56000, 2)
  
  const Moto = function (marca, modelo, precio, stock) {
    this.marca = marca
    this.modelo = modelo
    this.precio = precio
    this.stock = stock
  }

  let producto5 = new Moto("HarleyDavidson", "Iron883", 18900, 3)
  let producto6 = new Moto("Benelli", "Imperiale400", 6900, 6)
  let producto7 = new Moto("Baccio", "Pollerita", 1200, 25)
  let producto8 = new Moto("Suzuki", "Gsxs750", 13900, 5)
  
  let listaAuto = [producto1, producto2, producto3, producto4]
  let listaMoto = [producto5, producto6, producto7, producto8]

  function FiltrarAuto() {
    let palabraClave = prompt("Ingrese la marca del vehiculo que desea buscar")
    palabraClave = palabraClave.toUpperCase()
    let resultado = listaAuto.filter((producto) => producto.marca.toUpperCase().includes(palabraClave))
    if (resultado.length > 0) {
      console.table(resultado)
    } else {
      alert("No se encontró ninguna coincidencia con: " + palabraClave)
    }
  }

  function FiltrarMoto() {
    let palabraClave = prompt("Ingrese la marca del vehiculo que desea buscar")
    palabraClave = palabraClave.toUpperCase()
    let resultado = listaMoto.filter((producto) => producto.marca.toUpperCase().includes(palabraClave))
    if (resultado.length > 0) {
      console.table(resultado)
    } else {
      alert("No se encontró ninguna coincidencia con: " + palabraClave)
    }
  }
  function FiltrarVehiculos() {
    console.log("Lista de Autos:");
    console.table(listaAuto);
    console.log("Lista de Motos:");
    console.table(listaMoto);
}
  function AgregarAuto() {
    let marca =prompt('Ingresa la marca del vehiculo')
    let modelo = prompt('Ingresa el modelo')
    let puertas = parseInt(prompt('Ingresa la cantidad de puertas(con numero)'))
    let precio = parseInt(prompt('Ingresa el precio'))
    let stock = parseInt(prompt('Ingresa el stock'))

    if(marca === 'string' || modelo === 'string' || isNaN(puertas) || isNaN(precio) || isNaN(stock) ){
        alert('por favor ingresa datos validos')
        return
    }
    
    let producto = new Auto(marca, modelo, puertas, precio, stock)
    listaAuto.push(producto)
    console.table(listaAuto)
    }

    function AgregarMoto() {
    let marca =prompt('Ingresa la marca del vehiculo')
    let modelo = prompt('Ingresa el modelo')
    let precio = parseInt(prompt('Ingresa el precio'))
    let stock = parseInt(prompt('Ingresa el stock'))

    if(marca === 'string' || modelo === 'string' || isNaN(precio) || isNaN(stock) ){
        alert('por favor ingresa datos validos')
        return
    }
    
    let producto = new Moto(marca, modelo, precio, stock)
    listaMoto.push(producto)
    console.table(listaMoto)
    }

let boton1 = document.getElementById('filtrarAuto')
boton1.addEventListener('click', FiltrarAuto)

let boton2 = document.getElementById('filtrarMoto')
boton2.addEventListener('click', FiltrarMoto)

let boton3 = document.getElementById('AgregarAuto')
boton3.addEventListener('click', AgregarAuto)

let boton4 = document.getElementById('AgregarMoto')
boton4.addEventListener('click', AgregarMoto)

let boton5 = document.getElementById('filtrarVehiculos')
boton5.addEventListener('click', FiltrarVehiculos)