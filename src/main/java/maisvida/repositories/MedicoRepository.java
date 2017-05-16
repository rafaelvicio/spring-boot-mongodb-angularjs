package maisvida.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import maisvida.models.Medico;

@Repository
public interface MedicoRepository extends MongoRepository<Medico, Integer>{
	public List<Medico> findAll();
	public Medico findOne(Integer id);
	public Medico save(Medico medico);
	public void delete(Medico medico);
}
