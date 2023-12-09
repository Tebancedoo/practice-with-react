const mysql = require('mysql')

const conection = mysql.createConnection(
{
    host:'localhost',
    user:'root',
    password:'',
    database:'rferreteria'
})

conection.connect((err) =>{
    if(err) throw err
    console.log('conexion exitosa')
})

//Consulta base de datos
conection.query('SELECT * FROM usuarios', (err, rows) => {
    if(err) throw err
    console.log('Los datos de esta tabla son: ')
    console.log(rows)
})



//consulta con where
conection.query('SELECT * FROM usuarios WHERE documento = 444', (err, rows) => {
    if(err) throw err
    console.log('Los datos de esta tabla con el where son: ')
    console.log(rows)
})

//insert
const insert_producto = "INSERT INTO productos (id_producto, codigo_producto, nombre_producto) VALUES (NULL,'EE1','CPU Ryzen')"
    conection.query(insert_producto, (err,rows) =>{
    if (err) throw err
    console.log('Datos insertados: ')
})

conection.end()


