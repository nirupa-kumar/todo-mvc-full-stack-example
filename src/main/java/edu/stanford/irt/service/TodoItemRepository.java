package edu.stanford.irt.service;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.stanford.irt.domain.TodoItem;

public interface TodoItemRepository extends JpaRepository<TodoItem, Long> {
  List<TodoItem> findAll();
//  //added new - Nirupa
//  TodoItem findOne(Long id);
//  TodoItem save(TodoItem todoItem);
//  void delete(TodoItem todoItem);
}