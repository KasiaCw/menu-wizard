package pl.jcw.menuwizard.recipe;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.UUID;

@Entity
@Table(name = "recipe")
@Data
public class Recipe {

  @Id
  @Column(columnDefinition = "uuid")
  private UUID id = UUID.randomUUID();

  @Column(name = "title", nullable = false)
  private String title;

  @Column(name = "steps", nullable = false)
  private String steps;
}
