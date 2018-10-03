package edu.stanford.irt.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "TODO_ITEMS")
public class TodoItem {
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private Long id;

  @Column(nullable = false)
  private String description;

  @Temporal(TemporalType.TIMESTAMP)
  private Date created = new Date();

//  public TodoItem(){
//
//  }
//
//  public TodoItem(String description){
//    System.out.println("description");
//    this.description = description;
//  }
//
//  public TodoItem(Long id, String description){
//    this.id = id;
//    this.description = description;
//  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public Date getCreated() {
    return created;
  }

  public void setCreated(Date created) {
    this.created = created;
  }
}
