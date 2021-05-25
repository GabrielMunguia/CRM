const url = 'http://localhost:3000/clientes'


/// NUEVO CLIENTE 
export const nuevoCliente = async cliente => {
        try {
            await fetch(url, {
                method: 'POST',
                body: JSON.stringify(cliente),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            console.log(url)

            window.location.href = 'index.html'

        } catch (error) {
            console.log(error);

        }
    }
    //OBTENER CLIENTES DE LA API
export const obtenerClientes = async() => {
    try {

        const resultado = await fetch(url);
        const clientes = await resultado.json();
        console.log(clientes)
        return clientes;

    } catch (error) {
        console.log(error);

    }

};

//eliminar Cliente

export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });


    } catch (error) {
        console.log(error);

    }

}

//Obteniendo un cliente por su ID

export const obtenerCliente = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        return (cliente);

    } catch (error) {
        console.log(error)

    }
}

//ACTUALIZAR REGISTRO

export const editarCliente = async cliente => {
    try {
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        window.location.href = 'index.html'
    } catch (error) {
        console.log(error);

    }
}