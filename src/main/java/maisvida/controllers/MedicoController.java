package maisvida.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import maisvida.models.Medico;
import maisvida.repositories.MedicoRepository;

@RestController
@RequestMapping("/api/medicos")
public class MedicoController {
	
	@Autowired
	MedicoRepository medicoRepository;
	
	@RequestMapping(method=RequestMethod.GET)
	public List<Medico> getAllMedicos() {
		return medicoRepository.findAll();
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public Medico createMedico(@Valid @RequestBody Medico medico) {
		return medicoRepository.save(medico);
	}
	
	@RequestMapping(value="{id}", method=RequestMethod.GET)
	public ResponseEntity<Medico> getUsuarioById(@PathVariable("id") Integer id) {
		Medico medico = medicoRepository.findOne(id);
		if(medico == null) {
			return new ResponseEntity<Medico>(HttpStatus.NOT_FOUND);
		} else {
			return new ResponseEntity<Medico>(medico, HttpStatus.OK);
		}
	}
	
	@RequestMapping(value="{id}", method=RequestMethod.PUT)
	public ResponseEntity<Medico> updateMedico(@Valid @RequestBody Medico medico, @PathVariable("id") Integer id) {
		Medico medicoData = medicoRepository.findOne(id);
		if(medicoData == null) {
			return new ResponseEntity<Medico>(HttpStatus.NOT_FOUND);
		}
		medicoData.setPrimeiroNome(medico.getPrimeiroNome());
		medicoData.setUltimoNome(medico.getUltimoNome());
		medicoData.setEspecialidade(medico.getEspecialidade());
		medicoData.setEmail(medico.getEmail());
		medicoData.setAtivo(medico.getAtivo());
		medicoData.setStatus(medico.getStatus());
		medicoData.setEstado(medico.getEstado());
		medico.setCidade(medico.getCidade());
		
		Medico updateMedico = medicoRepository.save(medicoData);
		return new ResponseEntity<Medico>(updateMedico, HttpStatus.OK);
	}
	
	@RequestMapping(value="{id}", method=RequestMethod.DELETE)
	public void deleteMedico(@PathVariable("id") Integer id) {
		medicoRepository.delete(id);
	}

}
