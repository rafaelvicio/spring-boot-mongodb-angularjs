package maisvida.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import maisvida.models.Usuario;

@Repository
public interface UsuarioRepository extends MongoRepository<Usuario, Integer>{
	public List<Usuario> findAll();
	public Usuario findOne(Integer id);
	public Usuario save(Usuario todo);
	public void delete(Usuario todo);
}
