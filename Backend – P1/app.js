const express = require('express')

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
// -------------------------------------------



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



app.get("/api/v1/auth/status", (request, response) => {
    const status = {
        "Status": 'Funcionando'
    };

    response.send(status);

});



// Login/Cadastro

app.post("/api/v1/auth/signup", (request, response) => {
    const { email, password, name, username } = request.body;

    if (!name || !email || !password || !username) {
        return response.status(422).send({ message: 'Campos inválidos' });
    }

    if (email === bd.email){
        return response.status(422).send({ message: 'E-mail já cadastrado'})
    }

    if (username === bd.username){
        return response.status(422).send({ message: 'Usuário já cadastrado'})
    }
    if (password < 6) {
        return response.status(422).send({ message: 'Deve ter no mínimo 6 caracteres' });
    }

    response.status(201).send({ token: {tokenString}, message: 'Usuário criado com sucesso' });
});


app.delete("/api/v1/auth/signout", (request, response) => {
    return response.status(204).send({ message: 'Deslogado com sucesso' });

});


app.get("/api/v1/login", (request, response) => {
    const { email, password } = request.body;

    if (!email || !password) {
        return response.status(400).send({ message: 'Email ou senha inválidos' });
    }
})


app.get("/api/v1/movies", (request, response) => {
    const { title, releaseDate} = request.body

    const movieFilters = {
        page: 1,
        pageSize: 4,
        sortDir: 'asc' || 'desc',
        sortBy: 'title' || 'releaseDate'
    }
    
    return response.status(200).send({ message: 'Filmes encontrados com sucesso' });

})

app.get('/api/vi/movies/<id>', (request, response) => {
    const { id } = request.params;

    if (!id) {
        return response.status(404).send({ message: 'Invalid movie id' });
    }

    return response.status(200).send({ message: 'Filme encontrado com sucesso' });
})

app.get('/api/v1/artists', (request, response) => {
    const { name } = request.body;

    const artistFilters = {
        page: 1,
        pageSize: 4,
        sortDir: 'asc' || 'desc',
        sortBy: 'name'
    }

    return response.status(200).send({ message: 'Artistas encontrados com sucesso' });
})


app.get('/api/v1/artists/<id>', (request, response) => {
    const { id } = request.params;

    if (!id) {
        return response.status(404).send({ message: 'Invalid artist id' });
    }

    return response.status(200).send({ message: 'Artista encontrado com sucesso' });
})

app.post('/api/v1/reviews/<movieId>', (request, response) => {
    const { movieId } = request.params;
    const { rating, comment } = request.body;

    if (!rating || !comment) {
        return response.status(400).send({ message: 'Invalid rating or comment' });
    }

    return response.status(201).send({ message: 'Review criado com sucesso' });    
})