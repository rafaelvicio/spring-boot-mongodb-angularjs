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

import maisvida.models.Usuario;
import maisvida.repositories.UsuarioRepository;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {
	
	@Autowired
	UsuarioRepository usuarioRepository;
	
	@RequestMapping(method=RequestMethod.GET)
	public List<Usuario> getAllTodos() {
		return usuarioRepository.findAll();
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public Usuario createUsuario(@Valid @RequestBody Usuario usuario) {
		return usuarioRepository.save(usuario);
	}
	
	@RequestMapping(value="{id}", method=RequestMethod.GET)
	public ResponseEntity<Usuario> getUsuarioById(@PathVariable("id") Integer id) {
		Usuario usuario = usuarioRepository.findOne(id);
		if(usuario == null) {
			return new ResponseEntity<Usuario>(HttpStatus.NOT_FOUND);
		} else {
			return new ResponseEntity<Usuario>(usuario, HttpStatus.OK);
		}
	}
	
	@RequestMapping(value="{id}", method=RequestMethod.PUT)
	public ResponseEntity<Usuario> updateMedico(@Valid @RequestBody Usuario usuario, @PathVariable("id") Integer id) {
		Usuario usuarioData = usuarioRepository.findOne(id);
		if(usuarioData == null) {
			return new ResponseEntity<Usuario>(HttpStatus.NOT_FOUND);
		}
		
		usuarioData.setEmail(usuario.getEmail());
		usuarioData.setSenha(usuario.getSenha());
		
		Usuario updateUsuario = usuarioRepository.save(usuarioData);
		return new ResponseEntity<Usuario>(updateUsuario, HttpStatus.OK);
	}
	
	@RequestMapping(value="{id}", method=RequestMethod.DELETE)
	public void deleteUsuario(@PathVariable("id") Integer id) {
		usuarioRepository.delete(id);
	}


}
