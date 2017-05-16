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

import maisvida.models.Todo;
import maisvida.repositories.TodoRepository;

@RestController
@RequestMapping("/api/todos")
public class TodoController {
	
	@Autowired
	TodoRepository todoRepository;
	
	@RequestMapping(method=RequestMethod.GET)
	public List<Todo> getAllTodos() {
		return todoRepository.findAll();
	}

	@RequestMapping(method=RequestMethod.POST)
	public Todo createTodo(@Valid @RequestBody Todo todo) {
		return todoRepository.save(todo);
	}

	@RequestMapping(value="{id}", method=RequestMethod.GET)
	public ResponseEntity<Todo> getTodoById(@PathVariable("id") String id) {
		Todo todo = todoRepository.findOne(id);
		if(todo == null) {
			return new ResponseEntity<Todo>(HttpStatus.NOT_FOUND);
		} else {
			return new ResponseEntity<Todo>(todo, HttpStatus.OK);
		}
	}
	
	@RequestMapping(value="{id}", method=RequestMethod.PUT)
	public ResponseEntity<Todo> updateTodo(@Valid @RequestBody Todo todo, @PathVariable("id") String id) {
		Todo todoData = todoRepository.findOne(id);
		if(todoData == null) {
			return new ResponseEntity<Todo>(HttpStatus.NOT_FOUND);
		}
		todoData.setTitle(todo.getTitle());
		todoData.setCompleted(todo.getCompleted());
		Todo updatedTodo = todoRepository.save(todoData);
		return new ResponseEntity<Todo>(updatedTodo, HttpStatus.OK);
	}
	
	@RequestMapping(value="{id}", method=RequestMethod.DELETE)
	public void deleteTodo(@PathVariable("id") String id) {
		todoRepository.delete(id);
	}
	
}
