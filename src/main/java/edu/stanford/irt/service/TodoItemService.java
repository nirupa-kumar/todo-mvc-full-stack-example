package edu.stanford.irt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import edu.stanford.irt.domain.TodoItem;

@Service
@Transactional
public class TodoItemService {


  @Autowired
  private TodoItemRepository todoItemRepository;

  public List<TodoItem> list() {
    return todoItemRepository.findAll();
  }

  public TodoItem create(TodoItem todoItem) {
    return todoItemRepository.save(todoItem);
  }

//  //added new - Nirupa
//  public TodoItem update(TodoItem todoItem) { return todoItemRepository.save(todoItem); }
//
//  public void delete(TodoItem todoItem) { todoItemRepository.delete(todoItem);}
}
